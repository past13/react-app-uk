import React, { Component } from 'react';
import Button from './buttons/SubmitButton'
import DropDown from './buttons/dropdown/DropDown';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};  
    }
    
    async componentDidMount() {
        const locations = await (await fetch('http://localhost:5000/locations/')).json();
        const materials = await (await fetch('http://localhost:5000/materials/')).json()
        const categories = await (await fetch('http://localhost:5000/categories/')).json()

        this.setState({ 
            locations: locations,
            materials: materials,
            categories: categories
        })
    }
 
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
                <div>
                    <div>Action type</div>
                    <DropDown values={actionType} ref={this.myRef} />
                </div>
                <div>
                    <div>Location</div>
                    <DropDown values={locations} />
                </div>
                <div>
                    <div>Material</div>
                    <DropDown values={materials} />
                </div>
                <div>
                    <div>Categories</div>
                    <DropDown values={categories} />
                </div>
                <Button />
            </>
        )
    }
}