import './Hero.css'
import boy from '../../assets/images/boy.png'
import { useEffect, useState } from 'react'


function Hero() {
    const [heroSection, setheroSection] = useState([])

    const url = "https://raw.githubusercontent.com/palavandishvilin07-boop/portfolio-project-data/refs/heads/main/src/hero-section/hero-section-data.json"


    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setheroSection(data))
        .catch((error) => console.error("Error fetching data", error));
    },[]);

    return (
        <section className="hero-section">
            {heroSection.map((section, index) =>(
                <article className="content" key={index}>
                    <h1>{section.title}</h1>
                    <img src={boy} alt="boy photo" />
                    <p>{section.description}</p>
                </article>
            ))}
        </section>
    )
    
}
export default Hero