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

    //   const animationDuration = 3000;

    //   const frameDuration = 1000 / 60;

    //   const totalFrames = Math.round(animationDuration / frameDuration);

    //   const easeOutQuad = (t) => t * (2 - t);

    //   let frame = 0;
    //   // const countTo = state.toNum;
    //   const countTo = 3000;

    //   const counter = setInterval(() => {
    //     frame++;

    //     const progress = easeOutQuad(frame / totalFrames);

    //     const currentCount = Math.round(countTo * progress);

    //     // if (countTo !== currentCount) {
    //     //   el.innerHTML = currentCount;
    //     // }

    //     if (frame === totalFrames) {
    //       clearInterval(counter);
    //     }
    //   }, frameDuration);
  }
  z;

  render() {
    const { currentCount } = this.state;
    return (
      <>
        {/* {minutes === 0 && seconds === 0 ? null : (
          <h1>
            {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )} */}
        <p>{currentCount}</p>
      </>
    );
  }
}

class ClassCountUp extends React.Component {
  render() {
    return <Timer initialMinute={2} initialSeconds={11} />;
  }
}

export default ClassCountUp;
