'use client';

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Breadcrumb } from '@/components';
import { useMultiStyleConfig } from '@chakra-ui/system';
import { type NavbarLinkProps, NavbarLinks } from './NavbarLinks';

import type { ThemingProps } from '@chakra-ui/styled-system';
import { NavbarStyle } from '@/theme/additions/layout/Navbar';
import { StylesProvider } from './Navbar-provider';
import { useSelectedSegments } from '@/util/hooks';

export type NavbarProps = ThemingProps<'Navbar'> & NavbarLinkProps;


export const Navbar: ReactFCNoChildren<NavbarProps> = ({ size, variant, onOpen, ...rest }) => {

    const styles = useMultiStyleConfig('Navbar', { size, variant }) as NavbarStyle;
    const { scrolled: scrolledStyle, ...containerStyle } = styles.container;

    const [ scrolled, setScrolled ] = useState(false);

    const segments = useSelectedSegments();

    const changeNavbar = () => { setScrolled(window.scrollY > 1); };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
    }, []);


    return (
        <Box __css={{ ...containerStyle, ...(scrolled ? scrolledStyle : {}) }} {...rest}>
            <StylesProvider value={styles}>
                <Breadcrumb segments={segments} mb={{ sm: '8px', md: '0px' }} />
                <NavbarLinks {...{ variant, onOpen }} />
            </StylesProvider>
        </Box>
    );
};



// export default Navbar;
