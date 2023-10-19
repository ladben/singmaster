import { useEffect, useRef, useState } from 'react';
import './Lyrics.css'
import lyricsFile from '../../../assets/lyics/nemTudjaSenki/lyrics.json'

function Lyrics(props) {
    const {currLineTime} = props;

    const [currActiveLine, setCurrActiveLine] = useState(lyricsFile.lyrics.map((elem, index) => {
        return index === 0;
    }));

    const scrollable = useRef(null);

    const progressActiveLine = () => {
        const newCurrentActiveLine = [...currActiveLine];
        const currentTrueIndex = newCurrentActiveLine.findIndex(element => element === true);
        if (currentTrueIndex !== -1) {
            const newCurrentTrueIndex = (currentTrueIndex + 1) % newCurrentActiveLine.length;

            newCurrentActiveLine[newCurrentTrueIndex] = true;
            newCurrentActiveLine[currentTrueIndex] = false;
        }
        
        setCurrActiveLine(newCurrentActiveLine);
    }


    useEffect(() => {
        console.log(currLineTime);
        if (currLineTime > 5) {
            progressActiveLine();
        }
    }, [currLineTime]);


    const scrollHandler = (e) => {
        const visibleHeight = e.target.offsetHeight;
        const totalHeight = e.target.scrollHeight;
        const scrolledHeight = e.target.scrollTop

        if (visibleHeight + scrolledHeight >= totalHeight - 1) {
            scrollable.current.classList.add('scroll-end');
        } else {
            scrollable.current.classList.remove('scroll-end');
        }

        if (scrolledHeight === 0) {
            scrollable.current.classList.remove('scrolled');
        } else {
            scrollable.current.classList.add('scrolled');
        }
    }

    return (
        <div id='lyrics-container'>
            <div className='lyrics' ref={scrollable}>
                <ol onScroll={scrollHandler}>
                    {
                        lyricsFile.lyrics.map((lyricsShard, shardIndex) => {
                            return (
                                <li className={currActiveLine[shardIndex] === true ? 'active' : ''} key={`listItem-${shardIndex}`} data-timestamp={lyricsShard.timestamp}>
                                    {
                                        lyricsShard.text.map((line, lineIndex) => {
                                            return (<p key={`line-${shardIndex}-${lineIndex}`}>{line}</p>)
                                        })
                                    }
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        </div>
    );
}

export default Lyrics;