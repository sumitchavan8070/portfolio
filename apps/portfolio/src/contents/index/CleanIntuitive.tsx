import clsx from 'clsx';
import Link from 'next/link';

import { ExternalLink, SparklesIcon } from '@/components/Icons';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

type FeaturedProject = {
  title: string;
  category: string;
  description: string;
  href: string;
  accent: string;
};

const projects: FeaturedProject[] = [
  {
    title: 'Gradding App',
    category: 'Flutter App',
    description:
      'A polished study-abroad companion built to help students move from research to action with a cleaner mobile experience.',
    href: 'https://play.google.com/store/apps/details?id=com.gradding&hl=en-IN',
    accent: 'from-sky-500/15 via-cyan-400/10 to-transparent',
  },
  {
    title: 'Course Finder',
    category: 'Discovery Product',
    description:
      'A focused app experience for comparing overseas education options with faster search, clearer decision-making, and less friction.',
    href: 'https://play.google.com/store/apps/details?id=com.gradding.finder&hl=en_IN',
    accent: 'from-fuchsia-500/15 via-pink-400/10 to-transparent',
  },
  {
    title: 'SnehVidya – School ERP App',
    category: 'Personal Project',
    description:
      'School Management System is a complete ERP solution designed to simplify and manage daily school operations. The app helps schools handle administrative tasks, staff management, attendance tracking, and communication efficiently in one centralized platform.',
    href: 'https://play.google.com/store/apps/details?id=com.sumit.sms&hl=en_IN',
    accent: 'from-orange-500/15 via-amber-400/10 to-transparent',
  },
];

function CleanIntuitive() {
  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Selected projects that reflect how I build."
          caption="Project Showcase"
          description="A few examples of the apps and product experiences I have worked on, with a focus on polished mobile UI, reliable delivery, and real-world usefulness."
          button={{
            title: 'View All Projects',
            href: '/projects',
          }}
        />
      </header>
      <div className=" content-wrapper pb-20 pt-24 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-divider-light dark:border-divider-dark group relative overflow-hidden rounded-[1.75rem] border bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 dark:bg-slate-900"
            >
              <div
                className={clsx(
                  'absolute inset-0 bg-gradient-to-br opacity-100',
                  project.accent
                )}
              />
              <div className="relative">
                <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <SparklesIcon className="text-accent-500 h-4 w-4" />
                  {project.category}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-800 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="text-accent-600 dark:text-accent-400 mt-6 inline-flex items-center gap-2 text-sm font-bold">
                  Open project
                  <ExternalLink className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="border-divider-light dark:border-divider-dark relative overflow-hidden rounded-[1.75rem] border bg-slate-900 p-6 text-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.9)]">
          <div className="bg-accent-400/20 absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-amber-300/10 blur-3xl" />

          <div className="relative">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
              Spotlight
            </div>
            <h3 className="mt-6 text-3xl font-black tracking-tight">
              {projects[2].title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {projects[2].description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black">Flutter</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Mobile-first build
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black">UI</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Design-focused
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={projects[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
              >
                View on Play Store
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/5"
              >
                See full portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CleanIntuitive;
