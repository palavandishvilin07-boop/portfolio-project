import './Myskills.css'
import git from '../../assets/images/git.png'
import js from '../../assets/images/js.png'
import sass from '../../assets/images/sass.png'
import nest from '../../assets/images/nest.png'
import storybook from '../../assets/images/storybook.png'


function Myskills() {
    return (
        <>
        
        <section>
            <div className="container">
            <h2>My Skills</h2>
            <div className="skills-wrapper">
                <img src={git} alt="github" />
                <div className="js"></div>
                <img src={sass} alt="sass/scss" />
                <img src={nest} alt="nest" />
                <img src={storybook} alt="storybook" />
                <img src={git} alt="" />
                <img src={git} alt="" />
                <img src={git} alt="" />
                <img src={git} alt="" />
                <img src={git} alt="" />
            </div>
        </div>
        </section>
        </>
    )
}


export default Myskills