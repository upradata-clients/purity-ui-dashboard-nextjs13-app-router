'use client';

import type { IconProps } from '@chakra-ui/icon';
import type { ComponentWithAs } from '@chakra-ui/system';
import { createContext } from 'react';

export type Metadata = {
    readonly logo: {
        readonly text?: string;
        readonly svgPath?: string;
        readonly Icon?: ComponentWithAs<'svg', IconProps>;
    };
};

export const MetadataContext = createContext<Metadata | null>(null);
