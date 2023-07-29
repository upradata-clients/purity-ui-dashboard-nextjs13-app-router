import type { ThemeTypings } from '@chakra-ui/system';

export const breakpoints: Partial<Record<ThemeTypings[ 'breakpoints' ], string>> = {
    // base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px'
};


// Internally, chakra-ui transforms it to this
// const breakpoints = [ '0em', '480px', '768px', '992px', '1280px', '1536px' ];
