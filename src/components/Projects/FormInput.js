import React, { useEffect } from "react";
import Button from '../buttons/SubmitButton'

const FormInput = ({project}) => {
    
    const [state, setState] = React.useState({});

    useEffect(() => {
        if (project !== undefined) {
            setState({ 
                categoryName: project.name,
                phoneNumber: project.phoneNumber,
                description: project.description,
                email: project.email, 
                type: project.type,
                materialName: project.material.name,
                category: project.category.name,
                locationName: project.location.name,   
                createdAt: project.createdAt,
                updatedAt: project.updatedAt,
            });
        }
    }, [project]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const result = await this.projectService.addProject(state);
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