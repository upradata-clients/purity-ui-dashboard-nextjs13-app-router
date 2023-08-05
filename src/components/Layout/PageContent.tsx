import { RoutesContext } from '@/contexts';
import { Card, CardBody, CardHeader, CardProps } from '@chakra-ui/card';
import { Heading } from '@chakra-ui/layout';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';


export const PageContent: ReactFC<{ title?: string; } & CardProps> = ({ title, children, ...rest }) => {
    const pathname = usePathname();
    const routes = useContext(RoutesContext);

    const currentRoute = routes?.find(route => pathname.includes(route.href));

    return (
        <Card variant='filled' size='lg' w='100%' {...rest}>
            <CardHeader >
                <Heading size='md'>{title || currentRoute?.name}</Heading>
            </CardHeader>

            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
};

export default PageContent;
