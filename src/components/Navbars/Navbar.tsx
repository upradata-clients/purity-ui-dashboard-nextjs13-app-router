'use client';

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Breadcrumb } from '@/components/Breadcrumb';
import { useSelectedSegments, useStyleMultiVariantConfig } from '@/util/hooks';
import { type NavbarLinkProps, NavbarLinks } from './NavbarLinks';
import { getStylesContext } from './Navbar-provider';

import type { ThemingProps } from '@chakra-ui/styled-system';


export type NavbarProps = ThemingProps<'Navbar'> & NavbarLinkProps;

const { StylesProvider } = getStylesContext();

export const Navbar: ReactFCNoChildren<NavbarProps> = ({ size, variant, onOpen, ...rest }) => {

    const styles = useStyleMultiVariantConfig('Navbar', { size, variant });
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
