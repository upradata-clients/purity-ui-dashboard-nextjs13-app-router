'use client';


import { useContext, useState } from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FixedPlugin from '@/components/FixedPlugin/FixedPlugin';

import { usePathname } from 'next/navigation';
import { RoutesContext } from '../../contexts/routes.context';
import { Footer, Configurator, Sidebar, AdminNavbar, MainPanel, PanelContainer, PanelContent } from '@/components';
import { useDisclosure } from '@chakra-ui/hooks';
import { Flex, Box } from '@chakra-ui/layout';
import { Portal } from '@chakra-ui/portal';



/* const PrimaryNavbarLinks: React.FC<{}> = () => {
    const [ links, setLinks ] = useState<{ href: string; name: string; }[]>([]);

    useCallback(async () => {
        const pages = await getPages();
        setLinks(pages.map(page => ({ href: page.path, name: page.name })));
    }, []);

    return (
        <Suspense fallback={<p>Loading feed...</p>}>
            {links.map(link => (
                <Link href={link.href} key={link.href}>
                    <a>{link.name}</a>
                </Link>
            ))}
        </Suspense>
    );
}; */


const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children, ...rest }) => {
    const routes = useContext(RoutesContext);

    const pathname = usePathname();

    // states and functions
    const [ sidebarVariant, setSidebarVariant ] = useState('transparent');
    const [ fixed, setFixed ] = useState(false);

    // functions for changing the states from components
    /* const getRoute = () => {
        return window.location.pathname !== '/admin/full-screen-maps';
    }; */


    // This changes navbar state(fixed or not)
    const isSecondaryNav = () => {
        return pathname.includes('auth');
    };


    const { isOpen, onOpen, onClose } = useDisclosure();
    // document.documentElement.dir = 'ltr';

    return (
        <Box w='100vw' h='100vh' p='28px 16px'>
            <Flex display='flex' w='100%' h='100%' alignItems='stretch'/* {{ xl: 'center' }} */ justifyContent='flex-start' >
                <Sidebar
                    routes={routes}
                    logoText={'THE LOGO TEXT'}
                    display='none'
                    sidebarVariant={sidebarVariant}
                    {...rest}
                />

                <MainPanel w='100%' /* {{ base: '100%', xl: 'calc(100% - 275px)' }} */ h='100%'>

                    <AdminNavbar
                        onOpen={onOpen}
                        logoText={'THE LOGO TEXT'}
                        brandText={pathname}
                        secondary={isSecondaryNav()}
                        fixed={fixed}
                        {...rest} />

                    <PanelContent>
                        <PanelContainer>
                            {children}
                        </PanelContainer>
                    </PanelContent>

                    <Footer />

                    <Portal>
                        <FixedPlugin secondary={isSecondaryNav()} fixed={fixed} onOpen={onOpen} />
                    </Portal>

                    <Configurator
                        secondary={isSecondaryNav()}
                        isOpen={isOpen}
                        onClose={onClose}
                        isChecked={fixed}
                        onSwitch={(value) => { setFixed(value); }}
                        onOpaque={() => setSidebarVariant('opaque')}
                        onTransparent={() => setSidebarVariant('transparent')}
                    />


                </MainPanel>
            </Flex>
        </Box>
    );
};


export default Layout;
