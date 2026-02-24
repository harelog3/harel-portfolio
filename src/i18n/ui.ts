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
