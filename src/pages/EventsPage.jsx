import { useState } from 'react'
import styles from './EventsPage.module.css'

function EventCard({ 
  title, 
  date, 
  location, 
  description, 
  image, 
  category, 
  organizer, 
  isRegistrationOpen 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.dateBox}>
          <span className={styles.month}>{date.month}</span>
          <span className={styles.day}>{date.day}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.details}>
          <div className={styles.location}>
            <i className="fas fa-map-marker-alt"></i>
            {location}
          </div>
          <div className={styles.organizer}>
            <img src={organizer.avatar} alt={organizer.name} className={styles.organizerAvatar} />
            <span>{organizer.name}</span>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <button 
          className={`${styles.registerButton} ${!isRegistrationOpen ? styles.disabled : ''}`}
          onClick={() => isRegistrationOpen && setIsModalOpen(true)}
        >
          {isRegistrationOpen ? 'Register Now' : 'Registration Closed'}
        </button>
      </div>

      {isModalOpen && (
        <RegistrationModal 
          eventTitle={title} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  )
}

function RegistrationModal({ eventTitle, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    course: '',
    yearOfStudy: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    onClose()
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Register for {eventTitle}</h2>
        <form onSubmit={handleSubmit} className={styles.registrationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              value={formData.studentId}
              onChange={(e) => setFormData({...formData, studentId: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="course">Course</label>
            <select
              id="course"
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              required
            >
              <option value="">Select your course</option>
              <option value="BIT">Bachelor of Information Technology</option>
              <option value="BCS">Bachelor of Computer Science</option>
              <option value="BSE">Bachelor of Software Engineering</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="yearOfStudy">Year of Study</label>
            <select
              id="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={(e) => setFormData({...formData, yearOfStudy: e.target.value})}
              required
            >
              <option value="">Select year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  )
}

function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'all',
    'workshops',
    'seminars',
    'hackathons',
    'meetups',
    'conferences'
  ]

  const events = [
    {
      title: "Web Development Workshop",
      date: { month: "MAR", day: "25" },
      location: "Computer Lab 3, Faculty of Computing",
      description: "Learn modern web development techniques using React and Node.js. Perfect for beginners and intermediate developers.",
      image: "/event-images/web-dev.jpg",
      category: "workshops",
      organizer: {
        name: "John Doe",
        avatar: "/avatars/john-doe.jpg"
      },
      isRegistrationOpen: true
    },
    {
      title: "Tech Career Fair 2024",
      date: { month: "APR", day: "05" },
      location: "Main Hall, Administration Block",
      description: "Connect with leading tech companies and explore internship and job opportunities.",
      image: "/event-images/career-fair.jpg",
      category: "conferences",
      organizer: {
        name: "Jane Smith",
        avatar: "/avatars/jane-smith.jpg"
      },
      isRegistrationOpen: true
    },
    // Add more events...
  ]

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className={styles.eventsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Upcoming Events</h1>
          <p className={styles.pageDescription}>
            Discover and participate in exciting tech events, workshops, and meetups
          </p>
        </header>

        <div className={styles.filters}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.eventsGrid}>
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className={styles.noResults}>
            <p>No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventsPage 