import './AudioPlayer.css'

import AudioPlayerUI from './AudioPlayerUI/AudioPlayerUI';

function AudioPlayer (props) {
    const {audioTitle} = props;

    const audioUrl = `./audios/${audioTitle}.mp3`;
    return (
        <div className='audio-player'>
            <audio>
                <source src={audioUrl} type="audio/mpeg" />
            </audio>
            <AudioPlayerUI />
        </div>
    );
}

export default AudioPlayer;