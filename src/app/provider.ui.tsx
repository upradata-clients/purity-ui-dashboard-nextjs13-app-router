'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';

export const UiProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <CacheProvider>
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    </CacheProvider>
);
