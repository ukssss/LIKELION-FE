import { Component } from 'react';

class Counter extends Component {
  return() {
    <div data-component='Counter'>
      <button type='button' aria-label='카운트 1 증가'>
        +
      </button>
      <button type='button' aria-label='카운트 1 감소'>
        -
      </button>
    </div>;
  }
}

export default Counter;
