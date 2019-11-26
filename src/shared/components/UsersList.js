import React from 'react';
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from '../UIElements/Card/Card';

const UsersList = (props) =>{
    console.log(props);
    if(props.items.length === 0){
        return(<Card className="center">
                <h2>No Users found</h2>
            </Card>);
    }else{
        return (
            <ul className="users-list">
                {props.items.map(user =>(
                    <UserItem 
                        key={user.id} 
                        id={user.id} 
                        image={user.image}
                        placesCount={user.places.length}
                        name={user.name}
                    />
                ))}
            </ul>
        )
    }
}

export default UsersList;