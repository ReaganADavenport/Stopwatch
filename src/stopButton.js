import React from 'react';

import ElapsedTime from './elapsedTime';

const StopButton = props => {
    const {time, stopCallback} = props;

    return(
        <div>
            <button onClick={stopCallback}>Stop</button>
        </div>
        
    );
};


export default StopButton;