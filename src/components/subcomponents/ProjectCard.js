import React from 'react'
import { Card } from 'react-bootstrap'
import Img from 'gatsby-image'

export default function ProjectPreview({ project, imageData}) {

    return (
        <>
        
        <Card className="projectCard bg-dark m-4 mx-auto" style={{width:`30rem`}}>
        <a href={`http://localhost:8000/${project.slug}`}>
            <Img fluid={imageData.node.fluid} alt="Screen Shot of the project"/>
            <Card.Body>
            <Card.Title variant="h4" className="text-secondary">{project.title}</Card.Title>
            <Card.Subtitle>{project.caption}</Card.Subtitle>
            </Card.Body>
        </a>   
        </Card>
        
        </>
    )
}
