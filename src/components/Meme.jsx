import '../css/meme.css'
import React from 'react'

export default function Meme(){
    
    const [allMemeImages, setAllMemeImages] = React.useState([])
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        link: '',
        checkbox: false
    })

    //getting memes form an API without infinite re-render loop 
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    //handling text inputs if 'form'
    function handleText(event){
        const {value, name, type, checked} = event.target
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                [name]: type === "checkbox" ? checked : value
            })
        })
    }

    //getting url for a meme at button click
    function getUrl(){
        const memesArr = allMemeImages
        const random = Math.floor(Math.random() * memesArr.length) 
        const url = memesArr[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }

    //Meme component
    return (
        <div className="meme--wrapper">
            <div className='form'>
                <div className="form--input--wrapper">
                    <div className="meme--text--input">
                        <input 
                            type="text" 
                            placeholder='Top text'
                            onChange={handleText} 
                            name='topText' 
                            value={meme.topText}
                            className='form--text--top'
                        />
                        <input 
                            type="text" 
                            placeholder='Bottom text'
                            onChange={handleText} 
                            name='bottomText' 
                            value={meme.bottomText}
                            className='form--text--bottom'
                        />
                    </div>
                    <div className="meme--link">
                        <input 
                            type="text" 
                            placeholder='Link to an img (optional)'
                            onChange={handleText}
                            name='link'
                            value={meme.link}
                            id='form--link'
                        />
                        <div className="form--checkbox">
                            <input
                                type="checkbox"
                                id='linkAccept'
                                name="checkbox"
                                onChange={handleText}
                                checked={meme.checkbox}
                            />
                            <label htmlFor="linkAccept">Use image from link</label>
                        </div>
                    </div>
                </div>
                <button onClick={getUrl} id='submit-form'>Get new meme!</button>
            </div>
            <div className="meme">
                <img src={meme.link && meme.checkbox ? meme.link : meme.randomImg} className='meme--img' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}