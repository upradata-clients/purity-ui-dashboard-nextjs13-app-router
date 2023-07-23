const a = {
    rules: [
        {
            layer: 'sc_shared',
            test: /next[\\/]dist[\\/](esm[\\/])?client[\\/]components[\\/](static-generation-async-storage|action-async-storage|request-async-storage)/
        },
        {
            resourceQuery: /__next_metadata_route__/,
            layer: 'app-metadata-route'
        },
        {
            layer: 'sc_client',
            test: /next[\\/]dist[\\/](esm[\\/])?server[\\/]future[\\/]route-modules[\\/]app-page[\\/]module/
        },
        { issuerLayer: [ Object ], resolve: [ Object ] },
        { test: /\.m?js/, resolve: [ Object ] },
        { oneOf: [ Array ] },
        {
            test: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
            issuerLayer: 'app-client',
            resolve: [ Object ]
        },
        { oneOf: [ Array ] },
        {
            test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i,
            loader: 'next-image-loader',
            issuer: [ Object ],
            dependency: [ Object ],
            resourceQuery: [ Object ],
            options: [ Object ]
        },
        { resolve: [ Object ] },
        {
            test: /(node_modules|next[/\\]dist[/\\]compiled)[/\\]client-only[/\\]error.js/,
            loader: 'next-invalid-import-error-loader',
            issuerLayer: [ Object ],
            options: [ Object ]
        },
        {
            test: /(node_modules|next[/\\]dist[/\\]compiled)[/\\]server-only[/\\]index.js/,
            loader: 'next-invalid-import-error-loader',
            issuerLayer: 'sc_client',
            options: [ Object ]
        },
        {
            test: /[\\/]next[\\/]dist[\\/](esm[\\/])?server[\\/]web[\\/]exports[\\/]image-response\.js/,
            sideEffects: false
        }
    ],
    parser: { javascript: { url: 'relative' } },
    generator: { asset: { filename: 'static/media/[name].[hash:8][ext]' } }
};
{
    rules: [
        {
            layer: 'sc_shared',
            test: /next[\\/]dist[\\/](esm[\\/])?client[\\/]components[\\/](static-generation-async-storage|action-async-storage|request-async-storage)/
        },
        {
            resourceQuery: /__next_metadata_route__/,
            layer: 'app-metadata-route'
        },
        {
            layer: 'sc_client',
            test: /next[\\/]dist[\\/](esm[\\/])?server[\\/]future[\\/]route-modules[\\/]app-page[\\/]module/
        },
        { issuerLayer: [ Object ], resolve: [ Object ] },
        {
            issuerLayer: [ Object ],
            test: [ Object ],
            resolve: [ Object ],
            use: [ Object ]
        },
        { test: /\.m?js/, resolve: [ Object ] },
        { oneOf: [ Array ] },
        {
            test: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
            issuerLayer: 'app-client',
            resolve: [ Object ]
        },
        { oneOf: [ Array ] },
        {
            test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i,
            loader: 'next-image-loader',
            issuer: [ Object ],
            dependency: [ Object ],
            resourceQuery: [ Object ],
            options: [ Object ]
        },
        {
            test: /(node_modules|next[/\\]dist[/\\]compiled)[/\\]client-only[/\\]error.js/,
            loader: 'next-invalid-import-error-loader',
            issuerLayer: [ Object ],
            options: [ Object ]
        },
        {
            test: /(node_modules|next[/\\]dist[/\\]compiled)[/\\]server-only[/\\]index.js/,
            loader: 'next-invalid-import-error-loader',
            issuerLayer: 'sc_client',
            options: [ Object ]
        },
        {
            test: /[\\/]next[\\/]dist[\\/](esm[\\/])?server[\\/]web[\\/]exports[\\/]image-response\.js/,
            sideEffects: false
        }
    ],
        parser: { javascript: { url: 'relative'; } },
    generator: { asset: { filename: 'static/media/[name].[hash:8][ext]'; } }
}
{
    rules: [
        { issuerLayer: 'edge-asset', type: 'asset/source' },
        {
            dependency: 'url',
            loader: 'next-middleware-asset-loader',
            type: 'javascript/auto',
            layer: 'edge-asset'
        },
        {
            test: /\.wasm$/,
            loader: 'next-middleware-wasm-loader',
            type: 'javascript/auto',
            resourceQuery: /module/i
        },
        {
            layer: 'sc_shared',
            test: /next[\\/]dist[\\/](esm[\\/])?client[\\/]components[\\/](static-generation-async-storage|action-async-storage|request-async-storage)/
        },
        {
            resourceQuery: /__next_metadata_route__/,
            layer: 'app-metadata-route'
        },
        {
            layer: 'sc_client',
            test: /next[\\/]dist[\\/](esm[\\/])?server[\\/]future[\\/]route-modules[\\/]app-page[\\/]module/
        },
        { issuerLayer: [ Object ], resolve: [ Object ] },
        {
            issuerLayer: [ Object ],
            test: [ Object ],
            resolve: [ Object ],
            use: [ Object ]
        },
        { test: /\.m?js/, resolve: [ Object ] },
        { resourceQuery: /__next_edge_ssr_entry__/, layer: 'sc_server' },
        { oneOf: [ Array ] },
        {
            test: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
            issuerLayer: 'app-client',
            resolve: [ Object ]
        },
        { oneOf: [ Array ] },
        {
            test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i,
            loader: 'next-image-loader',
            issuer: [ Object ],
            dependency: [ Object ],
            resourceQuery: [ Object ],
            options: [ Object ]
        },
        { resolve: [ Object ] },
        {
            test: /(node_modules|next[/\\]dist[/\\]compiled)[/\\]client-only[/\\]error.js/,
            loader: 'next-invalid-import-error-loader',
            issuerLayer: [ Object ],
            options: [ Object ]
        },
        {
            test: /(node_modules|next[/\\]dist[/\\]compiled)[/\\]server-only[/\\]index.js/,
            loader: 'next-invalid-import-error-loader',
            issuerLayer: 'sc_client',
            options: [ Object ]
        },
        {
            test: /[\\/]next[\\/]dist[\\/](esm[\\/])?server[\\/]web[\\/]exports[\\/]image-response\.js/,
            sideEffects: false
        }
    ],
        parser: { javascript: { url: 'relative'; } },
    generator: { asset: { filename: 'static/media/[name].[hash:8][ext]'; } }
}
