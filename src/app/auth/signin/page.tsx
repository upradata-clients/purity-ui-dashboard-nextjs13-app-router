
'use client';

import { Box, Flex, FlexProps, HStack, Heading, Text } from '@chakra-ui/layout';
import SignInImage from '@/assets/img/signInImage.png';
import { AuthForm } from '../AuthForm';



const SignIn: ReactFC = () => (
    <HStack justify='end' gap={28} w='100%' mx='auto' mb='30px' pt={{ sm: '100px', md: '0px' }}>
        <Form w={{ base: '100%', md: '50%', lg: '520px' }} p='48px' mt={{ md: '150px', lg: '80px' }} />

        <Box hideBelow='md' h={{ base: 'initial', md: '75vh', lg: '85vh' }} w='40vw'>
            <Box bgImage={SignInImage.src} w='100%' h='100%' bgSize='cover' bgPosition='50%' borderBottomLeftRadius='20px' />
        </Box>
    </HStack>
);



const Form: ReactFC<FlexProps> = props => {
    return (
        <Flex direction='column' w='100%' {...props}>

            <Heading color='primary' fontSize='32px' mb='10px'>
                Welcome Back
            </Heading>

            <Text mb='36px' ms='4px' color='chakra-subtle-text' fontSize='14px'>
                Enter your email and password to sign in
            </Text>

            <AuthForm submitButtonText='Sign in' secondAction={{ text: 'Sign up', href: '/auth/signup' }} inputs={[
                { name: 'email', type: 'email', label: 'Email', placeholder: 'Your email adress' },
                { name: 'password', type: 'password', label: 'Password', placeholder: 'Your password' }
            ]} />

        </Flex>
    );
};



export default SignIn;
