// CounterResult.js

import React from 'react';
import { connect } from 'react-redux';

const CounterResult = ({ count }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Current Counter Result: {count}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(CounterResult);
