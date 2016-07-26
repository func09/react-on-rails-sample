import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <h1>
          {title}
        </h1>
      </div>
    )
  }
}

render(
  <App title="Hello React" />,
  document.getElementById('container'))
