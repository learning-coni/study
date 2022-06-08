import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: this.props.initialMinute,
      seconds: this.props.initialSeconds,
    };
  }

  componentDidMount() {
    let myInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState(function(prevState) {
          return {
            seconds: prevState.seconds - 1,
          };
        });
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(myInterval);
        } else {
          this.setState(function(prevState) {
            return {
              minutes: prevState.minutes - 1,
              seconds: 59,
            };
          });
        }
      }
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <>
        {minutes === 0 && seconds === 0 ? null : (
          <h1>
            {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
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
