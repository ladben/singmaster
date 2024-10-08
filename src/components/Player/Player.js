import './Player.css'

import AudioPlayerUI from './AudioPlayerUI/AudioPlayerUI';
import Lyrics from './Lyrics/Lyrics';
import Controls from './Controls/Controls';
import { useRef, useState, useEffect } from 'react';
import SeekTime from './SeekTime/SeekTime';

function Player () {
    const [currLineTime, setCurrLineTime] = useState(0);
    const [seekedPercent, setSeekedPercent] = useState(0);
    const [duration, setDuration] = useState(0);
    const appRef = useRef(null);

    window.addEventListener('resize', ()=>{
        if (appRef.current) {
            appRef.current.style.height = `${window.innerHeight}px`;
        }
    });

    useEffect(() => {
        const seeker = document.querySelector('.rhap_progress-container');
        const seekerObserver = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-valuenow') {
                    setSeekedPercent(Number(mutation.target.ariaValueNow));
                }
            }
        });
    
        seekerObserver.observe(seeker, {
            attributes: true
        });

        const audio = document.querySelector('audio');
        console.log(audio);
        audio.addEventListener('loadeddata', () => {
            setDuration(audio.duration);
        })

    }, []);

    return (
        <div className='audio-player' ref={appRef} style={{height: `${window.innerHeight}px`}}>
            <Controls />
            <Lyrics currLineTime={currLineTime}/>
            <SeekTime duration={duration} seekedPercent={seekedPercent}/>
            <AudioPlayerUI setCurrLineTime={setCurrLineTime}/>
        </div>
    );
}

export default Player;