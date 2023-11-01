import './Controls.css'

import {ReactComponent as SettingsIcon} from '../../../assets/settings.svg';
import musicInfo from '../../../assets/lyics/nemTudjaSenki/header.json'

import Settings from './Settings/Settings';

function Header() {
    const openCloseSettingsPanel = () => {
        const settingsContainer = document.querySelector('.settings-container');

        if (settingsContainer) {
            settingsContainer.classList.toggle('hidden');
            document.querySelector('html').classList.toggle('overscroll-none');
        }
    }

    return (
        <div className='controls'>
            <div className='header'>
                <SettingsIcon
                    className='open-settings'
                    onClick={openCloseSettingsPanel}
                />
                <div className='music-info'>
                    <div className='title'>{musicInfo.title}</div>
                    <div className='artist'>{musicInfo.artist}</div>
                </div>
            </div>
            <Settings openCloseSettingsPanel={openCloseSettingsPanel}/>
        </div>
    );
}

export default Header;