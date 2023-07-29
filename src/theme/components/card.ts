import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const cardStyles = defineMultiStyleConfig({
    baseStyle: definePartsStyle({
        container: {
            backgroundColor: 'chakra-on-body-bg'
        }
    })
});