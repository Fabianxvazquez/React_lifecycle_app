import React, { Component } from 'react';

export default class Animation extends Component {
  state = {
    xPos: 100,
    dx: 4
  };
  componentDidMount(){
    this.ticker = setInterval(()=>{
      this.nextStep()
    }, 60)
  }
  componentDidUpdate(prevProps, prevState){
    // if(prevState.xPos > 600- boxWidth){
      if(prevState.xPos > this.props.width - boxWidth){
      this.setState({
        dx: -4,
        xPos: this.props.width - boxWidth -1
        // xPos: 599
      })
    }
    if(prevState.xPos < 0 ){
      this.setState({
        dx: 4,
        xPos: 1
      })
    }
  }
  nextStep(){
    const { xPos, dx } = this.state 
    this.setState({
      xPos: xPos + dx
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
const boxWidth = 100
const styles = {
  container: {
    border: "1px solid",
    backgroundColor: "#f1f1f1",
    position: "relative"
  },
  moveMe: {
    position: "absolute",
    height: "20px",
    width: `${boxWidth}px`,
    backgroundColor: "#67fe28"
  }
};

