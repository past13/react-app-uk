import React, { useEffect } from "react";
import Button from '../buttons/SubmitButton'
import ProjectService from './services/ProjectService';
import { useHistory } from 'react-router-dom';

import FormInputStyles from './FormInputStyles';

const FormInput = ({project}) => {
    const [state, setState] = React.useState({});
    let history = useHistory();
    const projectService = new ProjectService();

    useEffect(() => {        
        if (project !== undefined) {
            if (project.toSaveForm) {
                setState({
                    type: project.actionType,
                    categoryName: project.category,
                    materialName: project.material,
                    locationName: project.location,
                    saveType: 'add'
                });
            } else {
                setState({ 
                    id: project._id,
                    materialName: project.material.name,
                    category: project.category.name,
                    locationName: project.location.name,   
                    projectName: project.projectName,
                    phoneNumber: project.phoneNumber,
                    description: project.description,
                    email: project.email, 
                    type: project.type,
                    createdAt: project.createdAt,
                    updatedAt: project.updatedAt,
                    saveType: 'update'
                });
            }
        }
    }, [project]);

    const redirectToProjects = async () => {
        history.push("/projects");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let result;
        if (state.saveType === 'add') {
            result = await projectService.addProject(state);
        } 

        if (state.saveType === 'update') {
            result = await projectService.updateProject(state);
        }

        if (result.status === 200) {
            redirectToProjects();
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
      }

    return (
        <FormInputStyles>
            <form onSubmit={handleSubmit}>
                <div className="uploadPhotoContainer">
                    <div>Upload your photos</div>
                    <div className="uploadPhotoPlaceHolder">
                        <a>Upload photo</a>
                    </div>
                </div>
                <div>
                    <div>Project name</div>
                    <textarea className="nameInput" name="projectName" value={state.projectName} onChange={handleChange}></textarea>
                </div>
                <div>
                    <div>Description</div>
                    <textarea className="descriptionInput" name="description" value={state.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <div>Your mobile number</div>
                    <textarea className="phoneNumberInput" name="phoneNumber" value={state.phoneNumber} onChange={handleChange}></textarea>
                </div>
                <div>
                    <div>Your email</div>
                    <textarea className="emailInput" name="email" value={state.email} onChange={handleChange}></textarea>
                </div>
                <div>
                    <div>Created date</div>
                    <div className="createdDate">{state.createdAt}</div>
                </div>
                <div className="buttonContainer">
                    <Button />
                </div>
            </form> 
        </FormInputStyles>
    );
}

export default FormInput;