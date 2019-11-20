import React, { Component, useContext } from 'react';
import axios from 'axios';
import { ProjectContext } from './../ProjectContext';

const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/projects/${id}`, {
    }).then((response) => {
          console.log('deleted',response)
    }).catch((error) => {
        console.log(error)
    })
}

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projectId: props.id.match.params.id,
          project: {}
        }
    }

    async componentDidMount() {
        const project = await (await fetch(`http://localhost:5000/projects/${this.state.projectId}`)).json()
        this.setState({ project })
    }

    render() {
        const project = this.state.project || {};
        const material = this.state.project.material || {};
        const location = this.state.project.location || {};

        return (
                <div>
                    <div>{project.name}</div>
                    <div>{project.phoneNumber}</div>
                     <div>{project.email}</div>
                    <div>{project.description}</div>
                    <div>{location.city}</div>
                    <div>{material.name}</div> 
                    <button onClick={deleteUser.bind(this, this.state.project._id)}>Delete</button>
                </div>
        );
    }
}

export default ProjectDetail;

