import { pascalCase } from '../../util';// '@/util';
import fs from 'fs-extra';
import { /* INode, */ parse } from 'svgson';
import path from 'node:path';
import { optimize } from './svgo';
import { createIconComponentsCode } from './create-chakra-icon';
import type { SvgNode } from './svg.type';
import { glob } from 'glob';


type ParsedSvg = { name: string; svg: string; optimized: string; json: SvgNode; };

const parseSvg = async (file: string): Promise<ParsedSvg | undefined> => {
    try {
        const name = pascalCase(path.basename(file, '.svg'));

        const svg = await fs.readFile(file, { encoding: 'utf8' });
        const svgOptimized = await optimize(svg);

        const json = await parse(svgOptimized);

        return {
            name,
            svg,
            optimized: svgOptimized,
            json: json as SvgNode
        };
    } catch (e) {
        console.error(`Error in "${file}"`, e);
        return undefined;
    }
};


const dirname = __dirname;   /* path.dirname(new URL(import.meta.url).pathname); */
const root = path.resolve(dirname, '../../..');


export type SvgToChakraUiOptions = {
    files?: string[];
    glob?: string;
    outputFile?: string;
};

export const svgToChakraUi = async (options: SvgToChakraUiOptions = {}) => {
    try {
        const {
            files,
            glob: globPattern = path.join(root, 'src/assets/**/*.svg'),
            outputFile = path.join(root, 'src/components/Icons/Icons.tsx')
        } = options;

        const svgFiles = files || await glob(globPattern, { ignore: 'node_modules/**' });

        const datas = (await Promise.all(svgFiles.map(parseSvg))).filter(Boolean) as ParsedSvg[];

        const iconsCode = await createIconComponentsCode(datas, { hasImport: true, hasExport: true, withTyping: true, format: 'createIcon' });

        await fs.outputFile(outputFile, iconsCode);
        console.log(`Icons file created at "${outputFile}"`);
    } catch (e) {
        console.error(e);
    }
};

// const exec = async () => {
//     const svgFiles = await glob(path.join(__dirname, '../../**/*.svg'), { ignore: 'node_modules/**' });
//     return svgToChakraUi({ files: svgFiles, outputFile: './test.tsx' });
// };

// exec();
