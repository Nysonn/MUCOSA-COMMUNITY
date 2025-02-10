import styles from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons"
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import musocaLogo from '../../assets/icons/mucosa-logo.png'

function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Projects', href: '/projects' }
  ]

  const resources = [
    { name: 'Learning Hub', href: '/resources/learning' },
    { name: 'Code Repository', href: '/resources/code' },
    { name: 'Documentation', href: '/resources/docs' },
    { name: 'Community Guidelines', href: '/resources/guidelines' }
  ]

  const socials = [
    { name: 'GitHub', icon: '/social/github.svg', href: 'https://github.com/mucosa' },
    { name: 'Twitter', icon: '/social/twitter.svg', href: 'https://twitter.com/mucosa' },
    { name: 'LinkedIn', icon: '/social/linkedin.svg', href: 'https://linkedin.com/company/mucosa' },
    { name: 'Instagram', icon: '/social/instagram.svg', href: 'https://instagram.com/mucosa' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <img src={musocaLogo} alt="MUCOSA Logo" className={styles.logoImage} />
              <span className={styles.logoText}>MUCOSA</span>
            </div>
            <p className={styles.description}>
              Empowering computing students through community, innovation, and practical learning.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@mucosa.org</span>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} />
                <span>+(256) 123-456-789</span>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Mbarara University of Science and Technology</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="https://twitter.com/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/mucosa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>Resources</h3>
              <ul>
                {resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="/contact">Faculty of Computing and Informatics</a>
                </li>
                <li>
                  <a href="/contact">Mbarara University of Science and Technology</a>
                </li>
                <li>
                  <a href="/contact">Email: info@mucosa.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} MUCOSA. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="/privacy">Privacy Policy</a>
            <span className={styles.divider}>|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 