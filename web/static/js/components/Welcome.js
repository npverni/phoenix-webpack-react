import React, { Component } from 'react'

export default class Welcome extends Component {
  render () {
    return (
      <div className="jumbotron">
        <h2>Welcome to Phoenix</h2>
        <h3>...with React and Webpack!</h3>
        <p className="lead">Find me in static/js/components/Welcome.js</p>
        <label>What is your name?</label>
        <br />
        <input type="text" ref="name" />
        <input type="button" onClick={() => this.onClick()} value="Submit"/>
      </div>
    )
  }

  onClick(){
    const name = this.refs.name.value;
    alert(`Hi ${name}`);
  }

}
