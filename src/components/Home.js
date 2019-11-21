import React, { Component } from 'react';
import Button from './buttons/SubmitButton'
import DropDown from './buttons/dropdown/DropDown';

import ProjectService from './Projects/services/ProjectService';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.inputActionTypeRef = React.createRef();
        this.inputCategoriesRef = React.createRef();      
        this.inputMaterialsRef = React.createRef();
        this.inputLocationsRef = React.createRef();

        this.state = {}; 
    }
    
    async componentDidMount() {
        const locations = await (await fetch('http://localhost:5000/locations/')).json();
        const materials = await (await fetch('http://localhost:5000/materials/')).json()
        const categories = await (await fetch('http://localhost:5000/categories/')).json()

        this.setState({ 
            locations: locations,
            materials: materials,
            categories: categories,
            inputs: {}
        })
    }

    cleanFilledArray = async (list) => {
        return list.filter(item => {
            if (item.value !== "Take value") {
                return item;
            }
        });
    }

    convertInputsToArray = async (filter) => {
        const inputValues = Object.values(filter);
        const inputKeys = Object.keys(filter);
        
        let newList = [];
        for (let i = 0; i < inputKeys.length; i++) { 
            let obj = {
                key: inputKeys[i],
                value: inputValues[i]
            }
            newList.push(obj);
        }

        return await this.cleanFilledArray(newList);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
      
        const service = new ProjectService();

        const criteria = {
            actionType: this.inputActionTypeRef.current.textContent,
            category: this.inputCategoriesRef.current.textContent,
            material: this.inputMaterialsRef.current.textContent,
            location: this.inputLocationsRef.current.textContent
        }

        const cleanCriteria = await this.convertInputsToArray(criteria);
        const result = await service.filterProjects(cleanCriteria);
        //todo: show list filtered
      };

    render() {
        const actionType = [
            {
                _id: 1,
                name: "Buy"
            },
            {
                _id: 2,
                name: "Sell"
            },
        ];

        const locations = this.state.locations || [];
        const materials = this.state.materials || [];
        const categories = this.state.categories || [];
        
        return (
            <>           
                <form onSubmit={this.handleSubmit}>
                    <DropDown values={actionType} ref={this.inputActionTypeRef} />
                    <DropDown values={categories} ref={this.inputCategoriesRef} />
                    <DropDown values={materials} ref={this.inputMaterialsRef} />
                    <DropDown values={locations} ref={this.inputLocationsRef} />
                    
                    <Button />
                </form>
            </>
        )
    }
}