import { defineStyleConfig } from '@chakra-ui/react';

export const badgeStyles = {
    components: {
        Badge: defineStyleConfig({
            sizes: {
                md: {
                    width: '65px',
                    height: '25px'
                }
            },
            baseStyle: {
                textTransform: 'capitalize'
            }

        })
    }
};
