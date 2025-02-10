import { useState } from 'react';
import styles from './ProjectsPage.module.css';
import ProjectImage1 from '../../src/assets/images/student-portal.png'
import ProjectImage2 from '../../src/assets/images/event-software.jpg'
import ProjectImage3 from '../../src/assets/images/simply-work.webp'

function ProjectCard({ title, description, image, creator, category, link }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.creator}>Created by: {creator}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>View Project</a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'web', 'mobile', 'AI', 'open-source'];

  const projects = [
    {
      title: "Mucosa Music Player",
      description: "A web-based music streaming application for the Mucosa community.",
      image: ProjectImage1,
      creator: "John Doe",
      category: "web",
      link: "https://mucosa-music.com"
    },
    {
      title: "AI Music Analyzer",
      description: "A tool that analyzes music trends using AI and machine learning.",
      image: ProjectImage2,
      creator: "Jane Smith",
      category: "AI",
      link: "https://ai-music-analyzer.com"
    },
    {
      title: "Open-Source Collaboration Platform",
      description: "A platform for developers to collaborate on open-source music tech projects.",
      image: ProjectImage3,
      creator: "David Kim",
      category: "open-source",
      link: "https://opensource-music.dev"
    },
    {
        title: "Mucosa Music Player",
        description: "A web-based music streaming application for the Mucosa community.",
        image: ProjectImage1,
        creator: "John Doe",
        category: "web",
        link: "https://mucosa-music.com"
      },
      {
        title: "AI Music Analyzer",
        description: "A tool that analyzes music trends using AI and machine learning.",
        image: ProjectImage2,
        creator: "Jane Smith",
        category: "AI",
        link: "https://ai-music-analyzer.com"
      },
      {
        title: "Open-Source Collaboration Platform",
        description: "A platform for developers to collaborate on open-source music tech projects.",
        image: ProjectImage3,
        creator: "David Kim",
        category: "open-source",
        link: "https://opensource-music.dev"
      }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Community Projects</h1>
          <p className={styles.pageDescription}>Explore projects created by members of the Mucosa community.</p>
        </header>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />

          <div className={styles.categoryFilters}>
            {categories.map(category => (
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

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noResults}>
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
