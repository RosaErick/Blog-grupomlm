module.exports = {
  siteMetadata: {
    title: "Grupo de Estudos Maria Lacerda de Moura",
    description: "Grupo de Estudos Maria Lacerda de Moura surgiu no âmbito de outro projeto de extensão voltado para a educação popular, 'Filosofia como Prática', a partir da demanda por um maior conhecimento da tradição de pensamento libertário, isto é, pela necessidade daqueles que compõem este projeto conhecer melhor a história do anarquismo, seus princípios e suas reais possibilidades em articulação com o tempo presente. Entretanto, o grupo ultrapassou o âmbito de nossas rodas de auto-formação, tomando vida própria e agregando um público que não se restringe aos participantes do mencionado projeto. Trata-se de um grupo de estudos itinerante, voltado para prática real, que desde 2014, possui sessões quinzenais em vários locais, dentre eles: Universidades; escolas da rede pública; ocupações sem teto ou culturais; praças públicas; a Mangueira em articulação com o pré-vestibular comunitário da ADEP, a aldeia maracanã."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
