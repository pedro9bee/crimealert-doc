// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crime Alert',
  tagline: 'App to notify crime scenes',
  url: 'http://crimealert',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'pedro9bee/crimealert', // Usually your GitHub org/user name.
  projectName: 'crimealert', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pedro9bee/crimealert-doc/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pedro9bee/crimealert-doc/blob/main/',
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
        title: 'Crime Alert',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Logbook', position: 'left'},
          {
            href: 'https://github.com/pedro9bee/crimealert-doc',
            label: 'Repo',
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
                label: 'Nestjs',
                href: 'https://docs.nestjs.com/',
              },
              {
                label: 'React Native',
                href: 'https://reactnative.dev/',
              },
              {
                label: 'AWS Lightsail',
                href: 'https://aws.amazon.com/free/compute/lightsail',
              },
              {
                label: 'Firebase',
                href: 'https://firebase.google.com/',
              },
            ],
          },
          {
            title: 'References',
            items: [
              {
                label: 'Cityzen',
                href: 'https://apps.apple.com/us/app/citizen-connect-and-stay-safe/id1039889567',
              },
              {
                label: 'Citycop',
                href: 'https://apps.apple.com/br/app/citycop/id866291109',
              },
              {
                label: 'Civi',
                href: 'https://apps.apple.com/br/app/civi/id1511608672',
              },
              {
                label: 'Alertnest',
                href: 'https://apps.apple.com/br/app/alertnest/id1488899644',
              },
            ],
          },
          {
            title: 'Sites',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/pedro9bee',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/pedro9bee/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
