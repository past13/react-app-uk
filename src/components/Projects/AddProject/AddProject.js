import React, { Component } from 'react';
import DropDown from '../../buttons/dropdown/DropDown';
import Button from '../../buttons/SubmitButton'

import MaterialService from '../../Materials/services/MaterialService';
import LocationService from '../../Locations/services/LocationService';
import CategoryService from '../../Categories/services/CategoryService';

import './AddProject.css';

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 

        this.inputActionTypeRef = React.createRef();
        this.inputCategoriesRef = React.createRef();      
        this.inputMaterialsRef = React.createRef();
        this.inputLocationsRef = React.createRef();

        this.locationService = new LocationService();
        this.materialService = new MaterialService();
        this.categoryService = new CategoryService();
    }

    async componentDidMount() {
        const locations = await this.locationService.getLocations();
        const materials = await this.materialService.getMaterials();
        const categories = await this.categoryService.getCategories();

        this.setState({ 
            locations: locations,
            materials: materials,
            categories: categories
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const dropDownList = {
            actionType: this.inputActionTypeRef.current.textContent,
            category: this.inputCategoriesRef.current.textContent,
            material: this.inputMaterialsRef.current.textContent,
            location: this.inputLocationsRef.current.textContent,
            toSaveForm: true
        }

        this.props.history.push("/addProject", { inputData: dropDownList });
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
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div className="dropDownPart"> 
                        <label>Select your objective</label>
                        <DropDown values={actionType} ref={this.inputActionTypeRef} />
                    </div>
                    <div className="dropDownPart"> 
                        <label>Product Category</label>
                        <DropDown values={categories} ref={this.inputCategoriesRef} />
                    </div>
                    <div className="dropDownPart"> 
                        <label>Choose Material</label>
                        <DropDown values={materials} ref={this.inputMaterialsRef} />
                    </div>
                    <div className="dropDownPart"> 
                        <label>Location</label>
                        <DropDown values={locations} ref={this.inputLocationsRef} />
                    </div>
                </div>
                <div className="buttonContainer">
                    <Button />
                </div>
            </form>
        )
    }
}