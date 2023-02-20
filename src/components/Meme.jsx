import '../css/meme.css'
import memesData from '../memesData.js'
import React from 'react'

export default function Meme(){
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    function getUrl(){
        const memesArr = allMemeImages.data.memes
        const random = Math.floor(Math.random() * memesArr.length) 
        const url = memesArr[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
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
            <img src={meme.randomImg} className='meme--img' />
        </div>
    )
}