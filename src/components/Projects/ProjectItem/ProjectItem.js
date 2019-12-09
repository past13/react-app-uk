import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    div {
        inline-block:
    }

    .project-category { 
        margin-top: 25px;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 14px; 
        font-family: 'Lato', 'sans-serif';
        color: black;
    }

    .project-description {
        font-size: 10px; 
        font-family: 'Lato', 'sans-serif';
        color: black;
    }
`;

export const ProjectItem = ({item}) => (
    <Styles>
            <div className="project-category">
                {item.category.name}/{item.material.name}
            </div>
            <div className="project-description">
                {item.description}
            </div>
    </Styles>
)