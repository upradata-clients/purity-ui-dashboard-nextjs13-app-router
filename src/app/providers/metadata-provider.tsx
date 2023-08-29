'use client';

import { LogoIcon, Logo2Icon } from '@/components/Icons';
import { Metadata, MetadataContext } from '@/contexts';

export const metadata: Metadata = {
    logo: {
        text: 'Victory Fitness',
        Icon: LogoIcon
    },
    logoSecondary: {
        text: 'Victory Fitness',
        Icon: Logo2Icon
    },
    layout: {
        mobile: 'md',
        tablet: 'lg',
        desktop: 'xl'
    }
};


export const MetadataProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <MetadataContext.Provider value={metadata}>
        {children}
    </MetadataContext.Provider>
);


// export default MetadataProvider;
