import './AudioPlayerUI.css'
import audio from '../../../assets/audios/nem_tudja_senki.mp3';
import {ReactComponent as Play} from '../../../assets/audioControlButtons/play.svg';
import {ReactComponent as Pause} from '../../../assets/audioControlButtons/pause.svg'
import {ReactComponent as Backward} from '../../../assets/audioControlButtons/backward.svg';
import {ReactComponent as Forward} from '../../../assets/audioControlButtons/forward.svg';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlayerUI() {
    const customIcons = {
        play: <Play />,
        pause: <Pause />,
        rewind: <Backward />,
        forward: <Forward />,
    }

    return (
        <div id='audio-player-ui'>
            <AudioPlayer
                src={audio}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                showDownloadProgress={false}
                customIcons={customIcons}
            />
        </div>
    );
}

export default AudioPlayerUI;