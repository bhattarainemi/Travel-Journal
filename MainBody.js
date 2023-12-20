import React from "react"
import CardComponent from "./CardComponent.js"
import data from "./data.js"

export default function MainBody(){
    const cards = data.map(item => {
    return (
        <CardComponent
            key={item.location}
            item={item}
        />
    )
    }) 
    return(
        <div>
            <div className="mainbody-container">
                {cards}
            </div>
        </div>
    )
}