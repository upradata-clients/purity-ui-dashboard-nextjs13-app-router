import { SvgToChakraUiOptions, svgToChakraUi } from './svg';
import packageJson from '../../package.json';


export type ProjectConfig = {
    svgToChakraUi?: boolean | SvgToChakraUiOptions;
};


const compile = async (config: ProjectConfig) => {
    await svgToChakraUi(typeof config.svgToChakraUi === 'boolean' ? {} : config.svgToChakraUi);
};



compile((packageJson as { projectConfig: ProjectConfig; }).projectConfig);
