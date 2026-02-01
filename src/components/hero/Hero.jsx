import './Hero.css'
import facebook from '../../assets/images/facebook.svg'
import reddit from '../../assets/images/reddit.svg'
import twitter from '../../assets/images/twitter.svg'
import discord from '../../assets/images/discord.svg'
import man from '../../assets/images/man.png'


function Hero() {
    return (
        <>
        <section>
           <div className="container">
            <div className="hero-wrapper">
                <div className="text-content">
                    <h1>
                        Hello i'am Evren Shan. Frontend Developer Based In India
                    </h1>
                    <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to specimen book.</p>
                         <ul className='social-media-wrapper'>
                            <li>
                                <img src={facebook} alt="facebook" />
                            </li>
                            <li>
                                <img src={reddit} alt="reddit" />
                            </li>
                            <li>
                                <img src={twitter} alt="twitter" />
                            </li>
                            <li>
                                <img src={discord} alt="discord" />
                            </li>
                         </ul>
                </div>
                <div className="img-content">
                    <img src={man} alt="man-photo"/>
                </div>
            </div>
           </div>

        </section>
        </>
    )
}
export default Hero