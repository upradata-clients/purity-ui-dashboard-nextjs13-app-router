import { useContext, useRef } from 'react';
import Avatar1 from '@/assets/img/avatars/avatar1.png';
import Avatar2 from '@/assets/img/avatars/avatar2.png';
import Avatar3 from '@/assets/img/avatars/avatar3.png';
import { BellIcon, HamburgerIcon, MoonIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/button';
import { chakra, type ThemingProps, useColorMode } from '@chakra-ui/system';
import { DrawerContext, MetadataContext } from '@/contexts';
import { Hide, Show } from '@chakra-ui/media-query';
import { HStack, StackProps, Text, VStack } from '@chakra-ui/layout';
import { InputSearch } from '@/components/Input';
import { ItemContent } from '@/components/Menu';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { NavLink } from '@/components/NavLink';
import { ProfileIcon } from '@/components/Icons';
import { useStyles } from './Navbar-provider';


export type NavbarLinkProps = {
    onOpen?: () => unknown;
};


export const NavbarLinks = chakra<ReactFCNoChildren<ThemingProps<'Navbar'> & NavbarLinkProps & StackProps>>(({ /* variant,  children, */ onOpen, ...rest }) => {
    const { /* icon, */ ...containerStyles } = useStyles().links;

    const { colorMode, toggleColorMode } = useColorMode();

    const btnRef = useRef(null);
    const drawerContext = useContext(DrawerContext);

    drawerContext?.setFinalFocusRef(btnRef);

    const metadata = useContext(MetadataContext);

    return (
        <HStack {...containerStyles} {...rest}>
            <HStack spacing={8}>

                <InputSearch />

                <HStack>
                    <IconButton
                        aria-label={colorMode === 'light' ? 'set dark mode' : 'set light mode'}
                        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}
                    />

                    <NavLink href='/auth/signin'>
                        <Button variant='ghost' rightIcon={<ProfileIcon />}>
                            <Hide below={metadata?.layout.mobile}><Text>Sign In</Text></Hide>
                        </Button>
                    </NavLink>

                    <IconButton aria-label='settings' icon={<SettingsIcon />} onClick={onOpen} />

                    <Menu isLazy lazyBehavior="unmount">
                        <MenuButton as={IconButton} icon={<BellIcon />} aria-label='notification' />

                        <MenuList p={4}>
                            <VStack>
                                <MenuItem borderRadius='8px' mb='10px'>
                                    <ItemContent time='13 minutes ago' info='from Alicia' boldInfo='New Message' aName='Alicia' aSrc={Avatar1.src} />
                                </MenuItem>

                                <MenuItem borderRadius='8px' mb='10px'>
                                    <ItemContent time='2 days ago' info='by Josh Henry' boldInfo='New Album' aName='Josh Henry' aSrc={Avatar2.src} />
                                </MenuItem>

                                <MenuItem borderRadius='8px'>
                                    <ItemContent time='3 days ago' info='Payment succesfully completed!' boldInfo='' aName='Kara' aSrc={Avatar3.src} />
                                </MenuItem>
                            </VStack>
                        </MenuList>
                    </Menu>

                    <Show below={metadata?.layout.tablet}>
                        <IconButton aria-label="hamberger-menu" icon={<HamburgerIcon />} ref={btnRef} onClick={onOpen} />
                    </Show>

                </HStack>

            </HStack>
        </HStack>
    );
});

// export const NavbarLinks = chakra(NavbarLinks_);
// export default NavbarLinks;
