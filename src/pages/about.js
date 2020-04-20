import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/layout/SEO"
import { useStaticQuery, graphql } from "gatsby"
import Skills from "../components/subcomponents/Skills"
import MyImg from "../components/subcomponents/MyImg"
import { Container, Row, Col } from 'react-bootstrap'
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
        <Container>
          <Row>
            <Col md={12} lg={5}><MyImg /></Col>
            <Col md={12} lg={7}>
              <div className="about-text m-3">
                {
                aboutContent.map(i=> (<p> {i.content} </p>))
                }
              </div>
            </Col>
          </Row>
        </Container>
        <Skills />
    </Layout>
    )
}
