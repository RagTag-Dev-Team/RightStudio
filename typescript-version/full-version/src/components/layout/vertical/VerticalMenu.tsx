'use client'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import { useTranslation } from 'react-i18next'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports from @menu-package
import { Menu, SubMenu, MenuItem, MenuSection } from '../../../@menu-package/vertical-menu'

// Icon Imports
import LinkExternalIcon from '../../../@layouts/svg/LinkExternal'

// Hook Imports
import useSettings from '../../../@core/hooks/useSettings'

// Util Imports
// import { generateVerticalMenu } from '../../../@menu-package/utils/menuUtils'

// Style Imports
import menuItemStyles from '../../../@core/styles/vertical/menuItemStyles'

// Menu Data Imports
// import menuData from '../../../data/navigation/VerticalMenuData'

const VerticalMenu = () => {
  // Hooks
  const theme = useTheme()
  const { t } = useTranslation()
  const { settings } = useSettings()

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <PerfectScrollbar options={{ wheelPropagation: false }}>
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu popoutMenuOffset={{ mainAxis: 10 }} menuItemStyles={{ ...menuItemStyles(settings, theme) }}>
        {/* This is how you will normally render submenu */}
        <SubMenu label={t('navigation.dashboards')}>
          <MenuItem>{t('navigation.analytics')}</MenuItem>
          <MenuItem>{t('navigation.eCommerce')}</MenuItem>
        </SubMenu>
        <MenuItem href='/about'>About</MenuItem>
        {/* This is how you will normally render menu section */}
        <MenuSection label={t('navigation.appsPages')}>
          {/* This is how you will normally render menu item */}
          <MenuItem href='/email'>{t('navigation.email')}</MenuItem>
          <MenuItem href='/chat'>{t('navigation.chat')}</MenuItem>
          <MenuItem>{t('navigation.calendar')}</MenuItem>
          <SubMenu label={t('navigation.invoice')}>
            <MenuItem>{t('navigation.list')}</MenuItem>
            <MenuItem>{t('navigation.preview')}</MenuItem>
            <MenuItem>{t('navigation.edit')}</MenuItem>
            <MenuItem>{t('navigation.add')}</MenuItem>
          </SubMenu>
          <SubMenu label={t('navigation.user')}>
            <MenuItem href='/user-list'>{t('navigation.list')}</MenuItem>
            <SubMenu label={t('navigation.view')}>
              <MenuItem href='/user-details'>{t('navigation.account')}</MenuItem>
              <MenuItem>{t('navigation.security')}</MenuItem>
              <MenuItem>{t('navigation.billingPlans')}</MenuItem>
              <MenuItem>{t('navigation.notifications')}</MenuItem>
              <MenuItem>{t('navigation.connection')}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={t('navigation.rolesPermissions')}>
            <MenuItem>{t('navigation.roles')}</MenuItem>
            <MenuItem>{t('navigation.permissions')}</MenuItem>
          </SubMenu>
          <SubMenu label={t('navigation.pages')}>
            <SubMenu label={t('navigation.userProfile')}>
              <MenuItem>{t('navigation.profile')}</MenuItem>
              <MenuItem>{t('navigation.teams')}</MenuItem>
              <MenuItem>{t('navigation.projects')}</MenuItem>
              <MenuItem>{t('navigation.connections')}</MenuItem>
            </SubMenu>
            <SubMenu label={t('navigation.accountSettings')}>
              <MenuItem>{t('navigation.account')}</MenuItem>
              <MenuItem>{t('navigation.security')}</MenuItem>
              <MenuItem>{t('navigation.billing')}</MenuItem>
              <MenuItem>{t('navigation.notifications')}</MenuItem>
              <MenuItem>{t('navigation.connections')}</MenuItem>
            </SubMenu>
            <MenuItem>{t('navigation.faq')}</MenuItem>
            <MenuItem>{t('navigation.helpCenter')}</MenuItem>
            <MenuItem>{t('navigation.pricing')}</MenuItem>
            <SubMenu label={t('navigation.miscellaneous')}>
              <MenuItem>{t('navigation.comingSoon')}</MenuItem>
              <MenuItem>{t('navigation.underMaintenance')}</MenuItem>
              <MenuItem>{t('navigation.pageNotFound404')}</MenuItem>
              <MenuItem>{t('navigation.notAuthorized401')}</MenuItem>
              <MenuItem>{t('navigation.serverError500')}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={t('navigation.authPages')}>
            <SubMenu label={t('navigation.login')}>
              <MenuItem href='/login-v1'>{t('navigation.loginV1')}</MenuItem>
              <MenuItem href='/login-v2'>{t('navigation.loginV2')}</MenuItem>
              <MenuItem>{t('navigation.loginWithAppBar')}</MenuItem>
            </SubMenu>
            <SubMenu label={t('navigation.register')}>
              <MenuItem>{t('navigation.registerV1')}</MenuItem>
              <MenuItem>{t('navigation.registerV2')}</MenuItem>
              <MenuItem>{t('navigation.registerMultiSteps')}</MenuItem>
            </SubMenu>
            <SubMenu label={t('navigation.verifyEmail')}>
              <MenuItem>{t('navigation.verifyEmailV1')}</MenuItem>
              <MenuItem>{t('navigation.verifyEmailV2')}</MenuItem>
            </SubMenu>
            <SubMenu label={t('navigation.forgotPassword')}>
              <MenuItem>{t('navigation.forgotPasswordV1')}</MenuItem>
              <MenuItem>{t('navigation.forgotPasswordV2')}</MenuItem>
            </SubMenu>
            <SubMenu label={t('navigation.resetPassword')}>
              <MenuItem>{t('navigation.resetPasswordV1')}</MenuItem>
              <MenuItem>{t('navigation.resetPasswordV2')}</MenuItem>
            </SubMenu>
            <SubMenu label={t('navigation.twoSteps')}>
              <MenuItem>{t('navigation.twoStepsV1')}</MenuItem>
              <MenuItem>{t('navigation.twoStepsV2')}</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={t('navigation.wizardExamples')}>
            <MenuItem>{t('navigation.checkout')}</MenuItem>
            <MenuItem>{t('navigation.propertyListing')}</MenuItem>
            <MenuItem>{t('navigation.createDeal')}</MenuItem>
          </SubMenu>
          <MenuItem>{t('navigation.dialogExamples')}</MenuItem>
        </MenuSection>
        <MenuSection label={t('navigation.userInterface')}>
          <MenuItem>{t('navigation.typography')}</MenuItem>
          <MenuItem>{t('navigation.icons')}</MenuItem>
          <SubMenu label={t('navigation.cards')}>
            <MenuItem>{t('navigation.basic')}</MenuItem>
            <MenuItem>{t('navigation.advanced')}</MenuItem>
            <MenuItem>{t('navigation.actions')}</MenuItem>
          </SubMenu>
          <SubMenu label={t('navigation.components')}>
            <MenuItem>{t('navigation.accordion')}</MenuItem>
            <MenuItem>{t('navigation.alerts')}</MenuItem>
            <MenuItem>{t('navigation.avatars')}</MenuItem>
            <MenuItem>{t('navigation.badges')}</MenuItem>
            <MenuItem>{t('navigation.buttons')}</MenuItem>
            <MenuItem>{t('navigation.buttonGroup')}</MenuItem>
            <MenuItem>{t('navigation.chips')}</MenuItem>
            <MenuItem>{t('navigation.dialogs')}</MenuItem>
            <MenuItem>{t('navigation.list')}</MenuItem>
            <MenuItem>{t('navigation.menu')}</MenuItem>
            <MenuItem>{t('navigation.pagination')}</MenuItem>
            <MenuItem>{t('navigation.progress')}</MenuItem>
            <MenuItem>{t('navigation.ratings')}</MenuItem>
            <MenuItem>{t('navigation.snackbar')}</MenuItem>
            <MenuItem>{t('navigation.swiper')}</MenuItem>
            <MenuItem>{t('navigation.tabs')}</MenuItem>
            <MenuItem>{t('navigation.timeline')}</MenuItem>
            <MenuItem>{t('navigation.toasts')}</MenuItem>
            <MenuItem>{t('navigation.treeView')}</MenuItem>
            <MenuItem>{t('navigation.more')}</MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={t('navigation.formsTables')}>
          <SubMenu label={t('navigation.formElements')}>
            <MenuItem>{t('navigation.textField')}</MenuItem>
            <MenuItem>{t('navigation.select')}</MenuItem>
            <MenuItem>{t('navigation.checkbox')}</MenuItem>
            <MenuItem>{t('navigation.radio')}</MenuItem>
            <MenuItem>{t('navigation.customInputs')}</MenuItem>
            <MenuItem>{t('navigation.textarea')}</MenuItem>
            <MenuItem>{t('navigation.autocomplete')}</MenuItem>
            <MenuItem>{t('navigation.datePickers')}</MenuItem>
            <MenuItem>{t('navigation.switch')}</MenuItem>
            <MenuItem>{t('navigation.fileUploader')}</MenuItem>
            <MenuItem>{t('navigation.editor')}</MenuItem>
            <MenuItem>{t('navigation.slider')}</MenuItem>
            <MenuItem>{t('navigation.inputMask')}</MenuItem>
          </SubMenu>
          <MenuItem>{t('navigation.formLayouts')}</MenuItem>
          <MenuItem>{t('navigation.formValidation')}</MenuItem>
          <MenuItem>{t('navigation.formWizard')}</MenuItem>
          <MenuItem>{t('navigation.table')}</MenuItem>
          <MenuItem>{t('navigation.muiDataGrid')}</MenuItem>
        </MenuSection>
        <MenuSection label={t('navigation.chartsMisc')}>
          <SubMenu label={t('navigation.charts')}>
            <MenuItem>{t('navigation.apex')}</MenuItem>
            <MenuItem>{t('navigation.recharts')}</MenuItem>
            <MenuItem>{t('navigation.chartJS')}</MenuItem>
          </SubMenu>
          <MenuItem>{t('navigation.accessControl')}</MenuItem>
          <SubMenu label={t('navigation.others')}>
            <SubMenu label={t('navigation.menuLevels')}>
              <MenuItem>{t('navigation.menuLevel2.1')}</MenuItem>
              <SubMenu label={t('navigation.menuLevel2.2')}>
                <MenuItem>{t('navigation.menuLevel3.1')}</MenuItem>
                <MenuItem>{t('navigation.menuLevel3.2')}</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>{t('navigation.disabledMenu')}</MenuItem>
            <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />}>{t('navigation.raiseSupport')}</MenuItem>
            <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />}>{t('navigation.documentation')}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
      {/* <Menu popoutMenuOffset={{ mainAxis: 10 }} menuItemStyles={{ ...menuItemStyles(settings, theme) }}>
        {generateVerticalMenu(menuData())}
      </Menu> */}
    </PerfectScrollbar>
  )
}

export default VerticalMenu
