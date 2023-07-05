import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import '@/plasmic-init-client';
import { ChackraProvider } from './provider.chakra';

export default function PlasmicHost() {
    return (
        <ChackraProvider>
            <PlasmicCanvasHost />
        </ChackraProvider>
    );
}
