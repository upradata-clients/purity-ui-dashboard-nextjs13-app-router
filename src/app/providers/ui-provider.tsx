'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/provider';
// import { /* GlobalStyle , */ useColorMode} from '@chakra-ui/system';
import { theme } from '@/theme';
/* import {
  Global,
} from "@emotion/react";
import { memoizedGet as get, runIfFn } from "@chakra-ui/utils";
import { css, toCSSVar } from "@chakra-ui/styled-system";
 */

export const UiProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <CacheProvider>
        <ChakraProvider theme={theme} resetCSS /* disableGlobalStyle */>
            {children}
        </ChakraProvider>

        {/* <ChakraProvider theme={theme}>
            <GlobalStyle />
        </ChakraProvider> */}
        {/* disableGlobalStyle to add it manually because of a bug. A lot of Global are added and it is not working properly  */}
    </CacheProvider>
);


export default UiProvider;

/* 

function GlobalStyle() {
  const { colorMode } = useColorMode();
  return (
  <Global  styles={(theme) => {
        const styleObjectOrFn = get(theme, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode });
        if (!globalStyles)
          return void 0;
        const styles = css(globalStyles)(theme);
        return styles;
      }}/>
  );
} */
