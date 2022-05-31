import React from "react";
import Card from "../../shared/components/UIELement/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css"

const PlaceList = (props) => {

    
    if (props.items.length === 0) {
        return (
            <Card>
                <h2>No place found. maybe create one</h2>
                <button>Share Place</button>
            </Card>
        )
    }

    return (
        <ul className="place-list">
            {props.items.map((places) => <PlaceItem key={places.id} id={places.id} image={places.imageUrl} title={places.title}
            description={places.description} address={places.address} creatorId={places.creatorId}  coordinates={places.location}
            />)}

        </ul>)


}

export default PlaceList;