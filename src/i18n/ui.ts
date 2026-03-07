export const languages = {
    en: "English",
    es: "Español (MX)",
} as const;

export const defaultLang = "en";

export const ui = {
    en: {
        "nav.home": "Home",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "footer.craftedBy": "Crafted by",
        "footer.portfolioVersion": "Portfolio v2.0 @ 2026",
        "footer.poweredBy": "Powered by",
        "home.about.tag": "</software-engineer>",
        "home.about.title": "Engineer and Software Artisan",
        "home.about.description":
            "I'm a Software Engineer who designs, develops, and maintains software products from simple ideas to complex systems, using the right tools and frameworks to deliver clean, reliable, and user-focused experiences.",
        "home.about.downloadCv": "Download CV",
        "home.about.github": "GitHub",
        "home.about.linkedin": "LinkedIn",
        "home.about.linkInBio": "Link in bio",
        "home.about.imageAlt": "Harel cartoon portrait",
        "home.contact.tag": "// Contact",
        "home.contact.title": "Get In Touch",
        "home.contact.description":
            "Have a project in mind or just want to say hi? Feel free to send a message using the form below.",
        "home.contact.fullName": "Full Name",
        "home.contact.email": "Email Address",
        "home.contact.subject": "subject",
        "home.contact.message": "Message Body",
        "home.contact.placeholder.fullName": "John Doe",
        "home.contact.placeholder.email": "john@example.com",
        "home.contact.placeholder.subject": "Project Inquiry",
        "home.contact.placeholder.message": "Tell me about your project...",
        "home.contact.submit": "Send Message",
        "home.contact.whatsapp": "Contact me",
        "home.contact.whatsappMessage":
            "Hi Harel, I found your portfolio and would like to discuss a project.",
        "skills.level.expert": "Expert",
        "skills.level.advanced": "Advanced",
        "skills.level.intermediate": "Intermediate",
        "skills.intro.badge": "~/competencies",
        "skills.intro.title": "Technical",
        "skills.intro.titleAccent": "Skills",
        "skills.intro.description":
            "A practical overview of my engineering stack, from core languages to production tooling and team workflows.",
        "skills.tabs.ariaLabel": "Skills categories",
        "skills.tabs.languages": "Languages",
        "skills.tabs.frontend": "Frontend",
        "skills.tabs.backend": "Backend",
        "skills.tabs.databases": "Databases",
        "skills.tabs.tools": "Tools",
        "skills.education.title": "Education",
        "skills.education.degree": "Software Development Engineering",
        "skills.education.institutionLabel": "Institution",
        "skills.education.institution":
            "Instituto Tecnologico de Estudios Superiores de Occidente (ITESO), Guadalajara, Mexico",
        "skills.education.periodLabel": "Period",
        "skills.education.period": "January 2022 - Present",
        "skills.soft.title": "Soft Skills",
        "skills.soft.description":
            "I focus on solving problems with clarity, collaboration, and direct communication across technical and non-technical teams.",
        "skills.soft.problemSolving": "Problem solving",
        "skills.soft.teamwork": "Team collaboration",
        "skills.soft.communication": "Technical communication",
        "skills.languages.typescript.description":
            "I use TypeScript to build scalable fullstack web applications with strong typing and maintainable architecture.",
        "skills.languages.javascript.description":
            "I work with JavaScript across modern frontend and backend environments for interactive, reliable web experiences.",
        "skills.languages.html.description":
            "I write semantic, accessible HTML to structure content clearly and improve SEO and usability.",
        "skills.languages.css.description":
            "I use CSS and modern styling approaches, including Tailwind CSS, to build responsive and maintainable interfaces.",
        "skills.languages.go.description":
            "I use Go to build backend services and utility tools, with a focus on performance and simplicity.",
        "skills.languages.python.description":
            "I use Python for backend development and automation workflows that improve team productivity.",
        "skills.languages.csharp.description":
            "I have hands-on experience with C# for backend services and Unity-based game development.",
        "skills.frontend.vue.description":
            "Vue is my primary frontend framework; I use it confidently to build maintainable, production-ready interfaces.",
        "skills.frontend.nuxt.description":
            "Nuxt is my default choice for fullstack web apps with SSR and a unified codebase.",
        "skills.frontend.react.description":
            "I build many SPA projects with React and have solid experience across its ecosystem.",
        "skills.frontend.next.description":
            "I have used Next.js in several fullstack projects, often integrating with external backend services.",
        "skills.frontend.angular.description":
            "I have practical Angular experience and value its structure for large, scalable applications.",
        "skills.frontend.svelte.description":
            "I have working knowledge of Svelte and appreciate its simplicity and developer experience.",
        "skills.frontend.astro.description":
            "I use Astro for fast static websites with minimal JavaScript, with strong attention to accessibility and SEO.",
        "skills.backend.nest.description":
            "NestJS is one of my main Node.js frameworks; I value its modular architecture, scalability, and dependency management.",
        "skills.backend.hono.description":
            "I use Hono for small, fast APIs and projects where I can define a custom architecture from the ground up.",
        "skills.backend.express.description":
            "Express helped me learn core backend concepts such as authentication, middleware design, and MVC patterns.",
        "skills.backend.gohttp.description":
            "I am currently using Go for backend services, primarily with net/http, and continue deepening my experience.",
        "skills.backend.aspnet.description":
            "I have built enterprise-oriented applications with .NET and ASP.NET, using multiple architectural approaches.",
        "skills.databases.postgres.description":
            "PostgreSQL is my main database for most projects; I work confidently with advanced types, JSONB, and extensions like PostGIS.",
        "skills.databases.mariadb.description":
            "I use MariaDB for relational systems that need a balance of simplicity, reliability, and solid SQL workflows.",
        "skills.databases.mysql.description":
            "I have used MySQL in multiple projects to support reliable relational storage and optimized queries.",
        "skills.databases.sqlserver.description":
            "I have enterprise experience with SQL Server, including views, stored procedures, and performance-oriented querying.",
        "skills.databases.mongodb.description":
            "I work with MongoDB and understand when its flexible document model is a better fit than SQL.",
        "skills.databases.redis.description":
            "I use Redis for session storage, caching, and in-memory patterns that improve application performance.",
        "skills.tools.docker.description":
            "I use Docker extensively for local development with Docker Compose and for distributed deployments with Kubernetes.",
        "skills.tools.linux.description":
            "I work comfortably in Linux environments, including terminal-based workflows and Bash scripting.",
        "skills.tools.githubActions.description":
            "I have implemented GitHub Actions pipelines for linting, testing, deployments, and container image automation.",
        "skills.tools.aws.description":
            "I have deployed projects on AWS using distributed architectures and services such as CDN, EC2, Load Balancers, Lambda, and SNS.",
        "skills.tools.cloudflare.description":
            "I use Cloudflare to deploy and protect medium and small projects, leveraging its edge performance and security features.",
        "skills.tools.git.description":
            "I am highly experienced with Git for version control, code review workflows, and collaborative development.",
        "skills.tools.ai.description":
            "I use AI coding agents like Codex and Claude to accelerate delivery while maintaining careful human review.",
        "experience.intro.badge": "~/career-log",
        "experience.intro.title": "Work",
        "experience.intro.titleAccent": "Experience",
        "experience.intro.description":
            "A timeline of internships and engineering roles focused on delivery, ownership, and collaborative product development.",
        "experience.timeline.ariaLabel": "Professional experience timeline",
        "experience.types.work": "Work",
        "experience.entries.roomieland.company": "Roomieland",
        "experience.entries.roomieland.role":
            "Part-Time Software Engineer (Frontend Lead)",
        "experience.entries.roomieland.periodLabel": "November 2025 - Present",
        "experience.entries.roomieland.summary":
            "Lead frontend development for a complex housing platform that connects people looking for places to live.",
        "experience.entries.roomieland.highlights.1":
            "Developed and shipped multiple production views in Nuxt, integrating frontend flows with backend REST APIs.",
        "experience.entries.roomieland.highlights.2":
            "Co-designed and implemented a BFF architecture for multi-client scenarios to protect sensitive data in browsers.",
        "experience.entries.roomieland.highlights.3":
            "Delivered advanced features with the team, including cookie-based refresh tokens and real-time WebSocket flows, using GitHub and GitHub Projects.",
        "experience.entries.oracle.company": "Oracle",
        "experience.entries.oracle.role": "Software Engineering Intern",
        "experience.entries.oracle.periodLabel": "February 2025 - August 2025",
        "experience.entries.oracle.summary":
            "Worked on an Oracle telecommunications system used by providers in Latin America to create and track multi-service orders.",
        "experience.entries.oracle.highlights.1":
            "Adapted to Oracle's internal ecosystem and engineering workflows while contributing to a large, enterprise-scale codebase.",
        "experience.entries.oracle.highlights.2":
            "Strengthened foundations in Kubernetes and complex software architecture, collaborating through Jira and Visual Builder.",
        "experience.entries.toshiba.company":
            "Toshiba Global Commerce Solutions (Toshiba GCS)",
        "experience.entries.toshiba.role": "Software Intern",
        "experience.entries.toshiba.periodLabel": "July 2024 - February 2025",
        "experience.entries.toshiba.summary":
            "Built an internal web platform for support teams to centralize Toshiba device error knowledge, then supported its transition into a chatbot product.",
        "experience.entries.toshiba.highlights.1":
            "Implemented a UI migration from Vue 2 to Vue 3 with TypeScript for better maintainability and stronger contracts.",
        "experience.entries.toshiba.highlights.2":
            "Reimplemented authentication with SAML SSO and a Django backend to improve persistence and security.",
        "experience.entries.toshiba.highlights.3":
            "Ensured reliable frontend-backend integration through REST APIs and type-safe contracts, collaborating in GitLab and Jira.",
        "experience.entries.inoventi.company": "Inoventi",
        "experience.entries.inoventi.role": "Backend Intern",
        "experience.entries.inoventi.periodLabel": "January 2024 - July 2024",
        "experience.entries.inoventi.summary":
            "Contributed to a project management platform with ASP.NET and jQuery, delivering backend improvements and data-driven dashboard capabilities.",
        "experience.entries.inoventi.highlights.1":
            "Optimized EF Core and SQL Server queries to improve application responsiveness in key workflows.",
        "experience.entries.inoventi.highlights.2":
            "Implemented a high-impact dashboard view with aggregated metrics for operational visibility.",
        "experience.entries.inoventi.highlights.3":
            "Worked with DLL-based modules and MVC patterns in a collaborative GitHub workflow using the internal PM tool.",
        "lang.english": "English",
        "lang.spanishMx": "Spanish (MX)",
        "lang.change": "Change language",
        "page.home.title": "Hello World",
        "page.skills.title": "Skills",
        "page.experience.title": "Experience",
        "page.projects.title": "Hello World",
    },
    es: {
        "nav.home": "Inicio",
        "nav.skills": "Habilidades",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "footer.craftedBy": "Creado por",
        "footer.portfolioVersion": "Portafolio v2.0 @ 2026",
        "footer.poweredBy": "Desarrollado con",
        "home.about.tag": "</ingeniero-en-software>",
        "home.about.title": "Ingeniero y artesano del software",
        "home.about.description":
            "Soy un Ingeniero de Software que diseña, desarrolla y mantiene productos digitales, desde ideas simples hasta sistemas complejos, usando herramientas y frameworks adecuados para entregar experiencias limpias, confiables y centradas en las personas.",
        "home.about.downloadCv": "Descargar CV",
        "home.about.github": "GitHub",
        "home.about.linkedin": "LinkedIn",
        "home.about.linkInBio": "Link en bio",
        "home.about.imageAlt": "Retrato caricatura de Harel",
        "home.contact.tag": "// Contacto",
        "home.contact.title": "Escríbeme",
        "home.contact.description":
            "¿Tienes un proyecto en mente o solo quieres saludar? Envíame un mensaje usando el formulario de abajo.",
        "home.contact.fullName": "Nombre Completo",
        "home.contact.email": "Correo electrónico",
        "home.contact.subject": "Asunto",
        "home.contact.message": "Mensaje",
        "home.contact.placeholder.fullName": "Juan Pérez",
        "home.contact.placeholder.email": "juan@ejemplo.com",
        "home.contact.placeholder.subject": "Consulta de proyecto",
        "home.contact.placeholder.message": "Cuéntame sobre tu proyecto...",
        "home.contact.submit": "Enviar mensaje",
        "home.contact.whatsapp": "Contáctame",
        "home.contact.whatsappMessage":
            "Hola Harel, vi tu portafolio y me gustaría hablar sobre un proyecto.",
        "skills.level.expert": "Experto",
        "skills.level.advanced": "Avanzado",
        "skills.level.intermediate": "Intermedio",
        "skills.intro.badge": "~/competencias",
        "skills.intro.title": "Habilidades",
        "skills.intro.titleAccent": "Técnicas",
        "skills.intro.description":
            "Un resumen práctico de mi stack de ingeniería, desde lenguajes base hasta herramientas de producción y trabajo en equipo.",
        "skills.tabs.ariaLabel": "Categorías de habilidades",
        "skills.tabs.languages": "Lenguajes",
        "skills.tabs.frontend": "Frontend",
        "skills.tabs.backend": "Backend",
        "skills.tabs.databases": "Bases de datos",
        "skills.tabs.tools": "Herramientas",
        "skills.education.title": "Educación",
        "skills.education.degree": "Ingeniería en Desarrollo de Software",
        "skills.education.institutionLabel": "Institución",
        "skills.education.institution":
            "Instituto Tecnológico de Estudios Superiores de Occidente (ITESO), Guadalajara, México",
        "skills.education.periodLabel": "Periodo",
        "skills.education.period": "Enero 2022 - Actualidad",
        "skills.soft.title": "Habilidades blandas",
        "skills.soft.description":
            "Me enfoco en resolver problemas con claridad, colaboración y comunicación directa entre equipos técnicos y no técnicos.",
        "skills.soft.problemSolving": "Resolución de problemas",
        "skills.soft.teamwork": "Trabajo en equipo",
        "skills.soft.communication": "Comunicación técnica",
        "skills.languages.typescript.description":
            "Utilizo TypeScript para desarrollar aplicaciones web fullstack escalables, con tipado fuerte y arquitectura mantenible.",
        "skills.languages.javascript.description":
            "Trabajo con JavaScript en frontend y backend modernos para crear experiencias web interactivas y confiables.",
        "skills.languages.html.description":
            "Escribo HTML semántico y accesible para estructurar contenido con claridad y fortalecer SEO y usabilidad.",
        "skills.languages.css.description":
            "Uso CSS y enfoques modernos de estilos, incluido Tailwind CSS, para interfaces responsivas y mantenibles.",
        "skills.languages.go.description":
            "Utilizo Go para construir servicios backend y herramientas utilitarias con enfoque en rendimiento y simplicidad.",
        "skills.languages.python.description":
            "Utilizo Python para desarrollo backend y automatizaciones que mejoran la productividad del equipo.",
        "skills.languages.csharp.description":
            "Tengo experiencia práctica con C# para servicios backend y desarrollo de videojuegos con Unity.",
        "skills.frontend.vue.description":
            "Vue es mi framework principal de frontend; lo utilizo sin problema para construir interfaces mantenibles y listas para producción.",
        "skills.frontend.nuxt.description":
            "Nuxt es mi opción por defecto para aplicaciones web fullstack con SSR y una base de código unificada.",
        "skills.frontend.react.description":
            "Desarrollo muchos proyectos SPA con React y tengo experiencia sólida en su ecosistema.",
        "skills.frontend.next.description":
            "He utilizado Next.js en distintos proyectos fullstack, comúnmente integrándolo con servicios backend externos.",
        "skills.frontend.angular.description":
            "Tengo experiencia práctica con Angular y valoro su estructura para aplicaciones grandes y escalables.",
        "skills.frontend.svelte.description":
            "Tengo conocimientos de Svelte y valoro su simplicidad y experiencia de desarrollo.",
        "skills.frontend.astro.description":
            "Utilizo Astro para sitios web estáticos rápidos, con poco JavaScript y un fuerte enfoque en accesibilidad y SEO.",
        "skills.backend.nest.description":
            "NestJS es uno de mis frameworks principales en Node.js; valoro su arquitectura modular, escalabilidad y gestión de dependencias.",
        "skills.backend.hono.description":
            "Utilizo Hono para APIs pequeñas y rápidas, o en proyectos donde puedo definir una arquitectura a medida.",
        "skills.backend.express.description":
            "Con Express consolidé conceptos fundamentales de backend, como autenticación, middlewares y patrones MVC.",
        "skills.backend.gohttp.description":
            "Actualmente uso Go en mis servicios backend, principalmente con net/http, y continúo profundizando en su ecosistema.",
        "skills.backend.aspnet.description":
            "He desarrollado aplicaciones empresariales con .NET y ASP.NET, utilizando distintos enfoques de arquitectura y herramientas del ecosistema.",
        "skills.databases.postgres.description":
            "PostgreSQL es mi base de datos principal en la mayoría de proyectos; trabajo sin problema tipos avanzados, JSONB y extensiones como PostGIS.",
        "skills.databases.mariadb.description":
            "Utilizo MariaDB en sistemas relacionales que requieren equilibrio entre simplicidad, confiabilidad y buen flujo SQL.",
        "skills.databases.mysql.description":
            "He utilizado MySQL en distintos proyectos para almacenamiento relacional confiable y consultas optimizadas.",
        "skills.databases.sqlserver.description":
            "Tengo experiencia con SQL Server a nivel empresarial, incluyendo vistas, procedimientos almacenados y consultas orientadas al rendimiento.",
        "skills.databases.mongodb.description":
            "Trabajo con MongoDB y conozco cuándo su modelo documental flexible es una mejor opción frente a SQL.",
        "skills.databases.redis.description":
            "Utilizo Redis para sesiones, caché y patrones en memoria que mejoran el rendimiento de las aplicaciones.",
        "skills.tools.docker.description":
            "Utilizo Docker de forma intensiva para entornos locales con Docker Compose y despliegues distribuidos con Kubernetes.",
        "skills.tools.linux.description":
            "Trabajo sin problema en entornos Linux, incluyendo flujos en terminal y scripting con Bash.",
        "skills.tools.githubActions.description":
            "He implementado pipelines con GitHub Actions para linting, pruebas, despliegues y automatización de imágenes de contenedores.",
        "skills.tools.aws.description":
            "He desplegado proyectos en AWS con arquitecturas distribuidas y servicios como CDN, EC2, Load Balancers, Lambda y SNS.",
        "skills.tools.cloudflare.description":
            "Utilizo Cloudflare para desplegar y proteger proyectos medianos y pequeños, aprovechando su rendimiento en el edge y sus capas de seguridad.",
        "skills.tools.git.description":
            "Tengo amplia experiencia con Git para control de versiones, flujos de revisión y trabajo colaborativo.",
        "skills.tools.ai.description":
            "Utilizo agentes de IA como Codex y Claude para acelerar entregas, manteniendo siempre revisión y validación humana del código.",
        "experience.intro.badge": "~/bitacora-profesional",
        "experience.intro.title": "Experiencia",
        "experience.intro.titleAccent": "Laboral",
        "experience.intro.description":
            "Una línea de tiempo de internships y roles de ingeniería enfocados en entrega, ownership y desarrollo colaborativo de producto.",
        "experience.timeline.ariaLabel":
            "Línea de tiempo de experiencia profesional",
        "experience.types.work": "Trabajo",
        "experience.entries.roomieland.company": "Roomieland",
        "experience.entries.roomieland.role":
            "Software Engineer Part-Time (Frontend Lead)",
        "experience.entries.roomieland.periodLabel":
            "Noviembre 2025 - Actualidad",
        "experience.entries.roomieland.summary":
            "Lidero el desarrollo frontend de una plataforma compleja de vivienda que conecta personas en búsqueda de un lugar para residir.",
        "experience.entries.roomieland.highlights.1":
            "Desarrollé y entregué múltiples vistas en producción con Nuxt, integrando flujos frontend con APIs REST del backend.",
        "experience.entries.roomieland.highlights.2":
            "Codiseñé e implementé una arquitectura BFF para escenarios multi-cliente, reduciendo exposición de datos sensibles en navegador.",
        "experience.entries.roomieland.highlights.3":
            "Implementé junto al equipo features complejos como refresh tokens en cookies y flujos en tiempo real con WebSockets, trabajando con GitHub y GitHub Projects.",
        "experience.entries.oracle.company": "Oracle",
        "experience.entries.oracle.role": "Software Intern",
        "experience.entries.oracle.periodLabel": "Febrero 2025 - Agosto 2025",
        "experience.entries.oracle.summary":
            "Trabajé en un sistema de telecomunicaciones de Oracle utilizado por empresas de Latinoamérica para generar y dar seguimiento a órdenes de múltiples servicios.",
        "experience.entries.oracle.highlights.1":
            "Me adapté al ecosistema interno de Oracle y a sus flujos de ingeniería, contribuyendo en un codebase empresarial de alta complejidad.",
        "experience.entries.oracle.highlights.2":
            "Fortalecí mi base en Kubernetes y arquitecturas de software complejas, colaborando con Jira y Visual Builder.",
        "experience.entries.toshiba.company":
            "Toshiba Global Commerce Solutions (Toshiba GCS)",
        "experience.entries.toshiba.role": "Software Intern",
        "experience.entries.toshiba.periodLabel": "Julio 2024 - Febrero 2025",
        "experience.entries.toshiba.summary":
            "Desarrollé una herramienta web interna para centralizar una base de conocimiento de errores de equipos Toshiba, y acompañé su transición hacia un producto tipo chatbot.",
        "experience.entries.toshiba.highlights.1":
            "Implementé una migración de UI de Vue 2 a Vue 3 con TypeScript para mejorar mantenibilidad y contratos de datos.",
        "experience.entries.toshiba.highlights.2":
            "Reimplementé la autenticación con SAML SSO y backend en Django para reforzar persistencia y seguridad.",
        "experience.entries.toshiba.highlights.3":
            "Aseguré la integración frontend-backend mediante APIs REST y contratos type-safe, colaborando con GitLab y Jira.",
        "experience.entries.inoventi.company": "Inoventi",
        "experience.entries.inoventi.role": "Backend Intern",
        "experience.entries.inoventi.periodLabel": "Enero 2024 - Julio 2024",
        "experience.entries.inoventi.summary":
            "Contribuí al desarrollo de una herramienta de project management con ASP.NET y jQuery, entregando mejoras backend y vistas orientadas a datos.",
        "experience.entries.inoventi.highlights.1":
            "Optimicé consultas con EF Core y SQL Server para mejorar el rendimiento en flujos críticos.",
        "experience.entries.inoventi.highlights.2":
            "Implementé una vista clave para dashboard con agregaciones de datos orientadas a monitoreo operativo.",
        "experience.entries.inoventi.highlights.3":
            "Trabajé con módulos basados en DLL y patrón MVC dentro de un entorno colaborativo con GitHub y la herramienta interna del equipo.",
        "lang.english": "Inglés",
        "lang.spanishMx": "Español (MX)",
        "lang.change": "Cambiar idioma",
        "page.home.title": "Inicio",
        "page.skills.title": "Habilidades",
        "page.experience.title": "Experiencia",
        "page.projects.title": "Proyectos",
    },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
