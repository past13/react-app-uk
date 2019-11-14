import React, { useState, useContext } from 'react';
import { LocationContext } from './LocationContext';


const AddLocation = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [postCode, setPostCode] = useState('');
    
    const [locations, setLocations] = useContext(LocationContext);   

    const updateName = (e) => {
        setName(e.target.value);
    }


    const addLocation = (e) => {
        e.preventDefault();
        // let id = Math.max.apply(Math, movies.map(function(o) { 
        //     return o.id + 1; 
        // }))

    }

    return (
        <form onSubmit={AddLocation}>
           <input type="text" name="name" value={name} onChange={updateName}/>
        

            <button>Submit</button>
        </form>
    );
}

export default AddLocation;
