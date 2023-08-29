import { ComponentStyles } from '@/theme';
import type { StyleComponent } from '@/theme/util';
import type { ThemeTypings } from '@chakra-ui/styled-system/dist/theming.types';

declare module '@chakra-ui/styled-system' {
    export interface CustomThemeTypings extends ThemeTypings {
        styles: {
            generic: SystemStyleObject;
        } & {
            [ K in keyof ComponentStyles ]: StyleComponent<ComponentStyles[ K ]>;
        };
    }
}
