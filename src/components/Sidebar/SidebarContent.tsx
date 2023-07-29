import { Fragment, useContext } from 'react';
import { Box, Flex, Stack, StackDivider, Text, VStack } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/next-js';
import { MetadataContext, RoutesContext } from '@/contexts';
// import { Separator } from '@/components';
import { SidebarHelp } from './SidebarHelp';
import { SidebarLinks } from './SidebarLinks';
import { useStyles } from './Sidebar-provider';


const separatorBg = 'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)';

export const SidebarContent: ReactFC = () => {

    const metadata = useContext(MetadataContext);

    const Logo = metadata?.logo?.Icon || Fragment;

    return (
        <Flex direction='column' justifyContent='space-between' w='100%' h='100%'>
            <VStack spacing={3} divider={<StackDivider alignSelf='center' h='2px' w='80%' bg={separatorBg} />}>

                <Link href={'/'} target='_blank' display='flex' lineHeight='100%' mb='30px'
                    fontWeight='bold' justifyContent='center' alignItems='center' fontSize='11px'>

                    <Logo w='100%' h='32px' me={2.5} />
                </Link>

                <SidebarLinks />

            </VStack>


            <Box>
                <SidebarHelp />
            </Box>
        </Flex>
    );
};

export default SidebarContent;
