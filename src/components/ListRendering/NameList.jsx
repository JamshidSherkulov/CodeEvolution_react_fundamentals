import React from "react";
import People from "./People";

function NameList() {
    const people = [    
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: 'React'
        },
        {
            id: 3,
            name: "Clark",
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Diana",
            age: 28,
            skill: 'Vue'
        },
      ]

    return (
        people.map((person, index) => {
            return <People person={ person } /> // Refactoring
        })
    )
}

export default NameList;
