import { ContentPanelStyle } from '@/theme/additions/layout/ContentPanel';
import { Box, BoxProps } from '@chakra-ui/layout';
import type { ThemingProps } from '@chakra-ui/styled-system';
import { useMultiStyleConfig } from '@chakra-ui/system';


export const ContentPanel: ReactFC<ThemingProps<'ContentPanel'> & BoxProps> = ({ variant, children, ...rest }) => {

    const styles = useMultiStyleConfig('ContentPanel', { /* size, */ variant }) as ContentPanelStyle;

    return (
        <Box __css={styles.container} {...rest}>
            <Box __css={styles.content} {...rest}>
                {children}
            </Box>
        </Box>
    );
};

// export default PanelContainer;
