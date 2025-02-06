import { useState } from 'react'
import styles from './FeaturedNews.module.css'
import featurednews from '../../assets/images/tech-events.jpg'
import codingComm from '../../assets/images/coding-comm.jpg'
import gamingConsole from '../../assets/images/gaming-console.jpg'

function NewsCard({ image, category, title, excerpt, date }) {
  return (
    <article className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <div 
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{date}</span>
          <button className={styles.readMore}>Read More</button>
        </div>
      </div>
    </article>
  )
}

function FeaturedNews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const news = [
    {
      image: gamingConsole, 
      category: 'Technology',
      title: 'MUCOSA Hosts Successful Tech Innovation Summit',
      excerpt: 'Over 200 students participated in our annual technology innovation summit, showcasing groundbreaking projects.',
      date: 'March 10, 2024'
    },
    {
      image: codingComm,
      category: 'Community',
      title: 'New Mentorship Program Launches',
      excerpt: 'Leading industry professionals join forces with MUCOSA to mentor computing students.',
      date: 'March 8, 2024'
    },
    {
      image: featurednews,
      category: 'Education',
      title: 'Workshop Series: Modern Web Development',
      excerpt: 'Learn the latest web development technologies in our comprehensive workshop series.',
      date: 'March 5, 2024'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length)
  }

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured News</h2>
          <p className={styles.sectionSubtitle}>Stay updated with the latest from our community</p>
        </div>
        
        <div className={styles.carousel}>
          <button 
            className={`${styles.carouselButton} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          
          <div className={styles.carouselTrack}>
            {news.map((item, index) => (
              <div
                key={index}
                className={styles.carouselSlide}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                <NewsCard {...item} />
              </div>
            ))}
          </div>

          <button 
            className={`${styles.carouselButton} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className={styles.indicators}>
          {news.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedNews 