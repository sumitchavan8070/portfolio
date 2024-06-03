import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Keen Eye for Spotting Small Details."
        caption="Flutter Portfolio"
        description="As a Flutter developer, I am driven by a meticulous approach and a sharp eye for detail. My commitment to precision ensures that every aspect of the application is carefully crafted and thoroughly tested, resulting in a seamless and polished user experience."
      />
    </header>
  );
}

export default DetailOriented;
