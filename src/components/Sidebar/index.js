import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} alt="emmanuel" className="sub-logo" />
      </Link>
      <nav className={showSidebar ? 'mobile-sidebar' : ''}>
        {/* activeclassname helps us to style the active link */}
        <NavLink
          onClick={() => {
            setShowSidebar(false)
          }}
          end
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          onClick={() => {
            setShowSidebar(false)
          }}
          end
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          onClick={() => {
            setShowSidebar(false)
          }}
          end
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink
          onClick={() => {
            setShowSidebar(false)
          }}
          end
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <ul className="social-link">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/emmanuel-ekpedeme-080666250/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/frankemmy98"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/emmanuel.codes/"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Ekpedeme_Ema98"
            >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => {
            setShowSidebar(false)
          }}
          className="times-icon"
          color="#ff4500"
          size="3x"
          icon={faTimes}
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/emmanuel-ekpedeme-080666250/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/frankemmy98"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/emmanuel.codes/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Ekpedeme_Ema98"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowSidebar(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
