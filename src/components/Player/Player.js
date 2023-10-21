import './Player.css'

import AudioPlayerUI from './AudioPlayerUI/AudioPlayerUI';
import Lyrics from './Lyrics/Lyrics';
import Settings from './Settings/Settings';
import { useRef, useState } from 'react';

function Player () {
    const [currLineTime, setCurrLineTime] = useState(0);
    const appRef = useRef(null);

    window.addEventListener('resize', ()=>{
        if (appRef.current) {
            appRef.current.style.height = `${window.innerHeight}px`;
        }
    });

    return (
        <div className='audio-player' ref={appRef} style={{height: `${window.innerHeight}px`}}>
            <Lyrics currLineTime={currLineTime}/>
            <AudioPlayerUI setCurrLineTime={setCurrLineTime}/>
            <Settings />
        </div>
    );
}

export default Player;