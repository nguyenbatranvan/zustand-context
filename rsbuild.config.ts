import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';

export default defineConfig({
    html: {
        tags: [{
            tag: "script",
            attrs: {
                src: "https://unpkg.com/react-scan@0.3.3/dist/auto.global.js"
            }
        }]
    },
    plugins: [pluginReact()],
});
