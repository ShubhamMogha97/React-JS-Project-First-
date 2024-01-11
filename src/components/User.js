import React from "react";

// Class Based Component
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   // Create the state in Class component
      count: 1,
      // count2:2
    };
    console.log(this.props.name +"constructor") ;
  }

  componentDidMount(){
    console.log(this.props.name +"ComponentDidMount");
  }
  render() {
    console.log(this.props.name + "render");
    const { name, location } = this.props; // Destructing in Class componenet
    const { count, count2 } = this.state; // Destructing state in Class componenet
    // Render method will retun some piece of JSX
    return (
      <div className="user-card">
        <h3>This is User Page in Class Component</h3>
        <h2>count :{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count+ 1, // Never update state variable directly
            });
          }}
        >
          Count Increase
        </button>
        {/* <h2>count 2:{count2}</h2> */}
        <h3>Name:{name}</h3>
        <h3>Loaction:{location}</h3>
      </div>
    );
  }
}

export default User;
