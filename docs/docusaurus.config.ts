import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import * as path from 'path';
// Note: type annotations allow type checking and IDEs autocompletion

const config: Config = {
  title: 'Master',
  tagline: 'Next.Js Admin Template',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',

  plugins: [
    'docusaurus-plugin-sass',
    'plugin-image-zoom',
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss: (postcssOptions) => {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          postcssOptions.plugins.push(require('tailwindcss/nesting'))

          return postcssOptions
        },
      }
    },
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@docComponents': path.resolve(__dirname, './src/components'),
          '@docPages': path.resolve(__dirname, './src/pages'),
          '@docViews': path.resolve(__dirname, './src/views'),
          '@': path.resolve(__dirname, '../typescript-version/full-version/src'),
          '@core': path.resolve(__dirname, '../typescript-version/full-version/src/@core'),
          '@layouts': path.resolve(__dirname, '../typescript-version/full-version/src/@layouts'),
          '@menu': path.resolve(__dirname, '../typescript-version/full-version/src/@menu'),
          '@assets': path.resolve(__dirname, '../typescript-version/full-version/src/assets'),
          '@components': path.resolve(__dirname, '../typescript-version/full-version/src/components'),
          '@configs': path.resolve(__dirname, '../typescript-version/full-version/src/configs'),
          '@views': path.resolve(__dirname, '../typescript-version/full-version/src/views'),
        }
      }
    ]
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: '/articles',
        },
        theme: {
          customCss: './src/styles/custom.scss',
        },
      }
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
    image: 'images/docusaurus-social-card.jpg',
    navbar: {
      title: 'Master',
      logo: {
        alt: 'Logo',
        src: 'images/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guide',
        },
        { 
          type: 'docSidebar', 
          sidebarId: 'userInterfaceSidebar', 
          position: 'left', 
          label: 'User Interface',
        },
        { type: 'docSidebar', sidebarId: 'menuExamplesSidebar', label: 'Menu Examples', position: 'left', },
        { type: 'docSidebar', sidebarId: 'faqSidebar', label: 'FAQs', position: 'left', },
        { to: '/articles', label: 'Articles', position: 'left' },
        {
          href: 'https://themeselection.com/changelog',
          position: 'right',
          label: 'Changelog',
        },
        {
          href: 'https://themeselection.com/hire-us',
          position: 'right',
          label: 'Hire Us',
        },
        {
          href: 'https://themeselection.com/demo',
          position: 'right',
          label: 'Live Demo',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ThemeSelection, All rights Reserved.`,
      links: [
        {
          label: 'License',
          href: 'https://themeselection.com/license',
        },
        {
          label: 'More Themes',
          href: 'https://themeselection.com',
        },
        {
          label: 'Support',
          href: 'https://themeselection.com/support',
        }
      ]
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
    imageZoom: {
      selector: '.markdown > img, .markdown > p > img',
      options: {
        background: '#fff',
      }
    }
  },
}

export default config
