import React, { Component } from 'react';

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h1 onMouseOver={incrementCount}>Hovered {count} number of times</h1>
    );
  }
}

export default HoverCounterTwo;
