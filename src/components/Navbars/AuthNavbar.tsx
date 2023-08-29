import { Fragment, useContext } from 'react';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import { Button, ButtonProps, IconButton, IconButtonProps } from '@chakra-ui/button';
// import SidebarResponsive from '@/components/Sidebar/SidebarResponsive';
import { chakra, useColorMode } from '@chakra-ui/system';
import { createStylesContext, useStyleMultiVariantConfig } from '@/util/hooks';
import { Hide } from '@chakra-ui/media-query';
import { HomeIcon, PersonAuthIcon } from '@/components/Icons';
// import { NavLink } from 'react-router-dom';
import { MetadataContext } from '@/contexts';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLink, NavLinkProps } from '@/components/NavLink';
import { Portal } from '@chakra-ui/portal';

import type { IconProps } from '@chakra-ui/icon';
import type { ThemingProps } from '@chakra-ui/styled-system';


const AuthNavBarWrapper: React.FC<React.PropsWithChildren<{ secondary: boolean; }>> = ({ secondary, children }) => {
    return (secondary ? <>{children}</> : <Portal>{children}</Portal>);
};

const { StylesProvider, useStyles } = createStylesContext('AuthNavbar');


export const AuthNavbar: ReactFC<ThemingProps<'AuthNavbar'>> = ({ size, variant }) => {
    const styles = useStyleMultiVariantConfig('AuthNavbar', { size, variant });

    const { colorMode, toggleColorMode } = useColorMode();

    const linkPaths: Record<'center' | 'right', LinkPath[]> = {
        center: [
            { name: 'Dashboard', href: '/pages/dashboard', Icon: HomeIcon },
            { name: 'Sign In', href: '/auth/signin', Icon: PersonAuthIcon },
            { name: 'Sign Up', href: '/auth/signup', Icon: PersonAuthIcon }
        ],
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
    const Logo = metadata?.logoSecondary?.Icon || metadata?.logo?.Icon || Fragment;

    return (
        <NavLink href='/' display='flex' lineHeight='100%' fontWeight='bold' justifyContent='center' alignItems='center' _hover={{ textDecoration: 'none' }}
        /* color={mainText} */>
            <Logo w='100px' h='auto' me='10px' />
            {/* <Text fontSize='sm' mt='3px'>{metadata?.logo?.text}</Text> */}
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
