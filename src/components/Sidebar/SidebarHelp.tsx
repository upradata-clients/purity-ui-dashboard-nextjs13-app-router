import { QuestionIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import SidebarHelpImage from '@/assets/img/SidebarHelpImage.png';
import IconBox from '@/components/Icons/IconBox';
import { Button } from '@chakra-ui/button';
import { Flex, Text } from '@chakra-ui/layout';


export function SidebarHelp(props: React.PropsWithChildren<Record<string, any>>) {
    // Pass the computed styles into the `__css` prop
    const { children, ...rest } = props;
    return (
        <Flex
            borderRadius='15px'
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='start'
            boxSize='border-box'
            bgImage={SidebarHelpImage.src}
            p='16px'
            h='170px'
            w='100%'
        >
            <IconBox width='35px' h='35px' bg='white' mb='auto'>
                <QuestionIcon color='teal.300' h='18px' w='18px' />
            </IconBox>
            <Text fontSize='sm' color='white' fontWeight='bold'>
                Need help?
            </Text>
            <Text fontSize='xs' color='white' mb='10px'>
                Please check our docs
            </Text>
            <Link
                w='100%'
                href='https://demos.creative-tim.com/docs-purity-ui-dashboard/'
            >
                <Button
                    fontSize='10px'
                    fontWeight='bold'
                    w='100%'
                    bg='white'
                    /*  _hover='none' */
                    _active={{
                        bg: 'white',
                        transform: 'none',
                        borderColor: 'transparent',
                    }}
                    _focus={{
                        boxShadow: 'none',
                    }}
                    color='black'
                >
                    DOCUMENTATION
                </Button>
            </Link>
        </Flex>
    );
}


export default SidebarHelp;
