import { useCallback, useEffect, useRef, useState } from 'react';
import './Lyrics.css'
import lyricsFile from '../../../assets/lyics/nemTudjaSenki/lyrics.json'

function Lyrics(props) {
    const {currLineTime} = props;
    const timestampList = lyricsFile.lyrics.map(elem => elem.timestamp);

    const [activeTimestamp, setActiveTimestamp] = useState(0)

    const scrollable = useRef(null);

    const getMatchingTimestamp = useCallback((inputTimestamp, timestampArr = timestampList) => {
        let left = 0;
        let right = timestampArr.length - 1;
      
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
      
          if (timestampArr[mid] <= inputTimestamp && (mid === timestampArr.length - 1 || timestampArr[mid + 1] > inputTimestamp)) {
            return timestampArr[mid];
          } else if (timestampArr[mid] <= inputTimestamp) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
      
        return null;
    }, [timestampList]);

    useEffect(() => {
        const mathcingTimestamp = getMatchingTimestamp(currLineTime);
        
        if (mathcingTimestamp !== null && activeTimestamp !== mathcingTimestamp) {
            const currActiveLine = document.querySelector(`li[data-timestamp="${activeTimestamp}"]`);
            const nextActiveLine = document.querySelector(`li[data-timestamp="${mathcingTimestamp}"]`);
            if (currActiveLine && nextActiveLine) {
                currActiveLine.classList.remove('active');
                nextActiveLine.classList.add('active');
                setActiveTimestamp(mathcingTimestamp);
                nextActiveLine.parentElement.scrollTo({
                    top: nextActiveLine.offsetTop - 150,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }, [currLineTime, getMatchingTimestamp, activeTimestamp]);


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

    const lineClickHandler = (e) => {
        const lineTimeStamp = e.target.closest('li').dataset.timestamp;
        const audio = document.querySelector('audio');
        if (lineTimeStamp && audio) {
            audio.currentTime = Number(lineTimeStamp);
        }
    }

    return (
        <div id='lyrics-container'>
            <div className='lyrics' ref={scrollable}>
                <ol onScroll={scrollHandler}>
                    {
                        lyricsFile.lyrics.map((lyricsShard, shardIndex) => {
                            const className = shardIndex === 0 ? 'active' : '';
                            return (
                                <li
                                    className={className}
                                    key={`listItem-${shardIndex}`}
                                    data-timestamp={lyricsShard.timestamp}
                                    onClick={lineClickHandler}
                                >
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