import '../css/meme.css'
import memesData from '../memesData.js'
import React from 'react'

export default function Meme(){
    
    const [memeUrl, setMemeUrl] = React.useState('')

    function getUrl(){
        const memesArr = memesData.data.memes
        const random = Math.floor(Math.random() * memesArr.length) 
        const url = memesArr[random].url
        setMemeUrl(url)
    }

    return (
        <div className="meme--wrapper">
            <div className='form'>
                <div className="form--input--wrapper">
                    <input type="text" placeholder='Top text'/>
                    <input type="text" placeholder='Bottom text'/>
                </div>
                <button onClick={getUrl} id='submit-form'>Get new meme!</button>
            </div>
            <img src={memeUrl} className='meme--img' />
        </div>
    )
}