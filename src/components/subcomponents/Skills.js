import React from 'react'
import skills from '../../data/mySkills.json'


export default function Skills() {

  
    return (
        <div className="d-flex flex-wrap justify-content-around mt-4">
            {
                skills.map(skill=> (<SingleSkill icon={skill.icon} />))
            }
        </div>
    )
}

function SingleSkill(props){
    console.log(props)
    return (
        <span className="bg-dark rounded-circle">
            <i className={`skill ${props.icon} m-4`} />
        </span>
    )
}