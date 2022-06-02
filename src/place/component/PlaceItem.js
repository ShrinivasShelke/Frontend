import React from "react";
import Button from "../../shared/components/UIELement/Button";
import Card from "../../shared/components/UIELement/Card";
import "./PlaceItem.css"


const PlaceItem = (props) => {
    console.log(props)
    
    return (
        <li className="place-item ">
            <Card className="place-item__content ">
                <div className="place-item__image ">
                    <img src={props.image} alt={props.title} />

                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions ">
                    <Button>View on map</Button>
                    <Button to={`/place/${props.id}`}>Edit</Button> 
                </div>
            </Card>

        </li>

    )
}

export default PlaceItem;