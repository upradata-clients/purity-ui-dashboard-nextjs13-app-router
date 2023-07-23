import { pascalCase } from '@/util';
import fs from 'node:fs/promises';
import path from 'node:path';
// import { lazy } from 'react';


const dirname = /* __dirname;  */  path.dirname(new URL(import.meta.url).pathname);
const root = path.resolve(dirname, '..');

const fromRoot = (...parts: string[]) => path.relative(root, path.join(dirname, ...parts));

const getDirectories = async (source: string) => {
    const files = await fs.readdir(source, { withFileTypes: true });
    return files.filter(file => file.isDirectory());
};

export const getPages = async () => {

    const getPagesFiles = async (source: string, href: string = ''): Promise<{ name: string; href: string; icon: string; }[]> => {

        const directories = await getDirectories(source);

        if (directories.length === 0) {
            // const Component: React.FunctionComponent = lazy(() => import(path.join(source, 'icon')));
            const pageName = path.basename(source);

            return [ {
                name: pascalCase(pageName),
                href,
                icon: pageName // <Component /> 
            } ];
        };

        const paths = (await Promise.all(
            directories.map(d => getPagesFiles(
                path.join(source, d.name),
                path.join(href, d.name.startsWith('(') ? '' : d.name)
            )))
        ).flat();

        return paths;
    };

    /*  const files = await fs.readdir(dirname, { withFileTypes: true });
     
     const res = files.filter(file => file.isDirectory()).map(file => ({
         name: file.name,
         href: fromRoot(file.name).replaceAll(/\(.*\)\//g, '')
     }));
     
     return res; */

    return getPagesFiles(dirname);
};

// getPages().then(console.log);
