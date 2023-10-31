import './Player.css'

import AudioPlayerUI from './AudioPlayerUI/AudioPlayerUI';
import Lyrics from './Lyrics/Lyrics';
import Controls from './Controls/Controls';
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
            <Controls />
            <Lyrics currLineTime={currLineTime}/>
            <AudioPlayerUI setCurrLineTime={setCurrLineTime}/>
        </div>
    );
}

export default Player;