import { Button } from '@chakra-ui/button';
// Custom Icons
import { SettingsIcon } from '@/components/Icons';
import { useColorModeValue } from '@chakra-ui/system';
import PropTypes from 'prop-types';


export function FixedSettingsButton(props: React.PropsWithChildren<Record<string, any>>) {
    // Chakra Color Mode
    const navbarIcon = useColorModeValue('gray.500', 'gray.200');
    const bgButton = useColorModeValue('white', 'gray.600');


    return (
        <>
            <Button h='52px' w='52px' onClick={props.onOpen} bg={bgButton} position='fixed' variant='no-hover' right='35px' bottom='30px'
                borderRadius='50px'
                boxShadow='0 2px 12px 0 rgb(0 0 0 / 16%)'
            >

                <SettingsIcon cursor='pointer' color={navbarIcon} w='20px' h='20px' />
            </Button>
        </>
    );
}

FixedSettingsButton.propTypes = {
    onChange: PropTypes.func,
};

export default FixedSettingsButton;
