module.exports = {
  title: "Loci",
  description: "Loci Knowledge Base",
  themeConfig: {
    smoothScroll: true,
    sidebarDepth: 3,
    sidebar: {
      '/editors/': [
        '', 'Neovim'
      ]
    },
    yuu: {
      colorThemes: ['ayu-light', 'ayu-mirage']
    }
  },
  plugins: [
    'reading-progress'
  ]
}
