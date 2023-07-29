
import { useContext } from 'react';
// Assets
import Avatar1 from '@/assets/img/avatars/avatar1.png';
import Avatar2 from '@/assets/img/avatars/avatar2.png';
import Avatar3 from '@/assets/img/avatars/avatar3.png';
import { BellIcon, MoonIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/button';
import { type ThemingProps, useColorMode } from '@chakra-ui/system';
import { Flex, Text } from '@chakra-ui/layout';
import { InputSearch } from '@/components/Input';
import { ItemContent } from '@/components/Menu';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { NavLink } from '@/components/NavLink';
import { ProfileIcon } from '@/components/Icons';
import { RoutesContext } from '@/contexts/routes.context';
/* import { SidebarResponsive } from '@/components/Sidebar';
 */import { useStyles } from './Navbar-provider';


export type NavbarLinkProps = {
    onOpen?: () => unknown;
};


export const NavbarLinks_: ReactFCNoChildren<ThemingProps<'Navbar'> & NavbarLinkProps> = ({ variant, /* children, */ onOpen, ...rest }) => {
    const { icon, ...containerStyles } = useStyles().links;
    const routes = useContext(RoutesContext);

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex alignItems='center' flexDirection='row' __css={containerStyles}>

             <InputSearch />

            <IconButton
                aria-label={colorMode === 'light' ? 'set dark mode' : 'set light mode'}
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode}
            />

            <NavLink href='/auth/signin'>
                <Button
                    ms='0px' px='0px' me={{ sm: '2px', md: '16px' }} color={icon.color} variant='transparent-with-icon' w='22px' h='22px'
                    rightIcon={<ProfileIcon color={icon.color} />}
                >
                    <Text display={{ sm: 'none', md: 'flex' }}>Sign In</Text>
                </Button>
            </NavLink>

            {/* <SidebarResponsive variant={variant} routes={routes} {...rest} /> */}

            <SettingsIcon cursor='pointer' ms={{ base: '16px', xl: '0px' }} me='16px' onClick={onOpen} color={icon.color} w='18px' h='18px' />

            <Menu>
                <MenuButton>
                    <BellIcon color={icon.color} w='18px' h='18px' />
                </MenuButton>

                <MenuList p='16px 8px'>
                    <Flex flexDirection='column'>
                        <MenuItem borderRadius='8px' mb='10px'>
                            <ItemContent time='13 minutes ago' info='from Alicia' boldInfo='New Message' aName='Alicia' aSrc={Avatar1.src} />
                        </MenuItem>

                        <MenuItem borderRadius='8px' mb='10px'>
                            <ItemContent time='2 days ago' info='by Josh Henry' boldInfo='New Album' aName='Josh Henry' aSrc={Avatar2.src} />
                        </MenuItem>

                        <MenuItem borderRadius='8px'>
                            <ItemContent time='3 days ago' info='Payment succesfully completed!' boldInfo='' aName='Kara' aSrc={Avatar3.src} />
                        </MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
        </Flex>
    );
};