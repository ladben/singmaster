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
        if (!e.target.classList.contains('fontsize-change_container')) {
            fontsizeChangeIcon = e.target.closest('.fontsize-change_container');
        }

        const root = document.querySelector(':root');
        if (root) {
            const rootFontSize = root.style.fontSize;

            if (rootFontSize === '20px') {
                root.style.setProperty('font-size', '16px');
                fontsizeChangeIcon.classList.remove('active');
            }

            if (rootFontSize === '16px' || rootFontSize === '') {
                root.style.setProperty('font-size', '20px');
                fontsizeChangeIcon.classList.add('active');
            }
        }
    }

    return (
        <div className='settings-container'>
            <div
                className='settings-btn_container'
                onClick={settingsClickHandler}
            >
                <SettingsIcon
                    className='settings-btn'
                />
            </div>
            <div className='settings-options'>
                <div
                    className='fontsize-change_container'
                    onClick={fontsizeChangeClickHandler}
                >
                    <FontsizeChangeIcon
                        className='fontsize-change_icon'
                    />
                </div>
            </div>
        </div>
    );
}

export default Settings;