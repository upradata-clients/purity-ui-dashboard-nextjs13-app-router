'use client';

import { Routes, RoutesContext } from '@/contexts/routes.context';

export const RoutesProvider: React.FC<React.PropsWithChildren<{ routes: Routes; }>> = ({ routes, children }) => (
    <RoutesContext.Provider value={routes}>
        {children}
    </RoutesContext.Provider>
);

// export default RoutesProvider;
