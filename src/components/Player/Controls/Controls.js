import './Controls.css'

import {ReactComponent as SettingsIcon} from '../../../assets/settings.svg';
import musicInfo from '../../../assets/lyics/nemTudjaSenki/header.json'

import Settings from './Settings/Settings';

function Header() {
    return (
        <div className='controls'>
            <div className='header'>
                <SettingsIcon className='open-settings'/>
                <div className='music-info'>
                    <div className='title'>{musicInfo.title}</div>
                    <div className='artist'>{musicInfo.artist}</div>
                </div>
            </div>
            <Settings />
        </div>
    );
}

export default Header;