import { useState } from 'react'
import styles from './NewsPage.module.css'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import TechImageEvent from '../assets/images/berlin-tech-event.webp'
import CommunityTechEvent from '../assets/images/dutch-tech-event.png'
import BusinessTechEvent from '../assets/images/kenya-tech.jpg'
import EntTechEvent from '../assets/images/google-event.webp'
import EducationEvent from '../assets/images/tech-event-sa.jpeg'
import CareerEvent from '../assets/images/barclena-tech-event.jpg'
import MaleDevImage from '../assets/images/male-dev.jpg'
import MaleDevSeniorImage from '../assets/images/dev-male.jpg'
import FemaleDevImage from '../assets/images/female-dev.jpg'

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

function NewsCard({ image, category, title, excerpt, date, author }) {
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
        <button className={styles.readMore}>Read More</button>
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

  const newsItems = [
    {
      image: TechImageEvent,
      category: 'Technology',
      title: 'Annual Tech Summit Highlights Innovation in AI',
      excerpt: 'The recent MUCOSA Tech Summit brought together industry leaders and students to discuss the future of AI and its impact on society.',
      date: 'March 15, 2024',
      author: {
        name: 'John Doe',
        avatar: MaleDevSeniorImage
      }
    },
    {
      image: CommunityTechEvent,
      category: 'Community',
      title: 'MUCOSA Launches New Mentorship Program',
      excerpt: 'A new initiative connecting students with industry professionals has been launched to provide guidance and career support.',
      date: 'March 12, 2024',
      author: {
        name: 'Jane Smith',
        avatar: FemaleDevImage
      }
    },
    {
      image: BusinessTechEvent,
      category: 'Business',
      title: 'Local Startup Secures Funding for Music Tech Innovation',
      excerpt: 'A promising music-tech startup has secured funding to develop new tools for artists, helping them distribute and promote their music.',
      date: 'March 10, 2024',
      author: {
        name: 'Mike Johnson',
        avatar: MaleDevSeniorImage
      }
    },
    {
      image: EntTechEvent,
      category: 'Entertainment',
      title: 'MUCOSA Hosts Concert Night to Celebrate Creativity',
      excerpt: 'A night filled with music, dance, and celebration as MUCOSA hosts a grand concert showcasing student talent.',
      date: 'March 8, 2024',
      author: {
        name: 'Sarah Lee',
        avatar: FemaleDevImage
      }
    },
    {
      image: EducationEvent,
      category: 'Education',
      title: 'Students Shine in Coding Hackathon Challenge',
      excerpt: 'Young developers demonstrated their skills in a competitive coding hackathon, solving real-world problems with creative solutions.',
      date: 'March 5, 2024',
      author: {
        name: 'David Kim',
        avatar: MaleDevImage
      }
    },
    {
      image: CareerEvent,
      category: 'Career',
      title: 'Tech Career Fair Connects Students with Top Employers',
      excerpt: 'MUCOSA’s annual career fair provided students with opportunities to network with recruiters from leading tech companies.',
      date: 'March 2, 2024',
      author: {
        name: 'Emily Brown',
        avatar: FemaleDevImage
      }
    }
  ];  

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