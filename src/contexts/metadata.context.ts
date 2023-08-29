'use client';

import type { BreakpointNames } from '@/theme';
import type { IconProps } from '@chakra-ui/icon';
import type { ComponentWithAs } from '@chakra-ui/system';
import { createContext } from 'react';

export type MeatadataLogo=Readonly<{
        text?: string;
        Icon?: ComponentWithAs<'svg', IconProps>;
    }>;
    
export type Metadata = Readonly<{
    logo: MeatadataLogo;
    logoSecondary?:MeatadataLogo;
    layout: Readonly<Record<'mobile' | 'tablet' | 'desktop', BreakpointNames>>;
}>;

export const MetadataContext = createContext<Metadata | null>(null);
