import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import mucosaIcon from '../../../src/assets/icons/MucosaIcon.jpg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={mucosaIcon} alt="MUCOSA" className={styles.logoIcon} />
          <span className={styles.logoText}>MUCOSA</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        {/* Navigation */}
        <div className={`${styles.navWrapper} ${menuOpen ? styles.show : ''}`}>
          <nav className={styles.nav}>
            <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
            <Link to="/news" className={location.pathname === '/news' ? styles.active : ''}>News</Link>
            <Link to="/events" className={location.pathname === '/events' ? styles.active : ''}>Events</Link>
            <Link to="/career" className={location.pathname === '/career' ? styles.active : ''}>Career</Link>
            <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
