import { RoutesContext } from '@/contexts';
import { Card, CardBody, CardHeader } from '@chakra-ui/card';
import { Heading } from '@chakra-ui/layout';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';


export const PageContent: React.FC<React.PropsWithChildren<{ title?: string; }>> = ({ title, children }) => {
    const pathname = usePathname();
    const routes = useContext(RoutesContext);

    const currentRoute = routes?.find(route => pathname.includes(route.href));

    return (
        <Card variant='filled' size='lg' w='100%'>
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
