
'use client';

import LogoSvg from '@/assets/svg/logo.svg';
import { LogoIcon } from '@/components';
import { Metadata, MetadataContext } from '@/contexts';

export const metadata: Metadata = {
    logo: {
        text: 'Victory Fitness',
        svgPath: LogoSvg as string,
        Icon: LogoIcon
    }
};


export const MetadataProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <MetadataContext.Provider value={metadata}>
        {children}
    </MetadataContext.Provider>
);


export default MetadataProvider;
