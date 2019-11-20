import React, { Component } from 'react';

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

