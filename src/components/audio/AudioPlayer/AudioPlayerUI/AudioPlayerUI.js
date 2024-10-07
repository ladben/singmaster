import './AudioPlayerUI.css'
import {ReactComponent as Play} from '../../../../assets/audioControlButtons/play.svg';
import {ReactComponent as Backward} from '../../../../assets/audioControlButtons/backward.svg';
import {ReactComponent as Forward} from '../../../../assets/audioControlButtons/forward.svg';

function AudioPlayerUI() {
    return (
        <div id='audio-player-ui'>
            <div className='audio_seeker'>
                <div className='filled'></div>
            </div>
            <div className='audio-controls'>
                <Backward className='backward control control_small'/>
                <Play className='play control control_big'/>
                <Forward className='forward control control_small'/>
            </div>
        </div>
    );
}

export default AudioPlayerUI;