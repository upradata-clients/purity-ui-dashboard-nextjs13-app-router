'use client';

import {
    Navbar,
    Footer,
    MainPanel,
    PanelContainer,
    PanelContent,
    Sidebar
} from '@/components';
import { Box, Flex } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import { usePathname } from 'next/navigation';


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

    return (
        <Box w='100vw' h='100vh' p='28px 16px'>
            <Flex display='flex' w='100%' h='100%' alignItems='stretch'/* {{ xl: 'center' }} */ justifyContent='flex-start' >

                <Sidebar />

                <MainPanel w='100%' /* {{ base: '100%', xl: 'calc(100% - 275px)' }} */ h='100%'>

                    <Navbar onOpen={onOpen} variant={isSecondaryNav() ? 'secondary' : undefined} isFixed={false} />

                    <PanelContent>
                        <PanelContainer>
                            {children}
                        </PanelContainer>
                    </PanelContent>

                    <Footer />

                </MainPanel>
            </Flex>
        </Box>
    );
};


export default Layout;
