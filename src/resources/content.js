import { Logo } from "@once-ui-system/core";
import { language } from "gray-matter";

const person = {
  firstName: "Alexis",
  lastName: "CAU",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  photo : "/images/photo.png",
  logo : "/images/logo.png",
  role: "Développeur PHP / Symfony",
  grain : "/images/grain.webp",
  avatar: "/images/avatar.png",
  email: "alexiscau@gmail.com",
  phone: "07 81 19 51 72",
  address: "13008 Marseille",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français","Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dragent",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alexis-cau/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - ${person.role} | Solutions Web Performantes`,
  description: `Développeur PHP/Symfony expérimenté, spécialisé dans les API REST et l'optimisation SQL. Découvrez mes projets et compétences techniques.`,
  headline: <>Transformez vos idées en applications web puissantes</>,
  featured: {
    display: true,
    title: <>🚀 Projet en cours: <strong className="ml-4">Valentine Sheriff</strong></>,
    href: "/work/valentine-sheriff",
  },
  subline: (
    <>
      <strong>Développeur PHP/Symfony</strong> avec une expertise en API REST et optimisation SQL.
      <br /> Je transforme vos besoins complexes en solutions web robustes et évolutives.
    </>
  ),
};

const about = {
  path: "/about",
  label: "A propos",
  title: `A propos – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
    image: "/avatar.png",
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Pourquoi me choisir ?",
    description: (
      <>
        <strong>Développeur PHP/Symfony expérimenté</strong> avec une solide expertise en développement backend. 
        J'ai contribué à des projets en production incluant des API REST performantes et des optimisations SQL avancées. 
        <br /><br />
        <strong>Mes atouts :</strong> Architecture API-first, conteneurisation Docker, intégration OAuth2, et une approche méthodique 
        pour transformer vos besoins métier en solutions techniques robustes et évolutives.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences professionnelle",
    experiences: [
      {
        company: "Freelance",
        timeframe: "02/2023 - 02/2024",
        role: "Développeur Web",
        achievements: [
          <>
            <strong>Développement d'applications web sur mesure</strong> pour des clients variés avec des besoins techniques complexes.
          </>,
          <>
            <strong>Architecture de solutions scalables</strong> adaptées aux contraintes métier spécifiques de chaque projet.
          </>,
          <>
            <strong>Optimisation des performances</strong> et mise en place de bonnes pratiques de développement.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Baticonform",
        timeframe: "03/2021 - 09/2022",
        role: "Développeur Full-Stack",
        achievements: [
          <>
            <strong>Développement fullstack en PHP</strong> pour des applications métier critiques en production.
          </>,
          <>
            <strong>Intégration d'API externes</strong> pour enrichir les fonctionnalités et automatiser les processus.
          </>,
          <>
            <strong>Conception d'API REST Symfony</strong> pour la communication sécurisée entre systèmes.
          </>,
          <>
            <strong>Optimisation SQL avancée</strong> réduisant les temps de réponse de 40% en moyenne.
          </>,
          <>
            <strong>Système de gestion des droits</strong> robuste et évolutif pour la sécurité des données.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Agence Boekie",
        timeframe: "05/2019 - 06/2019",
        role: "Développeur Back-End",
        achievements: [
          <>
            Automatisation du déploiement de Magento à distance via scripts Shell.
          </>,
          <>
            Prise en main de l'écosystème Magento et de ses spécificités.
          </>,
          <>
            Création et modification de modules Magento personnalisés.
          </>,
        ],
        images: [
        ],
      },
    ],
  },
  personnal: {
    display: true, // set to false to hide this section
    title: "Projets personnel",
    projects: [
      {
        title: "Valentine Sheriff",
        timeframe: "2025 - en cours",
        language: "Symfony 7.2 (API) / Nuxt.js / Docker / Discord OAuth2",
        achievements: [
          <>
            Application web de gestion des forces de l'ordre dans un serveur RedM RP.
          </>,
          <>
            Authentification des utilisateurs via Discord OAuth2.
          </>,
          <>
            Modules de gestion: dossiers, inventaires, formations, présence.
          </>,
          <>
            Architecture API-first avec conteneurisation Docker.
          </>,
        ],
        images: [
        ],
      },
      {
        title: "Scripts RedM - LGWestern",
        timeframe: "2025 - en cours",
        language: "Lua / SQL / Symfony",
        achievements: [
          <>
            Scripts immersifs pour enrichir le roleplay sur RedM (serveur LGWestern).
          </>,
          <>
            Scripts complexes: blessures, radios, gameplay médical ou mécanique.
          </>,
          <>
            Connexions entre scripts Lua et base SQL.
          </>,
          <>
            Intégration d'interfaces Symfony pour le back-office.
          </>,
        ],
        images: [
        ],
      },
      {
        title: "LSMS Atrium",
        timeframe: "2024",
        language: "Symfony / MySQL / jQuery",
        achievements: [
          <>
            Application métier médicale pour le serveur RP ATRIUM.
          </>,
          <>
            Prise de rendez-vous avec gestion d'agenda.
          </>,
          <>
            Gestion des rôles: civils, médecins, staff.
          </>,
          <>
            Système de stock médical avec journal des mouvements.
          </>,
        ],
        images: [
        ],
      },
      {
        title: "Weapon RP Project",
        timeframe: "2023",
        language: "Symfony / EasyAdmin",
        achievements: [
          <>
            Projet d'entraînement à l'utilisation de l'interface d'administration Symfony.
          </>,
          <>
            Mise en place et personnalisation d'un backoffice avec EasyAdmin.
          </>,
          <>
            Gestion de rôles, entités et permissions.
          </>,
          <>
            Structure propre pour l'administration d'un univers RP.
          </>,
        ],
        images: [
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Etudes",
    institutions: [
      {
        name: "Certification Méthode Agiles",
        description: <>03/2025 - Simplon / Marseille - Labellisée Grande École du Numérique</>,
      },
      {
        name: "Développeur Web et Web Mobile Java",
        description: <>02/2019 - 09/2019 - Simplon / Marseille - Labellisée Grande École du Numérique</>,
      },
      {
        name: "Licence Informatique",
        description: <>2014 - 2016 - Aix Marseille Université / Marseille</>,
      },
      {
        name: "DUT Génie Electrique et Informatique Industrielle",
        description: <>2011 - 2013 - Iut St Jérôme / Marseille</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    categories: [
      {
        title: "Backend",
        subtitle: "Architecture robuste & Performance",
        stats: "Applications en production",
        skills: [
          {
            name: "PHP",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
            level: "Expert",
            description: "5+ années d'expérience. Développement d'applications web critiques en production avec optimisation avancée.",
            achievements: ["Applications en production", "Optimisation des performances", "Architecture scalable"]
          },
          {
            name: "Symfony",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
            level: "Expert",
            description: "Maîtrise complète du framework. Développement d'API REST, gestion des droits, et architecture MVC.",
            achievements: ["API REST performantes", "Système de permissions", "Architecture MVC"]
          },
          {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            level: "Expert",
            description: "Optimisation SQL avancée. Réduction de 40% des temps de réponse grâce à l'optimisation des requêtes.",
            achievements: ["-40% temps de réponse", "Requêtes optimisées", "Index stratégiques"]
          },
          {
            name: "API REST",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg",
            level: "Expert",
            description: "Conception d'API sécurisées et documentées. Intégration avec systèmes externes et authentification OAuth2.",
            achievements: ["API sécurisées", "Documentation complète", "OAuth2 intégré"]
          }
        ]
      },
      {
        title: "Frontend",
        subtitle: "Interface utilisateur moderne",
        stats: "100% responsive & accessible",
        skills: [
          {
            name: "HTML5",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            level: "Expert",
            description: "Structure sémantique et accessible. Conformité WCAG pour une accessibilité universelle.",
            achievements: ["Sémantique parfaite", "Accessibilité WCAG", "SEO optimisé"]
          },
          {
            name: "CSS3",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            level: "Expert",
            description: "Design moderne avec animations fluides, responsive design et architecture CSS scalable.",
            achievements: ["Animations fluides", "Responsive design", "Architecture CSS"]
          },
          {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            level: "Avancé",
            description: "Interactions dynamiques et manipulation du DOM. Intégration avec APIs et gestion d'état.",
            achievements: ["DOM manipulation", "API integration", "State management"]
          },
          {
            name: "jQuery",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
            level: "Avancé",
            description: "Simplification des interactions utilisateur et animations. Compatibilité cross-browser.",
            achievements: ["Interactions fluides", "Cross-browser", "Animations"]
          }
        ]
      },
      {
        title: "Outils & Méthodes",
        subtitle: "Workflow professionnel",
        stats: "Certification Méthodes Agiles",
        skills: [
          {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            level: "Expert",
            description: "Workflow Git avancé avec GitHub. Collaboration en équipe et gestion de branches stratégique.",
            achievements: ["Workflow avancé", "Collaboration équipe", "Branches stratégiques"]
          },
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            level: "Intermédiaire",
            description: "Conteneurisation d'applications pour déploiement cohérent. Architecture microservices.",
            achievements: ["Conteneurisation", "Déploiement cohérent", "Microservices"]
          },
          {
            name: "Méthodes Agiles",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
            level: "Certifié",
            description: "Formation certifiée Grande École du Numérique. Scrum, Kanban et développement itératif.",
            achievements: ["Certification GEN", "Scrum & Kanban", "Développement itératif"]
          },
          {
            name: "PowerBI",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powerbi/powerbi-original.svg",
            level: "Intermédiaire",
            description: "Tableaux de bord analytiques et visualisation de données métier pour la prise de décision.",
            achievements: ["Tableaux de bord", "Visualisation données", "Business Intelligence"]
          }
        ]
      },
      {
        title: "Scripting & Gaming",
        subtitle: "Innovation technique",
        stats: "Projets innovants en cours",
        skills: [
          {
            name: "Lua",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg",
            level: "Expert",
            description: "Scripts immersifs RedM avec intégration SQL. Gameplay complexe et systèmes de données temps réel.",
            achievements: ["Scripts immersifs", "Intégration SQL", "Temps réel"]
          },
          {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            level: "Intermédiaire",
            description: "Automatisation et outils de développement. Scripts d'optimisation et analyse de données.",
            achievements: ["Automatisation", "Outils dev", "Analyse données"]
          }
        ]
      }
    ],
    skills: [
      {
        title: "PHP / Symfony",
        description: <>Maîtrise du framework Symfony pour le développement d'applications web robustes et évolutives.</>,
        images: [
        ],
      },
      {
        title: "Base de données",
        description: <>Optimisation SQL et gestion de bases de données MySQL pour des performances optimales.</>,
        images: [
        ],
      },
      {
        title: "API REST",
        description: <>Développement d'API REST pour la communication entre systèmes et applications.</>,
        images: [
        ],
      },
      {
        title: "Méthodes Agiles",
        description: <>Formation aux méthodes agiles pour un développement collaboratif et itératif.</>,
        images: [
        ],
      },
      {
        title: "Outils de développement",
        description: <>Utilisation de GitHub, Trello, PowerBI et autres outils pour la gestion de projet.</>,
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
