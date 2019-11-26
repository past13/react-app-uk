import React, { Component } from 'react';
import Button from '../../buttons/SubmitButton'

import ProjectService from '../services/ProjectService';
import { withRouter } from 'react-router-dom';

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

    handleSubmit = async (e) => {
        e.preventDefault();

        const project = {
            categoryName: this.state.projectInput.category,
            description: this.state.description,
            email: this.state.email,
            locationName: this.state.projectInput.location,
            materialName: this.state.projectInput.material,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            type: this.state.projectInput.actionType
        }

        const result = await this.projectService.addProject(project);
        if (result.status === 200) {
            this.redirectToProjects();
        }
    }

    render() {
        const updateName = (e) => {
            const valid = true;
            if (valid) {
                this.setState({
                    name: e.target.value
                })
            }
        }

        const updateDescription = (e) => {
            const valid = true;
            if (valid) {
                this.setState({
                    description: e.target.value
                })
            }
        }

        const updatePhoneNumber = (e) => {
            const valid = true;
            if (valid) {
                this.setState({
                    phoneNumber: e.target.value
                })
            }
        }

        const updateEmail = (e) => {
            const valid = true;
            if (valid) {
                this.setState({
                    email: e.target.value
                })
            }
        }

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <div className="uploadPhotoContainer">
                    <div>Upload your photos</div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                </div>
                <div>
                    <div>Project name</div>
                    <textarea className="nameInput" onChange={updateName}></textarea>
                </div>
                <div>
                    <div>Description</div>
                    <textarea className="descriptionInput" onChange={updateDescription}></textarea>
                </div>
                <div>
                    <div>Your mobile number</div>
                    <textarea className="phoneNumberInput" onChange={updatePhoneNumber}></textarea>
                </div>
                <div>
                    <div>Your email</div>
                    <textarea className="emailInput" onChange={updateEmail}></textarea>
                </div>
                <div>
                    <div>Post on: 2000.01.01</div>
                </div>
                <div className="buttonContainer">
                    <Button />
                </div>
            </form>
            </>
        )
    }
}

export default withRouter(ProjectEdit);
