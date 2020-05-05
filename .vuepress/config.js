module.exports = {
  title: "Loci",
  description: "Loci Knowledge Base",
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: 'System',
        items: [
          { text: 'Colors', link: '/system/colors/' },
          { text: 'Editors', link: '/system/editors/' },
          { text: 'Terminal', link: '/system/terminals/' },
          { text: 'Linux', link: '/system/linux/' },
          { text: 'Desktop', link: '/system/desktop/' },
        ]
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      '/system/editors/': [
        '', 'Neovim'
      ],
      '/system/colors/': [
        '', 'Ayu', 'Dracula', 'Gruvbox', 'Nord'
      ]
    },
    yuu: {
      colorThemes: ['ayu-light', 'ayu-mirage']
    }
  },
  plugins: [
    'reading-progress',
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-medium-zoom',
    'vuepress-plugin-mathjax',
    '@goy/svg-icons'
  ],
  markdown: {
    linkify: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
      md.use(require('markdown-it-center-text'));
    },
  }
}
