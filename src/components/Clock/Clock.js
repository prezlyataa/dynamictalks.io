import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      done: false
    };
  }

  componentWillMount() {
    this.getTime(this.props.deadline);
  }

  componentDidMount() {
    this.int = setInterval(() =>  this.getTime(this.props.deadline), 1000);
  }

  doublenum(num) {
    return num < 10 ? '0' + num : num;
  }

  getTime(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time >= 0) {
      const minutes = Math.floor((time/1000/60) % 60);
      const hours = Math.floor(time/(1000*60*60) % 24);
      const days = Math.floor(time/(1000*60*60*24));
      this.setState({days, hours, minutes});
    } else {
      clearInterval(this.int);
      this.setState({ done: true });
    }
  }

  render(){
    const {days, hours, minutes, done} = this.state;

    if (!done) {
      return (
        <div className='time-counter'>
          <div className='times'>
            <div className='clocks'>
              {this.doublenum(days)}
            </div>
            <div className='clock-desc'>
              <span>днів</span>
            </div>
          </div>
          <div className='times'>
            <div className='clocks'>
              {this.doublenum(hours)}
            </div>
            <div className='clock-desc'>
              <span>годин</span>
            </div>
          </div>
          <div className='times'>
            <div className='clocks'>
              {this.doublenum(minutes)}
            </div>
            <div className='clock-desc'>
              <span>хвилин</span>
            </div>
          </div>
          <div className='to-start'>
            <span>до початку</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='started-block'>
          <span className='started-event'>Event has already started!</span>
        </div>
      );
    }
  }
}
