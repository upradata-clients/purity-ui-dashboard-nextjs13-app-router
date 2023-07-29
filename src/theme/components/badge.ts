import { defineStyleConfig } from '@chakra-ui/system';

export const badgeStyles = defineStyleConfig({
    sizes: {
        md: {
            width: '65px',
            height: '25px'
        }
    },
    baseStyle: {
        textTransform: 'capitalize'
    }
});