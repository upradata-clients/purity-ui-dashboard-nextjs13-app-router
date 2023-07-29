import { Box } from '@chakra-ui/layout';
import { ThemingProps, useMultiStyleConfig } from '@chakra-ui/system';
import { SidebarContent } from './SidebarContent';
import { StylesProvider } from './Sidebar-provider';

import type { SidebarStyle } from '@/theme/additions/layout/Sidebar';


export const Sidebar: ReactFC<ThemingProps<'Sidebar'>> = ({ size, variant, children, ...rest }) => {

    const styles = useMultiStyleConfig('Sidebar', { size, variant }) as SidebarStyle;

    return (
        <Box __css={styles.container} {...rest}>
            <StylesProvider value={styles}>
                <SidebarContent>
                    {children}
                </SidebarContent>
            </StylesProvider>
        </Box>
    );
};


export default Sidebar;
