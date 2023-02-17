import '../css/header.css'
import trollFace from '../assets/troll-face.png'

export default function Header(){
    return (
        <nav>
            <div className="nav--left">
                <img src={trollFace} alt="Troll face" />
                <h1 className='nav--h1'>Meme Generator</h1>
            </div>
            <p className='nav--right'>React Course - Project 3</p>
        </nav>
    )
    
}