import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input';
import { ThemingProps } from '@chakra-ui/styled-system';

export const InputSearch: ReactFC<ThemingProps<'Input'>> = () => {
    return (
        <InputGroup variant='filled'>
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color='chakra-subtle-text' />
            </InputLeftElement>

            <Input aria-label='Navbar search' placeholder='Type here...' />
        </InputGroup>
    );
};
