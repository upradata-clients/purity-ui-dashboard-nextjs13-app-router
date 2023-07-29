import type { SidebarStyle } from '@/theme/additions';
import { createStylesContext } from '@chakra-ui/system';

export const [ StylesProvider, _useStyles ] = createStylesContext('SideBar');


export const useStyles = (): SidebarStyle => _useStyles() as any;
