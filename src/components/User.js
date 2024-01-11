import React from "react";

// Class Based Component
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Create the state in Class component
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        company: "XYZ",
      },
      // count: 1,
      // count2:2
    };
    // console.log(this.props.name +"constructor") ;
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shubhamMogha97");
    const res = await data.json();
    console.log("res--------", res);
    this.setState({
      userInfo: res,
    });
    // console.log(this.props.name +"ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate is called"); // component will update
  }
  componentWillUnmount() {
    console.log("componentWillUnmount is called"); // component will disappera from the UI
  }

  render() {
    console.log(this.props.name + "render");
    const { name, location, company } = this.state.userInfo; // Create the state in Class component
    // const { name, location } = this.props; // Destructing in Class componenet
    // Render method will retun some piece of JSX
    return (
      <div className="user-card">
        <h3>This is User Page in Class Component</h3>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{company}</h2>
      </div>
    );
  }
}

export default User;
