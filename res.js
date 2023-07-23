
const c = {
    parallelism: undefined,
    externals: [ 'next' ],
    optimization: {
        emitOnErrors: false,
        checkWasmTypes: false,
        nodeEnv: false,
        splitChunks: false,
        runtimeChunk: { name: 'webpack' },
        minimize: false,
        minimizer: [ [ Function(anonymous) ], [ Function(anonymous) ] ],
        usedExports: false
    },
    context: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
    entry: [ AsyncFunction: entry ],
    watchOptions: {
        aggregateTimeout: 5,
        ignored: /^((?:[^/]*(?:\/|$))*)(\.(git|next)|node_modules)(\/((?:[^/]*(?:\/|$))*)(?:$|\/))?/
    },
    output: {
        publicPath: '/_next/',
        path: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next',
        filename: 'static/chunks/[name].js',
        library: '_N_E',
        libraryTarget: 'assign',
        hotUpdateChunkFilename: 'static/webpack/[id].[fullhash].hot-update.js',
        hotUpdateMainFilename: 'static/webpack/[fullhash].[runtime].hot-update.json',
        chunkFilename: 'static/chunks/[name].js',
        strictModuleExceptionHandling: true,
        crossOriginLoading: undefined,
        webassemblyModuleFilename: 'static/wasm/[modulehash].wasm',
        hashFunction: 'xxhash64',
        hashDigestLength: 16,
        trustedTypes: 'nextjs#bundler',
        enabledLibraryTypes: [ 'assign' ]
    },
    performance: false,
    resolve: {
        extensions: [
            '.mjs', '.js',
            '.tsx', '.ts',
            '.jsx', '.json',
            '.wasm'
        ],
        extensionAlias: undefined,
        modules: [
            'node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/bin/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/bin/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic'
        ],
        alias: {
            '@vercel/og': 'next/dist/server/web/spec-extension/image-response',
            '@opentelemetry/api': 'next/dist/compiled/@opentelemetry/api',
            next: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next',
            'styled-jsx/style$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js',
            'styled-jsx$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js',
            'private-next-pages/_app': [ Array ],
            'private-next-pages/_error': [ Array ],
            'private-next-pages/_document': [ Array ],
            'private-next-app-dir': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
            'private-next-root-dir': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
            'private-dot-next': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next',
            'unfetch$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/fetch/index.js',
            'isomorphic-unfetch$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/fetch/index.js',
            'whatwg-fetch$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js',
            'object-assign$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object-assign.js',
            'object.assign/auto': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/auto.js',
            'object.assign/implementation': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/implementation.js',
            'object.assign$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/index.js',
            'object.assign/polyfill': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/polyfill.js',
            'object.assign/shim': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/shim.js',
            url: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/native-url/index.js',
            'private-next-rsc-action-validate': 'next/dist/build/webpack/loaders/next-flight-loader/action-validate',
            'private-next-rsc-action-client-wrapper': 'next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper',
            'private-next-rsc-action-proxy': 'next/dist/build/webpack/loaders/next-flight-loader/action-proxy',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js': false,
            '@swc/helpers/_': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/_',
            setimmediate: 'next/dist/compiled/setimmediate'
        },
        fallback: {
            process: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js'
        },
        mainFields: [ 'browser', 'module', 'main' ],
        plugins: [ [ JsConfigPathsPlugin ] ]
    },
    resolveLoader: {
        alias: {
            'error-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/error-loader',
            'next-swc-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-swc-loader',
            'next-client-pages-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader',
            'next-image-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-image-loader',
            'next-metadata-image-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader',
            'next-style-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-style-loader',
            'next-flight-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader',
            'next-flight-client-entry-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader',
            'next-flight-action-entry-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader',
            'next-flight-client-module-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-module-loader',
            'noop-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/noop-loader',
            'next-middleware-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-loader',
            'next-edge-function-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-function-loader',
            'next-edge-app-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-app-route-loader',
            'next-edge-ssr-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-ssr-loader',
            'next-middleware-asset-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-asset-loader',
            'next-middleware-wasm-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-wasm-loader',
            'next-app-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader',
            'next-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader',
            'next-font-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-font-loader',
            'next-invalid-import-error-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-invalid-import-error-loader',
            'next-metadata-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader'
        },
        modules: [
            'node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/bin/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/bin/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/node_modules'
        ],
        plugins: []
    },
    module: {
        rules: [
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ]
        ],
        parser: { javascript: [ Object ] },
        generator: { asset: [ Object ] }
    },
    plugins: [
        ReactFreshWebpackPlugin {
            webpackMajorVersion: 5,
            RuntimeGlobals: [ Object ],
            RuntimeModule: [ Function ],
            Template: [ Function ]
        },
        ProvidePlugin { definitions: [ Object ] },
        DefinePlugin { definitions: [ Object ] },
        ReactLoadablePlugin {
            filename: 'react-loadable-manifest.json',
            pagesDir: undefined,
            runtimeAsset: 'server/middleware-react-loadable-manifest.js',
            dev: true
        },
        DropClientPage { ampPages: Set(0) {} },
    IgnorePlugin {
        options: [ Object ],
        checkIgnore: [ Function: bound checkIgnore ]
    },
    NextJsRequireCacheHotReloader {
        prevAssets: null,
        hasServerComponents: true
    },
    HotModuleReplacementPlugin { options: {} },
    BuildManifestPlugin {
        buildId: 'development',
        isDevFallback: false,
        rewrites: [ Object ],
        appDirEnabled: true,
        exportRuntime: true
    },
    ProfilingPlugin { runWebpackSpan: [ Span ] },
    WellKnownErrorsPlugin {},
    CopyFilePlugin {
        filePath: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/polyfill-nomodule.js',
        cacheKey: '13.4.10',
        name: 'static/chunks/polyfills.js',
        info: [ Object ]
    },
    AppBuildManifestPlugin { dev: true },
    ClientReferenceManifestPlugin {
        dev: true,
        appDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
        appDirBase: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/',
        ASYNC_CLIENT_MODULES: Set(0) {}
    },
    NextFontManifestPlugin {
    appDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app';
},
    NextMiniCssExtractPlugin {
    _sortedModulesCache: [ WeakMap ],
        options: [ Object ],
            runtimeOptions: [ Object ],
                __next_css_remove: true;
}
  ],
experiments: { layers: true, cacheUnaffected: true, buildHttp: undefined; },
snapshot: { managedPaths: [ /^(.+?[\\/]node_modules[\\/])/ ]; },
cache: {
    type: 'filesystem',
        version: '13.4.10|{"appDir":true,"pageExtensions":["tsx","ts","jsx","js"],"trailingSlash":false,"buildActivity":true,"buildActivityPosition":"bottom-right","productionBrowserSourceMaps":false,"reactStrictMode":false,"optimizeFonts":true,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"typedRoutes":false,"basePath":"","pageEnv":false,"excludeDefaultMomentLocales":true,"assetPrefix":"","disableOptimizedLoading":true,"isEdgeRuntime":false,"reactProductionProfiling":false,"webpack":true,"hasRewrites":false,"swcMinify":true,"swcLoader":true,"modularizeImports":{"@mui/icons-material":{"transform":"@mui/icons-material/{{member}}"},"date-fns":{"transform":"date-fns/{{member}}"},"lodash":{"transform":"lodash/{{member}}"},"lodash-es":{"transform":"lodash-es/{{member}}"},"ramda":{"transform":"ramda/es/{{member}}"},"react-bootstrap":{"transform":"react-bootstrap/{{member}}"},"antd":{"transform":"antd/lib/{{kebabCase member}}"},"ahooks":{"transform":"ahooks/es/{{member}}"},"@ant-design/icons":{"transform":"@ant-design/icons/lib/icons/{{member}}"}},"legacyBrowsers":false,"imageLoaderFile":""}',
            cacheDirectory: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next/cache/webpack',
                compression: 'gzip',
                    buildDependencies: { config: [ Array ]; },
    name: 'client-development';
},
mode: 'development',
    name: 'client',
        target: [ 'web', 'es5' ],
            devtool: 'eval-source-map'
}
{
    parallelism: undefined,
        externalsPresets: { node: true; },
    externals: [ [ Function(anonymous) ] ],
        optimization: {
        emitOnErrors: false,
            checkWasmTypes: false,
                nodeEnv: false,
                    splitChunks: false,
                        runtimeChunk: undefined,
                            minimize: false,
                                minimizer: [ [ Function(anonymous) ], [ Function(anonymous) ] ],
                                    usedExports: false;
    },
    context: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
        entry: [ AsyncFunction: entry ],
            watchOptions: {
        aggregateTimeout: 5,
            ignored: /^((?:[^/]*(?:\/|$))*)(\.(git|next)|node_modules)(\/((?:[^/]*(?:\/|$))*)(?:$|\/))?/;
    },
    output: {
        publicPath: '/_next/',
            path: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next/server',
                filename: '[name].js',
                    library: undefined,
                        libraryTarget: 'commonjs2',
                            hotUpdateChunkFilename: 'static/webpack/[id].[fullhash].hot-update.js',
                                hotUpdateMainFilename: 'static/webpack/[fullhash].[runtime].hot-update.json',
                                    chunkFilename: '[name].js',
                                        strictModuleExceptionHandling: true,
                                            crossOriginLoading: undefined,
                                                webassemblyModuleFilename: 'static/wasm/[modulehash].wasm',
                                                    hashFunction: 'xxhash64',
                                                        hashDigestLength: 16;
    },
    performance: false,
        resolve: {
        extensions: [
            '.js', '.mjs',
            '.tsx', '.ts',
            '.jsx', '.json',
            '.wasm'
        ],
            extensionAlias: undefined,
                modules: [
                    'node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/bin/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/bin/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic'
                ],
                    alias: {
            '@vercel/og': 'next/dist/server/web/spec-extension/image-response',
                '@opentelemetry/api': 'next/dist/compiled/@opentelemetry/api',
                    next: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next',
                        'styled-jsx/style$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js',
                            'styled-jsx$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js',
                                'private-next-pages/_app': [ Array ],
                                    'private-next-pages/_error': [ Array ],
                                        'private-next-pages/_document': [ Array ],
                                            'private-next-app-dir': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
                                                'private-next-root-dir': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
                                                    'private-dot-next': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next',
                                                        'private-next-rsc-action-validate': 'next/dist/build/webpack/loaders/next-flight-loader/action-validate',
                                                            'private-next-rsc-action-client-wrapper': 'next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper',
                                                                'private-next-rsc-action-proxy': 'next/dist/build/webpack/loaders/next-flight-loader/action-proxy',
                                                                    '@swc/helpers/_': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/_',
                                                                        setimmediate: 'next/dist/compiled/setimmediate';
        },
        mainFields: [ 'main', 'module' ],
            plugins: [ [ JsConfigPathsPlugin ] ];
    },
    resolveLoader: {
        alias: {
            'error-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/error-loader',
                'next-swc-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-swc-loader',
                    'next-client-pages-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader',
                        'next-image-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-image-loader',
                            'next-metadata-image-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader',
                                'next-style-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-style-loader',
                                    'next-flight-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader',
                                        'next-flight-client-entry-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader',
                                            'next-flight-action-entry-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader',
                                                'next-flight-client-module-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-module-loader',
                                                    'noop-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/noop-loader',
                                                        'next-middleware-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-loader',
                                                            'next-edge-function-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-function-loader',
                                                                'next-edge-app-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-app-route-loader',
                                                                    'next-edge-ssr-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-ssr-loader',
                                                                        'next-middleware-asset-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-asset-loader',
                                                                            'next-middleware-wasm-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-wasm-loader',
                                                                                'next-app-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader',
                                                                                    'next-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader',
                                                                                        'next-font-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-font-loader',
                                                                                            'next-invalid-import-error-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-invalid-import-error-loader',
                                                                                                'next-metadata-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader';
        },
        modules: [
            'node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/bin/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/bin/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/node_modules'
        ],
            plugins: [];
    },
    module: {
        rules: [
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ], [ Object ],
            [ Object ]
        ],
            parser: { javascript: [ Object ]; },
        generator: { asset: [ Object ]; }
    },
    plugins: [
        DefinePlugin { definitions: [ Object ] },
        IgnorePlugin {
            options: [ Object ],
            checkIgnore: [ Function: bound checkIgnore ]
        },
        NextJsRequireCacheHotReloader {
            prevAssets: null,
            hasServerComponents: true
        },
        PagesManifestPlugin {
            dev: true,
            isEdgeRuntime: false,
            appDirEnabled: true
        },
        ProfilingPlugin { runWebpackSpan: [ Span ] },
        WellKnownErrorsPlugin {},
        FlightClientEntryPlugin {
            dev: true,
            appDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
            isEdgeServer: false,
            useServerActions: false,
            serverActionsBodySizeLimit: undefined,
            assetPrefix: ''
        },
        NextTypesPlugin {
            dir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
            distDir: '.next',
            appDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
            dev: true,
            isEdgeServer: false,
            pageExtensions: [ Array ],
            pagesDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/pages',
            typedRoutes: false,
            distDirAbsolutePath: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next'
        }
    ],
        experiments: { layers: true, cacheUnaffected: true, buildHttp: undefined; },
    snapshot: { managedPaths: [ /^(.+?[\\/]node_modules[\\/])/ ]; },
    cache: {
        type: 'filesystem',
            version: '13.4.10|{"appDir":true,"pageExtensions":["tsx","ts","jsx","js"],"trailingSlash":false,"buildActivity":true,"buildActivityPosition":"bottom-right","productionBrowserSourceMaps":false,"reactStrictMode":false,"optimizeFonts":true,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"typedRoutes":false,"basePath":"","pageEnv":false,"excludeDefaultMomentLocales":true,"assetPrefix":"","disableOptimizedLoading":true,"isEdgeRuntime":false,"reactProductionProfiling":false,"webpack":true,"hasRewrites":false,"swcMinify":true,"swcLoader":true,"modularizeImports":{"@mui/icons-material":{"transform":"@mui/icons-material/{{member}}"},"date-fns":{"transform":"date-fns/{{member}}"},"lodash":{"transform":"lodash/{{member}}"},"lodash-es":{"transform":"lodash-es/{{member}}"},"ramda":{"transform":"ramda/es/{{member}}"},"react-bootstrap":{"transform":"react-bootstrap/{{member}}"},"antd":{"transform":"antd/lib/{{kebabCase member}}"},"ahooks":{"transform":"ahooks/es/{{member}}"},"@ant-design/icons":{"transform":"@ant-design/icons/lib/icons/{{member}}"}},"legacyBrowsers":false,"imageLoaderFile":""}',
                cacheDirectory: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next/cache/webpack',
                    compression: 'gzip',
                        buildDependencies: { config: [ Array ]; },
        name: 'server-development';
    },
    mode: 'development',
        name: 'server',
            target: 'node16.8',
                devtool: 'eval-source-map';
}
{
    parallelism: undefined,
        externals: [
            'next',
            {
                '@builder.io/partytown': '{}',
                'next/dist/compiled/etag': '{}',
                'next/dist/compiled/chalk': '{}'
            },
            {
                buffer: 'commonjs node:buffer',
                'node:buffer': 'commonjs node:buffer',
                events: 'commonjs node:events',
                'node:events': 'commonjs node:events',
                assert: 'commonjs node:assert',
                'node:assert': 'commonjs node:assert',
                util: 'commonjs node:util',
                'node:util': 'commonjs node:util',
                async_hooks: 'commonjs node:async_hooks',
                'node:async_hooks': 'commonjs node:async_hooks'
            },
            [ AsyncFunction: handleWebpackExternalForEdgeRuntime ]
        ],
            optimization: {
        emitOnErrors: false,
            checkWasmTypes: false,
                nodeEnv: false,
                    splitChunks: false,
                        runtimeChunk: undefined,
                            minimize: false,
                                minimizer: [ [ Function(anonymous) ], [ Function(anonymous) ] ],
                                    usedExports: false;
    },
    context: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
        entry: [ AsyncFunction: entry ],
            watchOptions: {
        aggregateTimeout: 5,
            ignored: /^((?:[^/]*(?:\/|$))*)(\.(git|next)|node_modules)(\/((?:[^/]*(?:\/|$))*)(?:$|\/))?/;
    },
    output: {
        publicPath: '/_next/',
            path: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next/server',
                filename: '[name].js',
                    library: '_N_E',
                        libraryTarget: 'assign',
                            hotUpdateChunkFilename: 'static/webpack/[id].[fullhash].hot-update.js',
                                hotUpdateMainFilename: 'static/webpack/[fullhash].[runtime].hot-update.json',
                                    chunkFilename: '[name].js',
                                        strictModuleExceptionHandling: true,
                                            crossOriginLoading: undefined,
                                                webassemblyModuleFilename: 'static/wasm/[modulehash].wasm',
                                                    hashFunction: 'xxhash64',
                                                        hashDigestLength: 16,
                                                            enabledLibraryTypes: [ 'assign' ];
    },
    performance: false,
        resolve: {
        extensions: [
            '.mjs', '.js',
            '.tsx', '.ts',
            '.jsx', '.json',
            '.wasm'
        ],
            extensionAlias: undefined,
                modules: [
                    'node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/bin/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/bin/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules',
                    '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/node_modules',
                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic'
                ],
                    alias: {
            '@vercel/og': 'next/dist/server/web/spec-extension/image-response',
                'next/dist/client': 'next/dist/esm/client',
                    'next/dist/shared': 'next/dist/esm/shared',
                        'next/dist/pages': 'next/dist/esm/pages',
                            'next/dist/lib': 'next/dist/esm/lib',
                                'next/dist/server': 'next/dist/esm/server',
                                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/server': 'next/dist/esm/server/web/exports/index',
                                        '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/link': 'next/dist/esm/client/link',
                                            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/image-external': 'next/dist/esm/shared/lib/image-external',
                                                '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/script': 'next/dist/esm/client/script',
                                                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/router': 'next/dist/esm/client/router',
                                                        '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/head': 'next/dist/esm/shared/lib/head',
                                                            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/dynamic': 'next/dist/esm/shared/lib/dynamic',
                                                                '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_document': 'next/dist/esm/pages/_document',
                                                                    '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/pages/_app': 'next/dist/esm/pages/_app',
                                                                        '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/navigation': 'next/dist/esm/client/components/navigation',
                                                                            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/components/headers': 'next/dist/esm/client/components/headers',
                                                                                '@opentelemetry/api': 'next/dist/compiled/@opentelemetry/api',
                                                                                    next: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next',
                                                                                        'styled-jsx/style$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/style.js',
                                                                                            'styled-jsx$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/styled-jsx@5.1.1_react@18.2.0/node_modules/styled-jsx/index.js',
                                                                                                'private-next-pages/_app': [ Array ],
                                                                                                    'private-next-pages/_error': [ Array ],
                                                                                                        'private-next-pages/_document': [ Array ],
                                                                                                            'private-next-app-dir': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
                                                                                                                'private-next-root-dir': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
                                                                                                                    'private-dot-next': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next',
                                                                                                                        'unfetch$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/fetch/index.js',
                                                                                                                            'isomorphic-unfetch$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/fetch/index.js',
                                                                                                                                'whatwg-fetch$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js',
                                                                                                                                    'object-assign$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object-assign.js',
                                                                                                                                        'object.assign/auto': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/auto.js',
                                                                                                                                            'object.assign/implementation': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/implementation.js',
                                                                                                                                                'object.assign$': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/index.js',
                                                                                                                                                    'object.assign/polyfill': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/polyfill.js',
                                                                                                                                                        'object.assign/shim': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/object.assign/shim.js',
                                                                                                                                                            url: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/native-url/index.js',
                                                                                                                                                                'private-next-rsc-action-validate': 'next/dist/build/webpack/loaders/next-flight-loader/action-validate',
                                                                                                                                                                    'private-next-rsc-action-client-wrapper': 'next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper',
                                                                                                                                                                        'private-next-rsc-action-proxy': 'next/dist/build/webpack/loaders/next-flight-loader/action-proxy',
                                                                                                                                                                            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js': false,
                                                                                                                                                                                '@swc/helpers/_': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/@swc+helpers@0.5.1/node_modules/@swc/helpers/_',
                                                                                                                                                                                    setimmediate: 'next/dist/compiled/setimmediate';
        },
        fallback: {
            process: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/polyfills/process.js';
        },
        mainFields: [ 'edge-light', 'worker', '...' ],
            conditionNames: [ 'edge-light', 'worker', '...' ],
                plugins: [ [ JsConfigPathsPlugin ] ];
    },
    resolveLoader: {
        alias: {
            'error-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/error-loader',
                'next-swc-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-swc-loader',
                    'next-client-pages-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader',
                        'next-image-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-image-loader',
                            'next-metadata-image-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-metadata-image-loader',
                                'next-style-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-style-loader',
                                    'next-flight-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader',
                                        'next-flight-client-entry-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader',
                                            'next-flight-action-entry-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader',
                                                'next-flight-client-module-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-module-loader',
                                                    'noop-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/noop-loader',
                                                        'next-middleware-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-loader',
                                                            'next-edge-function-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-function-loader',
                                                                'next-edge-app-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-app-route-loader',
                                                                    'next-edge-ssr-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-edge-ssr-loader',
                                                                        'next-middleware-asset-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-asset-loader',
                                                                            'next-middleware-wasm-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-middleware-wasm-loader',
                                                                                'next-app-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader',
                                                                                    'next-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader',
                                                                                        'next-font-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-font-loader',
                                                                                            'next-invalid-import-error-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-invalid-import-error-loader',
                                                                                                'next-metadata-route-loader': '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader';
        },
        modules: [
            'node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/bin/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules',
            '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/node_modules/.pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/bin/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules/pnpm/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/pnpm@8.6.9/node_modules',
            '/home/milottit/.config/nvm/versions/node/v19.4.0/pnpm-global/5/.pnpm/node_modules'
        ],
            plugins: [];
    },
    module: {
        rules: [
            [ Object ], [ Object ], [ Object ],
            [ Object ], [ Object ], [ Object ],
            [ Object ], [ Object ], [ Object ],
            [ Object ], [ Object ], [ Object ],
            [ Object ], [ Object ], [ Object ],
            [ Object ], [ Object ], [ Object ]
        ],
            parser: { javascript: [ Object ]; },
        generator: { asset: [ Object ]; }
    },
    plugins: [
        ProvidePlugin { definitions: [ Object ] },
        DefinePlugin { definitions: [ Object ] },
        DropClientPage { ampPages: Set(0) {} },
    IgnorePlugin {
    options: [ Object ],
        checkIgnore: [ Function: bound checkIgnore ];
},
    NextJsRequireCacheHotReloader {
    prevAssets: null,
        hasServerComponents: true;
},
    HotModuleReplacementPlugin { options: {} },
    PagesManifestPlugin {
    dev: true,
        isEdgeRuntime: true,
            appDirEnabled: true;
},
    MiddlewarePlugin { dev: true, sriEnabled: false; },
    ProfilingPlugin { runWebpackSpan: [ Span ]; },
    WellKnownErrorsPlugin {},
    FlightClientEntryPlugin {
    dev: true,
        appDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
            isEdgeServer: true,
                useServerActions: false,
                    serverActionsBodySizeLimit: undefined,
                        assetPrefix: '';
},
    NextTypesPlugin {
    dir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic',
        distDir: '.next',
            appDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/app',
                dev: true,
                    isEdgeServer: true,
                        pageExtensions: [ Array ],
                            pagesDir: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/src/pages',
                                typedRoutes: false,
                                    distDirAbsolutePath: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next';
}
  ],
experiments: { layers: true, cacheUnaffected: true, buildHttp: undefined; },
snapshot: { managedPaths: [ /^(.+?[\\/]node_modules[\\/])/ ]; },
cache: {
    type: 'filesystem',
        version: '13.4.10|{"appDir":true,"pageExtensions":["tsx","ts","jsx","js"],"trailingSlash":false,"buildActivity":true,"buildActivityPosition":"bottom-right","productionBrowserSourceMaps":false,"reactStrictMode":false,"optimizeFonts":true,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"typedRoutes":false,"basePath":"","pageEnv":false,"excludeDefaultMomentLocales":true,"assetPrefix":"","disableOptimizedLoading":true,"isEdgeRuntime":true,"reactProductionProfiling":false,"webpack":true,"hasRewrites":false,"swcMinify":true,"swcLoader":true,"modularizeImports":{"@mui/icons-material":{"transform":"@mui/icons-material/{{member}}"},"date-fns":{"transform":"date-fns/{{member}}"},"lodash":{"transform":"lodash/{{member}}"},"lodash-es":{"transform":"lodash-es/{{member}}"},"ramda":{"transform":"ramda/es/{{member}}"},"react-bootstrap":{"transform":"react-bootstrap/{{member}}"},"antd":{"transform":"antd/lib/{{kebabCase member}}"},"ahooks":{"transform":"ahooks/es/{{member}}"},"@ant-design/icons":{"transform":"@ant-design/icons/lib/icons/{{member}}"}},"legacyBrowsers":false,"imageLoaderFile":""}',
            cacheDirectory: '/home/milottit/Projects/UpraData/Clients/Victory/victory-app-plasmic/.next/cache/webpack',
                compression: 'gzip',
                    buildDependencies: { config: [ Array ]; },
    name: 'edge-server-development';
},
mode: 'development',
    name: 'edge-server',
        target: [ 'web', 'es6' ],
            devtool: 'eval-source-map'
}