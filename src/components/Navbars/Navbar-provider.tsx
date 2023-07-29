import type { NavbarStyle } from '@/theme/additions/layout/Navbar';
import { createStylesContext } from '@chakra-ui/system';

export const [ StylesProvider, _useStyles ] = createStylesContext('Navbar');


export const useStyles = (): NavbarStyle => _useStyles() as unknown as NavbarStyle;
