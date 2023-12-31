import { defineStyleConfig } from '@chakra-ui/system';

export const linkStyles = {
    components: {
        Link: defineStyleConfig({
            // 3. We can add a new visual variant
            baseStyle: {
                _hover: {
                    textDecoration: 'none',
                },
                _focus: {
                    boxShadow: 'none',
                },
            },
        }),
    },
};
