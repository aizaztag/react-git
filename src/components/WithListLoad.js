import React from 'react';
import List from './Listing';


const WithListLoad = (Component) => {
    return function WihLoadingComponent( props ) {
        if (!props.isLoading){
            return <List repos={props.repos}/>;           
        }
        return (
            <div>
                 <p style={{ textAlign: 'center', fontSize: '30px' }}>
                    Hold on, fetching data may take some time :)
                </p>
            </div>
        );
    }
};

export default WithListLoad;