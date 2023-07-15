import { useStyleConfig } from '@chakra-ui/system';
import { Box } from '@chakra-ui/layout';

export function PanelContent(props: React.PropsWithChildren<Record<string, any>>) {
    const { variant, children, ...rest } = props;
    const styles = useStyleConfig('PanelContent', { variant });
    // Pass the computed styles into the `__css` prop
    return (
        <Box __css={styles} {...rest}>
            {children}
        </Box>
    );
}

export default PanelContent;
