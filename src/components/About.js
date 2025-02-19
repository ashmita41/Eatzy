import React, { Component } from "react"; 
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // Lifecycle method (if needed)
    }

    render() {
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>I'm Ashmita</h2>
                <UserClass name={"Ashmita"} location={"Rajasthan"} />
            </div>
        );
    }
}

export default About;
