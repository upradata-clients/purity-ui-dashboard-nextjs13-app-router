import { Link as NextLink, LinkProps as NextLinkProps } from '@chakra-ui/next-js';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/layout';


export type NavLinkProps = NextLinkProps & ChakraLinkProps & { isExternal?: boolean; }

export const NavLink: ReactFC<NavLinkProps> = ({ children, isExternal, href = '', ...props }) => {
    if (isExternal)
        return <ChakraLink href={href} {...props}>{children}</ChakraLink>;

    return <NextLink href={href}  {...props}>{children}</NextLink>;
};

// export default NavLink;
