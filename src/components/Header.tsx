import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><Link to="/"><img src="/images/agency-logo.svg" alt="agency-logo" /></Link></div>
      <nav>
        <ul className="header-nav d-f">
          <li className="header-nav-item"><Link to="/about">About</Link></li>
          <li className="header-nav-item"><Link to="/services">Services</Link></li>
          <li className="header-nav-item"><Link to="/portfolio">Portfolio</Link></li>
          <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <Link to="/contact" className="header-contact">Contact</Link>
    </header>
  )
}

export default Header