import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  
  return (
    <header className="home-header">
      <Link 
        to="/" 
        className={`header-text ${location.pathname === '/' ? 'active' : ''}`}
      >
        My Services
      </Link>
      <Link 
        to="/training" 
        className={`header-text ${location.pathname === '/training' ? 'active' : ''}`}
      >
        Training And Courses
      </Link>
      <Link 
        to="/contact" 
        className={`header-text ${location.pathname === '/contact' ? 'active' : ''}`}
      >
        Contact Me
      </Link>
    </header>
  )
}

export default Header
