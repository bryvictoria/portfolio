import { createElement, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Phone,
  Settings,
} from 'lucide-react'
import dicomChest from './assets/images/dicom-viewer-chest.png'
import dicomMpr from './assets/images/dicom-viewer-ct-mpr (1).png'
import iknowuScreenshot from './assets/images/iknowu.png'
import webRisFrontdesk from './assets/images/webris-frontdesk.png'
import webRisRadtech from './assets/images/webris-radtech.png'
import webRisResultList from './assets/images/webris-result-list.png'
import webRisResult from './assets/images/webris-result.png'
import './App.css'

const caseStudies = [
  {
    number: '01',
    category: 'Radiology · Multi-branch systems',
    name: 'WebRIS & teleradiology',
    description: 'A multi-branch Radiology Information System covering the full order lifecycle, from patient registration and scheduling through radtech QA and radiologist reporting.',
    outcomes: [
      'Designed teleradiology transfers using an OAuth2-secured REST API and DICOM C-MOVE, with retry handling and result retrieval.',
      'Implemented role-based, multi-branch access and repeatable client deployments with Docker Compose and GitLab CI/CD.',
    ],
    screenshots: [
      { src: webRisFrontdesk, alt: 'WebRIS front desk dashboard' },
      { src: webRisRadtech, alt: 'WebRIS radiology technician worklist' },
      { src: webRisResultList, alt: 'WebRIS radiology results list' },
      { src: webRisResult, alt: 'WebRIS radiology result details' },
    ],
    tags: ['Laravel', 'Vue 3', 'Inertia.js', 'MySQL', 'DICOM', 'OAuth2'],
  },
  {
    number: '02',
    category: 'Medical imaging · WebGL',
    name: 'WebRIS DICOM Viewer',
    description: 'An in-browser imaging viewer embedded in the RIS, built for diagnostic workflows and studies from multiple imaging sources.',
    outcomes: [
      'Built multiplanar reconstruction, cine playback for multi-frame and ultrasound studies, and custom annotation tools with Cornerstone.js.',
      'Engineered a Laravel proxy to stream DICOM frames from DCM4CHEE PACS and patch incomplete metadata such as pixel spacing and VOI LUT.',
    ],
    screenshots: [
      { src: dicomChest, alt: 'DICOM viewer chest imaging study' },
      { src: dicomMpr, alt: 'DICOM viewer multiplanar CT study' },
    ],
    tags: ['Vue 3', 'Cornerstone.js', 'WebGL', 'Laravel', 'DCM4CHEE'],
  },
  {
    number: '03',
    category: 'Biometrics · Cross-institution identity',
    name: 'IKnowU · Fingerprint Biometrics System',
    description: 'A biometric identity system designed for deployment across institutions, with Java Applet-based client integration.',
    outcomes: [
      'Designed and implemented identity workflows using Spring Boot, Spring Security, and Hibernate.',
      'Integrated fingerprint capture through a Java Applet client and JavaFX application.',
    ],
    screenshots: [
      { src: iknowuScreenshot, alt: 'IKnowU fingerprint biometrics application' },
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'JavaFX'],
  },
]

const otherProjects = [
  ['IAMServer & IAMCMS', 'OIDC-compliant enterprise authentication with a client-management app for users, roles, and access.', 'Laravel · MySQL · Vue.js · OIDC'],
  ['MSGS · SMS Gateway', 'Spring Boot notification platform with user management.', 'Java · Spring Security · PostgreSQL · Angular 6'],
  ['OnlineCIF & laboratory results', 'COVID-19 data collection and reporting, plus a laboratory app for managing and reporting patient results.', 'CakePHP · Laravel API · Vue.js · MySQL'],
  ['WebBBIS · Blood bank', 'Donor profiling, inventory tracking, and cross-matching integrated with IKnowU.', 'CakePHP · MySQL · jQuery'],
  ['WebHistopath · Histopathology', 'A histopathology information system for healthcare workflows.', 'CakePHP · MySQL · jQuery'],
]

const skills = [
  {
    title: 'Languages & frameworks',
    icon: Code2,
    items: 'PHP (Laravel, CakePHP, Symfony) · Java (Spring Boot, Spring Security, Hibernate) · C# · VB.NET · Vue.js (2, 3) · Angular 6 · JavaFX, Flutter, Quasar, Vuetify · Element Plus, Inertia.js',
  },
  {
    title: 'Databases',
    icon: Database,
    items: 'MS SQL Server · PostgreSQL · MongoDB · MySQL',
  },
  {
    title: 'Integration & APIs',
    icon: Link2,
    items: 'REST API, SOAP API · OAuth2, OIDC · DICOM · RabbitMQ · WebSockets (Laravel Reverb)',
  },
  {
    title: 'DevOps & tooling',
    icon: Settings,
    items: 'Docker, Docker Compose · GitLab CI/CD · Unity',
  },
]

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

function ProjectGallery({ projectName, screenshots, compact = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeScreenshot = screenshots[activeIndex]
  const hasMultiple = screenshots.length > 1

  const showScreenshot = (index) => {
    setActiveIndex((index + screenshots.length) % screenshots.length)
  }

  return (
    <div className={`project-gallery${compact ? ' compact' : ''}`}>
      <div className="gallery-frame">
        <img src={activeScreenshot.src} alt={activeScreenshot.alt} />
        {hasMultiple && (
          <>
            <button className="gallery-arrow previous" type="button" aria-label={`Previous ${projectName} screenshot`} onClick={() => showScreenshot(activeIndex - 1)}>
              <ChevronLeft size={18} />
            </button>
            <button className="gallery-arrow next" type="button" aria-label={`Next ${projectName} screenshot`} onClick={() => showScreenshot(activeIndex + 1)}>
              <ChevronRight size={18} />
            </button>
            <span className="gallery-count" aria-live="polite">{activeIndex + 1} / {screenshots.length}</span>
          </>
        )}
      </div>
      {hasMultiple && (
        <div className="gallery-caption-row">
          <span className="gallery-caption">{activeScreenshot.alt}</span>
          <div className="gallery-dots" role="group" aria-label={`${projectName} screenshots`}>
            {screenshots.map((screenshot, index) => (
              <button
                className={index === activeIndex ? 'active' : ''}
                type="button"
                key={screenshot.src}
                aria-label={`Show screenshot ${index + 1}: ${screenshot.alt}`}
                aria-pressed={index === activeIndex}
                onClick={() => showScreenshot(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-shade" />
        <header className="site-header page-width">
          <a className="wordmark" href="#home">Bryan <span>Victoria</span></a>
          <nav aria-label="Main navigation">
            {navItems.map(([label, id], index) => (
              <a className={index === 0 ? 'active' : ''} href={`#${id}`} key={id}>{label}</a>
            ))}
          </nav>
        </header>
        <div className="hero-content page-width">
          <p className="eyebrow">Full-stack developer <span>/</span> tech lead</p>
          <h1>Bryan <span>Victoria</span></h1>
          <p className="hero-intro">Building reliable and scalable software solutions<br className="desktop-break" /> for healthcare and enterprise systems.</p>
          <div className="hero-contact" id="contact">
            <a href="tel:+63961210766"><Phone size={14} />0961 921 0766</a>
            <a href="mailto:victoria.bryan.dejesus@gmail.com"><Mail size={14} />victoria.bryan.dejesus@gmail.com</a>
            <span><MapPin size={14} />Quezon City, Philippines</span>
          </div>
          <a className="github-link" href="https://github.com/bryvictoria" target="_blank" rel="noreferrer"><Code2 size={15} />github.com/bryvictoria <ExternalLink size={11} /></a>
          <a className="resume-link" href="/Bryan_Victoria_Resume.pdf" target="_blank" rel="noreferrer">View resume <ExternalLink size={12} /></a>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="page-width intro-grid">
          <div className="about-copy section-rule">
            <h2>About Me</h2>
            <p>Full-stack developer and technical lead with 15+ years of experience across the software development lifecycle, from system architecture and implementation to deployment and long-term maintenance. Specializes in healthcare and enterprise systems for radiology, laboratory, blood bank, and biometric identity workflows. Experienced in OAuth2/OIDC authentication, teleradiology, DICOM/PACS integrations, and CI/CD deployments across multi-branch client sites.</p>
          </div>
          <div className="skills-panel section-rule" id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }) => (
                <div className="skill" key={title}>
                  {createElement(Icon, { className: 'skill-icon', size: 17, strokeWidth: 2.4 })}
                  <div><h3>{title}</h3><p>{items}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="page-width">
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <p>Selected systems I designed and built for healthcare and enterprise workflows.</p>
          </div>
          <div className="project-grid">
            {caseStudies.map((project) => (
              <article className="project-card" key={project.name}>
                <ProjectGallery projectName={project.name} screenshots={project.screenshots} />
                <div className="project-body">
                  <p className="project-category"><span>{project.number}</span>{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="case-outcomes">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="other-work">
            <h3>Other systems</h3>
            <div className="other-work-grid">
              {otherProjects.map(([name, description, stack, screenshot]) => (
                <article className="other-work-item" key={name}>
                  {screenshot && <ProjectGallery projectName={name} screenshots={[{ src: screenshot, alt: 'WebBBIS blood bank donation dashboard' }]} compact />}
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <span>{stack}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="featured-websites-section" id="websites" aria-labelledby="websites-heading">
        <div className="page-width">
          <div className="section-heading">
            <h2 id="websites-heading">Featured Websites</h2>
            <p>Client websites built for healthcare and rental home discovery.</p>
          </div>
          <div className="website-grid">
            <article className="website-card">
              <div className="website-preview clinic-site-preview">
                <img
                  src="/tree-of-health-preview.png"
                  alt="Screenshot of the Tree of Health Diagnostic & Imaging Clinic website"
                  loading="lazy"
                />
              </div>
              <div className="website-body">
                <p className="website-category">Healthcare website</p>
                <h3>Tree of Health Diagnostic &amp; Imaging Clinic</h3>
                <p>A responsive website for a diagnostic clinic in Balagtas, Bulacan, presenting laboratory and imaging services, clinic information, and location details. Patients can also request appointments online.</p>
                <div className="website-meta">
                  <span>Project type</span><strong>Healthcare website</strong>
                </div>
                <div className="tags">
                  {['Laravel', 'Vue.js', 'PHP', 'JavaScript', 'HTML', 'CSS'].map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="website-link" href="https://tohwebsite.vercel.app/" target="_blank" rel="noreferrer">Visit live website <ExternalLink size={14} /></a>
              </div>
            </article>

            <article className="website-card">
              <div className="website-preview property-preview">
                <img
                  src="/milyanlease-preview.png"
                  alt="Screenshot of the MilyanLease rental homes website"
                  loading="lazy"
                />
              </div>
              <div className="website-body">
                <p className="website-category">Rental homes</p>
                <h3>MilyanLease</h3>
                <p>A rental-home discovery website showcasing thoughtfully managed homes and helping renters find a place that feels like home.</p>
                <div className="website-meta">
                  <span>Project type</span><strong>Property rental website</strong>
                </div>
                <a className="website-link" href="https://milyanlease.vercel.app/" target="_blank" rel="noreferrer">Visit live website <ExternalLink size={14} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="page-width experience-grid">
          <div className="experience-main section-rule">
            <h2>Professional Experience</h2>
            <div className="experience-content">
              <div className="role-copy">
                <h3>IT Easy Software Solutions Inc.</h3>
                <p className="role-title">Core & Dev. Manager (Full-Stack Developer / Tech Lead)</p>
                <p className="role-date">April 2012 – Present</p>
                <p>Design and build healthcare software used across hospitals and health organizations. Lead client deployments, technical support, and on-site training.</p>
              </div>
              <div className="earlier-role">
                <h3>SYSNET, IDEAWURX Inc.</h3>
                <p className="role-title">Web Programmer</p>
                <p className="role-date">May 2011 – April 2012</p>
                <p>Developed CMS platforms for CallMyName, LottoCell, SNMPMonitoringSystem, and MMDASystem.</p>
              </div>
            </div>
          </div>
          <aside className="personal-project section-rule">
            <h2>Personal Projects</h2>
            <h3>Autonomous Snake</h3>
            <p>Built from scratch in JavaScript and Canvas. A layered pathfinding strategy escalates from greedy hunting to survival fallbacks, with a Hamiltonian cycle mode.</p>
            <div className="snake-metrics">
              <div><strong>5–10×</strong><span>faster search</span></div>
              <div><strong>60–78%</strong><span>survival across 5 board sizes</span></div>
            </div>
            <p className="snake-detail">At 10,000 nodes: BFS improved from 25 ms to 2.4 ms; A* from 30 ms to 5 ms, using integer-keyed typed arrays and pre-allocated structures.</p>
            <a href="https://github.com/bryvictoria" target="_blank" rel="noreferrer">GitHub profile <ExternalLink size={12} /></a>
          </aside>
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="page-width education-inner">
          <GraduationCap className="education-icon" size={22} />
          <div>
            <h2>Education</h2>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>Major in System Development · Central Luzon State University · 2007–2011</p>
            <p className="education-honors">DOST-SEI Undergraduate Scholar · Dean’s Lister, College of Arts and Science</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="wordmark" href="#home">Bryan <span>Victoria</span></a>
          <p>Full-Stack Developer / Tech Lead <i /> 15+ Years Experience</p>
          <div className="footer-links">
            <a href="https://github.com/bryvictoria" aria-label="GitHub"><Code2 size={17} /></a>
            <a href="mailto:victoria.bryan.dejesus@gmail.com" aria-label="Email"><Mail size={17} /></a>
          </div>
          <a className="footer-contact" href="mailto:victoria.bryan.dejesus@gmail.com">Let's work together <ArrowRight size={13} /></a>
        </div>
      </footer>
    </main>
  )
}

export default App
