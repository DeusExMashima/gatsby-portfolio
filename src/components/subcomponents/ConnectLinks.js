import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from 'react-bootstrap'

export default function ConnectLinks() {

    const data = useStaticQuery(graphql`
        {
            allContactJson {
                nodes {
                    icon
                    contactId
                    name
                    url
                }
            }
        }
    `)

    const socialMedia = data.allContactJson.nodes
    console.log(socialMedia)

    return (
        <div className="mt-4 bg-dark p-4 rounded-lg">
            <p>You are also welcomed to connect with me by the methods below:</p>
            <div className="d-flex flex-wrap flex-column justify-content-center">
            {
                socialMedia.map(el => <Connect el={el}/>)
            }
            </div>
        </div>
    )
}

function Connect(el){
    console.log(el)

    return(
        <div className="socialLink rounded" id={el.el.contactId}>
            <Button href={el.el.url} variant="primary" style={{width: `150px`}}>
                <i className={el.el.icon} /> {el.el.name} 
            </Button>
        </div>
    )
}