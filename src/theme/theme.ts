import { extendTheme } from '@chakra-ui/theme-utils';
import { badgeStyles, drawerStyles, linkStyles, buttonStyles, cardStyles } from './components';
import { breakpoints } from './foundations';
import { globalStyles } from './styles';
import { MainPanelComponent, PanelContainerComponent, PanelContentComponent } from './additions';


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

export const theme = extendTheme(
    { breakpoints }, // Breakpoints
    globalStyles,
    cardStyles,
    buttonStyles, // Button styles
    badgeStyles, // Badge styles
    linkStyles, // Link styles
    drawerStyles, // Sidebar variant for Chakra's drawer
    MainPanelComponent, // Main Panel component
    PanelContentComponent, // Panel Content component
    PanelContainerComponent // Panel Container component
);


// export default theme;