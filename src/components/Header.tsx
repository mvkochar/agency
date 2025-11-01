import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><Link to="/"><img src="/images/agency-logo.svg" alt="agency-logo" /></Link></div>
      <nav>
        <ul className="header-nav d-f">
          <li className="header-nav-item"><Link to="/about">About</Link></li>
          <li className="header-nav-item"><a href="">Services</a></li>
          <li className="header-nav-item"><a href="">Pricing</a></li>
          <li className="header-nav-item"><a href="">Blog</a></li>
        </ul>
      </nav>
      <a href="" className="header-contact">Contact</a>
    </header>
  )
}

export default Header