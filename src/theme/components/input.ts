import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const inputStyles = defineMultiStyleConfig({
    variants: {
        filled: definePartsStyle({
            field: {
                bg: 'chakra-input-bg'
            },
            _hover: {
                bg: 'chakra-border-color',
            },
            _focusVisible: {
                bg: 'transparent',
            }
        })
    }
});