import React from 'react';



class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
  }



  render() {
    

    return (
      <div>
        <canvas ref="canvas" />
      </div>
    )
  }
}
export default Canvas;