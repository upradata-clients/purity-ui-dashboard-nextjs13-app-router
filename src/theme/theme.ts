import { extendTheme } from '@chakra-ui/theme-utils';
import { AdditionalThemeComponents } from './additions';
import { breakpoints, shadows } from './foundations';
import { Components } from './components';
import { config, globalStyles } from './styles';

export type { BreakpointNames, Breakpoints } from './foundations'
export type ComponentStyles = (typeof Components)[ 'components' ] & (typeof AdditionalThemeComponents)[ 'components' ];

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
    { config },
    { breakpoints, shadows },
    globalStyles,
    Components,
    AdditionalThemeComponents
);


// export default theme;
