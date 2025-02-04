import styles from './Footer.module.css'

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
            <div className={styles.logo}>MUCOSA</div>
            <p className={styles.description}>
              Empowering computing students through community, innovation, and practical learning.
            </p>
            <div className={styles.socialLinks}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
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

            <div className={styles.contactColumn}>
              <h3>Contact Us</h3>
              <p>Faculty of Computing and Informatics</p>
              <p>Mbarara University of Science and Technology</p>
              <p>Email: info@mucosa.org</p>
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