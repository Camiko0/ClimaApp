import React, {Component} from 'react';
import './styles.css';


const Location = ( {city} ) => {

    //destructuring//
   // const {city} = props;

   return ( <div className="locationCont">
                <h1>
                    {city}
                </h1>
            </div> ); 
};

export default Location;