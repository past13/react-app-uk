import React, { Component } from 'react';

import { Dropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import CustomMenu  from './CustomMenu';
import CustomToggle from './CustomToggle';


class DropDown extends Component {
    constructor(props) {
        super(props);
        this.testHandle = this.testHandle.bind(this);

        this.state = {
            values: [],
            targetValue: ""
        }
    }

    componentDidMount() {
        const values = this.props.values || [];
        if (values.length !== 0) {
            this.setState({ values: values })
        }
    }
    
    testHandle(e) {
        this.setState({ targetValue: e.target.text })
    }

    render() {
        const values = this.props.values || [];

        if (values.length === 0) {
            return <p>Sorry, the list is empty.</p>;
        } else {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <Button id="ddllocation" type="text" ref={this.props.innerRef}>{this.state.targetValue !== "" ? this.state.targetValue : this.props.values[0].name}</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                    {values.map(item => (
                        <Dropdown.Item onClick={this.testHandle} key={item._id} eventKey={item._id}>{item.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            )
        }
    }
}

export default React.forwardRef((props, ref) => 
    <DropDown innerRef={ref} {...props}
/>);