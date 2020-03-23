import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Img from 'gatsby-image'

export default function ProjectPreview({ project, imageData}) {

    return (
        <>
        
        <Card className="projectCard bg-dark m-4 mx-auto" style={{width:`30rem`}}>
            <Img fluid={imageData.node.fluid} alt="Screen Shot of the project"/>
            <Card.Body>
            <Card.Title variant="h4" className="text-secondary">{project.title}</Card.Title>
            <Card.Subtitle>{project.caption}</Card.Subtitle>
            <div className="d-flex justify-content-around m-3">
                <Button variant="outline-secondary" href={`http://www.mashimabutton.com/${project.slug}`}>More Info...</Button>
                <Button variant="outline-secondary" href={`${project.githubURL}`}>Github</Button>
                <Button variant="outline-secondary" href={`${project.url}`}>Demo</Button>
            </div>
            </Card.Body>
        </Card>
        
        </>
    )
}
