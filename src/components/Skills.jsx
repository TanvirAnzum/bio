import React from 'react';
function Skills(props) {
  console.log(props);
  return (
    <div className="skills">
      <ul>
        {
          props.skills.map(skill => (
            <li key={skill}>
              {skill}
            </li>
          ))

        }
      </ul>
    </div>
  )
}

export default Skills