import { defineStyleConfig } from '@chakra-ui/system';

export const drawerStyles = defineStyleConfig({
    variants: {
        'with-shadow': {
            placement: 'right',
            boxShadow: '0 0 2px 2px #efdfde',
            bgColor: 'red',
        },
    },
});
