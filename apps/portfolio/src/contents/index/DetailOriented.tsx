import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Senior-level delivery with a Flutter-first mindset."
        caption="Professional Focus"
        description="I build mobile products with a balance of engineering quality and product polish. From interface details to backend coordination, I care about shipping work that feels stable, thoughtful, and ready for real users."
      />
    </header>
  );
}

export default DetailOriented;
