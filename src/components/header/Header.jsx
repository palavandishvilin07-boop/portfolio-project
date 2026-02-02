import './Header.css'
import logo from '../../assets/images/logo.svg'
import resume from '../../assets/images/resume.svg'


function Header() {

  return (
    <>
      <header>
        <div className="container">
            <div className="header-wrapper">
                <div className="logo"><img src={logo} alt="logo" />Personal</div>
                <nav>
                  <ul>
                    <li> <a href="#">About Me</a> </li>
                    <li> <a href="#">Skills</a> </li>
                    <li> <a href="#">Project</a> </li>
                    <li> <a href="#">Contact Me</a> </li>
                  </ul>
                </nav>
                <div className="download"><img src={resume} alt="resume"/></div>
            </div>
        </div>
        </header>
    </>
  )
}

export default Header
