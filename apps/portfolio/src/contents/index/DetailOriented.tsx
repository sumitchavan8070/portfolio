import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Keen Eye for Spotting Small Details."
        caption="Flutter Portfolio"
        description="As a Flutter developer, I'm driven by a meticulous approach and a sharp eye for detail."
      />
    </header>
  );
}

export default DetailOriented;
