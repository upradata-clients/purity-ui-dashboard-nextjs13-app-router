import { PartsStyleObject, createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';


// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([ 'container', 'links' ]);


export const Navbar = defineMultiStyleConfig({
    baseStyle: {
        container: {
            position: 'inherit',
            display: 'flex',
            flexDirection: { base: 'column', md: 'row' },
            alignItems: { xl: 'center' },
            shadow: 'none',
            bg: 'none',
            filter: 'none',
            backdropFilter: 'auto',
            backdropBlur: 5,
            borderWidth: '1.5px',
            borderStyle: 'solid',
            // transitionDelay: '0s, 0s, 0s, 0s',
            // transitionDuration: ' 0.25s, 0.25s, 0.25s, 0s',
            // transitionProperty: 'box-shadow, background-color, filter, border',
            // transitionTimingFunction: 'linear, linear, linear, linear',
            lineHeight: '25.6px',
            justifyContent: 'space-between',
            w: '100%',
            mt: 0,
            mb: { base: 2, md: 0 },
            pt: 4,
            pb: 2,
            px: { sm: 4, md: 8 }
        },
        links: {
            pe: { sm: 0, md: 4 },
            w: { sm: '100%', md: 'auto' },
            icon: {
                color: 'chakra-subtle-text',
            }
        },
    },
    variants: {
        fixed: props => ({
            container: {
                right: '30px',
                left: '18px',
                scrolled: {
                    position: 'sticky', // 'fixed',
                    bg: mode(
                        'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
                        'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
                    )(props),
                    shadow: mode('xl', 'none')(props),
                    dropShadow: mode('none', 'xl')(props),
                    borderColor: mode('white', 'whiteAlpha.400')(props),
                }
            }
        }),
        secondary: {
            container: {
                position: 'absolute',
                right: 7,
                left: 5,
                filter: 'none',
                mt: 6,
                px: 7,
            },
            links: {
                icon: {
                    color: 'white',
                }
            }
        },

    },
    defaultProps: {
        /* size: 'lg',
        variant: 'opaque' */
    }
});



export type NavbarStyle = Exclude<(typeof Navbar)[ 'baseStyle' ], undefined> & { container: { scrolled?: PartsStyleObject; }; };
