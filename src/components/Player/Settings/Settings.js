import './Settings.css'

import {ReactComponent as SettingsIcon} from '../../../assets/settings_icon.svg';
import {ReactComponent as FontsizeChangeIcon} from '../../../assets/fontsize-changer_icon.svg';

function Settings() {
    const settingsClickHandler = (e) => {
        let settingsContainer = e.target;
        if (!e.target.classList.contains('settings-container')) {
            settingsContainer = e.target.closest('.settings-container');
        }

        settingsContainer.classList.toggle('open');
    }

    const fontsizeChangeClickHandler = (e) => {
        let fontsizeChangeIcon = e.target;
        if (!e.target.classList.contains('fontsize-change_icon')) {
            fontsizeChangeIcon = e.target.closest('.fontsize-change_icon');
        }

        const root = document.querySelector(':root');
        if (root) {
            const rootFontSize = root.style.fontSize;

            if (rootFontSize === '20px') {
                root.style.setProperty('font-size', '16px');
                fontsizeChangeIcon.classList.remove('active');
            }

            if (rootFontSize === '16px') {
                root.style.setProperty('font-size', '20px');
                fontsizeChangeIcon.classList.add('active');
            }
        }
    }

    return (
        <div className='settings-container'>
            <SettingsIcon
                className='settings-btn'
                onClick={settingsClickHandler}
            />
            <div className='settings-options'>
                <FontsizeChangeIcon
                    className='fontsize-change_icon'
                    onClick={fontsizeChangeClickHandler}
                />
            </div>
        </div>
    );
}

export default Settings;