import type { SystemStyleInterpolation } from '@chakra-ui/styled-system';
import type { BreakpointNames } from './foundations';

export const defineSize = <T extends Partial<Record<BreakpointNames, SystemStyleInterpolation>>>(configSize: T): T => configSize;