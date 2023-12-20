import React from "react"
import data from "./data.js"


export default function CardComponent(props){
    return (
        <div>
            <div className="card-content-holder">
                <img src = {props.item.imageUrl} alt="image" className = "image-card"/>
                <div>
                    <div className = "location-container">
                        <i className="fas fa-light fa-location-dot"></i>
                        <p className="location">{props.item.location}</p>
                        <p className="google-map-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <h1 className="title">{props.item.title}</h1>
                    <span className="dates">{props.item.startDate}-{props.item.endDate}</span>
                    <p className="desc">{props.item.description}</p>
                </div>
            </div>
            
        </div>
    )
}