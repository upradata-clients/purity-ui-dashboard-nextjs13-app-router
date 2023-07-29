'use client';

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Breadcrumb } from '@/components';
import { useMultiStyleConfig } from '@chakra-ui/system';
import { usePathname } from 'next/navigation';
import { type NavbarLinkProps, NavbarLinks } from './NavbarLinks';

import type { ThemingProps } from '@chakra-ui/styled-system';
import { NavbarStyle } from '@/theme/additions/layout/Navbar';
import { StylesProvider } from './Navbar-provider';

export type NavbarProps = ThemingProps<'Navbar'> & NavbarLinkProps & { isFixed?: boolean; };


export const Navbar: ReactFCNoChildren<NavbarProps> = ({ size, variant, onOpen, ...rest }) => {

    const styles = useMultiStyleConfig('Navbar', { size, variant }) as NavbarStyle;
    const { scrolled: scrolledStyle, ...containerStyle } = styles.container;

    const [ scrolled, setScrolled ] = useState(false);

    const pathname = usePathname();
    const paths = pathname.split('/').filter(p => p !== '');

    const changeNavbar = () => { setScrolled(window.scrollY > 1); };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
    }, []);


    return (
        <Box __css={{ ...containerStyle, ...(scrolled ? scrolledStyle : {}) }} {...rest}>
            <StylesProvider value={styles}>
                <Breadcrumb paths={paths} mb={{ sm: '8px', md: '0px' }} />
                <NavbarLinks ms='auto' w={{ sm: '100%', md: 'unset' }} {...{ variant, onOpen }} />
            </StylesProvider>
        </Box>
    );
};



// export default Navbar;
