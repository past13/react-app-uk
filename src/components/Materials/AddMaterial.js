import React, { useState, useContext } from 'react';
import { MaterialContext } from './MaterialContext';

const AddMaterial = () => {
    const [name, setName] = useState('');
    const [materials, setMaterials] = useContext(MaterialContext);    

    const updateName = (e) => {
        setName(e.target.value);
    }

    const addMaterial = (e) => {
        e.preventDefault();

        let id = Math.max.apply(Math, materials.map(function(o) { 
            return o.id + 1; 
        }))

        setMaterials(prevMaterials => [...prevMaterials, { _id: id, name: name }]);
    }

    return (
        <form onSubmit={addMaterial}>
           <input type="text" name="name" value={name} onChange={updateName}/>
            <button>Submit</button>
        </form>
    );
}

export default AddMaterial;