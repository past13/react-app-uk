import React, { Component } from 'react';
import ProjectService from './services/ProjectService';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projectId: props.id.match.params.id,
          project: {}
        }
        this.service = new ProjectService();
    }

    async componentDidMount() {
        const projectId = this.state.projectId;
        const project = await this.service.getProjectById(projectId);
        if (project) {
            this.setState({ project })
        }
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
                <div>
                    {location === null ? (
                        <div>Loading location ...</div>
                    ) : (
                        <div>{location.city}</div>
                    )}
                </div>
                <div>
                    {material === null ? (
                        <div>Loading material ...</div>
                    ) : (
                        <div>{material.name}</div>
                    )}
                </div>
            </div>
        );
    }
}

export default ProjectDetail;

