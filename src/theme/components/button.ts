import { defineStyleConfig } from '@chakra-ui/system';

export const buttonStyles = {
    components: {
        Button: defineStyleConfig({
            baseStyle: {
                borderRadius: '15px',
                _focus: {
                    boxShadow: 'none',
                },
            },
            variants: {
                'no-hover': {
                    _hover: {
                        boxShadow: 'none',
                    },
                },
                'transparent-with-icon': {
                    bg: 'transparent',
                    fontWeight: 'bold',
                    borderRadius: 'inherit',
                    cursor: 'pointer',
                    // _hover: 'none',
                    _active: {
                        bg: 'transparent',
                        transform: 'none',
                        borderColor: 'transparent',
                    },
                    _focus: {
                        boxShadow: 'none',
                    },
                    _hover: {
                        boxShadow: 'none',
                    },
                },
                variants: {
                    'with-shadow': {
                        boxShadow: '0 0 2px 2px #efdfde',
                    },
                },
            }
        }),
    },
};
