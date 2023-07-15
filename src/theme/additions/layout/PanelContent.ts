import { defineStyleConfig } from '@chakra-ui/system';

const PanelContent = defineStyleConfig({
    baseStyle: {
        // ms: 'auto',
        // me: 'auto',
        h: '100%',
        ps: '15px',
        pe: '15px',
    },
});

export const PanelContentComponent = {
    components: {
        PanelContent,
    },
};
