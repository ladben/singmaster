import './Controls.css'

import {ReactComponent as SettingsIcon} from '../../../assets/settings.svg';
import musicInfo from '../../../assets/lyics/nemTudjaSenki/header.json'


function Header() {

    

    return (
        <div className='controls'>
            <div className='header'>
                <SettingsIcon className='settings'/>
                <div className='music-info'>
                    <div className='title'>{musicInfo.title}</div>
                    <div className='artist'>{musicInfo.artist}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;