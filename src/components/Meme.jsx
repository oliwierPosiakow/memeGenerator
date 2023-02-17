import '../css/meme.css'

export default function Meme(){
    
    return (
        <div className="meme--wrapper">
            <form action="">
                <div className="form--input--wrapper">
                    <input type="text" />
                    <input type="text" />
                </div>
                <input type="submit" value='Get a new meme!'id='submit-form' />
            </form>
        </div>
    )
}