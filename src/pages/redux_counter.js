// Counter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/action';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Counter: {count}</h2>
        <div className="space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
