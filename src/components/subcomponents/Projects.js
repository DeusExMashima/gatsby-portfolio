import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectCard from './ProjectCard'


export default function Projects() {
    
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
        allPortfolioJson {
          nodes {
            description
            githubURL
            caption
            id
            image
            role
            slug
            teamOrIndividual
            technology
            title
            url
            project_id
          }
        }
      }
        `)
    const projectList = data.allPortfolioJson.nodes

    return (
        <div className="d-flex flex-wrap mt-5 justify-content-between">

            {
                projectList.map(project => {

                    const [ image ] = data.allImageSharp.edges.filter(el => el.node.fluid.originalName === project.image)
                    return (
                        <>
                            <ProjectCard project={project} imageData={image} />
                        </>
                    )
                })
            }

        </div>
    )
}
