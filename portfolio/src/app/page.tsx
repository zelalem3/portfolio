import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";


const projects = [
  {
    title: "InterviewPulse",
    year: "2026",
    subtitle: "AI Mock Interview Platform",
    description:
      "Engineered an AI-powered mock-interview platform with real-time voice practice using Google Gemini API. Includes background processing with Redis + Alembic and full Docker Compose setup.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/zelalem3",
    live: "#",
  },
  {
    title: "JobPulse",
    year: "2026",
    subtitle: "Ethiopian Job Intelligence Platform",
    description:
      "Built a job intelligence platform that automates multi-source data collection with Playwright. Features PostgreSQL persistence and skill-matching recommendation endpoints.",
    tech: ["Python", "Laravel", "React", "PostgreSQL", "Redis", "Playwright"],
    github: "https://github.com/zelalem3",
    live: "#",
  },
  {
    title: "EchoSystem",
    year: "2026",
    subtitle: "Group Chat Application",
    description:
      "Full-stack real-time group chat application with authentication, built using React, Express.js, and Firebase.",
    tech: ["React", "Express.js", "Firebase", "Socket.io"],
    github: "https://github.com/zelalem3",
    live: "#",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "C / C++", "PHP"],
  },
  {
    category: "Backend",
    items: [
      "Node.js / Express.js",
      "Django / Flask",
      "Laravel",
      "FastAPI",
      "Socket.io / REST APIs",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Flutter", "HTML5 / CSS3"],
  },
  {
    category: "Data & Infra",
    items: [
      "PostgreSQL / MySQL",
      "MongoDB / Firebase",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    category: "Tools",
    items: ["Git / Linux", "Playwright", "LocalStack", "Alembic"],
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="#home" className="nav-brand text-lg font-bold tracking-tight text-accent">
            ZG
          </Link>
          <ul className="hidden gap-8 text-sm font-medium text-muted md:flex">
            <li>
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-foreground transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-foreground transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="hero-section flex min-h-screen items-center pt-16">
        <div className="hero-content mx-auto max-w-5xl px-6">
          <p className="hero-enter hero-enter-1 mb-3 font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="hero-enter hero-enter-2 mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Zelalem Getnet
          </h1>
          <h2 className="hero-enter hero-enter-3 mb-6 text-xl font-medium text-muted sm:text-2xl">
            Software Engineer · Backend-Focused Full Stack & App Developer
          </h2>
          <p className="hero-enter hero-enter-4 mb-8 max-w-xl text-lg text-muted">
            I build scalable REST APIs, real-time applications, reliable backend services, and cross-platform mobile apps using Python, Node.js, Django, Flask, Laravel, React Native, Flutter/Dart, and modern tooling.
          </p>
          <div className="hero-enter hero-enter-5 mb-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="action-button rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              View Projects
            </a>
            <a
              href="mailto:zgetnet24@gmail.com"
              className="action-button rounded-lg border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface"
            >
              Get in Touch
            </a>
          </div>
          <div className="hero-enter hero-enter-6 flex gap-5">
            <a
              href="https://github.com/zelalem3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-accent"
              aria-label="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/zelalem-getnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:zgetnet24@gmail.com"
              className="text-muted transition hover:text-accent"
              aria-label="Email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-accent">
            About
          </h2>
          <div className="scroll-reveal max-w-2xl space-y-4 text-muted">
            <p>
              Software Engineer focused on{" "}
              <strong className="font-semibold text-foreground">
                backend development
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-foreground">
                distributed systems
              </strong>
              . I design and build REST APIs, real-time applications, and
              scalable web services.
            </p>
            <p>
              Comfortable working across the stack when needed (React, Flutter),
              but my core strength is in reliable server-side architecture, data
              pipelines, and systems that scale.
            </p>
            <p>
              Currently based in Ethiopia. Open to remote opportunities and
              interesting backend / platform challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-surface/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-2xl font-bold tracking-tight after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-accent">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="mb-1 flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="font-mono text-xs text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-accent">
                  {project.subtitle}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-pill rounded-md bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    className="hover:text-accent transition-colors"
                  >
                    Live Demo →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="mb-10 text-2xl font-bold tracking-tight after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-accent">
              Technical Skills
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <ScrollReveal
                key={group.category}
                className="skill-group rounded-xl border border-border bg-surface/40 p-5"
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 90}
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="skill-item rounded-md border border-border bg-background/60 px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    {/* Education */}
    <section id="education" className="bg-surface/50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal direction="up" delay={0}>
          <h2 className="mb-10 text-2xl font-bold tracking-tight after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-accent">
            Education
          </h2>
        </ScrollReveal>
        <div className="max-w-xl space-y-8">
          <ScrollReveal
            className="education-item border-b border-border pb-8"
            direction="left"
            delay={0}
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                ALX Software Engineering Program
              </h3>
              <span className="font-mono text-sm text-muted">2024</span>
            </div>
            <p className="text-sm font-medium text-accent">Holberton School</p>
            <p className="mt-1 text-sm text-muted">
              Specialization: Backend Engineering
            </p>
          </ScrollReveal>
          <ScrollReveal className="education-item" direction="left" delay={120}>
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                B.Sc. in Computer Science
              </h3>
              <span className="font-mono text-sm text-muted">2026</span>
            </div>
            <p className="text-sm font-medium text-accent">Unity University</p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal direction="up" delay={0}>
          <h2 className="mb-4 text-2xl font-bold tracking-tight after:mx-auto after:mt-2 after:block after:h-0.5 after:w-10 after:rounded after:bg-accent">
            Get In Touch
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={60}>
          <p className="mx-auto mb-10 max-w-md text-muted">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out.
          </p>
        </ScrollReveal>
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          <ScrollReveal direction="scale" delay={0}>
            <a
              href="mailto:zgetnet24@gmail.com"
              className="contact-card block rounded-xl border border-border bg-surface p-5 text-left transition hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="mb-1 block text-xs uppercase tracking-wider text-muted">
                Email
              </span>
              <span className="font-medium">zgetnet24@gmail.com</span>
            </a>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={80}>
            <a
              href="tel:+251968610963"
              className="contact-card block rounded-xl border border-border bg-surface p-5 text-left transition hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="mb-1 block text-xs uppercase tracking-wider text-muted">
                Phone
              </span>
              <span className="font-medium">+251 968 610 963</span>
            </a>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={160}>
            <a
              href="https://linkedin.com/in/zelalem-getnet"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card block rounded-xl border border-border bg-surface p-5 text-left transition hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="mb-1 block text-xs uppercase tracking-wider text-muted">
                LinkedIn
              </span>
              <span className="font-medium">zelalem-getnet</span>
            </a>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={240}>
            <a
              href="https://github.com/zelalem3"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card block rounded-xl border border-border bg-surface p-5 text-left transition hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="mb-1 block text-xs uppercase tracking-wider text-muted">
                GitHub
              </span>
              <span className="font-medium">@zelalem3</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>

         
      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <p>Built by Zelalem Getnet · 2026 · Next.js</p>
      </footer>
    </>
  );
}
