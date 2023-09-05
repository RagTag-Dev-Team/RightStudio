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
      <Menu popoutMenuOffset={{ mainAxis: 10 }} menuItemStyles={{ ...menuItemStyles(settings, theme) }}>
        <SubMenu label={dictionary['navigation'].dashboards}>
          <MenuItem>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>
        <MenuItem href={`/${locale}/about`}>About</MenuItem>
        <MenuSection label={dictionary['navigation'].appsPages}>
          <MenuItem href={`/${locale}/email`}>{dictionary['navigation'].email}</MenuItem>
          <MenuItem href={`/${locale}/chat`}>{dictionary['navigation'].chat}</MenuItem>
          <MenuItem>{dictionary['navigation'].calendar}</MenuItem>
          <SubMenu label={dictionary['navigation'].invoice}>
            <MenuItem>{dictionary['navigation'].list}</MenuItem>
            <MenuItem>{dictionary['navigation'].preview}</MenuItem>
            <MenuItem>{dictionary['navigation'].edit}</MenuItem>
            <MenuItem>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user}>
            <MenuItem href={`/${locale}/user-list`}>{dictionary['navigation'].list}</MenuItem>
            <SubMenu label={dictionary['navigation'].view}>
              <MenuItem href={`/${locale}/user-details`}>{dictionary['navigation'].account}</MenuItem>
              <MenuItem>{dictionary['navigation'].security}</MenuItem>
              <MenuItem>{dictionary['navigation'].billingPlans}</MenuItem>
              <MenuItem>{dictionary['navigation'].notifications}</MenuItem>
              <MenuItem>{dictionary['navigation'].connections}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].rolesPermissions}>
            <MenuItem>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].pages}>
            <SubMenu label={dictionary['navigation'].userProfile}>
              <MenuItem>{dictionary['navigation'].profile}</MenuItem>
              <MenuItem>{dictionary['navigation'].teams}</MenuItem>
              <MenuItem>{dictionary['navigation'].projects}</MenuItem>
              <MenuItem>{dictionary['navigation'].connections}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].accountSettings}>
              <MenuItem>{dictionary['navigation'].account}</MenuItem>
              <MenuItem>{dictionary['navigation'].security}</MenuItem>
              <MenuItem>{dictionary['navigation'].billingPlans}</MenuItem>
              <MenuItem>{dictionary['navigation'].notifications}</MenuItem>
              <MenuItem>{dictionary['navigation'].connections}</MenuItem>
            </SubMenu>
            <MenuItem>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem>{dictionary['navigation'].comingSoon}</MenuItem>
              <MenuItem>{dictionary['navigation'].underMaintenance}</MenuItem>
              <MenuItem>{dictionary['navigation'].pageNotFound404}</MenuItem>
              <MenuItem>{dictionary['navigation'].notAuthorized401}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].authPages}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href={`/${locale}/pages/auth/login-v1`}>{dictionary['navigation'].loginV1}</MenuItem>
              <MenuItem href={`/${locale}/pages/auth/login-v2`}>{dictionary['navigation'].loginV2}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem>{dictionary['navigation'].registerV1}</MenuItem>
              <MenuItem>{dictionary['navigation'].registerV2}</MenuItem>
              <MenuItem>{dictionary['navigation'].registerMultiSteps}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem>{dictionary['navigation'].verifyEmailV1}</MenuItem>
              <MenuItem>{dictionary['navigation'].verifyEmailV2}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem>{dictionary['navigation'].forgotPasswordV1}</MenuItem>
              <MenuItem>{dictionary['navigation'].forgotPasswordV2}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem>{dictionary['navigation'].resetPasswordV1}</MenuItem>
              <MenuItem>{dictionary['navigation'].resetPasswordV2}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem>{dictionary['navigation'].twoStepsV1}</MenuItem>
              <MenuItem>{dictionary['navigation'].twoStepsV2}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].wizardExamples}>
            <MenuItem>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem>{dictionary['navigation'].propertyListing}</MenuItem>
            <MenuItem>{dictionary['navigation'].createDeal}</MenuItem>
          </SubMenu>
          <MenuItem>{dictionary['navigation'].dialogExamples}</MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].userInterface}>
          <MenuItem>{dictionary['navigation'].typography}</MenuItem>
          <MenuItem>{dictionary['navigation'].icons}</MenuItem>
          <MenuItem>Icons Test</MenuItem>
          <SubMenu label={dictionary['navigation'].cards}>
            <MenuItem>{dictionary['navigation'].basic}</MenuItem>
            <MenuItem>{dictionary['navigation'].actions}</MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].forms}>
          <MenuItem href='/forms/form-layouts'>{dictionary['navigation'].formLayouts}</MenuItem>
          <MenuItem href='/forms/form-validation'>{dictionary['navigation'].formValidation}</MenuItem>
          <MenuItem href='/forms/form-wizard'>{dictionary['navigation'].formWizard}</MenuItem>
        </MenuSection>
        <MenuItem href={`/${locale}/tables`}>Tables</MenuItem>
        <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu label={dictionary['navigation'].charts}>
            <MenuItem href='/charts/apex-charts'>{dictionary['navigation'].apex}</MenuItem>
            <MenuItem href='/charts/recharts'>{dictionary['navigation'].recharts}</MenuItem>
            <MenuItem href='/charts/echarts'>{dictionary['navigation'].echarts}</MenuItem>
            <MenuItem href='/charts/echarts-advance'>Echarts Advance</MenuItem>
          </SubMenu>
          <MenuItem>{dictionary['navigation'].accessControl}</MenuItem>
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
            <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />}>
              {dictionary['navigation'].raiseSupport}
            </MenuItem>
            <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />}>
              {dictionary['navigation'].documentation}
            </MenuItem>
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
