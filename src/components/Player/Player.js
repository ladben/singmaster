import './Player.css'

import AudioPlayerUI from './AudioPlayerUI/AudioPlayerUI';
import Lyrics from './Lyrics/Lyrics';
import { useState } from 'react';

function Player () {
    const [currLineTime, setCurrLineTime] = useState(0);
    return (
        <div className='audio-player'>
            <Lyrics currLineTime={currLineTime}/>
            <AudioPlayerUI setCurrLineTime={setCurrLineTime}/>
        </div>
    );
}

export default Player;