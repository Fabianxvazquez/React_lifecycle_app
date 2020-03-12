import React, { Component } from 'react';

export default class MouseMove extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = (e) => {
    this.setState({
      x: e.screenX,
      y: e.screenY
    });
  }

  render() {
    const { x, y } = this.state;
    return (
      <>
        <h3>
          Mouse coordinates: {x} {y}
        </h3>
      </>
    );
  }
}
