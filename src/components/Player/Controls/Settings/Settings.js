import './Settings.css'

import { FontSizeChanger } from './SettingOptions/SettingOptions';

function Settings() {
    return (
        <div className='settings-container'>
            <div className='settings-overlay'></div>
            <div className='settings-panel'>
                <FontSizeChanger />
            </div>
        </div>
    );
};

export default Settings;