//import libraries
import React, {Component} from 'react';

//import components
import StartButton from './startButton';
import StopButton from './stopButton';

//import CSS
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    time: 0
  };

  interval = 0;

  runStopwatch = () => {
    const newtime = this.state.time + 1;
    return newtime;
  };

  stopStopwatch = () => {
    const time = this.state.time;
    return time;
  }

  handleStartClick = () => {
    const _this = this;
    this.interval = setInterval(() => {
      const newTime = this.runStopwatch();
      this.setState({
        time: newTime
      });
    }, 1000);
  };

  handleStopClick = () => {
    const time = this.stopStopwatch();
    this.setState({
      time: time
    });
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <StartButton time={this.state.time} startCallback={this.handleStartClick}>Start</StartButton>
          <StopButton time={this.state.time} stopCallback={this.handleStopClick}>Stop</StopButton>
        </header>
      </div>
    );
  };
};

export default App;
