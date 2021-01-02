import React  from 'react';

const  Movie = (props) => {
    return (
        <div>
            <li >
                name : {props.name}
                price : {props.price}
            </li>
        </div>
    );
}

export default Movie;