import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Noir Room",
  description: "La Habitación Oscura de Dex Parker.",
  titleTemplate: ':title',
  lastUpdated:false,
  cleanUrls: true,

  transformHead: ({ pageData }) => {
    const head = []
    if (pageData.frontmatter.title) {
      head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    }
    if (pageData.frontmatter.description) {
      head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    }
    if (pageData.frontmatter.image) {
      head.push(['meta', { property: 'og:image', content: pageData.frontmatter.image }])
    }
    return head
  },

  sitemap: {
    hostname: 'https://noiroom.netlify.app/',
  },
    
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Bienvenida', link: '/bienvenida'},
      { text: 'Index NR', link: '/noirdex', activeMatch: '/noirdex'},
      { text: 'Actualizado 20/11/2023', link: '/', activeMatch: '/d'}
    ],
      
    head: [['link', { rel: 'icon', href: 'https://github.com/NOIR-DexPrkr/noiroom/blob/main/docs/favicon.ico' }]],
    
    logo: {src: 'https://i.postimg.cc/gjdy9gby/Icon-white.png', width: 25, height: 25 },

    outline: {
      level: [1,4],
      label: 'Contenido de pagina'},
        
    search: {
      provider: 'local'
    },
    
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/Tutoriales/': [
        {
          text: '📑 Tutoriales',
          items: [
          { text: '🕸 Adguard', link: '/Tutoriales/Adguard' },
          { text: '🕸 Adobe Creative Cloud', link: '/Tutoriales/adobeCC' },
          {text: '🕸 Adobe Programas', link: '/Tutoriales/adobeprograms'},
          { text: '🕸 Cloudstream', link: '/Tutoriales/cloudstream' },
          { text: '🕸 Deemix Downloader', link: '/Tutoriales/deemix' },
          { text: '🕸 IPTV', link: '/Tutoriales/IPTV' },
          { text: '🕸 Minecraft Java & Bedrock', link: '/Tutoriales/minecraft' },
          { text: '🕸 Navega Seguro', link: '/Tutoriales/navega-seguro' },
          { text: '🕸 Neo Store', link: '/Tutoriales/neostore' },
          { text: '🕸 Spotify PC & Movil', link: '/Tutoriales/spotify-premium' },
          { text: '🕸 Stremio', link: '/Tutoriales/stremio' },
          { text: '🕸 Windows & Office', link: '/Tutoriales/Win-O365' }
          ]
        }
      ],
      // This sidebar gets displayed when a user
      // is on `Escritorio` directory.
      '/Escritorio/': [
        {
          text: '💻 Escritorio',
          items: [
            { text: '🕸 Para Diseñar', link: '/Escritorio/e-diseño' },
            { text: '🕸 Para Jugar', link: '/Escritorio/e-juegos' },
            { text: '🕸 Para Escuchar musica', link: '/Escritorio/e-musica' }
        ]
    }
],
        // Moviles 
      '/Moviles/': [
        {
          text: '📱 Moviles',
          items: [
            { text: '🕸 Esenciales Moviles', link: '/Moviles/m-esenciales'},
            { text: '🕸 Para Diseñar', link: '/Moviles/m-diseño' },
            { text: '🕸 Para Ver', link: '/Moviles/m-peliculas-series'},
            { text: '🕸 Para Escuchar musica', link: '/Moviles/m-musica'}
        ]
    }
],
    // This sidebar gets displayed when a user
      // is on `Paginas` directory.
      '/Paginas/': [
        {
          text: '🌍 Paginas',
          items: [
            { text: '🕸 Para Descargar', link: '/Paginas/p-descargas' },
            { text: '🕸 Para Streaming', link: '/Paginas/p-streaming' }
         ]
      }
 ],

    // This sidebar gets displayed when a user
      // is on `Paginas` directory.
      '/noirdex': [
        {
          text: '💌 Index',
          items: [
            { text: 'Encuentra todo aqui', link: '/noirdex' }
         ]
      }
 ],
        // IA 
      '/I-Artificial/': [
        {
          text: '🤖 Intelingencia Artificial',
          items: [
            { text: '🕸 Para Busquedas', link: '/I-Artificial/ai-search' },
            { text: '🕸 Para Conversar', link: '/I-Artificial/ai-text' },
            { text: '🕸 Para Crear imagenes', link: '/I-Artificial/ai-image' }
        ]
    }
],
    },
      
    footer: {
      message: 'Creado con 🤍 por Derk Parker.',
      copyright: 'Todos los tutoriales aqui presentados son recopilaciones y no estoy relacionado con su origen.'},

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/hVKeY3uEru' }
    ]
  }
})

