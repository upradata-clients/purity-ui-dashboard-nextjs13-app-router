import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { defineSize } from '../util';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);


const size = defineSize({
    lg: {
        borderRadius: 'xl'
    },
    md:{
        borderRadius: 'xl'
    },
    sm:{
        borderRadius: 'md'
    },
    xs:{
        borderRadius: 'sm'
    }
});


export const inputStyles = defineMultiStyleConfig({
    baseStyle: {
        field: {
            _placeholder: { fontSize: 'sm' }
        }
    },
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
    },
    sizes: {
        lg: definePartsStyle({
            field: size.lg,
            group: size.lg,
        }),
        md: definePartsStyle({
            field: size.md,
            group: size.md,
        }),
        sm: definePartsStyle({
            field: size.sm,
            group: size.sm,
        }),
        xs: definePartsStyle({
            field: size.xs,
            group: size.xs,
        })
    }
});