import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Volvox.Apollo Docs',
  tagline: 'Documentation for Volvox.Apollo',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apollo.volvox.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Volvox LLC', // Usually your GitHub org/user name.
  projectName: 'Volvox.Apollo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VolvoxLLC/Volvox.Apollo.Docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VolvoxLLC/Volvox.Apollo.Docs/tree/master',
        },
        theme: {
          customCss: ['./src/css/custom.scss']
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/Apollo-Banner.jpg',
    navbar: {
      title: 'Volvox.Apollo Docs',
      logo: {
        alt: 'olvox.Apollo Logo',
        src: 'img/Apollo-Logo.png',
      },
      items: [
        {
          position: 'left',
          label: 'Apollo',
          to: 'https://apollo.volvox.tech',
        },
        {
          to: '/',
          position: 'left',
          label: 'Home'
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'intro',
          label: 'Docs'
        },
        {
          to: '/blog/',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'https://github.com/VolvoxLLC',
          position: 'right',
          className: 'github-link',
        },
        {
          to: 'https://discord.gg/Y6BgvsWuNU',
          position: 'right',
          className: 'discord-link',
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
              label: 'Intro',
              to: '/apollo-docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.gg/Y6BgvsWuNU',
              className: 'discord-link',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/volvoxllc',
              className: 'twitter-link',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: ' ',
              to: 'https://github.com/VolvoxLLC',
              className: 'github-link',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Volvox LLC<br />
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licensed by Volvox LLC under a Creative Commons Attribution-ShareAlike 4.0 International License</a><br />
      <span class="designedBy">Designed with <svg xmlns="http://www.w3.org/2000/svg" class="heart" width="24" height="24" viewBox="0 0 24 24"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"/></svg>
      by <a href="https://github.com/VolvoxLLC">Volvox</a></span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // Custom Plugins
  plugins: [
    'docusaurus-plugin-sass'
  ]
};

export default config;
