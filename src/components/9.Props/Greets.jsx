import React from "react";


const Greet = (props) => {
    // props.name = "John" // We cannot change props directly
    
    // Destructuring in functional component
    const{name, hero, children} = props
    return (
        <React.Fragment>
            <h1>Hello { name } and { hero }</h1>
            { children }
        </React.Fragment>
    )
}

export default Greet;