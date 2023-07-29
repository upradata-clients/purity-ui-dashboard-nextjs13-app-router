import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavLink } from '@/components';
import { chakra } from '@chakra-ui/system';


const _Breadcrumb: ReactFC<{ paths?: string[]; }> = ({ children, ...props }) => {
    const paths = props.paths || children as string[];

    return (
        <ChakraBreadcrumb separator={<ChevronRightIcon color='gray.500' />}>
            {/* <BreadcrumbItem color={mainText}>
                <BreadcrumbLink href='#' color={secondaryText}> ---> secondaryText = secondary ? 'white': useColorModeValue('gray.400', 'gray.200');
                    Pages
                </BreadcrumbLink>
            </BreadcrumbItem> */}

            {paths.map((p, i) => {
                const href = paths.slice(0, i).join('/');

                return (<BreadcrumbItem color='chakra-subtle-text' key={href}>
                    <BreadcrumbLink as={NavLink} href={href} color='chakra-subtle-text' isCurrentPage={i === paths.length - 1}>
                        {p}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                );
            })}
        </ChakraBreadcrumb>
    );
};


export const Breadcrumb = chakra(_Breadcrumb);
export default Breadcrumb;