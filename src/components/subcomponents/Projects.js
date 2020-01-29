import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectCard from './ProjectCard'


export default function Projects() {
    
    const data = useStaticQuery(graphql`
        {
            allPortfolioJson {
                nodes {
                    description
                    githubURL
                    image
                    projectType
                    caption
                    role
                    slug
                    teamOrIndividual
                    technology
                    title
                    url
                }
            }
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
    const projectList = data.allPortfolioJson.nodes

    return (
        <div className="d-flex flex-wrap">

            {
                projectList.map(project => {

                    const [ image ] = data.allImageSharp.edges.filter(el => el.node.fluid.originalName === project.image)
                    console.log(project)
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
