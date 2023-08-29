/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import type { /* SystemStyleFunction, SystemStyleObject, */ SystemStyleInterpolation } from '@chakra-ui/styled-system';
import type { BreakpointNames } from './foundations';
// import type { Dict } from '@chakra-ui/utils';

export const defineSize = <T extends Partial<Record<BreakpointNames, SystemStyleInterpolation>>>(configSize: T): T => configSize;

type _StyleComponent<
    BaseStyle extends any = any /* SystemStyleInterpolation = SystemStyleObject | SystemStyleFunction */,
    Sizes extends any = any  /* Dict<SystemStyleInterpolation> = Dict<SystemStyleInterpolation> */,
    Variants extends any = any  /* Dict<SystemStyleInterpolation> = Dict<SystemStyleInterpolation> */
> = {
    baseStyle?: BaseStyle | undefined;
    sizes?: Sizes | undefined;
    variants?: Variants | undefined;
    defaultProps?: {
        size?: keyof Sizes | undefined;
        variant?: keyof Variants | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};


type Value<V> = V extends (...args: any[]) => any ? ReturnType<V> : V;


/* (Type extends 'simple' ? {
[ K in States ]: O[ K & keyof O ];
} : {
    // I could have made something like 'a.b.c' but I do not want recursive typings that slows down Typescript typing
    [ K in keyof O ]: {
        [ S in States ]: V<O, K>[ S & keyof V<O, K> ];
    };
});
*/
type V<T, K extends keyof T> = Value<Exclude<T[ K ], undefined>>;

type UnionToIntersection<T> =
    (T extends any ? (x: T) => any : never) extends
    (x: infer R) => any ? R : never;

 type GetVariants<Component extends _StyleComponent, Variants = V<Component, 'variants'>> = UnionToIntersection<
    { [ K in keyof Variants ]: Value<Variants[ K ]>; }[ keyof Variants ]
>;

export type StyleComponent<Component extends _StyleComponent> = V<Component, 'baseStyle'> & GetVariants<Component>;