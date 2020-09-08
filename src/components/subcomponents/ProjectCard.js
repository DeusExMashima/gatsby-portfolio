import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function ProjectPreview({ project, imageData }) {

    return (
        <>
        
        <Card style={{width: '20rem'}} className="project-card mx-auto mb-5 bg-dark">
            <div className="rounded-lg overflow-hidden shadow-lg project-img">
                <Link to={`/${project.slug}`}>
                    <Img fluid={imageData.node.fluid} alt={`Screen Shot of ${project.title}'s website`} />
                </Link>
            </div>
            <Card.Body>
            <h4 style={{fontSize: '22px'}}className="text-secondary">
                <Link className="project-title-link" to={`/${project.slug}`}>{project.title}</Link>
            </h4>
            { project.technology.map(el => <><Badge pill variant="success">{ el }</Badge>{' '}</>) }
            <p style={{fontSize: '16px'}} className="mb-3 mt-3">{project.caption}</p>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-start">
                <Button size="sm" className="button mr-2" variant="warning" href={`http://www.mashimabutton.com/${project.slug}`}>More Info...</Button>
                <Button size="sm" className="button mr-2" variant="primary" href={`${project.githubURL}`}>Github</Button>
                <Button size="sm" className="button mr-2" variant="primary" href={`${project.url}`}>Demo</Button>
            </Card.Footer>
        </Card>
        
        </>
    )
}
