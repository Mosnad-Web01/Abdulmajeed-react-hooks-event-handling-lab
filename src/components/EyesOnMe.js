// Code EyesOnMe Component Here

import React from "react";

function EyesOnMe() {
    function handleClick() {
        console.log("Good!");
    }

    function handleBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button
            onClick={handleClick}
            onBlur={handleBlur}
        >
            Eyes on me
        </button>
    );
}

export default EyesOnMe;
