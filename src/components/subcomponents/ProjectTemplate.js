import React from 'react'
import { Badge, Button, Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout/Layout'
import SEO from '../layout/SEO'


export default function ProjectTemplate({ pageContext }) {
    const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            fluid {
                ...GatsbyImageSharpFluid
                originalName
            }
          }
        }
      }
    }
  `)

    const [ image ] = data.allImageSharp.edges.filter(el => el.node.fluid.originalName === pageContext.image)
    return (
        <Layout>
            <SEO title={pageContext.title} />
            <Container>
              <div className="title mb-4">
                <h3 style={{fontSize: `2.4rem`}}>{pageContext.title}<Badge style={{fontSize: `1rem`}}className="ml-4" variant="info">{pageContext.teamOrIndividual} Project</Badge></h3>
                <p style={{color: `gray`}}>{pageContext.caption}</p>
              </div>
            <Row lg={8} md={12} className="mt-4">
            <Col>
            
            <Img fluid={image.node.fluid} />
            
            </Col>
            
            
            
            <Col className="p-3" lg={4} md={12}>
            <h4>Description</h4>
            <p>{pageContext.description}</p>
      
            <h4>Role</h4>
            <p>{pageContext.role}</p>
            <h4>Technology Used</h4>
            {
                pageContext.technology.map(tech => (<><Badge variant="info" className="mr-1" style={{fontSize: `1rem`}}>{tech}</Badge>{` `}</>))
            }
            <div className="mt-4">
            <Button href={pageContext.url} className="mr-4 mb-2 mt-2" variant="secondary"><i className="fas fa-globe m-1"/>Live Demo</Button>
            <Button href={pageContext.githubURL} className="mb-2 mt-2" variant="secondary"><i className="fab fa-github-square m-1"/>Github</Button>
            </div>
            <Button href={`https://mashima-portfolio.netlify.com/portfolio`} className="mt-4" variant="dark" style={{width: `100%`}}>Back to Portfolio</Button>
            </Col>
            </Row>
            </Container>
        </Layout>
    )
}
