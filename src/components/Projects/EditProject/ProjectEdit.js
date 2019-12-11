import React, { Component } from 'react';

import ProjectService from '../services/ProjectService';
import { withRouter } from 'react-router-dom';

import FormInput from './../FormInput';

import './ProjectEdit.css';

class ProjectEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            phoneNumber: '',
            name: '',
            type:'',
            email: '',
            projectInput: this.props.data.savedProject
        }; 

        this.projectService = new ProjectService();
    }

    redirectToProjects = () => {
        const { history } = this.props;
        if (history) {
            history.push('/projects');
        }
    }

    async componentDidMount() {
        if (!this.props.data.toSaveForm) {
            const project = await this.projectService.getProjectById(this.props.data.match.params.id);
            this.setState({
                project: project
            })
        }
    }

    render() {
        return (
            <>
                {this.state.project !== undefined ? <FormInput project={this.state.project} /> : <FormInput />}
            </>
        )
    }
}

export default withRouter(ProjectEdit);
