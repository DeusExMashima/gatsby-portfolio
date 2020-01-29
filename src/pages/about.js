import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import { useStaticQuery, graphql } from "gatsby"
import Skills from "../components/subcomponents/Skills"

export default function About() {

    const data = useStaticQuery(graphql`
    {
        allAboutJson {
          nodes {
            content
          }
        }
      }
    `)
  const aboutContent = data.allAboutJson.nodes
  console.log(aboutContent)
    
  return (
    <Layout>

        <SEO title="About" />
        <h2 className="mb-4">About</h2>
        {
            aboutContent.map(i=> (<p> {i.content} </p>))
        }
        <Skills />
    </Layout>
    )
}
