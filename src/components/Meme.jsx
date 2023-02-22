import '../css/meme.css'
import memesData from '../memesData.js'
import React from 'react'

export default function Meme(){
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        link: ''
    })

    function handleText(event){
        const {value, name} = event.target
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                [name]: value
            })
        })
    }

    function getUrl(){
        const memesArr = allMemeImages.data.memes
        const random = Math.floor(Math.random() * memesArr.length) 
        const url = memesArr[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }
    
    console.log(meme)

    return (
        <div className="meme--wrapper">
            <div className='form'>
                <div className="form--input--wrapper">
                    <input 
                        type="text" 
                        placeholder='Top text'
                        onChange={handleText} 
                        name='topText' 
                        value={meme.topText}
                    />
                    <input 
                        type="text" 
                        placeholder='Bottom text'
                        onChange={handleText} 
                        name='bottomText' 
                        value={meme.bottomText}
                    />
                    <input 
                        type="text" 
                        placeholder='Link to an img (optional)'
                        onChange={handleText}
                        name='link'
                        value={meme.link}
                    />
                </div>
                <button onClick={getUrl} id='submit-form'>Get new meme!</button>
            </div>
            <div className="meme">
                <img src={meme.link ? meme.link : meme.randomImg} className='meme--img' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}