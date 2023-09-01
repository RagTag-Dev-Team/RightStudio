// Do not remove this following 'use client' else SubMenu rendered in vertical menu on smaller screen will not work.
'use client'

// Next Imports
import { usePathname } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Component Imports from @menu-package
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu-package/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Util Imports
import { getLocale } from '@/utils/get-locale'
import { getDictionary } from '@/utils/get-dictionary'

// import { generateHorizontalMenu } from '@/utils/menuUtils'

// Style Imports
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/HorizontalMenuData'

const HorizontalMenu = () => {
  // Hooks
  const theme = useTheme()
  const pathName = usePathname()
  const { settings } = useSettings()

  // Get locale from pathname
  const locale = getLocale(pathName)

  // Get dictionary based on locale
  const dictionary = getDictionary(locale)

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(),
        backgroundColor: 'var(--mui-palette-background-paper)'
      }}
    >
      <Menu
        menuItemStyles={menuItemStyles(settings, theme)}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
          alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
        }}
      >
        <SubMenu label={dictionary['navigation'].dashboards}>
          <MenuItem>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>
        <MenuItem href='/about'>About</MenuItem>
        <SubMenu label={dictionary['navigation'].apps}>
          <MenuItem href='/email'>{dictionary['navigation'].email}</MenuItem>
          <MenuItem href='/chat'>{dictionary['navigation'].chat}</MenuItem>
          <MenuItem>{dictionary['navigation'].calendar}</MenuItem>
          <SubMenu label={dictionary['navigation'].invoice}>
            <MenuItem>{dictionary['navigation'].list}</MenuItem>
            <MenuItem>{dictionary['navigation'].preview}</MenuItem>
            <MenuItem>{dictionary['navigation'].edit}</MenuItem>
            <MenuItem>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user}>
            <MenuItem href='/user-list'>{dictionary['navigation'].list}</MenuItem>
            <SubMenu label={dictionary['navigation'].view}>
              <MenuItem href='/user-details'>{dictionary['navigation'].account}</MenuItem>
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
        </SubMenu>
        <SubMenu label={dictionary['navigation'].ui}>
          <MenuItem>{dictionary['navigation'].typography}</MenuItem>
          <MenuItem>{dictionary['navigation'].icons}</MenuItem>
          <SubMenu label={dictionary['navigation'].cards}>
            <MenuItem>{dictionary['navigation'].basic}</MenuItem>
            <MenuItem>{dictionary['navigation'].actions}</MenuItem>
          </SubMenu>
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
          <SubMenu label={dictionary['navigation'].authPages}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href='/pages/auth/login-v1'>{dictionary['navigation'].loginV1}</MenuItem>
              <MenuItem href='/pages/auth/login-v2'>{dictionary['navigation'].loginV2}</MenuItem>
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
        </SubMenu>
        <SubMenu label={dictionary['navigation'].forms}>
          <MenuItem>{dictionary['navigation'].formLayouts}</MenuItem>
          <MenuItem>{dictionary['navigation'].formValidation}</MenuItem>
          <MenuItem>{dictionary['navigation'].formWizard}</MenuItem>
        </SubMenu>
        <MenuItem href='/tables'>Tables</MenuItem>
        <SubMenu label={dictionary['navigation'].charts}>
          <MenuItem>{dictionary['navigation'].apex}</MenuItem>
          <MenuItem>{dictionary['navigation'].recharts}</MenuItem>
          <MenuItem>{dictionary['navigation'].echarts}</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].others}>
          <MenuItem>{dictionary['navigation'].accessControl}</MenuItem>
          <SubMenu label={dictionary['navigation'].menuLevels}>
            <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevel2}>
              <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
          <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />}>{dictionary['navigation'].raiseSupport}</MenuItem>
          <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />}>
            {dictionary['navigation'].documentation}
          </MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu
        menuItemStyles={{ button: { paddingBlock: '12px' } }}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
          alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
        }}
      >
        {generateHorizontalMenu(menuData(locale), locale)}
      </Menu> */}
    </HorizontalNav>
  )
}

export default HorizontalMenu
