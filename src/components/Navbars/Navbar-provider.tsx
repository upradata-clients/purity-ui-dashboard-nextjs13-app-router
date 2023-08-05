import type { NavbarStyle } from '@/theme/additions/layout/Navbar';
import { createStylesContext } from '@chakra-ui/system';

const [ _StylesProvider, _useStyles ] = createStylesContext('Navbar');


export const StylesProvider = _StylesProvider;
export const useStyles = (): NavbarStyle => _useStyles() as unknown as NavbarStyle;
