import styles from './ShowcaseProjects.module.css'

function ProjectCard({ title, description, tech, image, github, demo }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <div 
          className={styles.projectImage}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} className={styles.techItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShowcaseProjects() {
  const projects = [
    {
      title: "Student Portal",
      description: "A comprehensive portal for managing student academic records and resources.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder-project-1.jpg",
      github: "https://github.com/mucosa/student-portal",
      demo: "https://demo.student-portal.mucosa.org"
    },
    {
      title: "Event Management System",
      description: "Digital platform for organizing and managing MUCOSA community events.",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      image: "/placeholder-project-2.jpg",
      github: "https://github.com/mucosa/event-system",
      demo: "https://events.mucosa.org"
    },
    {
      title: "Learning Resources Hub",
      description: "Centralized platform for sharing educational resources and tutorials.",
      tech: ["Next.js", "GraphQL", "PostgreSQL"],
      image: "/placeholder-project-3.jpg",
      github: "https://github.com/mucosa/learning-hub",
      demo: "https://learn.mucosa.org"
    }
  ]

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Project Showcase</h2>
          <p className={styles.subtitle}>
            Discover innovative projects built by our community members
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.submitButton}>
            Submit Your Project
          </button>
          <button className={styles.viewAllButton}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseProjects 