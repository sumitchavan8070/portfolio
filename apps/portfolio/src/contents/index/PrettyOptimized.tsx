import clsx from 'clsx';

import { Label } from '@/components/mdx/Labels';
import { HStack, VStack } from '@/components/mdx/Stack';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Skills that back up the shipping."
          caption="Skills Snapshot"
          description="My strongest work sits at the intersection of Flutter engineering, mobile product UI, and backend support with Node.js. These are the tools and capabilities I rely on most often."
          button={{
            title: 'See Full Skills',
            href: '/work/skills-and-tools',
          }}
        />
      </header>
      <SectionContent>
        <div className=" pt-24 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-4">
            <div className="border-divider-light dark:border-divider-dark rounded-[1.75rem] border bg-white p-6 dark:bg-slate-900">
              <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
                Flutter development
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Production-focused mobile app development for Android and iOS
                with clean UI, reusable components, and attention to
                performance.
              </p>
            </div>
            <div className="border-divider-light dark:border-divider-dark rounded-[1.75rem] border bg-white p-6 dark:bg-slate-900">
              <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
                Node.js and APIs
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Backend support for products through practical API development,
                service integration, and maintainable application structure.
              </p>
            </div>
            <div className="border-divider-light dark:border-divider-dark rounded-[1.75rem] border bg-white p-6 dark:bg-slate-900">
              <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
                UI and product thinking
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                A design-aware approach to implementation, with emphasis on
                clarity, consistency, and experiences that feel polished in
                production.
              </p>
            </div>
          </div>

          <div className="border-divider-light dark:border-divider-dark rounded-[1.75rem] border bg-white p-6 dark:bg-slate-900">
            <VStack spacing={18}>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Languages and foundations
                </p>
                <HStack spacing={8}>
                  <Label indicator={100}>Dart</Label>
                  <Label indicator={75}>Java</Label>
                  <Label indicator={85}>JavaScript</Label>
                  <Label indicator={35}>SQL</Label>
                </HStack>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Frameworks and platforms
                </p>
                <HStack spacing={8}>
                  <Label indicator={100}>Flutter</Label>
                  <Label indicator={70}>Node.js</Label>
                  <Label indicator={80}>React</Label>
                  <Label indicator={65}>Next.js</Label>
                </HStack>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Data and tools
                </p>
                <HStack spacing={8}>
                  <Label indicator={100}>Firebase</Label>
                  <Label indicator={85}>MySQL</Label>
                  <Label indicator={80}>PostgreSQL</Label>
                  <Label indicator={70}>MongoDB</Label>
                  <Label indicator={100}>Android Studio</Label>
                  <Label indicator={100}>VS Code</Label>
                  <Label indicator={90}>Figma</Label>
                </HStack>
              </div>
            </VStack>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default PrettyOptimized;
