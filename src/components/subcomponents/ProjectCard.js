import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

export default function ProjectPreview({ project, imageData}) {

    return (
        <>
        
        <div className="project-card mx-auto mb-5">
            <div className="rounded-lg overflow-hidden shadow-lg project-img">
                <Link to={`/${project.slug}`}>
                    <Img fluid={imageData.node.fluid} alt={`Screen Shot of ${project.title}'s website`} />
                </Link>
            </div>
            <h4 style={{fontSize: '22px'}}className="mt-3 mb-3 text-secondary">
                <Link className="project-title-link" to={`/${project.slug}`}>{project.title}</Link>
            </h4>
            <p style={{fontSize: '16px'}} className="mb-3">{project.caption}</p>
            <div className="d-flex justify-content-start">
                <Button size="sm" className="button mr-2" variant="outline-secondary" href={`http://www.mashimabutton.com/${project.slug}`}>More Info...</Button>
                <Button size="sm" className="button mr-2" variant="outline-secondary" href={`${project.githubURL}`}>Github</Button>
                <Button size="sm" className="button mr-2" variant="outline-secondary" href={`${project.url}`}>Demo</Button>
            </div>
        </div>
        
        </>
    )
}
