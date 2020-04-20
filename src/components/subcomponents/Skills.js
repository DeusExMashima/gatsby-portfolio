import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Skills() {
    const data = useStaticQuery(graphql`
    {
      allMySkillsJson {
        edges {
          node {
            id
            icon
            skill
          }
        }
      }
    }
  `)
    const skills = data.allMySkillsJson.edges

    return (
        <div className="d-flex flex-wrap justify-content-around mt-4">
            {
                skills.map(skill=> (<SingleSkill icon={skill.node.icon} />))
            }
        </div>
    )
}

function SingleSkill(props){
    return (
        <span className="bg-dark rounded-circle">
            <i className={`skill ${props.icon} m-4`} />
        </span>
    )
}