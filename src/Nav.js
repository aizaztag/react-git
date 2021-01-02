import React ,{ useContext} from 'react';
import {MovieContext} from './MovieListContext'


const  Nav = () => {
    const [movies]  = useContext(MovieContext);

    return (
        <div>
            <div >
               <h2> Aizaz </h2>
               <p> list of movies : {movies.length} </p>
            </div>
        </div>
    );
}

export default Nav;