import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './NewsPage.module.css'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import { newsItems } from '../data/newsitems'

function NewsFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className={styles.filterSection}>
      <button
        className={`${styles.filterButton} ${!activeCategory ? styles.active : ''}`}
        onClick={() => onCategoryChange(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function NewsCard({id, image, category, title, excerpt, date, author }) {
  return (
    <article className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.meta}>
          <div className={styles.author}>
            <img src={author.avatar} alt={author.name} className={styles.avatar} />
            <span>{author.name}</span>
          </div>
          <span className={styles.date}>{date}</span>
        </div>
        <Link 
        to={`/news/${id}`}
        >
         <button className={styles.readMore}>Read More</button>
        </Link>
      </div>
    </article>
  )
}

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'Technology',
    'Community',
    'Events',
    'Education',
    'Career',
    'Business',
    'Entertainment',
  ]  

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = !activeCategory || item.category === activeCategory
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className={styles.newsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Latest News</h1>
          <p className={styles.pageDescription}>
            Stay updated with the latest news, announcements, and stories from the MUCOSA community
          </p>
        </header>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <NewsFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className={styles.newsGrid}>
          {filteredNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className={styles.noResults}>
            <p>No news articles found matching your criteria.</p>
          </div>
        )}

        <div className={styles.loadMore}>
          <PrimaryButton>Load More Articles</PrimaryButton>  
        </div>
      </div>
    </div>
  )
}

export default NewsPage 