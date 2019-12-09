import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    div {
        inline-block:
    }

    .project-category { 
        margin-top: 15px;
        margin-bottom: 10px;
    }

`;

export const ProjectItem = ({item}) => (
    <Styles>
            <div className="project-category">
                {item.category.name}
            </div>
            <div className="project-description">
                {item.description}
            </div>
    </Styles>
)