import { Navbar } from './Navbar';
import { PanelComponents } from './MainPanel';
import { Sidebar } from './Sidebar';

import type { ChakraTheme } from '@chakra-ui/theme';


export const AdditionalThemeComponents: Partial<ChakraTheme> = {
    components: {
        ...PanelComponents,
        Navbar,
        Sidebar
    }
};