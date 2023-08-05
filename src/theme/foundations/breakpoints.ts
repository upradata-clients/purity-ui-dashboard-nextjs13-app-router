import type { ThemeTypings } from '@chakra-ui/system';
import type { Breakpoints as BP } from '@chakra-ui/theme-tools';

export const breakpoints = {
    // base: '0px', // automatically added
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px'
} satisfies Partial<Record<ThemeTypings[ 'breakpoints' ], string>>;


// Internally, chakra-ui transforms it to this
// const breakpoints = [ '0em', '480px', '768px', '992px', '1280px', '1536px' ];

export type Breakpoints = BP<typeof breakpoints>;
export type BreakpointNames = keyof Breakpoints;