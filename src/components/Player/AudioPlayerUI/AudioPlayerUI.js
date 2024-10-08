import './AudioPlayerUI.css'
//import audio from '../../../assets/audios/nem_tudja_senki.mp3';
import audio from '../../../assets/audios/hang.mp3';
import {ReactComponent as Play} from '../../../assets/audioControlButtons/play.svg';
import {ReactComponent as Pause} from '../../../assets/audioControlButtons/pause.svg'
import {ReactComponent as Backward} from '../../../assets/audioControlButtons/backward.svg';
import {ReactComponent as Forward} from '../../../assets/audioControlButtons/forward.svg';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlayerUI(props) {
    const {setCurrLineTime} = props;

    const customIcons = {
        play: <Play />,
        pause: <Pause />,
        rewind: <Backward />,
        forward: <Forward />,
    }

    const timeUpdateHandler = (e) => {
        setCurrLineTime(e.srcElement.currentTime);
    }

    return (
        <div id='audio-player-ui'>
            <AudioPlayer
                src={audio}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                showDownloadProgress={false}
                customIcons={customIcons}
                listenInterval={100}
                onListen={timeUpdateHandler}
            />
        </div>
    );
}

export default AudioPlayerUI;