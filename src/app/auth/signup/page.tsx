'use client';

import BgSignUp from '@/assets/img/BgSignUp.png';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { Card, CardBody } from '@chakra-ui/card';
import { NavLink } from '@/components/NavLink';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthForm } from '../AuthForm';
import { useColorModeValue } from '@chakra-ui/system';


const SignUp: ReactFC = () => {
    const shadow = useColorModeValue('xl-around-light', 'xl-around-dark');

    return (
        <VStack justify='center' mt={40} gap={10} mb={20}>

            <VStack /* w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }} */>
                <Heading fontWeight='bold'>Welcome!</Heading>
                <Text fontSize='md'>Use these awesome forms to login or create new account in your project for free.</Text>
            </VStack>

            <Card variant='elevated' bg='chakra-body-bg' shadow={shadow} size='lg' w='80%' maxW='500px' px={10} py={8}/* {...rest} */>
                <CardBody>
                    <VStack spacing={10}>

                        <VStack>
                            <Text fontSize='xl' /* color={textColor} */ fontWeight='bold' textAlign='center' mb='22px'>
                                Register With
                            </Text>

                            <HStack spacing={6} justify='center'>
                                {
                                    [
                                        { icon: <FaFacebook />, name: 'facebook' },
                                        { icon: <FaGoogle />, name: 'google' },
                                        { icon: <FaApple />, name: 'apple' }
                                    ].map(({ icon, name }) => (
                                        <IconButton key={name} as={NavLink} href='#' icon={icon} aria-label={`register with ${name}`} size='xl' variant='secondary' />
                                    ))
                                }
                            </HStack>
                        </VStack>

                        <Text fontSize='lg' fontWeight='bold'>or</Text>

                        <AuthForm submitButtonText='Sign up' secondAction={{ text: 'Sign in', href: '/auth/signin' }} inputs={[
                            { name: 'full name', type: 'text', label: 'Name', placeholder: 'Your full name' },
                            { name: 'email', type: 'email', label: 'Email', placeholder: 'Your email adress' },
                            { name: 'password', type: 'password', label: 'Password', placeholder: 'Your password' }
                        ]} />

                    </VStack>
                </CardBody>
            </Card>

            <Box position='absolute'
                minH={{ base: '70vh', md: '50vh' }}
                w={{ md: 'calc(100vw - 50px)' }}
                borderRadius={{ md: '15px' }}
                left='0'
                right='0'
                bgRepeat='no-repeat'
                overflow='hidden'
                zIndex='-1'
                top='0'
                bgImage={BgSignUp.src}
                bgSize='cover'
                mx={{ md: 'auto' }}
                mt={{ md: '14px' }} />

        </VStack>

    );
};

export default SignUp;
