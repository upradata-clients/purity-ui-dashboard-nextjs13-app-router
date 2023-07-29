'use client';

import { createContext } from 'react';

export type Route = { href: string; name: string; icon?: React.ReactNode; };
export type Routes = Route[];

export const RoutesContext = createContext<Routes | null>(null);
