import { badgeStyles } from './badge';
import { buttonStyles } from './button';
import { cardStyles } from './card';
import { drawerStyles } from './drawer';
import { linkStyles } from './link';
import { inputStyles } from './input';


import type { ChakraTheme } from '@chakra-ui/theme';
import { menuStyles } from './menu';


export const Components: Partial<ChakraTheme> = {
    components: {
        Badge: badgeStyles,
        Button: buttonStyles,
        Card: cardStyles,
        Drawer: drawerStyles,
        Link: linkStyles,
        Input: inputStyles,
        Menu: menuStyles
    }
};
