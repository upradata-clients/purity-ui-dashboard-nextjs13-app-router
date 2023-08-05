import { DrawerContext } from '@/contexts';
import { Box } from '@chakra-ui/layout';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';
import { useContext } from 'react';


export const SidebarDrawer: ReactFC = ({ children }) => {

    const drawerContext = useContext(DrawerContext);

    if (!drawerContext)
        return null;

    return (
        <Drawer isOpen={drawerContext.isOpen} onClose={drawerContext.onClose} placement={'left'} finalFocusRef={drawerContext.finalFocusRef}>

            <DrawerOverlay />

            <DrawerContent w='250px' maxW='250px' ms={{ sm: '16px' }} my={{ sm: '16px' }} borderRadius='16px'>
                <DrawerCloseButton /*  _focus={{ boxShadow: 'none' }} _hover={{ boxShadow: 'none' }} */ />

                <DrawerBody maxW='250px' px='1rem'>
                    <Box maxW='100%' h='100vh'>
                        {children}
                    </Box>
                </DrawerBody>

            </DrawerContent>
        </Drawer>
    );
};

// export default SidebarDrawer;
