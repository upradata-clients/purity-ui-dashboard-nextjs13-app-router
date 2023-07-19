import { format as formatTS } from "prettier";
import { SvgNode } from './svg.type';

// const withIndent = (s: string, indent: number = 4) => `${' '.repeat(indent)}${s}`;

const IconComponentType = `ComponentWithAs<'svg', IconProps>`;


export type Format = 'createIcon' | 'component';
export type ImportStringOptions = { format?: Format; withTyping?: boolean; };
export type File = { name: string; json: SvgNode; };


export const importString = ({ format, withTyping }: ImportStringOptions) => {
    if (format === 'createIcon')
        return `import { createIcon } from '@chakra-ui/icon'`;

    if (format === 'component')
        return `
            import { Icon } from '@chakra-ui/icon'
            ${withTyping ? `
                import type { IconProps } from '@chakra-ui/icon'
                import type { ComponentWithAs } from '@chakra-ui/system';
            ` : ''}
            `;

    return '';
};


const createSvgPath = (pathNodes: SvgNode[] = []) => pathNodes.reduce((acc, current) => {
    return `${acc}<path fill="currentColor" d="${current.attributes.d}"/>`;
}, '');


const createIconSvgProps = (pathNodes: SvgNode[] = []) => {
    if (pathNodes.length === 0) {
        return '';
    }

    // Single path
    if (pathNodes.length === 1) {
        return `d: '${pathNodes[ 0 ].attributes.d}'`;
    }

    // Multiple paths...
    // Chakra docs say create an array of <path>'s
    // - https://chakra-ui.com/docs/components/icon#using-the-createicon-function
    // but that generates an error about each path requiring a key
    // so instead we wrap them all in a Fragment
    // - https://github.com/chakra-ui/chakra-ui/issues/2007#issuecomment-690327295

    return `path: (
        <>
            ${createSvgPath(pathNodes)}
        </>
    )`;
};

export type CreateIconOptions = { hasExport?: boolean; };


const processOptions = (json: SvgNode, { hasExport }: CreateIconOptions) => {
    const { viewBox } = json.attributes;
    const pathNodes = json.children.filter(node => node.name === 'path');
    const exportStr = hasExport ? 'export' : '';

    return { viewBox, pathNodes, exportStr };
};

const getCreateIconCode = (name: string, json: SvgNode, options: CreateIconOptions) => {

    const { viewBox, exportStr, pathNodes } = processOptions(json, options);
    const svgProps = createIconSvgProps(pathNodes);

    return (
        `${exportStr} const ${name}Icon = createIcon({
            displayName: '${name}Icon',
            ${viewBox ? `viewBox: '${viewBox}'` : undefined},
            ${svgProps}
        });`
    );
};


const getIconComponentCode = (name: string, json: SvgNode, options: ImportStringOptions & CreateIconOptions) => {
    const { viewBox, exportStr, pathNodes } = processOptions(json, options);
    const paths = createSvgPath(pathNodes);

    return (
        `${exportStr} const ${name}Icon${options.withTyping ? `: ${IconComponentType}` : ''} = props => (
            <Icon viewBox="${viewBox}" {...props}>
                ${paths}
            </Icon>
        );`
    );
};


export type CreateIconComponentsCodeOptions = { hasImport?: boolean; } & ImportStringOptions & CreateIconOptions;


export const createIconComponentsCode = (files: File[], { hasImport, ...settings }: CreateIconComponentsCodeOptions) => {
    const getCode = settings.format === 'createIcon' ? getCreateIconCode : getIconComponentCode;

    const content = `
        ${hasImport ? importString(settings) : ''}
        
        ${files.map(({ name, json }) => getCode(name, json, settings)).join('\n\n')}
    `;

    return formatTS(content, { parser: 'typescript', printWidth: 120, tabWidth: 4, semi: true, singleQuote: true });
};
