import React from "react";

function View(Nasa){
    return (
       <div>
        <h1>{Nasa.title}</h1>
        <span>{Nasa.date}</span>
        <p>{Nasa.explanation}</p>
        <img src={Nasa.url} alt={Nasa.title} />
       </div>
    )
}

export default View;