import './Myprojects.css'
import crypto from '../../assets/images/crypto.png'



function Myprojects() {
    return (
        <>
        <section className='my-projects'>
                <div className="crypto">
                    <div className="title">
                        <h2>My <span>Projects</span></h2>
                    </div>
                    <div className="photo">
                        <img src={crypto} alt="" />
                    </div>
                    <div className="text-content">
                        <h4>01</h4>
                        <h4>Crypto Screener Application</h4>
                    </div>
                    <div className="desc">
                        <p>Iytjyt.</p>
                    </div>
                </div>
        </section>
        </>
    )
}



export default Myprojects