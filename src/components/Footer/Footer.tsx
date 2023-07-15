import { Flex, List, ListItem, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/next-js';

export function Footer(props: React.PropsWithChildren<Record<string, any>>) {
    // const linkTeal = useColorModeValue('teal.400', 'red.200');=
    return (
        <Flex flexDirection={{ base: 'column', xl: 'row' }} alignItems={{ base: 'center', xl: 'start' }} justifyContent='space-between' px='30px' /* pb='20px' */>

            <Text color='gray.400' textAlign={{ base: 'center', xl: 'start' }} mb={{ base: '20px', xl: '0px' }}>
                &copy; {new Date().getFullYear()},{' '}
                <Text as='span'>{'Made with ❤️ by '}</Text>
                <Link /* color={linkTeal} */ color='teal.400' href='https://digital.upradata.com' target='_blank'>
                    {'Digital Upra-Data '}
                </Link>

                {' for a better web'}
            </Text>

            <List display='flex'>
                <ListItem me={{ base: '20px', md: '44px' }}>
                    <Link color='gray.400' href='https://digital.upradata.com'>
                        Upra-Data
                    </Link>
                </ListItem>

                <ListItem me={{ base: '20px', md: '44px' }}>
                    <Link color='gray.400' href='#blog'>
                        Blog
                    </Link>
                </ListItem>

                <ListItem >
                    <Link color='gray.400' href='#license'>
                        License
                    </Link>
                </ListItem>
            </List>
        </Flex>
    );
}


export default Footer;
