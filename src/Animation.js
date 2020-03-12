import React, { Component } from 'react';

export default class Animation extends Component {
  state = {
    xPos: 100,
    yPos: 4
  };
  componentDidMount(){
    this.ticker = setInterval(()=>{
      this.nextStep()
    }, 40)
  }
  componentDidUpdate(prevProps, prevState){
      if(prevState.xPos > this.props.width - boxWidth){
      this.setState({
        yPos: -4,
        xPos: this.props.width - boxWidth -1
      })
    }
    if(prevState.xPos < 0 ){
      this.setState({
        yPos: 4,
        xPos: 1
      })
    }
  }
  nextStep(){
    const { xPos, yPos } = this.state 
    this.setState({
      xPos: xPos + yPos
    })
  }
  render() {
    const { width, height } = this.props;
    const { xPos } = this.state;
    return (
      <div style={{ ...styles.container, width: width, height }}>
        <div style={{ ...styles.moveMe, left: xPos }}></div>
      </div>
    );
  }
}
const boxWidth = 50
const styles = {
  container: {
    border: "1px solid",
    backgroundColor: "#f1f1f1",
    position: "relative"
  },
  moveMe: {
    position: "absolute",
    height: "40px",
    width: `${boxWidth}px`,
    backgroundColor: "#000080"
  }
};

