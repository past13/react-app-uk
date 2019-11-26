import React, { Component } from 'react';
import Button from '../../buttons/SubmitButton'

import ProjectService from '../services/ProjectService';

import './ProjectEdit.css';

class ProjectEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDetails: this.props.data.savedProject
        }; 

        this.projectService = new ProjectService();
    }

    render() {
        console.log(this.state)
        return (
            <>
                <div className="uploadPhotoContainer">
                    <div>Upload your photos</div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                    <div className="uploadPhotoPlaceHolder"></div>
                </div>
                <div>
                    <div>Description</div>
                    <textarea className="descriptionTextArea"></textarea>
                </div>
                <div>
                    <div>Your mobile number</div>
                    <textarea className="phoneNumberInput"></textarea>
                </div>
                <div>
                    <div>Your email</div>
                    <textarea className="phoneNumberInput"></textarea>
                </div>
                <div>
                    <div>Post on: 2000.01.01</div>
                </div>
                <div className="buttonContainer">
                    <Button />
                </div>
            </>
        )
    }
}

export default ProjectEdit;
