import './Lyrics.css'

function Lyrics() {
    return (
        <div id='lyrics-container'>
            <div className='lyrics'>
                <ol>
                    <li>
                        <p>Nem tudja senki, hogy honnan jöttem</p>
                        <p>Hogy hányszor volt sötét az ég fölöttem</p>
                    </li>
                    <li>
                        <p>Ködös a múltam, nem ismeri senki</p>
                        <p>Nincs otthonom, nincs hova visszamenni</p>
                    </li>
                    <li>
                        <p>Sose voltam gazdag, de megvan minden</p>
                        <p>A legszebb pillanatok vannak ingyen</p>
                    </li>
                    <li>
                        <p>Sok fénylő szempár ragyog a világon</p>
                        <p>Millió ember, én mindet imádom</p>
                    </li>
                    <li>
                        <p>Rohanok, hogy a nevem egy olvadó jéghegybe véssem</p>
                        <p>De félek, nem érem el</p>
                    </li>
                    <li className='active'>
                        <p>Életfogytig tart a vágy, de nincs aki féltsen</p>
                        <p>Mégsem érdekel</p>
                    </li>
                    <li>
                        <p>Azt mondják, hogy magasról lehet nagyot esni</p>
                        <p>Én ha elestem sem álltam neki bűnbakot keresni</p>
                    </li>
                    <li>
                        <p>Néztem a szürke eget, azon tűnődtem, hogy lehet</p>
                        <p>Hogy ezer ágra süt a nap most is a felhők felett</p>
                    </li>
                    <li>
                        <p>Ha nyeregbe kerültem, mindig jött a pofon</p>
                        <p>Ez megtanított átlépni az üvegszilánkokon</p>
                    </li>
                    <li>
                        <p>Lehet a zsebemben teltház vagy csak lyukas garasok</p>
                        <p>Ez egy hullámvasút és én utas maradok</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Lyrics;