import Link from 'next/link';

import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/content/site';

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        title="Проекты"
        description="Краткие карточки и детали по каждому проекту."
      />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-950">Карточки</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-950">Project details</h2>
        <div className="space-y-6">
          {siteContent.projects.map((project) => (
            <article
              key={`${project.name}-details`}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.longDescription}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <Link
                    href={project.demoUrl}
                    className="rounded-full border border-slate-900 px-4 py-2 text-slate-900 transition hover:bg-slate-900 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </Link>
                  <Link
                    href={project.repoUrl}
                    className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </Link>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                {project.tech.map((item) => (
                  <li key={`${project.name}-${item}`} className="rounded-full bg-slate-100 px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
