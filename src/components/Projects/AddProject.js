import axios from 'axios';
import React, { useState } from 'react';

const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [locationName, setLocation] = useState('');
    const [materialName, setMaterial] = useState('');
    const [categoryName, setCategory] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updatePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updateMaterialName = (e) => {
        setMaterial(e.target.value);
    }

    const updateLocationName = (e) => {
        setLocation(e.target.value);
    }

    const updateCategoryName = (e) => {
        setCategory(e.target.value);
    }

    const addProject = (e) => {
        e.preventDefault();

        const project = {
            name: e.target.name.value,
            description: e.target.description.value,
            phoneNumber: e.target.phoneNumber.value,
            email: e.target.email.value,
            locationName: e.target.locationName.value,
            materialName: e.target.materialName.value,
            categoryName: e.target.categoryName.value,
        };

        axios.post('http://localhost:5000/projects/', project, {
            // body: project
        }).then((response) => {
              console.log('response',response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <form onSubmit={addProject}>
            <label>
                name
                <input type="text" name="name" value={name} onChange={updateName}/>
            </label>
            <label>
                description
                <input type="text" name="description" value={description} onChange={updateDescription}/>
           </label>
           <label>
                phoneNumber
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={updatePhoneNumber}/>
           </label>
           <label>
                email
                <input type="text" name="email" value={email} onChange={updateEmail}/>
           </label>
           <label>
                locationName
                <input type="text" name="locationName" value={locationName} onChange={updateLocationName}/>
           </label>
           <label>
                materialName
                <input type="text" name="materialName" value={materialName} onChange={updateMaterialName}/>
           </label>
           <label>
                categoryName
                <input type="text" name="categoryName" value={categoryName} onChange={updateCategoryName}/>
           </label>
            <button>Submit</button>
        </form>
    );
}

export default AddProject;
