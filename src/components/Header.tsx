import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div><img src="/images/agency-logo.svg" alt="agency-logo" /></div>
        <nav>
            <ul className="header-nav d-f">
                <li className="header-nav-item"><a href="">About</a></li>
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