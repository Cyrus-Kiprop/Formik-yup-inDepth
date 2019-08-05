import React, { Component } from 'react';
import ClickCounterTwo from './renderProps/ClickCounterTwo';
import HoverCounterTwo from './renderProps/HoverCounterTwo';
import Share from './renderProps/Share';

class Counter extends Component {
  render() {
    return (
      <div>
        <Share
          render={(count, incrementCount) => {
            return (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
            );
          }}
        />
        <Share
          render={(count, incrementCount) => {
            return (
              <HoverCounterTwo count={count} incrementCount={incrementCount} />
            );
          }}
        />
      </div>
    );
  }
}

export default Counter;
