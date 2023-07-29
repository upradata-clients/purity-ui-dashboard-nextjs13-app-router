import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const inputSearchStyles = {
    // components: {
    //     Card: defineMultiStyleConfig({
    //         baseStyle: definePartsStyle({
    //             group: {
    //                 cursor: 'pointer',
    //                 bg: inputBg,
    //                 borderRadius: 4,
    //                 w: { sm: '128px', md: '200px', },
    //                 me: { sm: 'auto', md: '20px' }
    //                 //  _focus={{ borderColor: { mainTeal }, }}
    //                 //  _active={{ borderColor: { mainTeal }, }}
    //             }
    //         })
    //     })
    // }
};
