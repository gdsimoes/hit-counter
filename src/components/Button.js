"use client";
import React from "react";

function Button({ hits }) {
    const [isCensored, setIsCensored] = React.useState(true);

    return (
        <button className={isCensored ? "censored" : null} onClick={() => setIsCensored(!isCensored)}>
            {hits}
        </button>
    );
}

export default Button;
