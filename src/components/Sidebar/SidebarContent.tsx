import { Fragment, useContext } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icon';
import { IconBox, Separator, SidebarHelp } from '@/components';
import { Link } from '@chakra-ui/next-js';
import { MetadataContext, RoutesContext } from '@/contexts';
import { useColorModeValue } from '@chakra-ui/system';
// import { NavLink, useLocation } from 'react-router-dom';
import NavLink from 'next/link';
import { usePathname } from 'next/navigation';


const SidebarContent = ({ }: React.PropsWithChildren<Record<string, any>>) => {

    const pathname = usePathname();
    const metadata = useContext(MetadataContext);
    const routes = useContext(RoutesContext);

    // verifies if routeName is the one active (in browser input)
    const isActiveRoute = (routeName: string) => {
        return pathname.includes(routeName) ? 'active' : '';
    };

    const createLinks = (routes) => {
        // Chakra Color Mode
        const activeBg = useColorModeValue('white', 'gray.700');
        const inactiveBg = useColorModeValue('white', 'gray.700');
        const activeColor = useColorModeValue('gray.700', 'white');
        const inactiveColor = useColorModeValue('gray.400', 'gray.400');

        return routes.map((prop, key) => {

            return (
                <NavLink href={prop.href} key={prop.href}>
                    {isActiveRoute(prop.href) === 'active' ? (
                        <Button
                            boxSize='initial'
                            justifyContent='flex-start'
                            alignItems='center'
                            bg={activeBg}
                            mb={{ xl: '12px' }}
                            mx={{ xl: 'auto' }}
                            ps={{ sm: '10px', xl: '16px' }}
                            py='12px'
                            borderRadius='15px'
                            /*  _hover='none' */
                            w='100%'
                            _active={{ bg: 'inherit', transform: 'none', borderColor: 'transparent' }}
                            _focus={{ boxShadow: 'none' }}
                        >
                            <Flex>
                                {typeof prop.icon === 'string' ? (
                                    <Icon>{prop.icon}</Icon>
                                ) : (
                                    <IconBox
                                        bg='teal.300'
                                        color='white'
                                        h='30px'
                                        w='30px'
                                        me='12px'
                                    >
                                        {prop.icon}
                                    </IconBox>
                                )}
                                <Text color={activeColor} my='auto' fontSize='sm'>
                                    {prop.name}
                                    {/* {document.documentElement.dir === 'rtl'
                                        ? prop.rtlName
                                        : prop.name} */}
                                </Text>
                            </Flex>
                        </Button>
                    ) : (
                        <Button
                            boxSize='initial'
                            justifyContent='flex-start'
                            alignItems='center'
                            bg='transparent'
                            mb={{ xl: '12px' }} mx={{ xl: 'auto' }}
                            py='12px'
                            ps={{ sm: '10px', xl: '16px' }}
                            borderRadius='15px'
                            /* _hover='none' */
                            w='100%'
                            _active={{ bg: 'inherit', transform: 'none', borderColor: 'transparent' }}
                            _focus={{ boxShadow: 'none' }}
                        >
                            <Flex>
                                {typeof prop.icon === 'string' ? (
                                    <Icon>{prop.icon}</Icon>
                                ) : (
                                    <IconBox
                                        bg={inactiveBg}
                                        color='teal.300'
                                        h='30px'
                                        w='30px'
                                        me='12px'
                                    >
                                        {prop.icon}
                                    </IconBox>
                                )}
                                <Text color={inactiveColor} my='auto' fontSize='sm'>{prop.name}</Text>
                            </Flex>
                        </Button>
                    )}
                </NavLink>
            );
        });
    };

    const links = /* useMemo(() => */ <>{createLinks(routes)}</>;/* , routes); */
    const Logo = metadata?.logo?.Icon || Fragment;

    return (
        <Flex direction='column' justifyContent='space-between' h='100%'>
            <Box>
                <Box /* pt={'25px'} */ mb='12px'>
                    <Link
                        href={'/'}
                        target='_blank'
                        display='flex'
                        lineHeight='100%'
                        mb='30px'
                        fontWeight='bold'
                        justifyContent='center'
                        alignItems='center'
                        fontSize='11px'
                    >
                        <Logo w='32px' h='32px' me='10px' />
                        <Text fontSize='sm' mt='3px'>{metadata?.logo?.text}</Text>
                    </Link>
                    <Separator />
                </Box>

                <Stack direction='column' mb='40px'>
                    <Box>{links}</Box>
                </Stack>
            </Box>

            <Box>
                <SidebarHelp />
            </Box>
        </Flex>
    );
};

export default SidebarContent;
