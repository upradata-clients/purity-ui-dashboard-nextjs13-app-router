/*  */

import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';


// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([ 'container', 'link' ]);


export const AuthNavbar = defineMultiStyleConfig({
    baseStyle: props => ({
        container: {
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            top: 4,
            left: '25%',
            bg: mode(
                'whiteAlpha.800',
                'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
                // 'blackAlpha.400'
                // 'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
                // 'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
            )(props),
            border: mode('1.5px solid #FFFFFF', '1.5px solid rgba(255, 255, 255, 0.31)')(props),
            shadow: mode('0px 7px 23px rgba(0, 0, 0, 0.05)', 'none')(props),
            filter: mode('none', 'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))')(props),
            backdropFilter: 'auto',
            backdropBlur: '4px',
            borderRadius: 'xl',
            px: 8,
            py: 6,
            width: '90%',
            maxW: '1044px'
        },
        link: {
            _hover: {
                bg: 'chakra-body-bg',
                shadow: 'lg'
            }
        },
    }),
    variants: {

        secondary: {
            container: {
                position: 'inherit',
                bg: 'none',
                border: 'none',
                shadow: 'initial',
                filter: 'initial',
                backdropFilter: 'none'
            },
            link: {}
        },

    },
    defaultProps: {
        /* size: 'lg',
        variant: 'opaque' */
    }
});



export type AuthNavbarStyle = ReturnType<Exclude<(typeof AuthNavbar)[ 'baseStyle' ], undefined>>;
