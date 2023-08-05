'use client';

import { useDisclosure } from '@chakra-ui/hooks';
import type { DrawerProps } from '@chakra-ui/modal';
import { createContext, useState } from 'react';


type DisclosureProps = Pick<ReturnType<typeof useDisclosure>, 'isOpen' | 'onClose'>;
export type SidebarDrawerContext = DisclosureProps & {
    finalFocusRef?: DrawerProps[ 'finalFocusRef' ];
    setFinalFocusRef: (finalFocusRef?: DrawerProps[ 'finalFocusRef' ]) => void;
};

export const DrawerContext = createContext<SidebarDrawerContext | null>(null);



export const useDrawerContext = (): SidebarDrawerContext => {
    const drawerDisclosure = useDisclosure();
    const [ finalFocusRef, setFinalFocusRef ] = useState<DrawerProps[ 'finalFocusRef' ]>(undefined);

    return { ...drawerDisclosure, finalFocusRef, setFinalFocusRef };
};