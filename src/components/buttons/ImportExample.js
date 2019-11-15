import React, { Component } from 'react';

class ImportExample extends Component {
    render() {
        return (
            <input type="text" ref={this.props.innerRef} />
        );
    }
}

export default React.forwardRef((props, ref) => <ImportExample 
  innerRef={ref} {...props}
/>);