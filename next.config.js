
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Turn off React StrictMode for now, as react-aria (used by Plasmic)
    // has some troubles with it. See
    // https://github.com/adobe/react-spectrum/labels/strict%20mode
    reactStrictMode: false,
    experimental: {
        appDir: true,
        /* swcTraceProfiling: true,
        logging: true */
    },
    typescript: {
        tsconfigPath: "./tsconfig.nextjs.json",
    },
    modularizeImports: {
        /* '@chakra-ui/react': {
            preventFullImport: true
        }, */
        '(\\w*)Icon.*@chakra-ui/icons': {
            preventFullImport: true,
            skipDefaultConversion: true,
            transform: '@chakra-ui/icons/dist/{{ matches.[1] }}',

        },
        '@/app/providers': {
            preventFullImport: true,
            transform: '@/app/providers/{{ kebabCase member }}',

        },
    },
    // webpack: (
    //     config,
    //     { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    // ) => {
    //     const webpackConfig =/** @type {import('webpack').config} */(config);

    //     console.log(webpackConfig.module);

    //     // Important: return the modified config
    //     return webpackConfig;
    // },
};

module.exports = nextConfig;


/* "sideEffects": false */
