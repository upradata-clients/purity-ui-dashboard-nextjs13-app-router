import type { ChakraTheme, ThemeConfig } from '@chakra-ui/theme';
// import { mode, type StyleFunctionProps, type GlobalStyles } from '@chakra-ui/theme-tools';


export const globalStyles: Partial<ChakraTheme> = {
    semanticTokens: {
        colors: {
            'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
            'chakra-body-bg': { _light: /* 'white' */'gray.50', _dark: 'gray.800' },
            'chakra-on-body-bg': { _light: /* 'white' */'gray.100', _dark: 'gray.700' },
            'chakra-input-bg': { _light: 'gray.100', _dark: 'gray.700' },
            'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
            'chakra-inverse-text': { _light: 'white', _dark: 'gray.800' },
            'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
            'chakra-subtle-text': { _light: 'gray.600', _dark: 'gray.400' },
            'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.600' },

            'primary': { _light: 'pink.400', _dark: 'pink.300' },
            'on-primary': { _light: 'white', _dark: 'gray.50' }
        }
    },
    colors: {
        /* gray: {
            700: '#1f2733'
        } */
    } as Record<string, Record<string | number, string>>,
    styles: {
        // the default from chakra-ui
        // global: (props) => ({
        //     body: {
        //         fontFamily: 'body',
        //         color: mode('gray.800', 'whiteAlpha.900')(props),
        //         bg: mode('white', 'gray.800')(props),
        //         lineHeight: 'base',
        //     },
        //     '*::placeholder': {
        //         color: mode('gray.400', 'whiteAlpha.400')(props),
        //     },
        //     '*, *::before, &::after': {
        //         borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        //         wordWrap: 'break-word',
        //     },
        // }),

        // global: (props: StyleFunctionProps) => ({
        //     /*   body: {
        //           bg: mode('gray.50', 'gray.700')(props),
        //           fontFamily: 'Roboto, CACA, sans-serif'
        //       },
        //       html: {
        //           fontFamily: 'Roboto, sans-serif'
        //       } */
        // })
    }
};

export const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};
