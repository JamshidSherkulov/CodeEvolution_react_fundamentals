import React from "react";


function FunctionClick () {

    function clickHandler() {
        console.log('function comp clicked')
    }

    return(
        <div>
            <button onClick={clickHandler}>1.Click</button>
        </div>
    )
}

export default FunctionClick;