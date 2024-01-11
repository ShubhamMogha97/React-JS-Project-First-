import { Component } from "react";
import User from "./User";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor")
  }
  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render")
    return (
      <div>
        <h2>This is About US Page in class Component</h2>
        <User name={"First"} location={"Dehradun"} />
        <User name={"Second"} location={"Dehradun"} />
        <User name={"Third"} location={"Dehradun"} />
      </div>
    );
  }
}
export default About;


