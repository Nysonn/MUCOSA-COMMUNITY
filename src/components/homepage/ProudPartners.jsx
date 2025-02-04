import styles from './ProudPartners.module.css'

function PartnerLogo({ name, logo, website }) {
  return (
    <a 
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.partnerLogo}
    >
      <div 
        className={styles.logo}
        style={{ backgroundImage: `url(${logo})` }}
        title={name}
      />
    </a>
  )
}

function ProudPartners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/partner-logos/microsoft.svg",
      website: "https://microsoft.com"
    },
    {
      name: "Google Developer Groups",
      logo: "/partner-logos/gdg.svg",
      website: "https://developers.google.com/community/gdg"
    },
    {
      name: "GitHub Education",
      logo: "/partner-logos/github.svg",
      website: "https://education.github.com"
    },
    {
      name: "Innovation Village",
      logo: "/partner-logos/innovation-village.svg",
      website: "https://innovationvillage.co.ug"
    },
    {
      name: "Outbox Hub",
      logo: "/partner-logos/outbox.svg",
      website: "https://outbox.co.ug"
    }
  ]

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Proud Partners</h2>
          <p className={styles.subtitle}>
            Working together with industry leaders to empower the next generation of tech innovators
          </p>
        </div>

        <div className={styles.logosGrid}>
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Interested in partnering with MUCOSA?
          </p>
          <button className={styles.ctaButton}>
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProudPartners 