import { defineStyleConfig } from '@chakra-ui/system';

export const buttonStyles = defineStyleConfig({
    baseStyle: {
        borderRadius: 'xl',
        //  _focus: { boxShadow: 'none' },
    },
    sizes: {
        xl: {
            h: '80px',
            minW: '80px',
            fontSize: '3xl',
            px: '16px'
        },
    },
    variants: {
        'no-hover': {
            _hover: { boxShadow: 'none' },
        },
        'with-shadow': {
            boxShadow: 'xl'
        },
        secondary: {
            bg: 'chakra-border-color',
            _hover: {
                bg: 'primary',
                color: 'on-primary'
            }
        }
    }
});
