import { Box } from '@chakra-ui/layout';
import { type ThemingProps } from '@chakra-ui/styled-system';
import { useStyleConfig } from '@chakra-ui/system';


export const PanelContainer: React.FC<React.PropsWithChildren<ThemingProps<'PanelContainer'>>> = ({ variant, children, ...rest }) => {

    const styles = useStyleConfig('PanelContainer', { variant });

    // Pass the computed styles into the `__css` prop
    return (
        <Box __css={styles} {...rest}>
            {children}
        </Box>
    );
};

export default PanelContainer;
