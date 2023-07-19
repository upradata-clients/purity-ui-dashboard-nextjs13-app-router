'use client';

import { useEffect } from 'react';
import { AuthNavbar, Footer } from '@/components';
import { Box, Flex } from '@chakra-ui/layout';
// import { Portal } from '@chakra-ui/portal';
import { usePathname } from 'next/navigation';


const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children, ...rest }) => {

    useEffect(() => { document.body.style.overflow = 'unset'; });
    const pathname = usePathname();

    return (
        <Flex w='100%' flexDirection='column' alignItems='stretch' minH='100vh'>

            <AuthNavbar secondary={pathname.includes('login')} />

            <Box h='100%' flexGrow='1'>{children}</Box>

            <Box px='24px' pb='16px' mx='auto' width='1044px' maxW='100%'>
                <Footer />
            </Box>
        </Flex>
    );
};

export default Layout;
