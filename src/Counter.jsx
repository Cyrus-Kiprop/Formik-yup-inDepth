import React, { Component } from 'react';
import ClickCounterTwo from './renderProps/ClickCounterTwo';
import HoverCounterTwo from './renderProps/HoverCounterTwo';
import Share from './renderProps/Share';

class Counter extends Component {
  render() {
    return (
      <div>
        <Share>
          {(count, incrementCount) => {
            return (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
            );
          }}
        </Share>

        <Share>
          {(count, incrementCount) => {
            return (
              <HoverCounterTwo count={count} incrementCount={incrementCount} />
            );
          }}
        </Share>
      </div>
    );
  }
}

export default Counter;
