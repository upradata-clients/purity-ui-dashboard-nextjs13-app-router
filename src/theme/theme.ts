import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { breakpoints } from './foundations/breakpoints';
import { buttonStyles } from './components/button';
import { badgeStyles } from './components/badge';
import { linkStyles } from './components/link';
import { drawerStyles } from './components/drawer';
import { CardComponent } from './components/card/Card';
import { CardBodyComponent } from './components/card/CardBody';
import { CardHeaderComponent } from './components/card/CardHeader';
import { MainPanelComponent } from './additions/layout/MainPanel';
import { PanelContentComponent } from './additions/layout/PanelContent';
import { PanelContainerComponent } from './additions/layout/PanelContainer';


// 2. Extend the theme to include custom colors, fonts, etc
/* const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};


export const theme = extendTheme({ colors });
 */

export default extendTheme(
    { breakpoints }, // Breakpoints
    globalStyles,
    buttonStyles, // Button styles
    badgeStyles, // Badge styles
    linkStyles, // Link styles
    drawerStyles, // Sidebar variant for Chakra's drawer
    CardComponent, // Card component
    CardBodyComponent, // Card Body component
    CardHeaderComponent, // Card Header component
    MainPanelComponent, // Main Panel component
    PanelContentComponent, // Panel Content component
    PanelContainerComponent // Panel Container component
);
