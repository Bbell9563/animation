import React, { Component } from "react";

export default class Animation extends Component {
  state = {
    xPos: 10,
    yPos: 380,
    dy: 4,
    dx: 3,
    mouseXPos: 0,
    mouseYPos: 0,
    divX: 0,
    divY: 0,
    width: this.props.width,
    height: this.props.height,
    ballX: 10,
    ballY: 10,
    points: 0,
  };
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.nextStep()
    }, 15)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ballX > this.props.width - ballWidth) {
      this.setState({
        dx: -3,
        ballX: this.props.width - ballWidth - 1
      })
    }
    if (prevState.ballX < 0) {
      this.setState({
        dx: 3,
        ballX: 1
      })
    }
    if(prevState.ballY > prevState.yPos - ballHeight -1 && 
      prevState.ballX > prevState.xPos && 
      prevState.ballX < prevState.xPos + boxWidth) 
      {
      this.setState({
        dy: -4,
        ballY: prevState.yPos - ballHeight -1,
        points: this.state.points +1
      })
    }
    if (prevState.ballY > this.props.height - ballHeight) {
      this.setState({
        dx: 0,
        dy: 0,
        ballY: 10,
        ballX: 10,
      })
      document.getElementById("replayButton").style.display = "block"
    }
    if (prevState.ballY < 0) {
      this.setState({
        dy: 4,
        ballY: 1
      })
    }
  }
  nextStep() {
    const { ballX,ballY, dx , dy} = this.state
    this.setState({
      ballX: ballX + dx,
      ballY: ballY + dy,
    })
  }

  updateMousePos = (event) => {
    const { width } = this.props
    return (
      this.setState({
        xPos: (event.clientX - (window.innerWidth - width) / 2) - (boxWidth / 2),
        mouseXPos: event.clientX,
        mouseYPos: event.clientY,
      })
    )
  }
  replay=()=>{
    document.getElementById("replayButton").style.display = "none"
    this.setState({
      dy: 4,
      dx: 3,
      points: 0,
    })
  }
  render() {
    const { width, height } = this.props;
    const { xPos, yPos, mouseXPos, mouseYPos, ballX, ballY,points } = this.state;
    return (
      <>
        <div style={{ ...styles.container, width: width, height }}>
          <div
            style={{ ...styles.mouseMe, width: width - boxWidth, height: height - boxHeight }}
            onMouseMove={this.updateMousePos}
          ></div>
          <div style={{ ...styles.moveMe, left: xPos, top: yPos }}></div>
          <div style={{ ...styles.ball, left: ballX, top: ballY }}></div>
        </div>
        <div>
          <div>Mouse X Position:{mouseXPos}</div>
          <div>Mouse Y Position:{mouseYPos}</div>
        </div>
    <div>Points: {points}</div>
    <div style={{...styles.replayBtn}} id={"replayButton"} onClick={this.replay}>Play Again</div>
      </>
    );
  }
}

const boxWidth = 50
const boxHeight = 10
const ballWidth = 20
const ballHeight = 20
const styles = {
  container: {
    border: "1px solid",
    backgroundColor: "#f1f1f1",
    position: "relative"
  },
  moveMe: {
    position: "absolute",
    height: `${boxHeight}px`,
    width: `${boxWidth}px`,
    backgroundColor: "#234654",
  },
  mouseMe: {
    position: "absolute",
    left: `${(boxWidth) / 2}px`,
    top: `${(boxHeight) / 2}px`,
  },
  ball: {
    height: `${ballHeight}px`,
    width: `${ballWidth}px`,
    position: 'absolute',
    backgroundColor: '#853894',
    borderRadius: '40px',
  },
  replayBtn:{
    display:"none",
    backgroundColor: '#c1c1c1',
    padding: "10px 30px",
    borderRadius: '10px',
    cursor:'pointer'
  }
};