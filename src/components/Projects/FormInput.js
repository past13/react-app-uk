import React, { useEffect } from "react";
import Button from '../buttons/SubmitButton'

const FormInput = ({project}) => {
    const [state, setState] = React.useState({});

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
                    materialName: project.material.name,
                    category: project.category.name,
                    locationName: project.location.name,   
                    categoryName: project.name,
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (state.saveType === 'add') {
            // const result = await this.projectService.addProject(state);
        } 

        if (state.saveType === 'update') {
            // const result = await this.projectService.updateProject(state);
        }

        // if (result.status === 200) {
        //     this.redirectToProjects();
        // }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
      }

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
                <textarea className="nameInput" name="name" value={state.name} onChange={handleChange}></textarea>
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
    );
}

export default FormInput;