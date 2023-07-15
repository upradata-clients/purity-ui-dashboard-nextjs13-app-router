import { CreativeTimLogo } from '@/components/Icons/Icons';
import IconBox from '@/components/Icons/IconBox';
import { Link } from '@chakra-ui/next-js';
import { Separator } from '@/components/Separator/Separator';
import { SidebarHelp } from '@/components/Sidebar/SidebarHelp';
// import { NavLink, useLocation } from 'react-router-dom';
import NavLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/system';
import { useState } from 'react';



// this function creates the links and collapses that appear in the sidebar (left menu)

/* export const getStaticProps: GetStaticProps<{

}> = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next');
    const repo = await reson();
    return { props: { repo } };
};
 */

const SidebarContent = ({ logoText, routes }: React.PropsWithChildren<Record<string, any>>) => {

    // to check for active links and opened collapses
    const pathname = usePathname();

    // this is for the rest of the collapses
    const [ state, setState ] = useState({});

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
            /* if (prop.redirect) {
                return null;
            }
            if (prop.category) {
                var st = {};
                st[ prop[ 'state' ] ] = !state[ prop.state ];
                return (
                    <div key={prop.name}>
                        <Text
                            color={activeColor}
                            fontWeight='bold'
                            mb={{
                                xl: '12px',
                            }}
                            mx='auto'
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            py='12px'
                        >
                            {document.documentElement.dir === 'rtl'
                                ? prop.rtlName
                                : prop.name}
                        </Text>
                        {createLinks(prop.views)}
                    </div>
                );
            } */
            return (
                <NavLink href={prop.href /* prop.layout + prop.path */} key={prop.href}>
                    {isActiveRoute(prop.href /* prop.layout + prop.path */) === 'active' ? (
                        <Button
                            boxSize='initial'
                            justifyContent='flex-start'
                            alignItems='center'
                            bg={activeBg}
                            mb={{
                                xl: '12px',
                            }}
                            mx={{
                                xl: 'auto',
                            }}
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            py='12px'
                            borderRadius='15px'
                            /*  _hover='none' */
                            w='100%'
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent',
                            }}
                            _focus={{
                                boxShadow: 'none',
                            }}
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
                            mb={{
                                xl: '12px',
                            }}
                            mx={{
                                xl: 'auto',
                            }}
                            py='12px'
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            borderRadius='15px'
                            /* _hover='none' */
                            w='100%'
                            _active={{
                                bg: 'inherit',
                                transform: 'none',
                                borderColor: 'transparent',
                            }}
                            _focus={{
                                boxShadow: 'none',
                            }}
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
                                <Text color={inactiveColor} my='auto' fontSize='sm'>
                                    {prop.name}
                                    {/* {document.documentElement.dir === 'rtl'
                                        ? prop.rtlName
                                        : prop.name} */}
                                </Text>
                            </Flex>
                        </Button>
                    )}
                </NavLink>
            );
        });
    };

    const links = /* useMemo(() => */ <>{createLinks(routes)}</>;/* , routes); */

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
                        <CreativeTimLogo w='32px' h='32px' me='10px' />
                        <Text fontSize='sm' mt='3px'>
                            {logoText}
                        </Text>
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
