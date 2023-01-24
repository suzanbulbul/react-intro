import React, { Component } from 'react'


export default class Navi extends Component {
  render() {
    return (
      <div>
        <h1>Navi Component</h1>
        <p>Options: {this.props.cart.length}</p>
      </div>
    )
  }
}
