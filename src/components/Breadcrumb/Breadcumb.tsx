import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavLink } from '@/components/NavLink';
import { chakra } from '@chakra-ui/system';
import { SegmentWithHref } from '@/util/hooks';


export const Breadcrumb = chakra<ReactFC<{ segments?: SegmentWithHref[]; }>>(({ children, ...props }) => {
    const segments = props.segments || children as SegmentWithHref[];

    return (
        <ChakraBreadcrumb separator={<ChevronRightIcon color='chakra-placeholder-color' />}>
            {/* <BreadcrumbItem color={mainText}>
                <BreadcrumbLink href='#' color={secondaryText}> ---> secondaryText = secondary ? 'white': useColorModeValue('gray.400', 'gray.200');
                    Pages
                </BreadcrumbLink>
            </BreadcrumbItem> */}

            {segments.filter(s => s.segment !== '').map(segment => (
                <BreadcrumbItem color='chakra-subtle-text' key={segment.href}>
                    <Link {...segment} />
                </BreadcrumbItem>
            ))}
        </ChakraBreadcrumb>
    );
});

const Link: ReactFC<SegmentWithHref> = ({ type, segment, href, isLeaf }) => {
    if (type === 'page' && !isLeaf)
        return (
            <BreadcrumbLink as={NavLink} href={href} color='chakra-subtle-text' isCurrentPage={isLeaf}>
                {segment}
            </BreadcrumbLink>
        );


    return <span>{segment}</span>;
}



// export default Breadcrumb;
