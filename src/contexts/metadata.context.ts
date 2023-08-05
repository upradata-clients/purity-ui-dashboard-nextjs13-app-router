'use client';

import type { BreakpointNames } from '@/theme';
import type { IconProps } from '@chakra-ui/icon';
import type { ComponentWithAs } from '@chakra-ui/system';
import { createContext } from 'react';

export type Metadata = Readonly<{
    logo: Readonly<{
        text?: string;
        svgPath?: string;
        Icon?: ComponentWithAs<'svg', IconProps>;
    }>;
    layout: Readonly<Record<'mobile' | 'tablet' | 'desktop', BreakpointNames>>;
}>;

export const MetadataContext = createContext<Metadata | null>(null);
