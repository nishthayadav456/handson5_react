import React, { Component } from "react";

class PureComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: "Hello"
    };
  }

  changeName = () => {
    this.setState({ count: "Hello world!" });
  };

  render() {
    console.log("Render 1 time");
    return (
      <div>
        <h1 className="h1">This is a Example of Pure Function</h1>
        <p className="para">
        Pure components in React are a type of component that only re-renders when its props or state change. They are also referred to as 'stateless components'. Pure components are a way to optimize the performance of your React application by reducing unnecessary re-renders.
        The React.PureComponent class is responsible for creating pure components. It shares similarities with the React.Component class, but it goes a step 
        further by implementing a shouldComponentUpdate() method. This method automatically verifies whether there have been any changes in the 
        component's props or state before triggering a re-render. If no changes are detected, the component remains unchanged, leading to enhanced performance.<br/><br/>
        1-Performance optimization: Pure components minimize re-renders by avoiding unnecessary rendering cycles when there are no changes in props or state. This is more helpful in cases where expensive calculations or API calls are involved.<br/>
        2-Simplified code: Pure components simplify your code by reducing the need for manual checks and optimizations. React handles the comparison logic automatically.<br/>
        3-Easy integration: Pure components can replace regular components in your code. You can easily convert a component to a pure component by changing the base class from React.Component to React.PureComponent.<br/></p>
        <h2 className="h3"> {this.state.count} </h2>
        <button  className="btn3"onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}
export default PureComponent