import { Fragment, useContext } from 'react';
import { Box, Flex, StackDivider, VStack } from '@chakra-ui/layout';
import { MetadataContext } from '@/contexts';
import { NavLink } from '@/components/NavLink';
// import { Separator } from '@/components';
import { SidebarHelp } from './SidebarHelp';
import { SidebarLinks } from './SidebarLinks';


const separatorBg = 'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)';

export const SidebarContent: ReactFC = () => {

    const metadata = useContext(MetadataContext);

    const Logo = metadata?.logo?.Icon || Fragment;

    return (
        <Flex direction='column' justifyContent='space-between' w='100%' h='100%'>
            <VStack spacing={6} divider={<StackDivider alignSelf='center' h='1px' w='80%' bg={separatorBg} />}>

                <NavLink href={'/'} target='_blank' my={2} display='flex' justifyContent='center'>
                    <Logo w='70%' h='auto' mb={-4} />
                </NavLink>

                <SidebarLinks />

            </VStack>


            <Box>
                <SidebarHelp />
            </Box>
        </Flex>
    );
};

export default SidebarContent;
