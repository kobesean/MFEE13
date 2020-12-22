import React from 'react'

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')

    document
      .getElementById('clickme')
      .addEventListener('click', function () {
        alert('你好')
      })
  }

  render() {
    console.log('render')
    return (
      <>
        Class : LifeCycle
        <button id="clickme">按我一下</button>
      </>
    )
  }
}

export default ClassLifeCycle
