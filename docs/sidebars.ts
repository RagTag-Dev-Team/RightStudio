import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  guideSidebar: [
    'guide/tags',
    {
      type: 'category',
      label: 'Overview',
      link: {
        type: "doc",
        id: "guide/overview",
      },
      items: [
        'guide/overview/getting-started',
        'guide/overview/starter-kit-vs-full-package',
        'guide/overview/dependencies',
        'guide/overview/installation',
        'guide/overview/getting-support',
        'guide/overview/github-access',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'guide/development/folder-structure',
        'guide/development/environment-variables',
        'guide/development/home-page-url',
        {
          type : 'category',
          label : 'Translations',
          items : [
            'guide/development/translation/how-to-remove-i18n',
            'guide/development/translation/add-i18n-to-Starter-kit'
          ]
        },
        'guide/development/rtl',
        {
          "type": "category",
          "label": "Theming",
          "items": [
            "guide/development/theming/overview",
            "guide/development/theming/override-color-palette",
            "guide/development/theming/change-primary-color",
            "guide/development/theming/override-custom-color",
            "guide/development/theming/add-new-custom-color",
            "guide/development/theming/override-typography",
            "guide/development/theming/override-shadow",
            "guide/development/theming/override-breakpoints",
            "guide/development/theming/override-component-styling",
            "guide/development/theming/create-your-own-theme",
          ]
        },
        'guide/development/demo-config',
        'guide/development/nextjs-api',
        {
          "type": 'category',
          "label": 'Apps & Pages Setup',
          link: { type: 'doc', id: 'guide/development/apps-and-pages-setup/intro' },
          items: [
            'guide/development/apps-and-pages-setup/pages',
            'guide/development/apps-and-pages-setup/apps',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Layout',
      items: [
        'guide/layout/layout-types',
        'guide/layout/vertical-layout-components',
        'guide/layout/horizontal-layout-components',
        'guide/layout/layout-classes',
        'guide/layout/menu-styling',
        'guide/layout/menu-classes',
        'guide/layout/before-after-content',
        'guide/layout/icons',
        'guide/layout/how-to-use-react-icon',
        'guide/layout/customizer'
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'guide/settings/vscode-configurations',
        'guide/settings/theme-configurations',
        'guide/settings/settings-context'
      ]
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'guide/authentication/intro',
        'guide/authentication/credentials-provider',
        'guide/authentication/google-prisma',
        'guide/authentication/remove-auth',
        'guide/authentication/add-auth'
      ]
    },
    'guide/logo',
    {
      type: 'category',
      label: 'Hooks',
      items: [
        'guide/hooks/overview',
        'guide/hooks/useVerticalNav',
        'guide/hooks/useHorizontalNav',
        'guide/hooks/useMediaQuery',
        'guide/hooks/useSettings'
      ]
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'guide/components/overview',
        {
          type: 'category',
          label: 'MUI',
          items: [
            'guide/components/mui/card'
          ]
        },
        {
          type: 'category',
          label: 'Custom',
          items: [
            'guide/components/custom/generate-menu',
            'guide/components/custom/form',
            'guide/components/custom/link',
            'guide/components/custom/open-dialog-on-element-click',
            'guide/components/custom/card-statistics',
            'guide/components/custom/option-menu',
            {
              type: 'category',
              label: 'Custom-Inputs',
              items: [
                'guide/components/custom/custom-inputs/horizontal',
                'guide/components/custom/custom-inputs/vertical',
                'guide/components/custom/custom-inputs/image',
                'guide/components/custom/custom-inputs/override-custom-inputs'
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Libs',
          items: [
            'guide/components/libs/apex-charts',
            'guide/components/libs/recharts',
            'guide/components/libs/editor'
          ]
        },
        {
          type: 'category',
          label: 'Styled Libs',
          items: [
            'guide/components/styled-libs/app-full-calendar',
            'guide/components/styled-libs/app-keen-slider',
            'guide/components/styled-libs/app-react-apex-charts',
            'guide/components/styled-libs/app-react-datepicker',
            'guide/components/styled-libs/app-react-draft-wysiwyg',
            'guide/components/styled-libs/app-react-dropzone',
            'guide/components/styled-libs/app-react-toastify',
            'guide/components/styled-libs/app-recharts',
          ]
        },
        'guide/components/overriding-custom-components',
      ]
    },
    'guide/customizing-our-component',
    'guide/deployment',
    'guide/credit',
  ],
  userInterfaceSidebar: [
    {
      type: 'category',
      label: 'Foundation',
      link: {
        type: 'doc',
        id: 'user-interface/foundation',
      },
      items: [
        'user-interface/foundation/colors',
        'user-interface/foundation/typography',
        'user-interface/foundation/icons',
        'user-interface/foundation/shadows',
      ]
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: "doc",
        id: "user-interface/components",
      },
      items: [
        'user-interface/components/accordion',
        'user-interface/components/alerts',
        'user-interface/components/avatars',
        'user-interface/components/badges',
        'user-interface/components/buttons',
        'user-interface/components/button-group',
        'user-interface/components/chips',
        'user-interface/components/dialogs',
        'user-interface/components/list',
        'user-interface/components/menu',
        'user-interface/components/pagination',
        'user-interface/components/progress',
        'user-interface/components/ratings',
        'user-interface/components/snackbar',
        'user-interface/components/swiper',
        'user-interface/components/tabs',
        'user-interface/components/timeline',
        'user-interface/components/toasts',
        'user-interface/components/more',
        'user-interface/components/test'
      ]
    },
    {
      type: 'category',
      label: 'Form Elements',
      link: {
        type: "doc",
        id: "user-interface/form-elements",
      },
      items: [
        'user-interface/form-elements/text-field',
        'user-interface/form-elements/select',
        'user-interface/form-elements/checkbox',
        'user-interface/form-elements/radio',
        'user-interface/form-elements/custom-inputs',
        'user-interface/form-elements/textarea',
        'user-interface/form-elements/autocomplete',
        'user-interface/form-elements/picker',
        'user-interface/form-elements/switch',
        'user-interface/form-elements/file-uploader',
        'user-interface/form-elements/editor',
        'user-interface/form-elements/slider',
        'user-interface/form-elements/test',
      ]
    },
    'user-interface/mui-table',
  ],
  menuExamplesSidebar: [
    "menu-examples/overview",
    {
      type: "category",
      label: "Vertical Menu",
      collapsed: false,
      link: {
        type: "doc",
        id: "menu-examples/vertical-examples/vertical-menu-props",
      },
      items: [
        {
          type: "category",
          label: "Vertical Nav",
          link: {
            type: "doc",
            id: "menu-examples/vertical-examples/vertical-nav/vertical-nav-props",
          },
          items: [
            "menu-examples/vertical-examples/vertical-nav/basic",
            "menu-examples/vertical-examples/vertical-nav/width",
            "menu-examples/vertical-examples/vertical-nav/collapsed-width",
            "menu-examples/vertical-examples/vertical-nav/breakpoint",
            "menu-examples/vertical-examples/vertical-nav/breakpoints",
            "menu-examples/vertical-examples/vertical-nav/custom-breakpoint",
            "menu-examples/vertical-examples/vertical-nav/transition-duration",
            "menu-examples/vertical-examples/vertical-nav/background-color",
            "menu-examples/vertical-examples/vertical-nav/background-image",
            "menu-examples/vertical-examples/vertical-nav/overlay",
            "menu-examples/vertical-examples/vertical-nav/backdrop-color",
            "menu-examples/vertical-examples/vertical-nav/custom-styles",
          ],
        },
        {
          type: "category",
          label: "Menu",
          link: {
            type: "doc",
            id: "menu-examples/vertical-examples/menu/menu-props",
          },
          items: [
            "menu-examples/vertical-examples/menu/basic",
            "menu-examples/vertical-examples/menu/popout-collapsed",
            "menu-examples/vertical-examples/menu/trigger-popout",
            "menu-examples/vertical-examples/menu/transition-duration",
            "menu-examples/vertical-examples/menu/collapsed-menu-section-label",
            "menu-examples/vertical-examples/menu/menu-section-styles",
            "menu-examples/vertical-examples/menu/menu-item-styles",
            "menu-examples/vertical-examples/menu/sub-menu-open-behavior",
            "menu-examples/vertical-examples/menu/expand-icon",
            "menu-examples/vertical-examples/menu/expanded-menu-item-icon",
            "menu-examples/vertical-examples/menu/popout-menu-offset",
            "menu-examples/vertical-examples/menu/text-truncate",
            "menu-examples/vertical-examples/menu/root-styles",
          ],
        },
        {
          type: "category",
          label: "Menu Section",
          link: {
            type: "doc",
            id: "menu-examples/vertical-examples/menu-section/menu-section-props",
          },
          items: [
            "menu-examples/vertical-examples/menu-section/basic",
            "menu-examples/vertical-examples/menu-section/icon",
            "menu-examples/vertical-examples/menu-section/prefix",
            "menu-examples/vertical-examples/menu-section/suffix",
            "menu-examples/vertical-examples/menu-section/root-styles",
          ],
        },
        {
          type: "category",
          label: "Menu Item",
          link: {
            type: "doc",
            id: "menu-examples/vertical-examples/menu-item/menu-item-props",
          },
          items: [
            "menu-examples/vertical-examples/menu-item/basic",
            "menu-examples/vertical-examples/menu-item/icon",
            "menu-examples/vertical-examples/menu-item/disabled",
            "menu-examples/vertical-examples/menu-item/prefix",
            "menu-examples/vertical-examples/menu-item/suffix",
            "menu-examples/vertical-examples/menu-item/component",
            "menu-examples/vertical-examples/menu-item/target",
            "menu-examples/vertical-examples/menu-item/on-click",
            "menu-examples/vertical-examples/menu-item/on-active-change",
            "menu-examples/vertical-examples/menu-item/root-styles",
          ],
        },
        {
          type: "category",
          label: "Sub Menu",
          link: {
            type: "doc",
            id: "menu-examples/vertical-examples/submenu/submenu-props",
          },
          items: [
            "menu-examples/vertical-examples/submenu/basic",
            "menu-examples/vertical-examples/submenu/icon",
            "menu-examples/vertical-examples/submenu/default-open",
            "menu-examples/vertical-examples/submenu/disabled",
            "menu-examples/vertical-examples/submenu/prefix",
            "menu-examples/vertical-examples/submenu/suffix",
            "menu-examples/vertical-examples/submenu/component",
            "menu-examples/vertical-examples/submenu/content-classname",
            "menu-examples/vertical-examples/submenu/on-click",
            "menu-examples/vertical-examples/submenu/on-open-change",
            "menu-examples/vertical-examples/submenu/root-styles",
          ],
        },
        "menu-examples/vertical-examples/nav-collapse-icons",
        {
          type: "category",
          label: "Menu Types",
          items: [
            "menu-examples/vertical-examples/menu-types/collapsed-hover",
            "menu-examples/vertical-examples/menu-types/toggle",
            "menu-examples/vertical-examples/menu-types/collapsed-popout",
          ],
        },
        {
          type: "category",
          label: "Menu Scroll",
          items: [
            "menu-examples/vertical-examples/menu-scroll/full-menu-scroll",
            "menu-examples/vertical-examples/menu-scroll/popout-scroll",
          ],
        },
        {
          type: "category",
          label: "Menu Position",
          items: [
            "menu-examples/vertical-examples/menu-position/scroll-with-content",
            "menu-examples/vertical-examples/menu-position/fixed-menu",
          ],
        },
        {
          type: "category",
          label: "Menu Render",
          items: [
            "menu-examples/vertical-examples/menu-render/static-menu",
            "menu-examples/vertical-examples/menu-render/dynamic-menu",
            "menu-examples/vertical-examples/menu-render/menu-with-api",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Horizontal Menu",
      collapsed: false,
      link: {
        type: "doc",
        id: "menu-examples/horizontal-examples/horizontal-menu-props",
      },
      items: [
        {
          type: "category",
          label: "Horizontal Nav",
          link: {
            type: "doc",
            id: "menu-examples/horizontal-examples/horizontal-nav/horizontal-nav-props",
          },
          items: [
            "menu-examples/horizontal-examples/horizontal-nav/basic",
            "menu-examples/horizontal-examples/horizontal-nav/switch-to-vertical",
            "menu-examples/horizontal-examples/horizontal-nav/hide-menu",
            "menu-examples/horizontal-examples/horizontal-nav/breakpoint",
            "menu-examples/horizontal-examples/horizontal-nav/breakpoints",
            "menu-examples/horizontal-examples/horizontal-nav/custom-breakpoint",
            "menu-examples/horizontal-examples/horizontal-nav/custom-styles",
            "menu-examples/horizontal-examples/horizontal-nav/vertical-nav-props",
          ],
        },
        {
          type: "category",
          label: "Menu",
          link: {
            type: "doc",
            id: "menu-examples/horizontal-examples/menu/menu-props",
          },
          items: [
            "menu-examples/horizontal-examples/menu/basic",
            "menu-examples/horizontal-examples/menu/trigger-popout",
            "menu-examples/horizontal-examples/menu/transition-duration",
            "menu-examples/horizontal-examples/menu/menu-item-styles",
            "menu-examples/horizontal-examples/menu/popout-menu-offset",
            "menu-examples/horizontal-examples/menu/expand-icon",
            "menu-examples/horizontal-examples/menu/expanded-menu-item-icon",
            "menu-examples/horizontal-examples/menu/text-truncate",
            "menu-examples/horizontal-examples/menu/vertical-menu-props",
            "menu-examples/horizontal-examples/menu/root-styles",
          ],
        },
        {
          type: "category",
          label: "Menu Item",
          link: {
            type: "doc",
            id: "menu-examples/horizontal-examples/menu-item/menu-item-props",
          },
          items: [
            "menu-examples/horizontal-examples/menu-item/basic",
            "menu-examples/horizontal-examples/menu-item/icon",
            "menu-examples/horizontal-examples/menu-item/disabled",
            "menu-examples/horizontal-examples/menu-item/prefix",
            "menu-examples/horizontal-examples/menu-item/suffix",
            "menu-examples/horizontal-examples/menu-item/component",
            "menu-examples/horizontal-examples/menu-item/target",
            "menu-examples/horizontal-examples/menu-item/on-click",
            "menu-examples/horizontal-examples/menu-item/on-active-change",
            "menu-examples/horizontal-examples/menu-item/root-styles",
          ],
        },
        {
          type: "category",
          label: "Sub Menu",
          link: {
            type: "doc",
            id: "menu-examples/horizontal-examples/submenu/submenu-props",
          },
          items: [
            "menu-examples/horizontal-examples/submenu/basic",
            "menu-examples/horizontal-examples/submenu/icon",
            "menu-examples/horizontal-examples/submenu/disabled",
            "menu-examples/horizontal-examples/submenu/prefix",
            "menu-examples/horizontal-examples/submenu/suffix",
            "menu-examples/horizontal-examples/submenu/component",
            "menu-examples/horizontal-examples/submenu/content-classname",
            "menu-examples/horizontal-examples/submenu/on-click",
            "menu-examples/horizontal-examples/submenu/on-open-change",
            "menu-examples/horizontal-examples/submenu/root-styles",
          ],
        },
        {
          type: "category",
          label: "Menu Scroll",
          items: [
            "menu-examples/horizontal-examples/menu-scroll/browser-scroll",
            "menu-examples/horizontal-examples/menu-scroll/perfect-scroll",
          ],
        },
        {
          type: "category",
          label: "Menu Render",
          items: [
            "menu-examples/horizontal-examples/menu-render/static-menu",
            "menu-examples/horizontal-examples/menu-render/dynamic-menu",
            "menu-examples/horizontal-examples/menu-render/menu-with-api",
          ],
        },
        {
          type: "category",
          label: "Menu Position",
          items: [
            "menu-examples/horizontal-examples/menu-position/horizontal-navbar",
            "menu-examples/horizontal-examples/menu-position/vertical-navbar",
          ],
        },
      ],
    },
  ],
  faqSidebar: [
    'faqs/intro',
    'faqs/installation-errors',
    'faqs/installation-warning',
    "faqs/remove-nextjs",
    "faqs/how-to-update-this-template",
    "faqs/how-to-hide-menu",
    "faqs/server-side-menu",
    'faqs/how-to-change-logo',
    'faqs/how-to-change-colors',
    'faqs/how-to-change-fonts',
    'faqs/how-to-change-mode',
    'faqs/how-to-change-skin',
    'faqs/why-cannot-revert-to-default-theme',
    'faqs/why-app-runs-slow-in-local',
    'faqs/configure-local-template-like-demos',
    'faqs/integrate-template-into-existing-project',
    "faqs/update-navbar-and-footer",
    "faqs/why-default-collapsed-menu-be-avoided",
    'faqs/how-to-override-component-styling',
    'faqs/add-or-remove-authentication',
    'faqs/migration-from-pages-to-app-router',
    'faqs/how-to-use-directions',
    "faqs/how-to-add-rtl-in-swiper",
    "faqs/how-to-clear-browser-cache",
    "faqs/why-static-export-is-not-possible",
    "faqs/how-to-implement-acl"
  ],
};

export default sidebars;
