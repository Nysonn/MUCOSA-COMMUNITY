import styles from './Hero.module.css'
import heroVideo from '../../../src/assets/videos/drone-vid.mp4'
import { useRef, useEffect } from 'react'

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video 
        ref={videoRef}
        className={styles.backgroundVideo} 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>
            Empowering Future Tech Leaders to Connect, Learn and Innovate with <span className={styles.highlight}>MUCOSA</span>
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryButton}>Join Community</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
