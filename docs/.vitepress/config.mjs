import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Noir Room",
  description: "La Habitación Oscura de Dex Parker.",
    
  lastUpdated:false,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://noiroom.netlify.app/',
    },
    
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Bienvenida', link: '/bienvenida'},
      { text: 'Index', link: '/noindex', activeMatch: '/noindex'}
      
    ],
    
    logo:'/docs/favicon.ico',

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
          { text: '🕸 Navega Seguro', link: '/Tutoriales/navega.seguro' },
          { text: '🕸 Neo Store', link: '/Tutoriales/neostore' },
          { text: '🕸 Spotify PC & Movil', link: '/Tutoriales/spotify-premium' },
          { text: '🕸 Stremio', link: '/Tutoriales/stremio' },
          { text: '🕸 Windows & Office', link: '/Tutoriales/Win-O35' }
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

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/hVKeY3uEru' }
    ]
  }
})


