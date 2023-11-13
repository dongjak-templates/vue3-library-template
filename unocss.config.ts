import {defineConfig, presetUno, presetIcons, presetAttributify} from 'unocss';

module.exports = defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            // 其他选项
            prefix: 'i-',
            extraProperties: {
                display: 'inline-block',
            },
        }),
        presetAttributify({
            prefix: 'w:',
            prefixedOnly: false,
        }),
    ],
    rules: [
        [
            /^fs-(.+)$/,
            //@ts-ignore
            ([, d]) => {
                return {
                    'font-size': `${d}`,
                };
            },
        ], [
            /^flex-(.+)$/,
            //@ts-ignore
            ([, d]) => {
                return {
                    'flex': `${d}`,
                };
            },
        ],
        [
            /^col-gap-(.+)$/,
            //@ts-ignore
            ([, d]) => {
                return {
                    'column-gap': `${d}`,
                };
            },
        ], [
            /^row-gap-(.+)$/,
            //@ts-ignore
            ([, d]) => {
                return {
                    'row-gap': `${d}`,
                };
            },
        ],
    ]
})
