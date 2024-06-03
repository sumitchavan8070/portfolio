import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Comprehensible and Optimized Code with MVC Pattern"
        caption="Pretty & Optimized"
        description="I prioritize writing clean, organized code in Flutter by following the Model-View-Controller (MVC) pattern. This ensures a structured approach with separate layers for data management (models), user interface (views), and business logic (controllers). This methodology improves code readability, maintainability, and scalability while enhancing overall performance and efficiency."
      />
    </header>
  );
}

export default PrettyOptimized;
