'use client'

// Next Imports
import { usePathname } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports from @menu-package
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu-package/vertical-menu'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Util Imports
import { getLocale } from '@/utils/get-locale'
import { getDictionary } from '@/utils/get-dictionary'

// import { generateVerticalMenu } from '@/utils/menuUtils'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/VerticalMenuData'

const VerticalMenu = () => {
  // Hooks
  const theme = useTheme()
  const pathName = usePathname()
  const { settings } = useSettings()

  // Get locale from pathname
  const locale = getLocale(pathName)

  // Get dictionary based on locale
  const dictionary = getDictionary(locale)

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <PerfectScrollbar options={{ wheelPropagation: false }}>
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu popoutMenuOffset={{ mainAxis: 10 }} menuItemStyles={menuItemStyles(settings, theme)}>
        <SubMenu label={dictionary['navigation'].dashboards}>
          <MenuItem href={`/${locale}/dashboards/analytics`}>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`}>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>
        <MenuItem href={`/${locale}/about`}>About</MenuItem>
        <MenuItem href={`/${locale}/user-list`}>User List</MenuItem>
        <MenuItem href={`/${locale}/user-details`}>User Details</MenuItem>
        <MenuSection label={dictionary['navigation'].appsPages}>
          <MenuItem href={`/${locale}/email`}>{dictionary['navigation'].email}</MenuItem>
          <MenuItem href={`/${locale}/chat`}>{dictionary['navigation'].chat}</MenuItem>
          <MenuItem href={`/${locale}/apps/calendar`}>{dictionary['navigation'].calendar}</MenuItem>
          <SubMenu label={dictionary['navigation'].invoice}>
            <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/preview`}>{dictionary['navigation'].preview}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/edit`}>{dictionary['navigation'].edit}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user}>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <SubMenu label={dictionary['navigation'].view}>
              <MenuItem href={`/${locale}/apps/user/view/overview`}>{dictionary['navigation'].overview}</MenuItem>
              <MenuItem href={`/${locale}/apps/user/view/security`}>{dictionary['navigation'].security}</MenuItem>
              <MenuItem href={`/${locale}/apps/user/view/billing-plans`}>
                {dictionary['navigation'].billingPlans}
              </MenuItem>
              <MenuItem href={`/${locale}/apps/user/view/notifications`}>
                {dictionary['navigation'].notifications}
              </MenuItem>
              <MenuItem href={`/${locale}/apps/user/view/connections`}>{dictionary['navigation'].connections}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].rolesPermissions}>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].pages}>
            <SubMenu label={dictionary['navigation'].userProfile}>
              <MenuItem href={`/${locale}/pages/user-profile/profile`}>{dictionary['navigation'].profile}</MenuItem>
              <MenuItem href={`/${locale}/pages/user-profile/teams`}>{dictionary['navigation'].teams}</MenuItem>
              <MenuItem href={`/${locale}/pages/user-profile/projects`}>{dictionary['navigation'].projects}</MenuItem>
              <MenuItem href={`/${locale}/pages/user-profile/connections`}>
                {dictionary['navigation'].connections}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].accountSettings}>
              <MenuItem href={`/${locale}/pages/account-settings/account`}>{dictionary['navigation'].account}</MenuItem>
              <MenuItem href={`/${locale}/pages/account-settings/security`}>
                {dictionary['navigation'].security}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/account-settings/billing-plans`}>
                {dictionary['navigation'].billingPlans}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/account-settings/notifications`}>
                {dictionary['navigation'].notifications}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/account-settings/connections`}>
                {dictionary['navigation'].connections}
              </MenuItem>
            </SubMenu>
            <MenuItem href={`/${locale}/pages/faq`}>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem href={`/${locale}/pages/pricing`}>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem href={`/${locale}/pages/misc/coming-soon`}>{dictionary['navigation'].comingSoon}</MenuItem>
              <MenuItem href={`/${locale}/pages/misc/under-maintenance`}>
                {dictionary['navigation'].underMaintenance}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/404-not-found`}>
                {dictionary['navigation'].pageNotFound404}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/401-not-authorized`}>
                {dictionary['navigation'].notAuthorized401}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].authPages}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href={`/${locale}/pages/auth/login-v1`}>{dictionary['navigation'].loginV1}</MenuItem>
              <MenuItem href={`/${locale}/pages/auth/login-v2`}>{dictionary['navigation'].loginV2}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem href={`/${locale}/pages/auth/register-v1`}>{dictionary['navigation'].registerV1}</MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-v2`}>{dictionary['navigation'].registerV2}</MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-multi-steps`}>
                {dictionary['navigation'].registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v1`}>
                {dictionary['navigation'].verifyEmailV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v2`}>
                {dictionary['navigation'].verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v1`}>
                {dictionary['navigation'].forgotPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v2`}>
                {dictionary['navigation'].forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v1`}>
                {dictionary['navigation'].resetPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v2`}>
                {dictionary['navigation'].resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v1`}>{dictionary['navigation'].twoStepsV1}</MenuItem>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v2`}>{dictionary['navigation'].twoStepsV2}</MenuItem>
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
            href='http://localhost:3001/docs/forms-tables/intro#form-elements'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].formELements}
          </MenuItem>
          <MenuItem
            href='http://localhost:3001/docs/tables/mui-table'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].muiTables}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu label={dictionary['navigation'].charts}>
            <MenuItem href={`/${locale}/charts/echarts`}>{dictionary['navigation'].echarts}</MenuItem>
            <MenuItem href={`/${locale}/charts/recharts`}>{dictionary['navigation'].recharts}</MenuItem>
            <MenuItem href={`/${locale}/charts/apex-charts`}>{dictionary['navigation'].apex}</MenuItem>
            <MenuItem href={`/${locale}/charts/echarts-advance`}>Echarts Advance</MenuItem>
          </SubMenu>
          <MenuItem
            href='http://localhost:3001/docs/user-interface/intro'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].userInterface}
          </MenuItem>
          <MenuItem
            href='http://localhost:3001/docs/components/intro'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].components}
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
              href='https://themeselection.com/'
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

      {/* <Menu popoutMenuOffset={{ mainAxis: 10 }} menuItemStyles={{ ...menuItemStyles(settings, theme) }}>
        {generateVerticalMenu(menuData(locale), locale)}
      </Menu> */}
    </PerfectScrollbar>
  )
}

export default VerticalMenu
