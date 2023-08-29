import { useContext, useRef } from 'react';
import { createStylesContext as _createStylesContext, useChakra } from '@chakra-ui/system';
import { CreateContextReturn } from '@chakra-ui/react-utils';
import { Dict, filterUndefined, memoizedGet as get, mergeWith, omit } from '@chakra-ui/utils';
import { resolveStyleConfig, ResponsiveValue, SystemStyleObject, ThemeTypings, ThemingProps } from '@chakra-ui/styled-system';
import { clientHookInServerComponentError } from 'next/dist/client/components/client-hook-in-server-component-error';
import { getSegmentValue } from 'next/dist/client/components/router-reducer/reducers/get-segment-value';
import { GlobalLayoutRouterContext } from 'next/dist/shared/lib/app-router-context';
import isEqual from 'react-fast-compare';

// import { usePathname } from 'next/navigation';
import type { FlightRouterState } from 'next/dist/server/app-render/types';


export type SegmentType = 'layout' | 'group' | 'slot' | 'page';

export type SegmentWithHref = { segment: string; href: string; type: SegmentType; isRoot: boolean; isLeaf: boolean; };

// export const usePathSegments = (): SegmentWithHref[] => {
//     const pathname = usePathname();

//     return pathname.split('/').reduce((list, segment) => {
//         if (!segment || segment.startsWith('('))
//             return list;

//         const last = list.at(-1);
//         return [ ...list, { segment, href: last ? `${last.href}/${segment}` : `/${segment}`, type: 'page' } ];
//     }, [] as SegmentWithHref[]);
// };


const getNextRouteTree = (tree: FlightRouterState, parallelRouteKey: string = 'children'): FlightRouterState | undefined => {
    const [ , parallelRoutes ] = tree;
    return parallelRoutes[ parallelRouteKey ] ?? Object.values(parallelRoutes)[ 0 ];

    /*  if (first) {
         // Use the provided parallel route key on the first parallel route
         return parallelRoutes[ parallelRouteKey ];
     } else {
         // After first parallel route prefer children, if there's no children pick the first parallel route.
         return parallelRoutes.children ?? Object.values(parallelRoutes)[ 0 ];
     } */
};

const getSegmentType = (tree: FlightRouterState | undefined): SegmentType => {

    if (!tree)
        return 'page';

    const [ segment ] = tree;

    const segmentValue = getSegmentValue(segment);

    if (segmentValue.startsWith('__PAGE__'))
        return 'page';

    if (segmentValue.startsWith('('))
        return 'group';

    if (segmentValue.startsWith('@'))
        return 'slot';

    return 'layout';
};



const getSelectedSegment = (tree: FlightRouterState, parallelRouteKeys: string | string[]): SegmentWithHref[] => {
    const parallelRouteKeysArray = Array.isArray(parallelRouteKeys) ? parallelRouteKeys : [ parallelRouteKeys ];
    const parallelRouteKeysIterator = parallelRouteKeysArray[ Symbol.iterator ]();

    const get = (tree: FlightRouterState | undefined, segments: SegmentWithHref[] = []): SegmentWithHref[] => {

        if (!tree || getSegmentType(tree) === 'page')
            return segments;

        const nextTree = getNextRouteTree(tree, parallelRouteKeysIterator.next().value);

        const isNextSegmentAPage = getSegmentType(nextTree) === 'page';

        const segmentType = isNextSegmentAPage ? 'page' : getSegmentType(tree);

        const [ segment, , , , isRootLayout = false ] = tree;
        const segmentValue = getSegmentValue(segment);

        // console.log({ segmentValue, node, segmentPath: segments });


        return get(nextTree, [ ...segments, {
            segment: segmentValue,
            href: isRootLayout ? '/' : `${segments.at(-1)!.href}/${segmentValue}`.replace(/\/+/, '/'),
            type: segmentType,
            isRoot: isRootLayout,
            isLeaf: isNextSegmentAPage
        } ]);
    };

    return get(tree);
};


/**
 * Get the canonical segment path from the root level to the leaf node.
 */
// Inspired by https://github.com/vercel/next.js/blob/canary/packages/next/src/client/components/navigation.ts#L25 useSelectedLayoutSegments
export const useSelectedSegments = (parallelRouteKeys: string | string[] = 'children'): SegmentWithHref[] => {
    clientHookInServerComponentError('useSelectedSegments');

    const { tree } = useContext(GlobalLayoutRouterContext /* LayoutRouterContext */);
    // console.log(useContext(GlobalLayoutRouterContext));
    // console.log({ caca: getSelectedSegment(tree, parallelRouteKeys) });

    return getSelectedSegment(tree, parallelRouteKeys);
};


type Variant<ThemeComponent extends string = string> = ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings[ 'components' ] ? ThemeTypings[ 'components' ][ ThemeComponent ][ 'variants' ] : string
>;

export type ComponentStyle<ThemeComponent extends string> =
    ThemeComponent extends keyof ThemeTypings[ 'styles' ] ?
    ThemeTypings[ 'styles' ][ ThemeComponent ] :
    ThemeTypings[ 'styles' ][ 'generic' ];

export const useStyleMultiVariantConfig = <ThemeComponent extends string, Variants extends Variant<ThemeComponent>[]>(
    componentName: ThemeComponent,
    props?: ThemingProps<ThemeComponent> & { variants?: Variants; } & Dict
): ComponentStyle<ThemeComponent> => {

    return useStyleConfig(componentName, props) as unknown as ComponentStyle<ThemeComponent>;

};


// copied from https://github.com/chakra-ui/chakra-ui/blob/main/packages/core/system/src/use-style-config.ts ==> useStyleConfigImpl
const useStyleConfig = (
    themeKey: string | null,
    props: ThemingProps & { variants?: Variant[]; } & Dict = {},
) => {

    type StyleConfig = Parameters<typeof resolveStyleConfig>[ 0 ];
    type StyleValues = Parameters<ReturnType<typeof resolveStyleConfig>>[ 0 ];


    const { styleConfig: styleConfigProp } = props;

    const { theme, colorMode } = useChakra();

    const themeStyleConfig = themeKey
        ? get(theme, `components.${themeKey}`)
        : undefined;

    const styleConfig: StyleConfig & {
        defaultProps: {
            size?: string;
            variant?: string;
            colorScheme?: string;
        };
    } = styleConfigProp || themeStyleConfig;

    /**
     * Store the computed styles in a `ref` to avoid unneeded re-computation
     */
    type StylesRef = SystemStyleObject | Record<string, SystemStyleObject>;

    const stylesRef = useRef<StylesRef>({});


    const { variants = [ props?.variant || styleConfig?.defaultProps.variant ], ...rest } = props;

    type MergeProps = Omit<ThemingProps, 'variant' | 'styleConfig'> & { variants: Variant[]; } & Omit<StyleValues, 'variant'>;

    const mergedProps: MergeProps = mergeWith(
        { theme, colorMode, variants },
        styleConfig?.defaultProps ?? {},
        filterUndefined(omit(rest, [ 'children', 'variant' ])),
    );

    const mergeStyles = (props: Omit<MergeProps, 'variants'> & { variant: Variant; }) => {
        const getStyles = resolveStyleConfig(styleConfig);
        const styles = getStyles(props);

        const isStyleEqual = isEqual(stylesRef.current, styles);

        if (!isStyleEqual) {
            stylesRef.current = styles;
        }
    };

    if (styleConfig) {
        const { variants, ...props } = mergedProps;
        variants.map(variant => mergeStyles({ ...props, variant }));
    }

    return stylesRef.current;
};


export type StylesContext<
    ThemeComponent extends string,
    T extends CreateContextReturn<ComponentStyle<ThemeComponent>> = CreateContextReturn<ComponentStyle<ThemeComponent>>
> = { StylesProvider: T[ 0 ]; useStyles: T[ 1 ]; };

export const createStylesContext = <ThemeComponent extends string>(componentName: ThemeComponent): StylesContext<ThemeComponent> => {

    const [ StylesProvider, useStyles ] = _createStylesContext(componentName);

    return { StylesProvider, useStyles } as unknown as StylesContext<ComponentStyle<ThemeComponent>> ;
};


export const createStylesContextSingleton = <ThemeComponent extends string>(componentName: ThemeComponent) => {
    type GetContext = {
        (): StylesContext<ThemeComponent>;
        memo?: StylesContext<ThemeComponent> | undefined;
    };

     const getContext: GetContext = () => {
        if (!getContext.memo)
            getContext.memo = createStylesContext(componentName);

        return getContext.memo!;
    };

    return getContext;
};