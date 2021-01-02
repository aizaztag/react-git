import React , {useState , createContext} from 'react';

  export const MovieContext =  createContext();

  export const MovieProvider  = (props) => {
    const [movies , setMovies] = useState([
        {
            name:"movie 1",
            price:"$20",
            id:43
        },{
            name:"movie 2",
            price:"$23",
            id:34343
        },{
            name:"movie 3",
            price:"$33",
            id:43434465
        },{
            name:"movie 4",
            price:"$320",
            id:434324
        },{
            name:"movie 5",
            price:"$2",
            id:43433334
        }
    ]);

         return(
                 <MovieContext.Provider value={[movies , setMovies]}>
                     {props.children}
                 </MovieContext.Provider>
         );
   }
   
    