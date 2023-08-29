import { Fragment } from 'react';
import { Box } from '@chakra-ui/layout';
import { ThemingProps, useMultiStyleConfig } from '@chakra-ui/system';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { SidebarContent } from './SidebarContent';
import { SidebarDrawer } from './SidebarDrawer';
import { getStylesContext } from './Sidebar-provider';

import type { SidebarStyle } from '@/theme/additions/layout/Sidebar';

const { StylesProvider } = getStylesContext();

export const Sidebar: ReactFCNoChildren<ThemingProps<'Sidebar'>> = ({ size, variant, ...rest }) => {

    const styles = useMultiStyleConfig('Sidebar', { size, variant }) as SidebarStyle;

    const Container = useBreakpointValue({ base: SidebarDrawer, lg: Fragment })!;

    return (
        <Box __css={styles.container} {...rest}>
            <StylesProvider value={styles}>
                <Container>
                    <SidebarContent /> {/* {children} </SidebarContent> */}
                </Container>
            </StylesProvider>
        </Box>
    );
};


export default Sidebar;
