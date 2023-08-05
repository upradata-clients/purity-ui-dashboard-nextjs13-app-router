import { useContext } from 'react';
import { clientHookInServerComponentError } from 'next/dist/client/components/client-hook-in-server-component-error';
import { getSegmentValue } from 'next/dist/client/components/router-reducer/reducers/get-segment-value';
import { GlobalLayoutRouterContext/* , LayoutRouterContext */ } from 'next/dist/shared/lib/app-router-context';
import { usePathname } from 'next/navigation';

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