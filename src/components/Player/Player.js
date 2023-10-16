import './Player.css'

import AudioPlayerUI from './AudioPlayerUI/AudioPlayerUI';
import Lyrics from './Lyrics/Lyrics';

function Player () {
    return (
        <div className='audio-player'>
            <Lyrics />
            <AudioPlayerUI />
        </div>
    );
}

export default Player;