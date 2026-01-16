import Image from 'next/image';
import Link from 'next/link';

import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/content/site';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
            Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {siteContent.author.name}
            </h1>
            <p className="text-lg text-slate-600">{siteContent.author.role}</p>
            <p className="text-slate-600">{siteContent.author.summary}</p>
            <p className="text-slate-800">{siteContent.author.goal}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={siteContent.author.contacts.telegram}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Написать в Telegram
            </Link>
            <Link
              href={siteContent.author.contacts.github}
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
          <div className="grid gap-2 text-sm text-slate-600">
            <p>Локация: {siteContent.author.location}</p>
            <p>Email: {siteContent.author.contacts.email}</p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <Image
              src="/avatar.svg"
              alt="Аватар Александра Афанасьева"
              width={160}
              height={160}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Навыки"
          description="Технологии и инструменты, с которыми я работаю регулярно."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.skills.map((group) => (
            <div key={group.label} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-slate-100 px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Проекты"
          description="Выборка последних работ и учебных проектов."
        >
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            Смотреть все →
          </Link>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
