import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export const TemplateName = () => {
  const {siteConfig} = useDocusaurusContext()

  
return (
    <>{siteConfig.customFields.templateName}</>
  )
}

export const TemplateFullName = () => {
  const {siteConfig} = useDocusaurusContext()

  
return (
    <>{siteConfig.customFields.templateFullName}</>
  )
}
