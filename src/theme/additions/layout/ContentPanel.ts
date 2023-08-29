import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([ 'container', 'content' ]);

export const ContentPanel = defineMultiStyleConfig({
    baseStyle: {
        container: {
            // ms: 'auto',
            // me: 'auto',
            h: '100%',
            ps: '15px',
            pe: '15px',
        },
        content: {
            p: '30px 15px',
            // minHeight: 'calc(100vh - 123px)',
            overflow: 'auto'
        },
    }
});



// export type ContentPanelStyle = Exclude<(typeof ContentPanel)[ 'baseStyle' ], undefined>;
