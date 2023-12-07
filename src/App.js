import React from 'react';
import MQTT from './Mqtt';

function App() {
    return (
    <div>
        <div className='header'>
            <p>Climate Measurement D116 Dashboard</p>
        </div>
        <div className='main-page'>
            <p>Current temperature in room: </p>
            <MQTT />
            <div>Deployed from github</div>
        </div>
    </div>
    );
}

export default App;