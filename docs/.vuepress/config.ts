import {defineUserConfig, viteBundler} from "vuepress";
import theme from "./theme.js";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {cut} from "nodejs-jieba";

const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

//https://vuepress.github.io/zh/reference/config.html
export default defineUserConfig({
    base,
    lang: "zh-CN",
    dest: "./dist/docs",

    locales: {
        "/": {
            lang: "zh-CN",
            title: "一星的臭弟弟",
            description: "vuepress-theme-hope 的文档演示",
        },
    },
    bundler: viteBundler({
        viteOptions: {

        },
        vuePluginOptions: {},
    }),
    theme,
    shouldPrefetch: false,
    plugins: [
        searchProPlugin({
            // 配置选项

            // 索引全部内容
            indexContent: true,

            indexOptions: {
                // 使用 nodejs-jieba 进行分词
                tokenize: (text, fieldName) =>
                    fieldName === "id" ? [text] : cut(text, true),
            },
            // 为分类和标签添加索引
            customFields: [
                {
                    // @ts-ignore
                    getter: (page) => page.frontmatter.category,
                    formatter: "分类：$content",
                },
                {
                    // @ts-ignore
                    getter: (page) => page.frontmatter.tag,
                    formatter: "标签：$content",
                },
            ],
        }),

    ],
});
