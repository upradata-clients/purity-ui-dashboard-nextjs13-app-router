import { defineStyleConfig } from '@chakra-ui/system';

export const buttonStyles = defineStyleConfig({
    baseStyle: {
        borderRadius: 'xl',
      //  _focus: { boxShadow: 'none' },
    },
    variants: {
        'no-hover': {
            _hover: { boxShadow: 'none' },
        },
        'with-shadow': {
            boxShadow: 'xl'
        }
    }
});