import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { menuAnatomy } from '@chakra-ui/anatomy';
import { mode } from '@chakra-ui/theme-tools';
import { defineSize } from '../util';


const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);


const size = defineSize({
    lg: {
        borderRadius: '2xl'
    },
    md: {
        borderRadiuse: 'xl'
    },
    sm: {
        borderRadius: 'md'
    }
});


export const menuStyles = defineMultiStyleConfig({
    baseStyle: definePartsStyle({
        list: {
            bg: 'chakra-body-bg',
            shadow: props => mode('sm', 'dark-lg')(props),
            borderRadius: 'md',
            borderWidth: 1,
        }
    }),
    sizes: {
        lg: definePartsStyle({ list: size.lg }),
        md: definePartsStyle({ list: size.md }),
        sm: definePartsStyle({ list: size.sm })
    },
    defaultProps: {
        size: 'lg'
    }
});
