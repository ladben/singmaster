import { useEffect, useRef } from 'react';
import './ToggleInput.css';

function ToggleInput(props) {

    const {toggleHandler} = props;

    const toggleInputRef = useRef(null);

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

        const handleTouchMove = (e) => {
            if ( ! xDown || ! yDown ) {
                return;
            }
        
            const xUp = e.touches[0].clientX;                                    
            const yUp = e.touches[0].clientY;
        
            const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;
                                                                               
            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
                const settingsOption = document.querySelector('.settings-option-fontsize');
                if (settingsOption) {
                    if (xDiff > 0 && settingsOption.classList.contains('active')) { 
                        // swipe left
                        toggleHandler();
                    } else if (xDiff < 0 && !settingsOption.classList.contains('active')) {
                        // swipe right
                        toggleHandler();
                    }                                                                
                }
            }

            /* reset values */
            xDown = null;
            yDown = null;                                             
        };

        const toggleInput = toggleInputRef.current;

        toggleInput.addEventListener('touchstart', handleTouchStart);
        toggleInput.addEventListener('touchmove', handleTouchMove);

        return () => {
            toggleInput.removeEventListener('touchstart', handleTouchStart);
            toggleInput.removeEventListener('touchmove', handleTouchMove);
        };
    }, [toggleHandler]);

    return (
        <div
            className='input input-toggle'
            ref={toggleInputRef}
        ></div>
    );
};

export default ToggleInput;