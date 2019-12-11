import React, { useEffect, setState, useState } from "react";
import Button from '../buttons/SubmitButton'

const FormInput = ({project}) => {
    
    const [state, setState] = React.useState({});

    useEffect(() => {
        if (project !== undefined) {
            setState({ 
                name: project.name,
                phoneNumber: project.phoneNumber,
                description: project.description,
                category: project.category.name,   
                email: project.email, 
                createdAt: project.createdAt,
                project: project
            });
        }
    }, [project]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const project = {
            categoryName: this.state.projectInput.category,
            description: this.state.description,
            email: this.state.email,
            locationName: this.state.projectInput.location,
            materialName: this.state.projectInput.material,
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            type: this.state.projectInput.actionType,
            project: ''
        }

        const result = await this.projectService.addProject(project);
        if (result.status === 200) {
            this.redirectToProjects();
        }
    }

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

    console.log(state)

    return (
        <form onSubmit={handleSubmit}>
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
                <textarea className="nameInput" value={state.name} onChange={updateName}></textarea>
            </div>
            <div>
                <div>Description</div>
                <textarea className="descriptionInput" value={state.description} onChange={updateDescription}></textarea>
            </div>
            <div>
                <div>Your mobile number</div>
                <textarea className="phoneNumberInput" value={state.phoneNumber} onChange={updatePhoneNumber}></textarea>
            </div>
            <div>
                <div>Your email</div>
                <textarea className="emailInput" value={state.email} onChange={updateEmail}></textarea>
            </div>
            <div>
                <div>Created date</div>
                <div className="createdDate">{state.createdAt}</div>
            </div>
            <div className="buttonContainer">
                <Button />
            </div>
        </form> 
    );
}

export default FormInput;