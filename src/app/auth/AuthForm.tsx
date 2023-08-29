import { NavLink } from '@/components/NavLink';
import { FormInput, FormInputProps } from '@/components/Input';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Flex, VStack, HStack, Text } from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/switch';

export type AuthFormProps = {
    submitButtonText: string;
    secondAction: { text: string; href: string; };
    inputs: FormInputProps[];
};

export const AuthForm: ReactFCNoChildren<AuthFormProps> = ({ submitButtonText, secondAction, inputs }) => {

    return (
        <FormControl as={Flex} direction='column' gap={8}>

            <VStack spacing={4}>
                {inputs.map(props=><FormInput key={props.name} {...props}/>)}
            </VStack>

            <HStack spacing={1} align='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel htmlFor='remember-login' m='0'>Remember me</FormLabel>
            </HStack>

            <VStack w='100%' spacing={4}>
                <Button type='submit' w='100%' h='45' mt={-4}>{submitButtonText.toUpperCase()}</Button>

                <Flex justify='center'>
                    <Text color='chakra-subtle-text'>Do not have an account?</Text>
                    <NavLink href={secondAction.href} color='primary' as='span' ms='5px' fontWeight='bold'>
                        {secondAction.text}
                    </NavLink>
                </Flex>
            </VStack>

        </FormControl>
    );
};