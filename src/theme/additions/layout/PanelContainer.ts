import { defineStyleConfig } from '@chakra-ui/system';

const PanelContainer = defineStyleConfig({
    baseStyle: {
        p: '30px 15px',
        // minHeight: 'calc(100vh - 123px)',
        overflow: 'auto',
    },
});

export const PanelContainerComponent = {
    components: {
        PanelContainer,
    },
};
