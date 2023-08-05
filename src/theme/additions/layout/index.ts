import { AuthNavbar } from './AuthNavbar';
import { ContentPanel } from './ContentPanel';
import { MainPanel } from './MainPanel';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

import type { ChakraTheme } from '@chakra-ui/theme';


export const AdditionalThemeComponents: Partial<ChakraTheme> = {
    components: {
        Navbar,
        AuthNavbar,
        Sidebar,
        ContentPanel,
        MainPanel
    }
};