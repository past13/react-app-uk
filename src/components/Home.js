import React, { Component } from 'react';
import Button from './buttons/SubmitButton'
import DropDown from './buttons/dropdown/DropDown';

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
 
    checkDropDown = (inputArray) => {
        inputArray.forEach(element => {
            if (element[1] === 'Take value') {
                console.log(element);
            }
        });
    }

    // convertInputsToArray = () => {
    //     const inputArray = Object.entries(this.state.inputs).sort((a, b) => a[0].localeCompare(b[0]));
    //     this.checkDropDown(inputArray);
    // }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ 
            inputs: {
                actionTypeValue: this.inputActionTypeRef.current.textContent,
                categoriesValue: this.inputCategoriesRef.current.textContent,
                materialsValue: this.inputMaterialsRef.current.textContent,
                locationsValue: this.inputLocationsRef.current.textContent,
            }
        })
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