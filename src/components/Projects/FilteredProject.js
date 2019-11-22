import React from 'react';

const FilteredProject = ({project}) => {
    
    return (
        <div className="filteredProject">
            <div>{project.name}</div>
            <div>{project.phoneNumber}</div>
            <div>{project.category.name}</div>
            <div>{project.material.name}</div>
            <div>{project.location.country}</div>
            <div>{project.location.postCode}</div>
            <div>{project.location.city}</div>
            <div>{project.location.address}</div>
        </div>
    );
}

export default FilteredProject;