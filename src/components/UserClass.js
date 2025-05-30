import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    async componentDidMount() {
        // API Call
        const data = await fetch("https://api.github.com/users/ashmita41");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    render() {
        const { name, location , avatar_url} = this.state.userInfo;

        return (
            <div className="user-card"> 
                <h2>Name : {name}</h2>
                <img src={avatar_url} />
                <h2>Location : {location} </h2>
                <h2>Contact : @ashmita41</h2>
            </div>
        );
    }
}

export default UserClass;
