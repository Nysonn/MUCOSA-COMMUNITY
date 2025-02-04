import { useState } from 'react'
import styles from './CareerPage.module.css'

function RoadmapSection({ title, items }) {
  return (
    <div className={styles.roadmapSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.roadmapGrid}>
        {items.map((item, index) => (
          <div key={index} className={styles.roadmapItem}>
            <div className={styles.roadmapIcon}>
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
            {item.skills && (
              <div className={styles.skillsList}>
                {item.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function JobCard({ title, company, location, type, description, requirements, link }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <h3 className={styles.jobTitle}>{title}</h3>
        <div className={styles.jobMeta}>
          <span className={styles.company}>{company}</span>
          <span className={styles.location}>{location}</span>
          <span className={styles.jobType}>{type}</span>
        </div>
      </div>
      <p className={styles.jobDescription}>
        {isExpanded ? description : `${description.slice(0, 150)}...`}
      </p>
      {!isExpanded && (
        <button 
          className={styles.expandButton}
          onClick={() => setIsExpanded(true)}
        >
          Read More
        </button>
      )}
      {isExpanded && (
        <>
          <div className={styles.requirements}>
            <h4>Requirements:</h4>
            <ul>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.applyButton}
          >
            Apply Now
          </a>
        </>
      )}
    </div>
  )
}

function ResourceCard({ title, description, link, icon }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceCard}
    >
      <div className={styles.resourceIcon}>
        <img src={icon} alt={title} />
      </div>
      <h3 className={styles.resourceTitle}>{title}</h3>
      <p className={styles.resourceDescription}>{description}</p>
    </a>
  )
}

function CareerPage() {
  const [activeTab, setActiveTab] = useState('roadmap')

  const roadmapData = {
    'Software Development': [
      {
        title: "Frontend Developer",
        description: "Build user interfaces and interactive web applications",
        icon: "/career-icons/frontend.svg",
        skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"]
      },
      {
        title: "Backend Developer",
        description: "Develop server-side logic and databases",
        icon: "/career-icons/backend.svg",
        skills: ["Node.js", "Python", "Java", "SQL", "APIs"]
      },
      // Add more roles...
    ],
    'Data Science': [
      {
        title: "Data Analyst",
        description: "Analyze data and create insights",
        icon: "/career-icons/data-analyst.svg",
        skills: ["Python", "SQL", "Statistics", "Data Visualization"]
      },
      // Add more roles...
    ]
  }

  const jobs = [
    {
      title: "Junior Software Developer",
      company: "Tech Corp Uganda",
      location: "Kampala, Uganda",
      type: "Full-time",
      description: "We are seeking a motivated junior software developer to join our growing team...",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Knowledge of JavaScript and React",
        "Strong problem-solving skills"
      ],
      link: "https://example.com/apply"
    },
    // Add more jobs...
  ]

  const resources = [
    {
      title: "Free Coding Bootcamp",
      description: "Learn to code with our comprehensive online curriculum",
      icon: "/resource-icons/bootcamp.svg",
      link: "https://example.com/bootcamp"
    },
    // Add more resources...
  ]

  return (
    <div className={styles.careerPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Career Development</h1>
          <p className={styles.pageDescription}>
            Explore career paths, find opportunities, and access resources to help you succeed
          </p>
        </header>

        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'roadmap' ? styles.active : ''}`}
            onClick={() => setActiveTab('roadmap')}
          >
            Career Roadmap
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'jobs' ? styles.active : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            Job Opportunities
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'roadmap' && (
            <div className={styles.roadmapContent}>
              {Object.entries(roadmapData).map(([category, items]) => (
                <RoadmapSection key={category} title={category} items={items} />
              ))}
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className={styles.jobsContent}>
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className={styles.resourcesContent}>
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CareerPage 