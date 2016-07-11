import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = [];
  },

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  },

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }
};

function dayOfWeekAsString(dayIndex) {
  return ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][dayIndex];
}

function monthAsString(monthIndex) {
  return ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'][monthIndex];
}



const renderTime = () => {
  const currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
  let d = currentTime.getDate();
  let dd = dayOfWeekAsString(currentTime.getDay());
  let mm = monthAsString(currentTime.getMonth());

  if (h === 0) {
    h = 12;
  }

  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  return {
    hours: h,
    minutes: m,
    seconds: s,
    day: d,
    dayString: dd,
    month: mm
  };
};

export default React.createClass({
  displayName: 'Clock',
  mixins: [SetIntervalMixin],

  getInitialState() {
    return {...renderTime()};
  },

  componentDidMount() {
    this.setInterval(this.tick, 1000);
  },

  tick() {
    this.setState(renderTime());
  },

  render() {
    return (
      <View style={styles.timeContainer}>
        <Text style={[styles.time, styles.font, styles.pink]}>
          { this.state.hours } { this.state.minutes } { this.state.seconds }
        </Text>
        <Text style={[styles.day, styles.font, styles.pink]}>
          { this.state.dayString }, { this.state.day } { this.state.month }
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  timeContainer: {
    marginTop: 40,
    marginBottom: 46,
  },
  time: {
    fontSize: 72,
    textAlign: 'center',
  },
  day: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
  font: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '100',
  },
  pink: {
    color: '#F9E6E6',
  },
  yellow: {
    color: '#f1c40f',
  }
});
