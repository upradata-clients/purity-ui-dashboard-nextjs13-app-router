import { defineStyleConfig } from '@chakra-ui/react';

const PanelContent = defineStyleConfig({
    baseStyle: {
        ms: 'auto',
        me: 'auto',
        ps: '15px',
        pe: '15px',
    },
});

export const PanelContentComponent = {
    components: {
        PanelContent,
    },
};
