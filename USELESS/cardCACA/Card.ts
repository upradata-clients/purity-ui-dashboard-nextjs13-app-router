import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

/* const Card = defineStyleConfig({
    baseStyle: {
        p: '22px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        minWidth: '0px',
        wordWrap: 'break-word',
        backgroundClip: 'border-box',
    },
    variants: {
        panel: (props) => ({
            bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
            width: '100%',
            boxShadow: '0px 3.5px 5.5px rgba(0, 0, 0, 0.02)',
            borderRadius: '15px',
        }),
    },
    defaultProps: {
        variant: 'panel',
    },
});

export const CardComponent = {
    components: {
        Card,
    },
}; */


const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const cardStyles = {
    components: {
        Badge: defineMultiStyleConfig({
            baseStyle: {
                // define the part you're going to style
                container: {
                    backgroundColor: '#e7e7e7',
                },
                header: {
                    paddingBottom: '2px',
                },
                body: {
                    paddingTop: '2px',
                },
                footer: {
                    paddingTop: '2px',
                },
            },
            sizes: {
                md: definePartsStyle({
                    container: {
                        borderRadius: '0px',
                    },
                }),
            }
        })
    }
};
