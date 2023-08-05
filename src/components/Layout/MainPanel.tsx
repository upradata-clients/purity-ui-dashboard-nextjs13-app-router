import { ThemingProps, useStyleConfig } from '@chakra-ui/system';
import { Box, BoxProps } from '@chakra-ui/layout';

export const MainPanel: ReactFC<ThemingProps<'ContentPanel'> & BoxProps> = ({ variant, children, ...rest }) => {

    const styles = useStyleConfig('MainPanel', { variant });

    return (
        <Box __css={styles} {...rest}>
            {children}
        </Box>
    );
}

// export default MainPanel;
