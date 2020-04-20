import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function MyImg(props){
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
  const [ image ] = data.allImageSharp.edges.filter(el => el.node.fluid.originalName === "mashima-pic.jpg")
    return(
        <> 
          <div className="my-img rounded-lg overflow-hidden">
            <Img fluid={image.node.fluid} alt="Mashima Button's Photo" />
          </div>
        </>
    )
}