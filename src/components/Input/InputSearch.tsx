import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input';
import { ThemingProps } from '@chakra-ui/styled-system';

export const InputSearch: ReactFC<ThemingProps<'Input'>> = () => {
    //  const mainTeal = useColorModeValue('teal.300', 'teal.300');
    // const inputBg = useColorModeValue('white', 'gray.800');
    // const searchIcon = useColorModeValue('gray.700', 'gray.200');

    // return (
    //     <InputGroup cursor='pointer' bg={inputBg} borderRadius='15px' w={{ sm: '128px', md: '200px', }} me={{ sm: 'auto', md: '20px' }}
    //         _focus={{ borderColor: { mainTeal }, }}
    //         _active={{ borderColor: { mainTeal }, }}
    //     >
    //         <InputLeftElement pointerEvents='none'>
    //             <IconButton
    //                 aria-label='Search bar nav link'
    //                 bg='inherit'
    //                 borderRadius='inherit'
    //                 /* _hover='none' */
    //                 _active={{ bg: 'inherit', transform: 'none', borderColor: 'transparent' }}
    //                 _focus={{ boxShadow: 'none' }}
    //                 icon={<SearchIcon color={searchIcon} w='15px' h='15px' />}
    //             />
    //         </InputLeftElement>

    //         <Input fontSize='xs' py='11px' color={mainText} placeholder='Type here...' borderRadius='inherit' />
    //     </InputGroup>
    // ); 

    return (
        <InputGroup variant='filled'>
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color='chakra-subtle-text' w='15px' h='15px' />
            </InputLeftElement>

            <Input aria-label='Navbar search' placeholder='Type here...' />
        </InputGroup>
    );
};
