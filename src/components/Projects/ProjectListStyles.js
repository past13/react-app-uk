import styled from 'styled-components';

const ProjectListStyles = styled.div`
    li {
        list-style-type: none; 
    }

    li a {
        text-decoration: none;
    }

    button {
        display: inline-block;
        border: none;
        text-decoration: none;
        text-align: center;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    button:hover,
    button:focus {
        background: #CDCDCD;
    }

    .filter-project-input {
        border: none; 
        border-radius: 5px; 
        width: 470px; 
        border: none; 
        outline: none; 
        background: rgb(219, 218, 218); 
        font-size: 14px; 
        font-family: 'Lato', 'sans-serif'; 
        color: black; 
        padding: 10px;
    }

    .box-container { 
        width: 550px; 
        height: 400px; 
        padding: 20px; 
        border-radius: 5%; 
        background-color: white; 
        box-shadow: 2px 10px #e6e4e4e3;
    }

    .project-item {
        border-bottom: 2px solid grey;
    }

    .box-title {
        margin-left: auto;
        margin-right: auto;
        width: 8em;
        padding-bottom: 20px;
        font-size: 14px; 
        font-family: 'Lato', 'sans-serif';
    }
   
    .delete-project {
        display: block;
        margin-left: auto;
    }
`;

export default ProjectListStyles;
