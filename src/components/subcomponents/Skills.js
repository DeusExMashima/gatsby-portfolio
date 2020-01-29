import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


export default function Skills() {
    const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        nodes {
          icon
        }
      }
    }
  `)
  
    return (
        <div className="d-flex flex-wrap justify-content-around mt-4">
            {
                data.allSkillsJson.nodes.map(icon=> (<SingleSkill icon={icon} />))
            }
        </div>
    )
}

function SingleSkill(props){
    console.log(props)
    return (
        <span className="bg-dark rounded-circle">
            <i className={`skill ${props.icon.icon} m-4`} />
        </span>
    )
}