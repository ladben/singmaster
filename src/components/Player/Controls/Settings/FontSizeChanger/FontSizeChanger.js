import './FontSizeChanger.css'

function FontSizeChanger() {
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
        <div onClick={fontsizeChangeClickHandler}>HELLO</div>
    );
};

export default FontSizeChanger;