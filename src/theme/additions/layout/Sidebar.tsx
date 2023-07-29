import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';


// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([ 'container', 'link' ]);

export const Sidebar = defineMultiStyleConfig({
    baseStyle: {
        container: {
            display: { base: 'none', md: 'flex' },
            bgColor: 'none',
            transition: '0.2s linear',
            w: '20%',
            maxW: '260px',
            h: '100%',
            px: 5,
            py: 0,
            borderRadius: 'base'
        },
        link: {
            activeColor: 'chakra-subtle-text',
            inactiveColor: 'gray.400',
            spacing: '2',
            button: {
                base: {
                    bg: 'chakra-subtle-bg',
                    w: '100%',
                    h: 'auto',
                    borderRadius: 'base',
                    ps: { base: 2.5, xl: 4 },
                    py: 3,
                    mb: { xl: 3 },
                    mx: { xl: 'auto' },
                    _active: { bg: 'inherit', transform: 'none', borderColor: 'transparent' },
                    _focus: { boxShadow: 'none' },
                },
                inactive: {
                    bg: 'transparent'
                },
                icon: {
                    base: {
                        spacing: 3,
                        bg: 'teal.300',
                        color: 'white',
                        h: 7,
                        w: 7
                    },
                    inactive: {
                        bg: 'chakra-on-body-bg',
                        color: 'teal.300'
                    }
                }
                //  _hover='none' 
            }
        },
    },
    sizes: {
        md: {
            container: {
                borderRadius: 'md'
            },
            link: {
                button: { base: { borderRadius: 'md' } }
            },
        },
        lg: {
            container: {
                borderRadius: 'xl'
            },
            link: {
                button: { base: { borderRadius: 'xl' } }
            },
        }
    },
    variants: {
        opaque: {
            container: {
                bgColor: 'chakra-on-body-bg',
                py: 5
            }
        }
    },
    defaultProps: {
        size: 'lg',
        variant: 'opaque'
    }
});



export type SidebarStyle = Exclude<(typeof Sidebar)[ 'baseStyle' ], undefined>;
