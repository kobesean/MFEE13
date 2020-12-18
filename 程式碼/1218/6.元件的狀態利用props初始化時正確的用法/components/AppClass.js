import React from 'react'

class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0, //init value
    }
    console.log(props)
  }

  // 初始化用
  componentDidMount() {
    this.setState({
      total: this.props.initValue,
    })
  }

  // 更動時用
  componentDidUpdate(prevProps) {
    if (this.props.initValue !== prevProps.initValue) {
      this.setState({
        total: this.props.initValue,
      })
    }
  }

  render() {
    //console.log(this.props)
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default AppClass
