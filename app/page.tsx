import Image from "next/image";
import styles from "./page.module.css";

const education = [
  "Academia Interamericana de Panamá (escuela)",
  "Business and Entrepreneurship - Duke University (pre-college program)",
  "IA en Finanzas - Bentley University (pre-college program)",
  "Stock Market & Investment Research - Bentley University (pre-college program)",
  "Investment Portfolio Management - Columbia University (pre-college program)",
];

const experience = [
  "Pasantía en MMG Bank (2025)",
  "MMG Bank (2026) - Departamento de Administración de Patrimonio y Banca de Inversión",
];

const tools = [
  "Word",
  "PowerPoint",
  "Excel básico",
  "Canva",
  "Adobe Premiere",
  "Adobe Photoshop",
  "Python básico",
];

const pythonWorks = [
  {
    title: "Automatización de tareas",
    description:
      "Scripts para agilizar procesos diarios, limpieza de datos y reportes simples.",
    tags: ["Python", "Archivos", "Procesos"],
  },
  {
    title: "Análisis de datos básico",
    description:
      "Exploración de datasets con métricas descriptivas y conclusiones claras.",
    tags: ["Python", "Datos", "Estadística"],
  },
  {
    title: "Visualizaciones y reportes",
    description:
      "Gráficos limpios para comunicar hallazgos en contextos académicos.",
    tags: ["Python", "Reportes", "Insights"],
  },
  {
    title: "Estructuras y POO",
    description:
      "Ejercicios con funciones, clases y buenas prácticas de organización.",
    tags: ["Python", "POO", "Fundamentos"],
  },
];

const recommendations = [
  {
    quote:
      "Demuestra una disciplina notable y una curiosidad analítica que eleva la calidad de su trabajo.",
    author: "Supervisora de Pasantía",
    role: "MMG Bank",
  },
  {
    quote:
      "Su capacidad para sintetizar información y comunicar hallazgos es sobresaliente.",
    author: "Mentor Académico",
    role: "Finanzas e Innovación",
  },
  {
    quote:
      "Aprende rápido, pregunta con criterio y entrega resultados consistentes.",
    author: "Profesional de Banca",
    role: "Gestión de Patrimonio",
  },
  {
    quote:
      "Su enfoque en datos y detalle aporta confianza en cada proyecto.",
    author: "Tutor de Investigación",
    role: "Stock Research",
  },
  {
    quote:
      "Combina creatividad con rigor, logrando soluciones claras y ejecutables.",
    author: "Líder de Equipo",
    role: "Proyectos Académicos",
  },
  {
    quote:
      "Su actitud profesional y ordenada se nota desde el primer día.",
    author: "Coordinador",
    role: "Prácticas Profesionales",
  },
];

const duplicatedRecommendations = [...recommendations, ...recommendations];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>MVU</div>
        <nav className={styles.nav}>
          <a href="#perfil">Perfil</a>
          <a href="#python">Python</a>
          <a href="#recomendaciones">Recomendaciones</a>
          <a href="#redes">Redes</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`} id="perfil">
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Perfil profesional</p>
            <h1 className={styles.title}>María Victoria Ureña</h1>
            <p className={styles.subtitle}>
              Soy egresada de la Academia Interamericana de Panamá y
              próximamente iniciaré mis estudios en Finanzas en Emory
              University. Me apasiona el mundo financiero, lo que me ha
              llevado a complementar mi formación con diversos cursos y
              experiencias de pasantía en banca de inversión. Actualmente,
              también estoy aprendiendo Python como herramienta para
              fortalecer mis habilidades analíticas. Me considero una persona
              trabajadora, curiosa y detallista, siempre dispuesta a aprender
              y a asumir nuevos retos.
            </p>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.portraitFrame}>
              <Image
                src="/ejecutivapic.webp"
                alt="Foto de María Victoria Ureña"
                width={420}
                height={520}
                priority
                className={styles.portrait}
              />
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Historial académico</h3>
              <ul>
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>Experiencia laboral</h3>
              <ul>
                {experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>Herramientas</h3>
              <div className={styles.tagList}>
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <div className={styles.infoCard}>
              <h3>Enfoque actual</h3>
              <p>
                Actualmente, mi enfoque está en profundizar mi comprensión
                del mundo de las finanzas a través de casos reales, lo que
                me permite conectar la teoría con la práctica. Busco
                adentrarme en este sector tan amplio y en constante
                evolución antes de iniciar la universidad, con el objetivo
                de desarrollar una base sólida y estar un paso adelante en
                mi formación académica y profesional.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="python">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Portafolio</p>
            <div className={styles.titleWithIcon}>
              <svg
                className={styles.pythonIcon}
                viewBox="0 0 256 255"
                aria-hidden="true"
              >
                <path
                  d="M126.9 0C62.6 0 66.6 27.9 66.6 27.9l.1 28.9h61.4v8.7H42.3S1.1 60.8 1.1 125.8c0 65 36 62.7 36 62.7h21.5v-30.2s-1.2-36 35.5-36h59.2s33.3.5 33.3-32.2V36.3S191.7 0 126.9 0Zm-33.8 18.7a11.1 11.1 0 1 1 0 22.1 11.1 11.1 0 0 1 0-22.1Z"
                  fill="#3776ab"
                />
                <path
                  d="M128.7 255c64.3 0 60.3-27.9 60.3-27.9l-.1-28.9h-61.4v-8.7h85.8s41.2 4.7 41.2-60.3c0-65-36-62.7-36-62.7H197v30.2s1.2 36-35.5 36h-59.2S69 132.4 69 165.1v53.8S63.9 255 128.7 255Zm33.8-18.7a11.1 11.1 0 1 1 0-22.1 11.1 11.1 0 0 1 0 22.1Z"
                  fill="#ffd43b"
                />
              </svg>
              <h2 className={styles.sectionTitle}>Trabajos en Python</h2>
            </div>
            <p className={styles.sectionSubtitle}>
              Ejercicios y proyectos que reflejan mi progreso en programación,
              análisis y automatización.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {pythonWorks.map((work) => (
              <article className={styles.workCard} key={work.title}>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className={styles.tagList}>
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a
            className={styles.primaryButton}
            href="https://github.com/vickyurenav12/Clases_de_Python"
            target="_blank"
            rel="noreferrer"
          >
            Ver repositorio en GitHub
          </a>
        </section>

        <section className={styles.section} id="recomendaciones">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Confianza</p>
            <h2 className={styles.sectionTitle}>Recomendaciones</h2>
            <p className={styles.sectionSubtitle}>
              Comentarios de profesionales con quienes he trabajado o estudiado.
            </p>
          </div>

          <div className={styles.carousel}>
            <div className={styles.track}>
              {duplicatedRecommendations.map((item, index) => (
                <article
                  className={styles.recoCard}
                  key={`${item.author}-${index}`}
                  aria-hidden={index >= recommendations.length}
                >
                  <p>“{item.quote}”</p>
                  <span>
                    {item.author} · {item.role}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="redes">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Contacto</p>
            <h2 className={styles.sectionTitle}>Redes sociales</h2>
            <p className={styles.sectionSubtitle}>
              Estoy disponible para conversar sobre proyectos, pasantías o
              colaboraciones.
            </p>
          </div>

          <div className={styles.socialCard}>
            <div>
              <div className={styles.socialTitle}>
                <svg
                  className={styles.socialIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.5A3.25 3.25 0 0 0 4.5 7.75v8.5a3.25 3.25 0 0 0 3.25 3.25h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5a3.25 3.25 0 0 0-3.25-3.25h-8.5Zm8.88 1.12a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
                    fill="currentColor"
                  />
                </svg>
                <h3>Instagram</h3>
              </div>
              <p>@vickyurena12</p>
            </div>
            <a
              className={styles.secondaryButton}
              href="https://instagram.com/vickyurena12"
              target="_blank"
              rel="noreferrer"
            >
              Visitar perfil
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 María Victoria Ureña. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
