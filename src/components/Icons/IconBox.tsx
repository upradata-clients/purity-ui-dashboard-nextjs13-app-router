import { Flex } from '@chakra-ui/layout';

export function IconBox(props: React.PropsWithChildren<Record<string, any>>) {
    const { children, ...rest } = props;

    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
            {...rest}
        >
            {children}
        </Flex>
    );
}
