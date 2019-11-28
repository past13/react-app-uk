import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
    <Container>
        <main>
            {props.children}
        </main>
    </Container>
)