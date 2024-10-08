import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Consejos Noiroom",
  description: "Los Consejos de Noiroom.",
  titleTemplate: ':title',
  appearance: 'dark',
  lastUpdated:false,
  cleanUrls: true,
  ignoreDeadLinks: true,

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
    } else {
      // Add the default thumbnail if not provided in the frontmatter
    head.push(['meta', { property: 'og:image', content: 'https://i.postimg.cc/TPqhzMTX/ThumbCNR.png' }])
    }
    return head
  },

  sitemap: {
    hostname: 'https://noiroom.netlify.app/',
  },
    
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Buscadores', link: '/buscadores', activeMatch: '/buscadores'},
      { text: '🔁 19 agosto 24', link: '/', activeMatch: '/d'}
    ],
      
    head: [['link', { rel: 'icon', href: 'https://github.com/NOIR-DexPrkr/noiroom/blob/main/docs/favicon.ico' }]],
    
    logo: {src: 'https://i.postimg.cc/QCN21Sq2/NR-Logo.png', width: 25, height: 25 },

    outline: {
      level: [1,4],
      label: 'Contenido de pagina'},
        
    search: {
      provider: 'local',
      options: {
        detailedView: true
    }},
    
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
          { text: '🕸 Windows & Office', link: '/Tutoriales/Win-O365' },
          { text: '🕸 Xiaomi-debloat', link: '/Tutoriales/xiaomi-fast' }
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
            { text: '🕸 Para Musica', link: '/Escritorio/e-musica' },
            { text: '🕸 Para Estudiar', link: '/Escritorio/e-educativo' },
            { text: '🕸 Para Jugar', link: '/Escritorio/e-juegos' }
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
            { text: '🕸 Para Musica', link: '/Moviles/m-musica'}
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
          text: '🤖 Inteligencia Artificial',
          items: [
            { text: '🕸 Para Busquedas', link: '/I-Artificial/ai-search' },
            { text: '🕸 Para Conversar', link: '/I-Artificial/ai-text' },
            { text: '🕸 Para Crear imagenes', link: '/I-Artificial/ai-image' }
        ]
    }
],
        // Colecciones 
        '/Colecciones/': [
          {
            text: '🗃️ Colecciones',
            items: [
              { text: '🕹️ Nostalgia', link: '/Colecciones/nostalgia' },
              { text: '🕹️ Age of Empires', link: '/Colecciones/c-aoe' },
              { text: '🕹️ Call of Duty', link: '/Colecciones/c-cod' },
              { text: '🕹️ Grand Theft Auto', link: '/Colecciones/c-gta' },
              { text: '🕹️ Fallout', link: '/Colecciones/c-fallout'},
              { text: '🕹️ Mortal Kombat', link: '/Colecciones/c-mk' },
              { text: '🕹️ The Sims', link: '/Colecciones/c-sims' }
          ]
      }
  ],
        // LCDH-NR 
        '/Index/': [
          {
            text: '🍩 LCDH-NR',
            items: [
              { text: '⭐ Index', link: '/Index/lcdh-nr' },
              { text: '🤓 Guias', collapsed: true,
              items: [
                {text: '🍩 Guia CNR', link: '/Index/guia-lcdh'},
                {text: '🛡️ Guia cyberseguridad', link: '/Index/guia-cyberseguridad'}
              ]},
              { text: '🖥️ PC', collapsed: true,
              items: [
                {text: '💿 Programas', link: '/Index/pc-programas'},
                {text: '🕹️ Juegos', link: '/Index/pc-juegos'}
              ]},
              { text: '📲 Movil', collapsed: true,
              items: [
                {text: '👽 Android', link: '/Index/moviles-apps'},
                {text: '📱 iOS', link: '/Index/moviles-ios'},
                {text: '⬇️ Descarga apps', link: '/Index/moviles-recursos'}
              ]},
              { text: '🎧Musica', collapsed: true,
              items: [
                {text: '💿 Albumes/Canciones', link: '/Index/musica-archivos'},
                {text: '🎵 Descarga musica', link: '/Index/musica-recursos'}
              ]},
              { text: '🎮 Juegos', collapsed: true,
              items: [
                {text: '🕹️ Pack de juegos', link: '/Index/juegos-packs'},
                {text: '🖲️ Emuladores', link: '/Index/emuladores'}
              ]},
              { text: '📚 Libros', collapsed: true,
              items: [
                {text: '🎓 Academicos', link: '/Index/libros-academicos'},
                {text: '📔 Variado', link: '/Index/libros-varios'},
                {text: '⬇️ Descarga libros', link: '/Index/libros-descarga'}
              ]},
              { text: '🎓 Cursos gratis', link: '/Index/cursos-gratis' },
              { text: '📙 Comics', link: '/Index/comics' },
              { text: '🍿 Peliculas/Series/TV', link: '/Index/peliculas-series' },
              { text: '🔧 Utilidades', link: '/Index/utilidades' },
              { text: '🤖 Inteligencia artificial', link: '/Index/inteligencia-artificial'},
              { text: '📂 Recursos varios', link: '/Index/recursos-varios' }
          ]
      }
  ],
    },
      
    footer: {
      message: 'Creado con 🤍 por Dex Parker.',
      copyright: 'Todos los tutoriales aquí presentados son recopilaciones y no estoy relacionado con su origen.'},

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/cua9Qvfvz5' },
      { icon: {svg: '<svg viewBox="0 -2 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2627 26.9922L29.2549 16C31.085 14.1699 32 11.9607 32 9.37258C32 6.78442 31.085 4.57528 29.2549 2.74517C27.4247 0.915055 25.2155 0 22.6274 0C20.0392 0 17.8301 0.915055 16 2.74517C14.1699 0.915055 11.9607 0 9.37258 0C6.78442 0 4.57528 0.915055 2.74517 2.74517C0.915056 4.57528 0 6.78442 0 9.37258C0 11.9607 0.915056 14.1699 2.74517 16L13.7373 26.9922C14.9869 28.2418 17.0131 28.2418 18.2627 26.9922Z" fill="url(#paint0_radial_103_1602)"></path> <defs> <radialGradient id="paint0_radial_103_1602" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.07998 9.66157) rotate(59.8757) scale(18.7297 20.4872)"> <stop stop-color="#FFAA00"></stop> <stop offset="1" stop-color="#F05206"></stop> </radialGradient> </defs> </g></svg>'},  link: 'https://www.buymeacoffee.com/consejosnoiroom'}
    ]
  }
})

