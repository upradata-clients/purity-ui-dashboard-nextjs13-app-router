import { useContext, useState } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { AtlassianLogoIcon, DocumentIcon, HomeIcon, PersonIcon, RocketIcon } from '@/components/Icons/Icons';
import { Link } from '@chakra-ui/next-js';
import { Portal } from '@chakra-ui/portal';
import { type PositionProps } from '@chakra-ui/styled-system';
// import routes from '@/routes';
import { RoutesContext } from '@/contexts/routes.context';
import SidebarResponsive from '@/components/Sidebar/SidebarResponsive';
import { useColorModeValue } from '@chakra-ui/system';
// import { NavLink } from 'react-router-dom';
import NavLink from 'next/link';
import PropTypes from 'prop-types';
import { MetadataContext } from '@/contexts';


const AuthNavBarWrapper: React.FC<React.PropsWithChildren<{ secondary: boolean; }>> = ({ secondary, children }) => {
    return (secondary ? <>{children}</> : <Portal>{children}</Portal>);
};
export function AuthNavbar(props: React.PropsWithChildren<Record<string, any>>) {
    const routes = useContext(RoutesContext);
    const metadata = useContext(MetadataContext);

    const { logo, secondary, ...rest } = props;
    // verifies if routeName is the one active (in browser input)

    // Chakra color mode
    let navbarIcon = useColorModeValue('gray.700', 'gray.200');
    let mainText = useColorModeValue('gray.700', 'gray.200');
    let navbarBg = useColorModeValue(
        'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
        'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
    );
    let navbarBorder = useColorModeValue(
        '1.5px solid #FFFFFF',
        '1.5px solid rgba(255, 255, 255, 0.31)'
    );
    let navbarShadow = useColorModeValue(
        '0px 7px 23px rgba(0, 0, 0, 0.05)',
        'none'
    );
    let navbarFilter = useColorModeValue(
        'none',
        'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))'
    );
    let navbarBackdrop = 'blur(21px)';
    let bgButton = useColorModeValue(
        'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)',
        'gray.800'
    );
    let navbarPosition = 'fixed' as PositionProps[ 'position' ];
    let colorButton = 'white';

    if (props.secondary === true) {
        navbarIcon = 'white';
        navbarBg = 'none';
        navbarBorder = 'none';
        navbarShadow = 'initial';
        navbarFilter = 'initial';
        navbarBackdrop = 'none';
        bgButton = 'white';
        colorButton = 'gray.700';
        mainText = 'white';
        navbarPosition = 'inherit'; // 'absolute';
    }

    var brand = (
        <Link
            href={`${process.env.PUBLIC_URL}/#/`}
            target='_blank'
            display='flex'
            lineHeight='100%'
            fontWeight='bold'
            justifyContent='center'
            alignItems='center'
            color={mainText}
        >
            <AtlassianLogoIcon w='32px' h='32px' me='10px' />
            <Text fontSize='sm' mt='3px'>
                {metadata?.logo?.text}
            </Text>
        </Link>
    );
    var linksAuth = (
        <HStack display={{ sm: 'none', lg: 'flex' }}>
            <NavLink href='/dashboard'>
                <Button
                    fontSize='sm'
                    ms='0px'
                    /* me='0px' */
                    px='0px'
                    me={{ sm: '2px', md: '16px' }}
                    color={navbarIcon}
                    variant='transparent-with-icon'
                    leftIcon={<HomeIcon color={navbarIcon} w='12px' h='12px' me='0px' />}
                >
                    <Text>Dashboard</Text>
                </Button>
            </NavLink>
            <NavLink href='/profile'>
                <Button
                    fontSize='sm'
                    ms='0px'
                    /* me='0px' */
                    px='0px'
                    me={{ sm: '2px', md: '16px' }}
                    color={navbarIcon}
                    variant='transparent-with-icon'
                    leftIcon={
                        <PersonIcon color={navbarIcon} w='12px' h='12px' me='0px' />
                    }
                >
                    <Text>Profile</Text>
                </Button>
            </NavLink>
            <NavLink href='/auth/signin'>
                <Button
                    fontSize='sm'
                    ms='0px'
                    /* me='0px' */
                    px='0px'
                    me={{ sm: '2px', md: '16px' }}
                    color={navbarIcon}
                    variant='transparent-with-icon'
                    leftIcon={
                        <RocketIcon color={navbarIcon} w='12px' h='12px' me='0px' />
                    }
                >
                    <Text>Sign In</Text>
                </Button>
            </NavLink>
            <NavLink href='/auth/login'>
                <Button
                    fontSize='sm'
                    ms='0px'
                    px='0px'
                    me={{ sm: '2px', md: '16px' }}
                    color={navbarIcon}
                    variant='transparent-with-icon'
                    leftIcon={
                        <DocumentIcon color={navbarIcon} w='12px' h='12px' me='0px' />
                    }
                >
                    <Text>Log In</Text>
                </Button>
            </NavLink>
        </HStack>
    );
    return (
        <AuthNavBarWrapper secondary={secondary}>
            <Flex
                position={navbarPosition}
                top='16px'
                left='50%'
                alignSelf='center'
                transform={secondary ? '' : 'translate(-50%, 0px)'}
                background={navbarBg}
                border={navbarBorder}
                boxShadow={navbarShadow}
                filter={navbarFilter}
                backdropFilter={navbarBackdrop}
                borderRadius='15px'
                px='16px'
                py='22px'
                mx={secondary ? '' : 'auto'}
                mt={secondary ? '16px' : ''}
                width='1044px'
                maxW='90%'
                alignItems='center'
            >
                <Flex w='100%' justifyContent={{ sm: 'start', lg: 'space-between' }}>
                    {brand}
                    <Box
                        ms={{ base: 'auto', lg: '0px' }}
                        display={{ base: 'flex', lg: 'none' }}
                    >
                        <SidebarResponsive
                            secondary={props.secondary}
                            routes={routes}
                            // logo={logo}
                            {...rest}
                        />
                    </Box>
                    {linksAuth}
                    <Link href='#'>
                        <Button
                            bg={bgButton}
                            color={colorButton}
                            fontSize='xs'
                            variant='no-hover'
                            borderRadius='35px'
                            px='30px'
                            display={{
                                sm: 'none',
                                lg: 'flex',
                            }}
                        >
                            Free Download
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </AuthNavBarWrapper>
    );
}

AuthNavbar.propTypes = {
    color: PropTypes.oneOf([ 'primary', 'info', 'success', 'warning', 'danger' ]),
    brandText: PropTypes.string,
};


export default AuthNavbar;
