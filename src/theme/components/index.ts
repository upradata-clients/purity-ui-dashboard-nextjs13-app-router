import { badgeStyles } from './badge';
import { buttonStyles } from './button';
import { cardStyles } from './card';
import { drawerStyles } from './drawer';
import { linkStyles } from './link';
import { inputStyles } from './input';


import type { ChakraTheme } from '@chakra-ui/theme';


export const Components: Partial<ChakraTheme> = {
    components: {
        badgeStyles,
        buttonStyles,
        cardStyles,
        drawerStyles,
        linkStyles,
        inputStyles,
    }
};