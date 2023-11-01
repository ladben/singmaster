import './FontSizeChanger.css'

import { useRef } from 'react';

import {ToggleInput} from '../../SettingInputs/SettingInputs';

function FontSizeChanger() {
    const fontSizeChangerRef = useRef(null);

    const fontsizeChangeClickHandler = () => {
        const root = document.querySelector(':root');
        if (root) {
            const rootFontSize = root.style.fontSize;

            if (rootFontSize === '20px') {
                root.style.setProperty('font-size', '16px');
                fontSizeChangerRef.current?.classList.remove('active');
            }

            if (rootFontSize === '16px' || rootFontSize === '') {
                root.style.setProperty('font-size', '20px');
                fontSizeChangerRef.current?.classList.add('active');
            }
        }
    }

    return (
        <div
            onClick={fontsizeChangeClickHandler}
            ref={fontSizeChangerRef}
            className='settings-option settings-option-fontsize'
        >
            <p>Nagyobb betűméret</p>
            <ToggleInput toggleHandler={fontsizeChangeClickHandler}/>
        </div>
    );
};

export default FontSizeChanger;