'use client';

import { Box, Flex } from '@chakra-ui/layout';
import { Footer, MainPanel, Navbar, ContentPanel, Sidebar } from '@/components';
import { useDisclosure } from '@chakra-ui/hooks';
import { usePathname } from 'next/navigation';
import { DrawerContext, useDrawerContext } from '@/contexts';


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


const Layout: ReactFC = ({ children }) => {

    const pathname = usePathname();

    const isSecondaryNav = () => pathname.includes('auth');

    const { onOpen } = useDisclosure();
    const drawerContext = useDrawerContext();

    return (
        <Box w='100vw' h='100vh' p='28px 16px'>
            <Flex display='flex' w='100%' h='100%' alignItems='stretch'/* {{ xl: 'center' }} */ justifyContent='flex-start' >

                <DrawerContext.Provider value={drawerContext}>
                    <Sidebar />
                </DrawerContext.Provider>

                <MainPanel w='100%' /* {{ base: '100%', xl: 'calc(100% - 275px)' }} */ h='100%'>

                    <Navbar onOpen={onOpen} variant={isSecondaryNav() ? 'secondary' : undefined} />

                    <ContentPanel>{children}</ContentPanel>

                    <Footer />

                </MainPanel>
            </Flex>
        </Box>
    );
};


export default Layout;
