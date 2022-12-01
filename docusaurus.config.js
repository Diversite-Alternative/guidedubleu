const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Le Guide du Bleu',
  tagline: "Bien souvent la solution au problème d'une personne est l'expérience de l'autre",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutoriel',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Réseaux Sociaux',
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
        copyright: `Copyright © ${new Date().getFullYear()} Divalt.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
