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
        "lang.english": "English",
        "lang.spanishMx": "Español (MX)",
        "lang.change": "Change language",
        "page.home.title": "Hello World",
        "page.skills.title": "Hello World",
        "page.experience.title": "Hello World",
        "page.projects.title": "Hello World",
    },
    es: {
        "nav.home": "Inicio",
        "nav.skills": "Habilidades",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
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
        "home.contact.title": "Escribeme",
        "home.contact.description":
            "Tienes un proyecto en mente o solo quieres saludar? Enviame un mensaje usando el formulario de abajo.",
        "home.contact.fullName": "Nombre Completo",
        "home.contact.email": "Correo Electronico",
        "home.contact.subject": "asunto",
        "home.contact.message": "mensaje",
        "home.contact.placeholder.fullName": "Juan Perez",
        "home.contact.placeholder.email": "juan@ejemplo.com",
        "home.contact.placeholder.subject": "Consulta de proyecto",
        "home.contact.placeholder.message": "Cuentame sobre tu proyecto...",
        "home.contact.submit": "Enviar Mensaje",
        "home.contact.whatsapp": "Contactame",
        "home.contact.whatsappMessage":
            "Hola Harel, vi tu portafolio y me gustaría hablar sobre un proyecto.",
        "lang.english": "Inglés",
        "lang.spanishMx": "Spanish (MX)",
        "lang.change": "Cambiar idioma",
        "page.home.title": "Inicio",
        "page.skills.title": "Habilidades",
        "page.experience.title": "Experiencia",
        "page.projects.title": "Proyectos",
    },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
