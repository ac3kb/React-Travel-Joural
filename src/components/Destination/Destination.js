import React from "react";
import './Destination.css';
import pin from "../../images/pin.png";

function Destination(props){
    return(
        <div className="container-destination">
            <img className="img-main" src={props.imageUrl}/>
            <div className="container-content">
                <div className="container-pin">
                    <img className="pin" src={pin}/>
                    <p className="pin-text">{props.location.toUpperCase()}</p>
                    <a className="link" href={props.googleMapsUrl}><p className="link-text">View on Google Maps</p></a>
                </div>
                <div className="destination">
                    <h1>{props.title}</h1>
                </div>
                <div className="container-dates">
                    <p><span>{props.startDate}</span> - <span>{props.endDate}</span></p>
                </div>
                <p className="container-info">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Destination;