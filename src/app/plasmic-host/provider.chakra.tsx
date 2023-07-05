'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import { PLASMIC } from '@/plasmic-init';
import { registerAll as registerAllChakraUI } from '@plasmicpkgs/plasmic-chakra-ui';


registerAllChakraUI(PLASMIC);

export function ChackraProvider({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <CacheProvider>
            {children}
        </CacheProvider>
    );
}
