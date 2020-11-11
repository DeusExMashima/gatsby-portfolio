import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

export default function ProjectPreview({ project, imageData}) {

    return (
        <>
        
        <div className="col-sm-12 col-md-6 col-lg-4 mb-5 text-center">
            <div className="rounded-lg overflow-hidden shadow-lg project-img">
                <Link to={`/${project.slug}`}>
                    <Img fluid={imageData.node.fluid} alt={`Screen Shot of ${project.title}'s website`} />
                </Link>
            </div>
            <h4 style={{fontSize: '20px'}}className="mt-3 mb-3 text-primary">
                <Link className="project-title-link" to={`/${project.slug}`}>{project.title}</Link>
            </h4>
            <p>{project.technology.map(el => <span className="badge badge-sm badge-light m-1"> {el} </span>)}</p>
            <p style={{fontSize: '16px'}} className="mb-3">{project.caption}</p>
            <div className="d-flex justify-content-center">
                <Button size="sm" className="button mr-2" variant="outline-primary" href={`http://www.mashimabutton.com/${project.slug}`}>More Info...</Button>
                <Button size="sm" className="button mr-2" variant="outline-warning" href={`${project.githubURL}`}>GitHub</Button>
                <Button size="sm" className="button mr-2" variant="outline-warning" href={`${project.url}`}>Demo</Button>
            </div>
        </div>
        
        </>
    )
}
