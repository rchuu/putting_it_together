import React, { Component } from 'react';

class PersonComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age
        };
    }
    addAge = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                <button onClick={this.addAge}>Add One Year {this.props.firstName} {this.props.lastName} </button>
            </div>
        );
    }
}
export default PersonComponent;