import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toNum: this.props.toNum,
      currentCount: 0,
      frame: 0,
    };
  }

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

export default ClassCountUp;
