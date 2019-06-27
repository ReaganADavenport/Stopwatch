import React from 'react';
import PropTypes from 'prop-types';

// import {Card} from 'bloomer';

const ElapsedTime = props => {
    const {time} = props;
    return (
        <div>
            <h1>{time} seconds</h1>
        </div>
    );
};

export default ElapsedTime;

ElapsedTime.propTypes = {
    time: PropTypes.number
};