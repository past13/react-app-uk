import React, { Component, Fragment } from 'react';

import DropDown from './buttons/dropdown/DropDown';

export default class Home extends Component {
    state = {};
    async componentDidMount() {
        const locations = await (await fetch('http://localhost:5000/locations/')).json();
        const materials = await (await fetch('http://localhost:5000/materials/')).json()

        this.setState({ 
            locations: locations,
            materials: materials
        })
      }

    render() {
        const locations = this.state.locations || [];
        const materials = this.state.materials || [];

        return (
            <>
            <Fragment>
                <div>Location</div>
                <DropDown values={locations}/>
            </Fragment>
            <Fragment>
                <div>Material</div>
                <DropDown values={materials}/>
            </Fragment>
            </>
        )
    }
}