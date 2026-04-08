import clsx from 'clsx';

import { ExternalLink, SparklesIcon } from '@/components/Icons';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
  year: string;
  accent: string;
}

function PreviousProjects() {
  const projects: Project[] = [
    {
      title: 'Personal Project - SnehVidya – School ERP App',
      description:
        'School Management System is a complete ERP solution designed to simplify and manage daily school operations. The app helps schools handle administrative tasks, staff management, attendance tracking, and communication efficiently in one centralized platform.',
      imageUrl:
        'https://play-lh.googleusercontent.com/DODz6Fbztg9qx5nkf0QYNryDMUh5ttUwKEB9tyvkVgjKxk4F2I9cFRxeKJe6GGBO2DN_8LRFqFCVNQPS6usEQQ=w832-h470-rw',
      link: 'https://play.google.com/store/apps/details?id=com.sumit.sms&hl=en_IN',

      category: 'Education',
      year: '2026',
      accent: 'from-sky-500/80 via-cyan-400/70 to-teal-300/70',
    },

    {
      title: 'Personal Project - CineMarathi',
      description:
        'CineMarathi is a dedicated platform for Marathi cinema lovers. The app brings together curated content related to Marathi movies, actors, filmmakers, and the vibrant Marathi film industry—all in one place.',
      imageUrl:
        'https://play-lh.googleusercontent.com/JiIXOtW8kwpjLpwF3G1NJR3ulhwpkkwI5fRvt6L6EjNcTZLk_IsTOTPXTx-Pd-JzBsbIAVE4tSNdaYphBfh2=w832-h470-rw',
      link: 'https://play.google.com/store/apps/details?id=com.smt.cinemarathi&hl=en_IN',

      category: 'Entertainment',
      year: '2026',
      accent: 'from-sky-500/80 via-cyan-400/70 to-teal-300/70',
    },
    {
      title: 'Gradding App',
      description:
        'A Flutter mobile app crafted to support students throughout their study abroad journey, from discovery to decision-making.',
      imageUrl:
        'https://gradding.s3.ap-south-1.amazonaws.com/website-images/uploads/images/media/ogimage-674e.png',
      link: 'https://play.google.com/store/apps/details?id=com.gradding&hl=en-IN',
      category: 'EdTech',
      year: '2024',
      accent: 'from-sky-500/80 via-cyan-400/70 to-teal-300/70',
    },
    {
      title: 'Course Finder',
      description:
        'A focused discovery experience that helps students compare overseas education courses with less friction and more confidence.',
      imageUrl:
        'https://play-lh.googleusercontent.com/ascMcy_gdH5ejNuv4UcDi7tt9wOuOs_ZSWImtsUT2hyPhGa3SN4nE0CnJjaj5AR8h5g=w832-h470-rw',
      link: 'https://play.google.com/store/apps/details?id=com.gradding.finder&hl=en_IN',
      category: 'Search',
      year: '2024',
      accent: 'from-fuchsia-500/80 via-pink-400/70 to-rose-300/70',
    },
    {
      title: 'College Predictor',
      description:
        'A predictive guidance product for students who want a faster way to shortlist dream universities for global education paths.',
      imageUrl:
        'https://play-lh.googleusercontent.com/vesmOnDN2G8sbWoKp9RNr2g5fVrRkwQv3b0Q6VEXt7FO3ts50FZ9ux40x02YMYc_vFw=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.gradding.predictor&hl=en_IN',
      category: 'Guidance',
      year: '2024',
      accent: 'from-amber-500/80 via-orange-400/70 to-yellow-300/70',
    },
    {
      title: 'IELTS Preparation',
      description:
        'A test-prep platform designed around IELTS, PTE, GMAT, SAT, and ACT preparation with practice materials and personalized learning support.',
      imageUrl:
        'https://play-lh.googleusercontent.com/3cuds4ge2Fke7yJXn7HsTnr7zdcDVoIo7SC3ICotTY005Yy7k6mtS2ssROAx3vBE3g=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.gradding.ieltsprep&hl=en-IN',
      category: 'Learning',
      year: '2024',
      accent: 'from-violet-500/80 via-indigo-400/70 to-sky-300/70',
    },
    {
      title: 'MySIP Online',
      description:
        'A finance utility product for managing SIP activity, recharge flows, balances, and other account-facing mobile experiences.',
      imageUrl:
        'https://play-lh.googleusercontent.com/rvobt18fxbVYIBbSHh7PtRa0JfhNPD3D3YYaIxLvowcQ7KLs9Tl3dPqjJW6kpAfBrBs=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.mysiponline&hl=en_US',
      category: 'FinTech',
      year: '2023',
      accent: 'from-emerald-500/80 via-lime-400/70 to-green-300/70',
    },
    {
      title: 'MySIP Calculator',
      description:
        'An investment calculator experience built to help users project future SIP value with clear monthly and annual compounding insights.',
      imageUrl:
        'https://play-lh.googleusercontent.com/kWxTSxa9BysbdUkgfZMkgxLuKw3XMYowGE6-cs6j-69cW2uElF-uevlJRTnvCRAiaeg=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.mysiponline.calculator&hl=en_IN',
      category: 'Calculator',
      year: '2023',
      accent: 'from-emerald-500/80 via-teal-400/70 to-cyan-300/70',
    },
    {
      title: 'WoodenStreet',
      description:
        'An ecommerce app experience centered around handmade and distinctive wooden furniture and decor products from artisan makers.',
      imageUrl: 'https://www.woodenstreet.com/images/cover.gif',
      link: 'https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_US',
      category: 'Commerce',
      year: '2023',
      accent: 'from-stone-500/80 via-orange-400/70 to-amber-300/70',
    },
    {
      title: 'MRP',
      description:
        'An academic support product built to make assignment help workflows clearer and more accessible for students across regions.',
      imageUrl: 'https://www.globalassignmenthelp.com/images/og_GAH.jpg',
      link: 'https://play.google.com/store/apps/details?id=com.globalassignmenthelp&hl=en_US',
      category: 'Services',
      year: '2022',
      accent: 'from-slate-500/80 via-zinc-400/70 to-stone-300/70',
    },
    {
      title: 'Personal Project - Meadhikari',
      description:
        'A focused exam-preparation companion for Maharashtra public service aspirants preparing for MPSC and other state recruitment exams.',
      imageUrl:
        'https://play-lh.googleusercontent.com/uR_cwMjW_Qgn_IksKlrq_Sw7Echm_pKvEKsLHfCHlss7DHmTdZR90TsataZfZjfj3F4=w416-h235-rw',
      link: 'https://play.google.com/store/apps/details?id=com.sc.meadhikari&hl=en',
      category: 'Personal',
      year: '2024',
      accent: 'from-red-500/80 via-orange-400/70 to-yellow-300/70',
    },
  ];

  return (
    <section className="relative mt-20">
      <div className="from-accent-500/10 absolute inset-x-0 top-10 -z-10 h-72 rounded-[2rem] bg-gradient-to-r via-amber-300/10 to-sky-400/10 blur-3xl" />

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="border-accent-500/20 bg-accent-500/10 text-accent-700 dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em]">
            <SparklesIcon className="h-4 w-4" />
            Featured Mobile Work
          </div>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl dark:text-slate-100">
            A polished gallery of apps I&apos;ve helped ship.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
            These projects span education, finance, and commerce, with a strong
            focus on clean interfaces, trustworthy flows, and practical user
            value on Android.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="border-divider-light dark:border-divider-dark rounded-2xl border bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/80">
            <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
              11
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Projects
            </div>
          </div>
          <div className="border-divider-light dark:border-divider-dark rounded-2xl border bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/80">
            <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Android
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Platform
            </div>
          </div>
          <div className="border-divider-light dark:border-divider-dark rounded-2xl border bg-white/80 px-4 py-3 backdrop-blur dark:bg-slate-900/80">
            <div className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Live
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              On Play Store
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-divider-light dark:border-divider-dark group relative flex min-h-[460px] flex-col overflow-hidden rounded-[2rem] border bg-white shadow-[0_20px_70px_-45px_rgba(15,23,42,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-40px_rgba(15,23,42,0.6)] dark:bg-slate-900"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                className={clsx(
                  'absolute inset-0 bg-gradient-to-br opacity-90',
                  project.accent
                )}
              />
              <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply" />
              <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {project.category}
                </span>
                <span className="rounded-full bg-slate-950/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {project.year}
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="max-w-[15ch] text-2xl font-black tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="border-divider-light dark:border-divider-dark mt-6 flex items-center justify-between border-t pt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Available now
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-white dark:group-hover:text-slate-900">
                  View on Play Store
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default PreviousProjects;
