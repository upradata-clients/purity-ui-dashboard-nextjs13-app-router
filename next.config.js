
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
    },
};

module.exports = nextConfig;
