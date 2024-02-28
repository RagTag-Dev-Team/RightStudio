'use client'

// Next Imports
import { useParams } from 'next/navigation'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Menu Data Imports
// import menuData from '@/data/navigation/verticalMenuData'

const VerticalMenu = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  // Hooks
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { lang: locale, id } = params

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? { className: 'bs-full overflow-y-auto overflow-x-hidden' }
        : { options: { wheelPropagation: false, suppressScrollX: true } })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={{
          button: { paddingBlock: '12px' },
          subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' }
        }}
      >
        <SubMenu label={dictionary['navigation'].dashboards}>
          <MenuItem href={`/${locale}/dashboards/crm`}>{dictionary['navigation'].crm}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/analytics`}>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`}>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>
        <MenuItem href={`/${locale}/about`}>About</MenuItem>
        <MenuSection label={dictionary['navigation'].appsPages}>
          <MenuItem href={`/${locale}/email`}>{dictionary['navigation'].email}</MenuItem>
          <MenuItem href={`/${locale}/chat`}>{dictionary['navigation'].chat}</MenuItem>
          <MenuItem href={`/${locale}/apps/calendar`}>{dictionary['navigation'].calendar}</MenuItem>
          <SubMenu label={dictionary['navigation'].invoice}>
            <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/preview/${id || '4987'}`}>
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/edit/${id || '4987'}`}>{dictionary['navigation'].edit}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user}>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/user/view`}>{dictionary['navigation'].view}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].rolesPermissions}>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].pages}>
            <MenuItem href={`/${locale}/pages/user-profile`}>{dictionary['navigation'].userProfile}</MenuItem>
            <MenuItem href={`/${locale}/pages/account-settings`}>{dictionary['navigation'].accountSettings}</MenuItem>
            <MenuItem href={`/${locale}/pages/faq`}>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem href={`/${locale}/pages/pricing`}>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem href={`/${locale}/pages/misc/coming-soon`} target='_blank'>
                {dictionary['navigation'].comingSoon}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/under-maintenance`} target='_blank'>
                {dictionary['navigation'].underMaintenance}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/404-not-found`} target='_blank'>
                {dictionary['navigation'].pageNotFound404}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/401-not-authorized`} target='_blank'>
                {dictionary['navigation'].notAuthorized401}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].authPages}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href={`/${locale}/pages/auth/login-v1`} target='_blank'>
                {dictionary['navigation'].loginV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/login-v2`} target='_blank'>
                {dictionary['navigation'].loginV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem href={`/${locale}/pages/auth/register-v1`} target='_blank'>
                {dictionary['navigation'].registerV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-v2`} target='_blank'>
                {dictionary['navigation'].registerV2}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-multi-steps`} target='_blank'>
                {dictionary['navigation'].registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v1`} target='_blank'>
                {dictionary['navigation'].verifyEmailV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v2`} target='_blank'>
                {dictionary['navigation'].verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v1`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v2`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v1`} target='_blank'>
                {dictionary['navigation'].resetPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v2`} target='_blank'>
                {dictionary['navigation'].resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v1`} target='_blank'>
                {dictionary['navigation'].twoStepsV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v2`} target='_blank'>
                {dictionary['navigation'].twoStepsV2}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].wizardExamples}>
            <MenuItem href={`/${locale}/pages/wizard-examples/checkout`}>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/property-listing`}>
              {dictionary['navigation'].propertyListing}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/create-deal`}>
              {dictionary['navigation'].createDeal}
            </MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/pages/dialog-examples`}>{dictionary['navigation'].dialogExamples}</MenuItem>
          <SubMenu label={dictionary['navigation'].widgetExamples}>
            <MenuItem href={`/${locale}/pages/widget-examples/advanced`}>{dictionary['navigation'].advanced}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/statistics`}>
              {dictionary['navigation'].statistics}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/charts`}>{dictionary['navigation'].charts}</MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/icons-test`}>Icons Test</MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].formsAndTables}>
          <MenuItem href={`/${locale}/forms/form-layouts`}>{dictionary['navigation'].formLayouts}</MenuItem>
          <MenuItem href={`/${locale}/forms/form-validation`}>{dictionary['navigation'].formValidation}</MenuItem>
          <MenuItem href={`/${locale}/forms/form-wizard`}>{dictionary['navigation'].formWizard}</MenuItem>
          <MenuItem href={`/${locale}/react-table`}>{dictionary['navigation'].reactTable}</MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`}
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].formELements}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/table`}
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].tables}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu label={dictionary['navigation'].charts}>
            <MenuItem href={`/${locale}/charts/recharts`}>{dictionary['navigation'].recharts}</MenuItem>
            <MenuItem href={`/${locale}/charts/apex-charts`}>{dictionary['navigation'].apex}</MenuItem>
          </SubMenu>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`}
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].foundation}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`}
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].components}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`}
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].menuExamples}
          </MenuItem>
          <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />} target='_blank'>
            {dictionary['navigation'].raiseSupport}
          </MenuItem>
          <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />} target='_blank'>
            {dictionary['navigation'].documentation}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].others}>
            <MenuItem suffix='2️⃣'>{dictionary['navigation'].itemWithBadge}</MenuItem>
            <MenuItem
              href='https://themeselection.com'
              target='_blank'
              suffix={<LinkExternalIcon fontSize='1.125rem' />}
            >
              {dictionary['navigation'].externalLink}
            </MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevels}>
              <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
              <SubMenu label={dictionary['navigation'].menuLevel2}>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={{
          button: { paddingBlock: '12px' },
          subMenuContent: { zIndex: 'calc(var(--drawer-z-index) + 1)' }
        }}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary, params)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
