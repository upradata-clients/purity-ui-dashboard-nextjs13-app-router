import { useContext, useMemo } from 'react';
import { Flex, HStack, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icon';
import { IconBox } from '@/components';
import { Link } from '@chakra-ui/next-js';
import { Route, RoutesContext } from '@/contexts';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useStyles } from './Sidebar-provider';

// type AU<T, Rest = {}> = T extends any[] ? T[ number ] extends infer U ? U extends U ? 1 : never : never : never;

/* function mergeShallow<T extends {}, O extends (T | boolean | undefined | null)[]>(...o: O): Exclude<O[ number ], boolean | undefined | null> {
    return o.reduce((merged, v) => ({ ...merged, ...(v as object || {}) }), {}) as any;
} */

function mergeShallow<
    T extends {}, T2 extends {}, O1 extends T, O2 extends T2
>(o1: O1 | boolean | undefined | null, o2: O2 | boolean | undefined | null): O1 & O2 {
    return [ o1, o2 ].reduce((merged, v) => ({ ...merged, ...(v as object || {}) }), {}) as any;
}


const SidebarLink: ReactFC<Route> = props => {
    const styles = useStyles();

    const pathname = usePathname();

    // verifies if routeName is the one active (in browser input)
    const isActiveRoute = (routeName: string) => pathname.includes(routeName);

    // Chakra Color Mode
    const { activeColor, inactiveColor, button } = styles.link;

    const isActive = isActiveRoute(props.href);

    const buttonsStyle = mergeShallow(button.base, !isActive && button.inactive);
    const { spacing, ...iconStyle } = mergeShallow(button.icon.base, !isActive && button.icon.inactive);
    const color = isActive ? activeColor : inactiveColor;

    const isIcon = typeof props.icon !== 'string';

    return (
        <Link w='100%' as={NextLink} href={props.href} key={props.href}>
            <Button {...buttonsStyle} justifyContent='start'>
                <HStack justify='start' align='stretch' spacing={spacing}>
                    {!isIcon ? <Icon>{props.icon}</Icon> : <IconBox {...iconStyle} >{props.icon}</IconBox>}

                    <Text color={color} my='auto' fontSize='sm'>
                        {props.name}
                    </Text>
                </HStack>
            </Button>
        </Link>
    );
};

export const SidebarLinks: ReactFC = () => {

    const routes = useContext(RoutesContext);

    const styles = useStyles();
    const { spacing } = styles.link;

    return (
        <Stack direction='column' w='100%' mb={spacing}>
            {routes?.map(SidebarLink)}
        </Stack>
    );
};

export default SidebarLinks;
