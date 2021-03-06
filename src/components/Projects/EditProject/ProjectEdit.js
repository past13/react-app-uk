import React, { Component } from 'react';

import ProjectService from '../services/ProjectService';
import { withRouter } from 'react-router-dom';

import FormInput from './../FormInput';

class ProjectEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            phoneNumber: '',
            name: '',
            type:'',
            email: '',
        }; 

        this.projectService = new ProjectService();
    }

    async componentDidMount() {
        if (this.props.match.path === '/addProject') {
            this.setState({
                inputData: this.props.location.state.inputData
            })
        } else {
            const project = await this.projectService.getProjectById(this.props.data.match.params.id);
            this.setState({
                project: project
            })
        }
    }

    render() {
        return (
            <>
                {this.state.project !== undefined ? <FormInput project={this.state.project} /> : <FormInput project={this.state.inputData} />}
            </>
        )
    }
}

export default withRouter(ProjectEdit);
