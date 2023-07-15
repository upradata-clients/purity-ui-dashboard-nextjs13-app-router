import { mode, StyleFunctionProps, type GlobalStyles } from '@chakra-ui/theme-tools';


export const globalStyles = {
    semanticTokens: {
        colors: {
            'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
            'chakra-body-bg': { _light: /* 'white' */'gray.50', _dark: 'gray.800' },
            'chakra-on-body-bg': { _light: /* 'white' */'gray.100', _dark: 'gray.700' },
            'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
            'chakra-inverse-text': { _light: 'white', _dark: 'gray.800' },
            'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
            'chakra-subtle-text': { _light: 'gray.600', _dark: 'gray.400' },
            'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
        }
    },
    colors: {
        /* gray: {
            700: '#1f2733'
        } */
    } as Record<string, Record<string | number, string>>,
    styles: {
        global: (props: StyleFunctionProps) => ({
            /*   body: {
                  bg: mode('gray.50', 'gray.700')(props),
                  fontFamily: 'Roboto, CACA, sans-serif'
              },
              html: {
                  fontFamily: 'Roboto, sans-serif'
              } */
        })
    } as GlobalStyles
};
