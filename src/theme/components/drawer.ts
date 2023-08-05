import { defineStyleConfig } from '@chakra-ui/system';

export const drawerStyles = defineStyleConfig({
    variants: {
        'with-shadow': {
            placement: 'right',
            boxShadow: 'xl',
           // bgColor: 'red',
        },
    },
});
