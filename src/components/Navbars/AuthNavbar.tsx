import { Fragment, useContext } from 'react';
import { Box, BoxProps, Flex, HStack, Text } from '@chakra-ui/layout';
import { Button, ButtonProps, IconButton, IconButtonProps } from '@chakra-ui/button';
// import SidebarResponsive from '@/components/Sidebar/SidebarResponsive';
import { chakra, createStylesContext, useColorMode, useMultiStyleConfig } from '@chakra-ui/system';
import { Hide } from '@chakra-ui/media-query';
import { HomeIcon, PersonAuthIcon } from '@/components/Icons/Icons';
// import { NavLink } from 'react-router-dom';
import { MetadataContext } from '@/contexts';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Portal } from '@chakra-ui/portal';
import { NavLink, NavLinkProps } from '../NavLink';

import type { AuthNavbarStyle } from '@/theme/additions/layout/AuthNavbar';
import type { IconProps } from '@chakra-ui/icon';
import type { ThemingProps } from '@chakra-ui/styled-system';


const AuthNavBarWrapper: React.FC<React.PropsWithChildren<{ secondary: boolean; }>> = ({ secondary, children }) => {
    return (secondary ? <>{children}</> : <Portal>{children}</Portal>);
};

const [ StylesProvider, _useStyles ] = createStylesContext('AuthNavbar');
const useStyles = (): AuthNavbarStyle => _useStyles() as unknown as AuthNavbarStyle;


export const AuthNavbar: ReactFC<ThemingProps<'AuthNavbar'>> = ({ size, variant }) => {
    const styles = useMultiStyleConfig('AuthNavbar', { size, variant }) as AuthNavbarStyle;

    // // Chakra color mode
    // let navbarIcon = useColorModeValue('gray.700', 'gray.200');
    // let mainText = useColorModeValue('gray.700', 'gray.200');
    // let navbarBg = useColorModeValue(
    //     'linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)',
    //     'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
    // );
    // let navbarBorder = useColorModeValue(
    //     '1.5px solid #FFFFFF',
    //     '1.5px solid rgba(255, 255, 255, 0.31)'
    // );
    // let navbarShadow = useColorModeValue(
    //     '0px 7px 23px rgba(0, 0, 0, 0.05)',
    //     'none'
    // );
    // let navbarFilter = useColorModeValue(
    //     'none',
    //     'drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))'
    // );
    // let navbarBackdrop = 'blur(21px)';
    // let bgButton = useColorModeValue(
    //     'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)',
    //     'gray.800'
    // );
    // let navbarPosition = 'fixed' as PositionProps[ 'position' ];
    // let colorButton = 'white';

    // if (props.secondary === true) {
    //     navbarIcon = 'white';
    //     navbarBg = 'none';
    //     navbarBorder = 'none';
    //     navbarShadow = 'initial';
    //     navbarFilter = 'initial';
    //     navbarBackdrop = 'none';
    //     bgButton = 'white';
    //     colorButton = 'gray.700';
    //     mainText = 'white';
    //     navbarPosition = 'inherit'; // 'absolute';
    // }
    const { colorMode, toggleColorMode } = useColorMode();


    const linkPaths: Record<'center' | 'right', LinkPath[]> = {
        center: [
            { name: 'Dashboard', href: '/pages/dashboard', Icon: HomeIcon },
            { name: 'Sign In', href: '/auth/signin', Icon: PersonAuthIcon }, ],
        right: [
            {
                Icon: colorMode === 'light' ? MoonIcon : SunIcon,
                iconPosition: 'right',
                onClick: toggleColorMode,
                // name: colorMode === 'light' ? 'Set dark mode' : 'Set light mode',
                ariaLabel: colorMode === 'light' ? 'set dark mode' : 'set light mode'
            }
        ]
    };

    return (
        <AuthNavBarWrapper secondary={false} /* secondary={secondary} */>
            <StylesProvider value={styles}>
                <Box __css={styles.container}>
                    <Flex w='100%' justifyContent={{ sm: 'start', lg: 'space-between' }}>

                        <Brand />

                        <Hide below='lg'  /* ms={{ base: 'auto', lg: 0 }} */ >
                            {/* <SidebarResponsive
                            secondary={props.secondary}
                            routes={routes}
                            // logo={logo}
                            {...rest}
                        /> */}
                        </Hide>

                        <Hide below='lg'>

                        </Hide>

                        <Links linkPaths={linkPaths.center} />
                        <Links linkPaths={linkPaths.right} />
                    </Flex>
                </Box>
            </StylesProvider>
        </AuthNavBarWrapper>
    );
};


const Brand: ReactFC = () => {
    const metadata = useContext(MetadataContext);
    const Logo = metadata?.logo?.Icon || Fragment;

    return (
        <NavLink href='/' display='flex' lineHeight='100%' fontWeight='bold' justifyContent='center' alignItems='center' _hover={{ textDecoration: 'none' }}
        /* color={mainText} */>
            <Logo /* w='32px' */ h='32px' me='10px' />
            <Text fontSize='sm' mt='3px'>{metadata?.logo?.text}</Text>
        </NavLink>
    );
};



// type _IconProps = ComponentWithAs<'svg', IconProps>;

type LinkPath = {
    name?: string;
    href?: string;
    onClick?: () => void;
    Icon: React.ComponentType<IconProps>;
    iconPosition?: 'left' | 'right';
    ariaLabel?: string;
};


const Link = chakra<ReactFC<{ href?: string; } & Partial<BoxProps & NavLinkProps>>>(({ href, children, ...rest }) => {
    return (
        href ? <NavLink href={href} {...rest}>{children}</NavLink> : <Box as='span' {...rest}>{children}</Box>
    );
});


const Links: ReactFC<{ linkPaths: LinkPath[]; } & BoxProps> = ({ linkPaths, ...rest }) => {
    const styles = useStyles();

    return (
        <Flex gap={2} {...rest}>
            {linkPaths.map(({ name, href, Icon, iconPosition = 'left', onClick, ariaLabel }) => {
                const icon = <Icon /*  color={navbarIcon} w='12px' h='12px' me='0px' */ />;

                const buttonProps: ButtonProps & IconButtonProps = {
                    leftIcon: name && iconPosition === 'left' ? icon : undefined,
                    rightIcon: name && iconPosition === 'right' ? icon : undefined,
                    icon: name ? undefined : icon,
                    onClick,
                    'aria-label': ariaLabel || '',
                    children: name ? <Text fontSize='sm' size='sm'>{name}</Text> : undefined
                };

                const ButtonCmp = name ? Button : IconButton;

                return (
                    <Link href={href} key={href} >
                        <ButtonCmp sx={styles.link} /* _hover={{ bg: 'chakra-body-bg' }} */ variant='ghost' {...buttonProps} />
                    </Link>
                );
            })}
        </Flex>
    );
};

// export default AuthNavbar;
