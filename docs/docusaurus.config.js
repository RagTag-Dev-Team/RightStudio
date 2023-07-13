// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Master',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'themeselection', // Usually your GitHub org/user name.
  projectName: 'master-nextjs-framework-independent', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: '/articles',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true
      }
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Master',
      logo: {
        alt: 'Master Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          href: 'https://themeselection.com/components',
          label: 'Components',
          position: 'left',
        },
        {
          href: 'https://themeselection.com/forms-tables',
          label: 'Forms & Tables',
          position: 'left',
        },
        {
          href: 'https://themeselection.com/menu-examples',
          label: 'Menu Examples',
          position: 'left',
        },
        // { type: 'docSidebar', sidebarId: '', label: 'Components', position: 'left', },
        // { type: 'docSidebar', sidebarId: '', label: 'Forms & Tables', position: 'left', },
        // { type: 'docSidebar', sidebarId: '', label: 'Menu Examples', position: 'left', },
        { type: 'docSidebar', sidebarId: 'faqSidebar', label: 'FAQs', position: 'right', },
        { to: '/articles', label: 'Articles', position: 'right' },
        {
          href: 'https://themeselection.com/github',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://themeselection.com//changelog',
          label: 'Changelog',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

module.exports = config;
