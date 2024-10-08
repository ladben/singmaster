import './SeekTime.css';

const SeekTime = ({duration, seekedPercent}) => {

    const seekedTime = duration * (seekedPercent / 100);

    let minutes = Math.floor(seekedTime / 60);
    let seconds = Math.floor(seekedTime - (minutes * 60));

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div id="seeked_time">{minutes}:{seconds}</div>
    );
}
 
export default SeekTime;