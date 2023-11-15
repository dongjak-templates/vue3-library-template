import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';
import pkg from './package.json'; // 导入 package.json 文件
import path from "path";
import UnoCSS from 'unocss/vite'
import '@dongjak-extensions/lang'

const libraryName = pkg.name.substringAfterLast$ext("/")
module.exports = defineConfig({
    plugins: [
        vue(),
        UnoCSS()
    ], // to process SFC
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: libraryName,
            formats: ['es', 'umd'], // adding 'umd' requires globals set to every external module
            fileName: (format) => `${libraryName}.${format}.js`,
        },
        rollupOptions: {
            // 预依赖(peerDependencies)的模块不要打包到库中
            external: ['vue', /primevue\/.+/], // not every external has a global
            output: {
                // disable warning on src/index.ts using both default and named export
                exports: 'named',
                // Provide global variables to use in the UMD build
                // for externalized deps (not useful if 'umd' is not in lib.formats)
                globals: {
                    vue: 'Vue',
                },
            },
        },
        emptyOutDir: false, // to retain the types folder generated by tsc
    },
});
