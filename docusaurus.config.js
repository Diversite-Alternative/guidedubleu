const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Le Guide du Bleu',
  //tagline: "Pour améliorer mais surtout faciliter l’intégration des primo-arrivants en France.",
  url: 'https://github.com',
  baseUrl: '/guidedubleu/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Diversite-Alternative', // Usually your GitHub org/user name.
  projectName: 'guidedubleu', // Usually your repo name.
  //deploymentBranch: "gh-pages",

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Guide du Bleu',
        logo: {
          alt: 'My Site Logo',
          src: 'img/divalt_logo_grand.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Commencez-ici',
          },
          {
            href: 'https://diversitealternative.org/',
            label: 'Diversité Alternative',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey: 'c5f3b00a2e9685927926f4a5f162313e',
        indexName:  'Guide du Bleu',
        appId: 'NEJ43K0VCW',
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Le Guide du Bleu',
            items: [
              {
                label: 'Tutoriel',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Nos Réseaux Sociaux',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/diversit%C3%A9alternative/',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/diversitealternative/',
              },
            ],
          },
          {
            title: 'Site Internet',
            items: [
              {
                label: 'Diversite Alternative',
                href: 'https://diversitealternative.org/',
              },
            ],
          },
        ],
        copyright: `© Diversité Alternative - ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
