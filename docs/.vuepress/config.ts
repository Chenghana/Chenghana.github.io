import { resolve } from "path";
import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import dayjs from "dayjs";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: "vdoing", // 使用npm主题包
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Niko的知识宝库",
      description:
        "分享web前端技术,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。",
    },
  },
  base: "/", // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          { text: "《JavaScript笔记》", link: "/note/javascript/" },
          { text: "《ES6 笔记》", link: "/note/es6/" },
          {
            text: "《TypeScript笔记》",
            link: "/note/ts/",
          },
          { text: "《Vue》", link: "/note/vue/" },
          {
            text: "《Git》",
            link: "/note/git/",
          },
          {
            text: "《jQuery教程》",
            link: "/note/jQuery/",
          },
        ],
      },
      {
        text: "页面",
        link: "/ui/",
        items: [
          { text: "HTML", link: "/pages/8309a5b876fc95e3/" },
          { text: "CSS", link: "/pages/0a83b083bdf257cb/" },
        ],
      },
      {
        text: "技术",
        link: "/technology/",
        items: [
          { text: "技术文档", link: "/pages/lunzi/" },
          { text: "GitHub技巧", link: "/pages/github/" },
          { text: "博客搭建", link: "/pages/blog/" },
        ],
      },
      {
        text: "更多",
        link: "/more/",
        items: [
          { text: "学习方法", link: "/pages/ways/" },
          { text: "面试集锦", link: "/pages/mianshi/" },
          { text: "KillBUG", link: "/pages/killbug/" },
          { text: "项目优化", link: "/pages/youhua/" },
        ],
      },
      {
        text: "归档",
        link: "/archives/",
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/logo.png", // 导航栏logo
    repo: "https://github.com/Chenghana/Chenghana.github.io", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: false, // 启用编辑
    editLinkText: "编辑",
    tag: false,
    category: false,
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: "structuring",

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "niko", // 必需
      // link: 'https://github.com/niko', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    // blogger: {
    //   avatar: 'https://fastly.jsdelivr.net/gh/niko/image_store/blog/20200103123203.jpg',
    //   name: 'Evan Xu',
    //   slogan: '前端界的小学生',
    // },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.niko.com/pages/a20ce8/#social)

    // 页脚信息
    footer: {
      createYear: 2021, // 博客创建年份
      copyrightInfo:
        'Niko | <a href="https://github.com/Chenghana/Chenghana.github.io" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: "niko",
      },
    },
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
      },
    ],
    // ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }], // 百度统计的站长验证（你可以去掉）
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
  ],

  // 插件配置
  plugins: <UserPlugins>[
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "在MDN中搜索",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
            behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在Runoob中搜索",
            frontUrl: "https://www.runoob.com/?s=",
          },
          {
            title: "在Vue API中搜索",
            frontUrl: "https://cn.vuejs.org/v2/api/#",
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
          {
            title: "通过百度搜索本站的",
            frontUrl: "https://www.baidu.com/s?wd=site%3Aniko.com%20",
          },
        ],
      },
    ],

    [
      "one-click-copy", // 代码块复制按钮
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      "demo-block", // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],

    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts", ".vuepress/config/htmlModules.ts"],
});
