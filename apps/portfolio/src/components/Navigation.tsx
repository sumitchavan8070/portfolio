import clsx from 'clsx';

import { GitHubIcon } from '@/components/Icons';
import NavIcon from '@/components/navigations/NavIcon';
import NavIconQuickAccess from '@/components/navigations/NavIconQuickAccess';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';

import useOnScroll from '@/hooks/useOnScroll';

const workLinks = [
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Experience', href: '/work/experience' },
  { title: 'Contact', href: '/work/contact' },
  { title: 'Flutter-components', href: '/flutter_components' },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 z-[1000]', 'fm:absolute')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Home" href="/" />
              </li>
              <li>
                <NavLink title="Projects" href="/projects" />
              </li>
              {/* <li>
                <NavLink
                  title="Flutter-Components"
                  href="/flutter_components"
                />
              </li> */}

              <li className={clsx('lg:hidden')} data-accent="blue">
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLinkExpanded title="Work" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={clsx('m-4 flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/sumitchavan8070"
                icon={<GitHubIcon className={clsx(' h-20 w-20')} />}
                title="GitHub"
              />
            </li>

            {/* <li className={clsx('mr-2')}>
              <NavIconQuickAccess />
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
