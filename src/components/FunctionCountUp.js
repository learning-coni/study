import React, {useState, useEffect} from "react";

const FunctionCountUp = (props) => {
  constructor(props) {
    super(props);

    this.state = {
      toNum: this.props.toNum,
      currentCount: 0,
      frame: 0,
    };
  }

  const toNum = props.toNum;
  const {currentCount, setCurrentCount} = useState(0)
  const {frame, setFrame} = useState(0)



  componentDidMount() {
    const animationDuration = 3000;

    const frameDuration = 1000 / 60;

    const totalFrames = Math.round(animationDuration / frameDuration);

    const easeOutQuad = (t) => t * (2 - t);

    let myInterval = setInterval(() => {
      this.setState(function(prevState) {
        return {
          frame: prevState.frame + 1,
        };
      });
      const progress = easeOutQuad(this.state.frame / totalFrames);

      this.setState(function() {
        return {
          currentCount: Math.round(this.state.toNum * progress),
        };
      });

      if (this.state.frame === totalFrames) {
        clearInterval(myInterval);
      }
    }, frameDuration);
  }
  z;

  render() {
    const { currentCount } = this.state;
    return (
      <>
        <p>{currentCount}</p>
      </>
    );
  }
}

class ClassCountUp extends React.Component {
  constructor(props) {
    super(props);

    this.targetNum = this.props.targetNum;
  }
  render() {
    return <Timer toNum={this.targetNum} />;
  }
}

export default FunctionCountUp;
