import React, { Component } from 'react';
import Button from './buttons/SubmitButton'
import DropDown from './buttons/dropdown/DropDown';

import ProjectService from './Projects/services/ProjectService';
import MaterialService from './Materials/services/MaterialService';
import LocationService from './Locations/services/LocationService';
import CategoryService from './Categories/services/CategoryService';

import FilteredProjects from './Projects/FilteredProjects';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.inputActionTypeRef = React.createRef();
        this.inputCategoriesRef = React.createRef();      
        this.inputMaterialsRef = React.createRef();
        this.inputLocationsRef = React.createRef();

        this.state = {}; 

        this.projectService = new ProjectService();
        this.materialService = new MaterialService();
        this.locationService = new LocationService();
        this.categoryService = new CategoryService();
    }
    
    async componentDidMount() {
        const locations = await this.locationService.getLocations();
        const materials = await this.materialService.getMaterials();
        const categories = await this.categoryService.getCategories();

        this.setState({ 
            locations: locations,
            materials: materials,
            categories: categories,
            inputs: {},
            filteredProjects: {}
        })
    }

    cleanFilledArray = async (list) => {
        let newList = [];
        list.forEach((item) => {
            if (item.value !== "Take value") {
                newList.push(item);
            }
        });
        return newList;
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

    assingFilter = async(list) => {
        let obj = {};
        list.forEach((item) => {
                Object.assign(obj, {[item.key]: item.value});
        });
        return obj;
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const criteria = {
            actionType: this.inputActionTypeRef.current.textContent,
            category: this.inputCategoriesRef.current.textContent,
            material: this.inputMaterialsRef.current.textContent,
            location: this.inputLocationsRef.current.textContent
        }
        const cleanCriteria = await this.convertInputsToArray(criteria);
        const preparedFilter = await this.assingFilter(cleanCriteria);
        
        const projects = await this.projectService.filterProjects(preparedFilter);

        this.setState({
            filteredProjects: projects.data
        });
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

                <FilteredProjects projects={this.state.filteredProjects} />
            </>
        )
    }
}