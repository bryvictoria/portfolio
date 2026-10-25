import { createElement } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Link2,
  Mail,
  MapPin,
  Phone,
  Settings,
} from 'lucide-react'
import './App.css'

const projects = [
  {
    name: 'WebRIS · Radiology Information System',
    description: 'A patient-first RIS with registration, scheduling, worklists, and integrated image viewing.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'DICOM'],
    image: 'photo-1579684385127-1ef15d508118',
    tone: 'blue',
  },
  {
    name: 'WebRIS DICOM Viewer',
    description: 'A browser-based DICOM viewer with MPR, cine playback, and annotation tools.',
    tags: ['Vue.js', 'Cornerstone.js', 'Laravel'],
    image: 'photo-1559757175-0eb30cd8c063',
    tone: 'slate',
  },
  {
    name: 'IAMServer & IAMCMS',
    description: 'OIDC-compliant authentication server and client management system for enterprise SSO.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    image: 'photo-1451187580459-43490279c0fa',
    tone: 'sky',
  },
  {
    name: 'WebBIS · Blood Bank Information System',
    description: 'Donor profiling, inventory tracking, and cross-matching integrated with iKnowu.',
    tags: ['CakePHP', 'jQuery', 'MySQL'],
    image: 'photo-1576091160399-112ba8d25d1d',
    tone: 'red',
  },
  {
    name: 'OnlineCIF · COVID-19 Information Form',
    description: 'Data collection and reporting platform for COVID-19, built to make public health data easier to act on.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    image: 'photo-1584982751601-97dcc096659c',
    tone: 'cream',
  },
  {
    name: 'iKnowu · Fingerprint Biometrics System',
    description: 'Biometric identity management with cross-institution deployment and Java applet integration.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    image: 'photo-1614064641938-3bbee52942c7',
    tone: 'mint',
  },
  {
    name: 'Autonomous Snake · Personal Project',
    description: 'Pathfinding AI using BFS, DFS, and performance-optimized heuristics.',
    tags: ['JavaScript', 'HTML5 Canvas'],
    image: 'photo-1511512578047-dfb367046420',
    tone: 'green',
  },
  {
    name: 'Other Systems',
    description: 'Messaging gateways, WebShop, mobile applications, and internal tools.',
    tags: ['Java', 'PHP', 'MySQL'],
    image: 'photo-1518770660439-4636190af475',
    tone: 'dark',
  },
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
    items: 'SQL Server · PostgreSQL · MongoDB · MySQL · Redis',
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
  ['Contact', 'contact'],
]

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
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="page-width intro-grid">
          <div className="about-copy section-rule">
            <h2>About Me</h2>
            <p>Full-stack developer and technical lead with 14+ years of experience across the full software development lifecycle, from system architecture and implementation to deployment and long-term maintenance. Specializes in enterprise and healthcare information systems: radiology, laboratory, blood bank, biometric identity, and telemedicine. Experienced in OAuth2/OIDC authentication infrastructure, teleradiology, DICOM/PACS integrations, and CI/CD-driven deployment pipelines across multi-branch client sites.</p>
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
            <p>Selected projects from my professional experience and personal work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className={`project-image ${project.tone}`}>
                  <img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=900&q=80`} alt="" loading={index > 3 ? 'lazy' : 'eager'} />
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="details-link" href="mailto:victoria.bryan.dejesus@gmail.com?subject=Project%20inquiry">View Details <ArrowRight size={13} /></a>
                </div>
              </article>
            ))}
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
                <p className="role-title">Core & Data Manager (Full-Stack Developer / Tech Lead)</p>
                <p className="role-date">April 2012 – Present</p>
                <p>Design and develop full-stack software solutions for healthcare, most of which are actively used across hospitals and health organizations. Lead client-side deployments, technical support, and on-site training.</p>
              </div>
              <ul className="project-list">
                {projects.slice(0, 6).map((project) => <li key={project.name}>{project.name}</li>)}
                <li>WebBIS · Blood Bank Information System</li>
                <li>WebShop · Hospital e-commerce System</li>
              </ul>
            </div>
          </div>
          <aside className="personal-project section-rule">
            <h2>Personal Projects</h2>
            <h3>Autonomous Snake</h3>
            <p>Pathfinding AI with A*, BFS, DFS and performance optimization.</p>
            <a href="#projects">View All Projects <ArrowRight size={13} /></a>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="wordmark" href="#home">Bryan <span>Victoria</span></a>
          <p>Full-Stack Developer / Tech Lead <i /> 14+ Years Experience</p>
          <div className="footer-links">
            <a href="https://github.com/bryvictoria" aria-label="GitHub"><Code2 size={17} /></a>
            <a href="mailto:victoria.bryan.dejesus@gmail.com" aria-label="Email"><Mail size={17} /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a>
          </div>
          <a className="footer-contact" href="mailto:victoria.bryan.dejesus@gmail.com">Let's work together <ArrowRight size={13} /></a>
        </div>
      </footer>
    </main>
  )
}

export default App
