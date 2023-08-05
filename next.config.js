
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
        '.*Provider.*@/app/providers': {
            preventFullImport: true,
            transform: '@/app/providers/{{ kebabCase member }}',
        },
        '(\\w*)Icon.*@/components': {
            preventFullImport: true,
            skipDefaultConversion: true,
            transform: '@/app/components/Icons/Icons',
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
    rewrites: async () => {
        return {
            beforeFiles: [
                // These rewrites are checked after headers/redirects
                // and before all files including _next/public files which
                // allows overriding page files
                /*  {
                     source: '/',
                     destination: '/pages/dashboard',
                 }, */
                /*  {
                     source: '/:path((?!auth|app-pages).*)',
                     destination: '/app-pages/:path*',
                 }, */
            ],
            // afterFiles: [
            //     // These rewrites are checked after pages/public files
            //     // are checked but before dynamic routes
            //     {
            //         source: '/non-existent',
            //         destination: '/somewhere-else',
            //     },
            // ],
            // fallback: [
            //     // These rewrites are checked after both pages/public files
            //     // and dynamic routes are checked
            //     {
            //         source: '/:path*',
            //         destination: `https://my-old-site.com/:path*`,
            //     },
            // ],
        };
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/pages/dashboard',
                permanent: true
            },
            /*  {
                 source: '/app-pages/:path*',
                 destination: '/:path*', // Matched parameters can be used in the destination
                 permanent: true,
             }, */
        ];
    }
};

module.exports = nextConfig;


/* "sideEffects": false */
