import '../css/meme.css'
import memesData from '../memesData.js'

export default function Meme(){
    
    function getUrl(){
        const memesArr = memesData.data.memes
        const random = Math.floor(Math.random() * memesArr.length) 
        const url = memesArr[random].url
        console.log(url)
    }

    return (
        <div className="meme--wrapper">
            <div className='form' action="">
                <div className="form--input--wrapper">
                    <input type="text" placeholder='Top text'/>
                    <input type="text" placeholder='Bottom text'/>
                </div>
                <button onClick={getUrl} id='submit-form'>Get new meme! </button>
            </div>
        </div>
    )
}