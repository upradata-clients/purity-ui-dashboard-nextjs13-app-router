import { Link as NextLink, LinkProps as NextLinkProps } from '@chakra-ui/next-js';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/layout';


export const NavLink: ReactFC<NextLinkProps & ChakraLinkProps & { isExternal?: boolean; }> = ({ children, isExternal, ...props }) => {
    if (isExternal)
        return <ChakraLink {...props}>{children}</ChakraLink>;

    return <NextLink {...props}>{children}</NextLink>;
};

export default NavLink;