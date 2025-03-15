import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

import HeaderImageAnimation from './HeaderImageAnimation';

function HeaderImage() {
  const controlsHeaderImage = useAnimationControls();
  const controlsHeaderOutline = useAnimationControls();
  return (
    <div
      className={clsx('relative mt-16 h-[400px] w-[400px]')}
      style={{
        maskImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' fill='none' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='200' cy='200' r='200' fill='%23000'/%3E%3C/svg%3E")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' fill='none' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='200' cy='200' r='200' fill='%23000'/%3E%3C/svg%3E")`,
      }}
    >
      <div
        className={clsx(
          'from-accent-400/20 via-accent-400/0 absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-t',
          'dark:from-accent-600/10 dark:via-accent-600/0'
        )}
      >
        <div className={clsx('absolute bottom-0 right-0 overflow-hidden')}>
          <Image
            alt="Sumit Chavan"
            src="/assets/images/me.jpeg"
            width={400}
            height={400}
            className={clsx(
              'hidden max-w-none rounded-full',
              'lg:block',
              'dark:brightness-[.82]'
            )}
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
