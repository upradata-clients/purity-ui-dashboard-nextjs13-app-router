import { VStack } from '@chakra-ui/layout';
import { FormLabel } from '@chakra-ui/form-control';
import { Input, InputProps } from '@chakra-ui/input';

export type FormInputProps={ label?: string; placeholder?: string; } & InputProps

export const FormInput: ReactFC<FormInputProps> = ({ label, placeholder = '', type = 'text', ...rest }) => (
    <VStack spacing={0} align='start' w='100%'>
        {label && <FormLabel fontSize='sm'>{label}</FormLabel>}
        <Input type={type} placeholder={placeholder} size='lg'  {...rest} />
    </VStack>
);