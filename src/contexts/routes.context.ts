'use client';

import { createContext } from 'react';

export type Routes = { href: string; name: string; icon?: React.ReactNode; }[];

export const RoutesContext = createContext<Routes | null>(null);
