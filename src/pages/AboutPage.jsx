import { useState } from 'react'
import styles from './AboutPage.module.css'

function VisionMission() {
  return (
    <section className={styles.visionMission}>
      <div className={styles.visionSection}>
        <h2>Our Vision</h2>
        <p>
          To be the leading student community that empowers and connects computing
          students, fostering innovation and excellence in technology education.
        </p>
      </div>
      <div className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          To create a vibrant community that enhances learning, promotes
          collaboration, and prepares students for successful careers in technology
          through practical experiences, mentorship, and industry connections.
        </p>
      </div>
    </section>
  )
}

function TeamMember({ name, role, image, bio, socials }) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.memberImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
        <p className={styles.memberBio}>{bio}</p>
        <div className={styles.socialLinks}>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src={social.icon} alt={social.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function ImpactMetric({ number, label, icon }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricIcon}>
        <img src={icon} alt={label} />
      </div>
      <div className={styles.metricNumber}>{number}</div>
      <div className={styles.metricLabel}>{label}</div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
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
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
          rows={5}
        />
      </div>
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </p>
      )}
    </form>
  )
}

function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "President",
      image: "/team/john-doe.jpg",
      bio: "Computer Science student passionate about building communities and fostering tech innovation.",
      socials: [
        { platform: "LinkedIn", icon: "/social/linkedin.svg", link: "https://linkedin.com" },
        { platform: "Twitter", icon: "/social/twitter.svg", link: "https://twitter.com" },
        { platform: "GitHub", icon: "/social/github.svg", link: "https://github.com" }
      ]
    },
    // Add more team members...
  ]

  const impactMetrics = [
    {
      number: "500+",
      label: "Active Members",
      icon: "/icons/members.svg"
    },
    {
      number: "50+",
      label: "Events Organized",
      icon: "/icons/events.svg"
    },
    {
      number: "30+",
      label: "Industry Partners",
      icon: "/icons/partners.svg"
    },
    {
      number: "200+",
      label: "Project Collaborations",
      icon: "/icons/projects.svg"
    }
  ]

  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>About MUCOSA</h1>
          <p className={styles.pageDescription}>
            Learn about our community, mission, and the people behind MUCOSA
          </p>
        </header>

        <VisionMission />

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>

        <section className={styles.impactSection}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.metricsGrid}>
            {impactMetrics.map((metric, index) => (
              <ImpactMetric key={index} {...metric} />
            ))}
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <p>Have questions or want to get involved? Reach out to us!</p>
              <div className={styles.contactDetails}>
                <p>
                  <strong>Email:</strong> info@mucosa.org
                </p>
                <p>
                  <strong>Location:</strong> Faculty of Computing and Informatics,
                  Mbarara University of Science and Technology
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage 