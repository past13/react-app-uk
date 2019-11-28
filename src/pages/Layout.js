import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
    .container {
        width: 100%;
        color: #333333;
        margin: 0 auto;
        overflow: hidden;
        padding: 10px 0;
        align-items: center;
        justify-content: space-around;
        display: flex;
        float: none;
    }
`;

export const Layout = (props) => (
    <Styles>
        <Container>
            <main>
                {props.children}
            </main>
        </Container>
    </Styles>
)