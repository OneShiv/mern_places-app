import React from 'react';
import PlaceList from "../components/PlaceList.js";
import {useParams} from 'react-router-dom';

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of most famous sky scrappers of the world',
        address:'20 W 34th St, New York, NY 10001, United States',
        imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs0j3BfpmJEYYvc6BtR67ZLR4Icw8xSSu-FowXfERwvaQa4TVY',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
          },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:'One of most famous sky scrappers of the world',
        address:'20 W 34th St, New York, NY 10001, United States',
        imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs0j3BfpmJEYYvc6BtR67ZLR4Icw8xSSu-FowXfERwvaQa4TVY',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
          },
        creator:'u2'
    }
];
const UserPlaces = props =>{
    const userId = useParams().userId;
    let userFilteredPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return(
        <PlaceList items={userFilteredPlaces}/>
    )
}

export  default UserPlaces;