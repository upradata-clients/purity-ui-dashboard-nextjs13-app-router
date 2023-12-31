'use client';

import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { type PositionProps } from '@chakra-ui/styled-system';
import { useColorModeValue } from '@chakra-ui/system';
import PropTypes from 'prop-types';
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import AdminNavbarLinks from './AdminNavbarLinks';


export function AdminNavbar(props: React.PropsWithChildren<Record<string, any>>) {
    const [ scrolled, setScrolled ] = useState(false);
    const {
        variant,
        children,
        fixed,
        secondary,
        brandText,
        onOpen,
        ...rest
    } = props;

    const segments = useSelectedLayoutSegments();
    const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    const paths = pathname.split('/').filter(p => p !== '');


    // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
    let mainText = useColorModeValue('gray.700', 'gray.200');
    let secondaryText = useColorModeValue('gray.400', 'gray.200');
    let navbarPosition = 'inherit' /* 'absolute' */ as PositionProps[ 'position' ];
    let navbarFilter = 'none';
    let navbarBackdrop = 'blur(21px)';
    let navbarShadow = 'none';
    let navbarBg = 'none';
    let navbarBorder = 'transparent';
    let secondaryMargin = '0px';
    let paddingX = '15px';
    let right = '';
    let left = '';

    if (props.fixed === true || props.secondary) {
        right = '30px';
        left = '18px';
    }

    if (props.fixed === true) {
        if (scrolled === true) {
            navbarPosition = 'sticky'; // 'fixed';
            navbarShadow = useColorModeValue(
                '0px 7px 23px rgba(0, 0, 0, 0.05)',
                'none'
            );
            navbarBg = useColorModeValue(
                'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
                'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
            );
            navbarBorder = useColorModeValue('#FFFFFF', 'rgba(255, 255, 255, 0.31)');
            navbarFilter = useColorModeValue(
                'none',
                'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))'
            );
        }
    }

    if (props.secondary) {
        navbarBackdrop = 'none';
        navbarPosition = 'absolute';
        mainText = 'white';
        secondaryText = 'white';
        secondaryMargin = '22px';
        paddingX = '30px';
    }

    const changeNavbar = () => {            setScrolled(window.scrollY > 1);    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
    }, []);


    return (
        <Box pt='16x'>
            <Flex
                position={navbarPosition}
                boxShadow={navbarShadow}
                bg={navbarBg}
                borderColor={navbarBorder}
                filter={navbarFilter}
                backdropFilter={navbarBackdrop}
                borderWidth='1.5px'
                borderStyle='solid'
                transitionDelay='0s, 0s, 0s, 0s'
                transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
                transition-property='box-shadow, background-color, filter, border'
                transitionTimingFunction='linear, linear, linear, linear'
                alignItems={{ xl: 'center' }}
                borderRadius='16px'
                display='flex'
                /* minH='75px' */
                /* justifyContent={{ xl: 'center' }} */
                lineHeight='25.6px'
                /* mx='auto' */
                justifyContent='space-between'
                w='100%'
                mt={secondaryMargin}
                pb='8px'
                px={{ sm: paddingX, md: '30px' }}
                /* ps={{ xl: '12px' }} */
                /* pt='8px' */
                top={left}
                right={right}
            /* w={{ sm: 'calc(100vw - 30px)', xl: 'calc(100vw - 75px - 275px)' }} */
            /* w={{ sm: 'calc(100% - 30px)', xl: 'calc(100% - 75px - 275px)' }} */
            >
                <Flex w='100%' flexDirection={{ sm: 'column', md: 'row' }} alignItems={{ xl: 'center' }}>
                    <Box mb={{ sm: '8px', md: '0px' }}>
                        <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
                            <BreadcrumbItem color={mainText}>
                                <BreadcrumbLink href='#' color={secondaryText}>
                                    Pages
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            {paths.map((p, i) => (
                                <BreadcrumbItem color={mainText} key={paths.slice(0, i).join('/')}>
                                    <BreadcrumbLink as={Link} href={paths.slice(0, i).join('/')} color={mainText} isCurrentPage={i === paths.length - 1}>
                                        {/* brandText */
                                            /* segments.join('/') */
                                            p
                                        }
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            ))}
                        </Breadcrumb>
                        {/* Here we create navbar brand, based on route name */}
                        {/* <Link
                            color={mainText}
                            href='#'
                            bg='inherit'
                            borderRadius='inherit'
                            fontWeight='bold'
                            _hover={{ color: { mainText } }}
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent',
                            }}
                            _focus={{
                                boxShadow: 'none',
                            }}
                        >
                            {brandText}
                            {pathname}
                        </Link> */}
                    </Box>
                    <Box ms='auto' w={{ sm: '100%', md: 'unset' }}>
                        <AdminNavbarLinks
                            onOpen={props.onOpen}
                            secondary={props.secondary}
                            fixed={props.fixed}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

AdminNavbar.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func,
};


export default AdminNavbar;
