import React from 'react';

import ElapsedTime from './elapsedTime';

const StartButton = props => {
    const {time, startCallback} = props;
    return(
        <div>
            <ElapsedTime time={time}></ElapsedTime>
            <button onClick={startCallback}>Start</button>
        </div>
    );
};


export default StartButton;