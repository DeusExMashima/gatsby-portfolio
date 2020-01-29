import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ description, lang, meta, title }) {
  const data = useStaticQuery(
    graphql`
    {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }  
    `
  )

  const siteDescription = description || data.site.siteMetadata.description
  const siteTitle = data.site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={
        {
          name: `description`,
          content: siteDescription,
        }}
    >
      <script src="https://kit.fontawesome.com/20764a4eaf.js" crossorigin="anonymous"></script>
    </Helmet>
  )
}