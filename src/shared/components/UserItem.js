import React from 'react';
import "./UserItem.css";
import UserAvatar from '../UIElements/Avatar/Avatar';
import { Link }from 'react-router-dom';
import Card from '../UIElements/Card/Card';

const UsersItem = (props) =>{
    console.log(props);
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <UserAvatar image={props.image} alt={props.name}
                        />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.placesCount}{props.placesCount ===1 ? ' Place' : ' Places'} </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default UsersItem;