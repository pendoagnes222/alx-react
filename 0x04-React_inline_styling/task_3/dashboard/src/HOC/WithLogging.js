import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  // Nullish coalescing operator (??)
  const  wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  return class NewComponent extends Component {
    componentDidMount() {
      console.log(`Component ${wrappedComponentName} is mounted`)
    }
    componentWillUnmount () {
      console.log(`Component ${wrappedComponentName} is going to unmount`)
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

}


export default WithLogging