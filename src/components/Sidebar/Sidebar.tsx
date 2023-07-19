import { Box } from '@chakra-ui/layout';
import SidebarContent from './SidebarContent';

export function Sidebar(props: React.PropsWithChildren<Record<string, any>>) {
    // to check for active links and opened collapses
    // const mainPanel = useRef(null);
    let variantChange = '0.2s linear';

    const { routes, sidebarVariant } = props;

    //  BRAND
    //  Chakra Color Mode
    let sidebarBg = 'none';
    /* let sidebarRadius = '0px';
    let sidebarMargins = '0px'; */

    if (sidebarVariant === 'opaque') {
        sidebarBg = 'chakra-on-body-bg';
        //  useColorModeValue('gray.50', 'gray.700');
        // sidebarRadius = '16px';
        // sidebarMargins = '16px 0px 16px 16px';
    }

    // SIDEBAR
    return (
        <Box
            display={{ sm: 'none', xl: 'flex' }}  /* position='fixed' */
            bgColor={sidebarBg}
            transition={variantChange}
            w='260px'
            maxW='260px'
            /* ms={{ sm: '16px' }}
            my={{ sm: '16px' }}
            h='calc(100% - 32px)' // 16*2 */
            h='100%'
            px='20px'
            py={sidebarVariant === 'opaque' ? '20px' : 0}
            /*  m={sidebarMargins} */
            borderRadius='16px'/* {sidebarRadius} */
        >
            <SidebarContent routes={routes}
                display='none'
                sidebarVariant={sidebarVariant}
            />
        </Box>
    );
}




export default Sidebar;
