import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar";
import {zhSidebar} from "./sidebar";
import path from "path";
import fs from "fs";

const projectRoot = path.resolve(__dirname, '../../');
const hostname =
    process.env["HOSTNAME"] || "https://theme-hope-docs-demo.vuejs.press";
const packageJsonPath = path.join(projectRoot, 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);

export default hopeTheme(
    {
        hostname,
        // fullscreen: true,
        print: true,
        author: {
            name: "Cruldra",
            url: "https://cruldra.com",
        },
        headerDepth: 3,
        iconAssets: "fontawesome-with-brands",

        logo: "/logo.svg",

        repo: `${packageJson.author}/${packageJson.name}`,

        docsDir: "demo/theme-docs/src",

        locales: {
            "/": {
                // navbar
                navbar: zhNavbar,

                // sidebar
                sidebar: zhSidebar,

                footer: "Default footer",

                displayFooter: true,

                metaLocales: {
                    editLink: "在 GitHub 上编辑此页",
                },
            },

            /**
             * Chinese locale config
             */
            "/zh/": {
                // navbar
                navbar: zhNavbar,

                // sidebar
                sidebar: zhSidebar,

                footer: "默认页脚",

                displayFooter: true,

                // page meta
                metaLocales: {
                    editLink: "在 GitHub 上编辑此页",
                },
            },
        },

        encrypt: {
            config: {
                "/demo/encrypt.html": ["1234"],
                "/zh/demo/encrypt.html": ["1234"],
            },
        },

        plugins: {
            components: {
                // 你想使用的组件
                components: [
                  "ArtPlayer",
                  "AudioPlayer",
                  "Badge",
                  "BiliBili",
                  "CodePen",
                  "PDF",
                  "Replit",
                  "Share",
                  "SiteInfo",
                  "StackBlitz",
                  // "VidStack",
                  "VideoPlayer",
                  "XiGua",
                  "YouTube",
                ],
              },


            comment: {
                provider: "Giscus",
                repo: "vuepress-theme-hope/giscus-discussions",
                repoId: "R_kgDOG_Pt2A",
                category: "Announcements",
                categoryId: "DIC_kwDOG_Pt2M4COD69",
            },

            // All features are enabled for demo, only preserve features you need here
            mdEnhance: {
                align: true,
                attrs: true,
                chart: true,
                codetabs: true,
                demo: true,
                echarts: true,
                figure: true,
                flowchart: true,
                gfm: true,
                imgLazyload: true,
                imgSize: true,
                include: true,
                katex: true,
                mark: true,
                mermaid: true,
                playground: {
                    presets: ["ts", "vue"],
                },
                presentation: {
                    plugins: ["highlight", "math", "search", "notes", "zoom"],
                },
                stylize: [
                    {
                        matcher: "Recommended",
                        replacer: ({tag}) => {
                            if (tag === "em")
                                return {
                                    tag: "Badge",
                                    attrs: {type: "tip"},
                                    content: "Recommended",
                                };
                        },
                    },
                ],
                sub: true,
                sup: true,
                tabs: true,
                vPre: true,
                vuePlayground: true,
            },

            pwa: {
                favicon: "/favicon.ico",
                cacheHTML: true,
                cachePic: true,
                appendBase: true,
                apple: {
                    icon: "/assets/icon/apple-icon-152.png",
                    statusBarColor: "black",
                },
                msTile: {
                    image: "/assets/icon/ms-icon-144.png",
                    color: "#ffffff",
                },
                manifest: {
                    icons: [
                        {
                            src: "/assets/icon/chrome-mask-512.png",
                            sizes: "512x512",
                            purpose: "maskable",
                            type: "image/png",
                        },
                        {
                            src: "/assets/icon/chrome-mask-192.png",
                            sizes: "192x192",
                            purpose: "maskable",
                            type: "image/png",
                        },
                        {
                            src: "/assets/icon/chrome-512.png",
                            sizes: "512x512",
                            type: "image/png",
                        },
                        {
                            src: "/assets/icon/chrome-192.png",
                            sizes: "192x192",
                            type: "image/png",
                        },
                    ],
                    shortcuts: [
                        {
                            name: "Demo",
                            short_name: "Demo",
                            url: "/demo/",
                            icons: [
                                {
                                    src: "/assets/icon/guide-maskable.png",
                                    sizes: "192x192",
                                    purpose: "maskable",
                                    type: "image/png",
                                },
                            ],
                        },
                    ],
                },
            },

            seo:
                hostname === "https://theme-hope-docs-demo.vuejs.press"
                    ? {}
                    : {canonical: "https://theme-hope-docs-demo.vuejs.press"},
        },
    },
    {custom: true}
);
