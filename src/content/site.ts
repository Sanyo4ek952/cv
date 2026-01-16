export type Project = {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
};

export type SiteContent = {
  site: {
    title: string;
    description: string;
    url: string;
    locale: string;
  };
  author: {
    name: string;
    role: string;
    location: string;
    goal: string;
    summary: string;
    contacts: {
      github: string;
      telegram: string;
      email: string;
    };
  };
  navigation: { label: string; href: string }[];
  skills: {
    label: string;
    items: string[];
  }[];
  projects: Project[];
  footer: {
    note: string;
  };
};

export const siteContent: SiteContent = {
  site: {
    title: 'Александр Афанасьев — Frontend Developer',
    description:
      'Портфолио React/TypeScript/Next.js разработчика: проекты, навыки и контакты.',
    url: 'https://example.com',
    locale: 'ru_RU'
  },
  author: {
    name: 'Александр Афанасьев',
    role: 'Frontend Developer (React / TypeScript / Next.js)',
    location: 'РФ',
    goal: 'Ищу позицию Junior+/Middle Frontend, удалённо или Москва.',
    summary:
      'Разрабатываю интерфейсы на React, TypeScript и Next.js. Люблю чистую архитектуру, аккуратный UI и понятные API-слои.',
    contacts: {
      github: 'https://github.com/Sanyo4ek952',
      telegram: 'https://t.me/USERNAME',
      email: 'name@example.com'
    }
  },
  navigation: [
    { label: 'Главная', href: '/' },
    { label: 'Проекты', href: '/projects' }
  ],
  skills: [
    {
      label: 'Core',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
      label: 'Next.js',
      items: ['App Router', 'RSC basics']
    },
    {
      label: 'State/Data',
      items: ['Redux Toolkit', 'RTK Query']
    },
    {
      label: 'Forms/Validation',
      items: ['React Hook Form', 'Zod']
    },
    {
      label: 'Styling',
      items: ['TailwindCSS', 'SCSS']
    },
    {
      label: 'Tools',
      items: ['Git', 'Docker (basic)', 'Figma/Postman (basic)']
    }
  ],
  projects: [
    {
      name: 'da-da-Pizza',
      description:
        'Pizza ordering web app with modern React/TypeScript stack.',
      longDescription:
        'Проектирование структуры приложения, аккуратная работа с UI и интеграцией API. Сфокусировался на чистом коде, удобстве интерфейса и стабильной работе клиентской части.',
      tech: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'SCSS'],
      repoUrl: 'https://github.com/Sanyo4ek952/da-da-Pizza',
      demoUrl: 'https://da-da-pizza.vercel.app/'
    }
  ],
  footer: {
    note: 'Открыт к предложениям и новым проектам.'
  }
};
