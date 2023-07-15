import { Button } from '@chakra-ui/button';
// Custom Icons
import { SettingsIcon } from '@/components/Icons/Icons';
import { useColorModeValue } from '@chakra-ui/system';
import PropTypes from 'prop-types';
import { useRef } from 'react';


export function FixedPlugin(props: React.PropsWithChildren<Record<string, any>>) {
    const { secondary, onChange, onSwitch, fixed, ...rest } = props;
    // Chakra Color Mode
    let navbarIcon = useColorModeValue('gray.500', 'gray.200');
    let bgButton = useColorModeValue('white', 'gray.600');
    let fixedDisplay = 'flex';
    if (props.secondary) {
        fixedDisplay = 'none';
    }

    const settingsRef = useRef(null);
    return (
        <>
            <Button
                h='52px'
                w='52px'
                onClick={props.onOpen}
                bg={bgButton}
                position='fixed'
                variant='no-hover'
                left={/* document.documentElement.dir === 'rtl' ? '35px' : */ ''}
                right={/* document.documentElement.dir === 'rtl' ? '' :  */'35px'}
                bottom='30px'
                borderRadius='50px'
                boxShadow='0 2px 12px 0 rgb(0 0 0 / 16%)'
            >
                <SettingsIcon
                    cursor='pointer'
                    ref={settingsRef}
                    color={navbarIcon}
                    w='20px'
                    h='20px'
                />
            </Button>
        </>
    );
}

FixedPlugin.propTypes = {
    fixed: PropTypes.bool,
    onChange: PropTypes.func,
    onSwitch: PropTypes.func,
};

export default FixedPlugin;
