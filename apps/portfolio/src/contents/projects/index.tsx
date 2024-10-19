import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';
import PreviousProjects from './projects';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'node_api' | 'github'>(
    'github'
  );

  return (
    <>
      <SectionTitle
        title="Github"
        caption="Explore github "
        description="Discover a variety of projects showcasing my skills in web development, software engineering, and more. Follow my GitHub for the latest updates and contributions."
        button={{
          title: 'Explore more',
          href: 'https://github.com/sumitchavan8070',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible package on GitHub with MIT license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="node_api"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="api call with node."
                active={currentState === 'node_api'}
                onClick={() => setCurrentState('node_api')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'sumitchavan8070/portfolio - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <NpmIcon className="h-4 w-4" />,
                      title: 'node_api',
                      isActive: currentState === 'node_api',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="sumitchavan8070"
                      license="MIT"
                      repository="portfolio"
                      description=" beautiful UI for a portfolio should be visually appealing and user-friendly, showcasing your work through a clean, modern design with intuitive navigation."
                    />
                  )}
                  {currentState === 'node_api' && (
                    <NpmWireframe
                      packageName="node_api"
                      description="api calling with node js "
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
          <PreviousProjects />
        </div>



      </SectionContent>
    </>
  );
}

export default ProjectsContents;
