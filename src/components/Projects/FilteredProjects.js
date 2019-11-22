import React, { Component } from 'react';

import FilteredProject from './FilteredProject';

export default class FilteredProjects extends Component {

    render() {
        const projects = this.props.projects || {};
        
        return (
            <div>
                {Object.entries(projects).length === 0 ? (
                    <div>no projects...</div>
                ) : (
                    <div>
                        {projects.map((item, key) => (
                            <FilteredProject key={key} project={item}/>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}