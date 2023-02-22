import React from "react";

function People({person}) {
  return (
    <div>
        <h2>I'm {person.name}. I'm {person.age} years old. I know {person.skill}</h2>
    </div>
  )
}

export default People
