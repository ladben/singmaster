import './Settings.css'

import { FontSizeChanger } from './SettingOptions/SettingOptions';
import { useEffect, useRef } from 'react';

function Settings(props) {
    const {openCloseSettingsPanel} = props;

    const settingsPanelRef = useRef(null);

    useEffect(() => {
        let xDown = null;                                                        
        let yDown = null;

        function getTouches(e) {
            return e.touches || e.originalEvent.touches;
        }

        const handleTouchStart = (e) => {
            const firstTouch = getTouches(e)[0];                                      
            xDown = firstTouch.clientX;                                      
            yDown = firstTouch.clientY;                                      
        };

        const handleTouchEnd = () => {
            if (settingsPanelRef.current) {
                settingsPanelRef.current.style.transform = '';
            }
        }

        const handleTouchMove = (e) => {
            if ( ! xDown || ! yDown ) {
                return;
            }
        
            const xUp = e.touches[0].clientX;                                    
            const yUp = e.touches[0].clientY;
        
            const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;
                                                                               
            if ( Math.abs( xDiff ) < Math.abs( yDiff ) ) {
                if (yDiff < -15) { 
                    openCloseSettingsPanel();
                } else if (yDiff < 0) {
                    if (settingsPanelRef.current) {
                        settingsPanelRef.current.style.transform = 'translateY(10%)';
                    }
                }                                                                
            }

            /* reset values */
            xDown = null;
            yDown = null;                                             
        };

        const settingsPanel = settingsPanelRef.current;

        settingsPanel.addEventListener('touchstart', handleTouchStart);
        settingsPanel.addEventListener('touchend', handleTouchEnd);
        settingsPanel.addEventListener('touchmove', handleTouchMove);

        return () => {
            settingsPanel.removeEventListener('touchstart', handleTouchStart);
            settingsPanel.removeEventListener('touchend', handleTouchEnd);
            settingsPanel.removeEventListener('touchmove', handleTouchMove);
        };
    }, [openCloseSettingsPanel]);

    return (
        <div className='settings-container hidden'>
            <div
                className='settings-overlay'
                onClick={openCloseSettingsPanel}
            ></div>
            <div
                className='settings-panel'
                ref={settingsPanelRef}
            >
                <FontSizeChanger />
            </div>
        </div>
    );
};

export default Settings;