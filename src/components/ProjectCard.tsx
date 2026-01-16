import Link from 'next/link';

import type { Project } from '@/content/site';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{project.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
          {project.tech.map((item) => (
            <li key={item} className="rounded-full bg-slate-100 px-3 py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
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
    </article>
  );
}
