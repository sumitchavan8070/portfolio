import clsx from 'clsx';
import Link from 'next/link';

import { CalendarIcon } from '@/components/Icons';

export type TodoItemState =
  | 'textStyles'
  | 'layout'
  | 'palette'
  | 'visualEffects';

interface TodoItemProps {
  title: string;
  description: string;
  date: string;
  tag1: string;
  tag2: string;
  link: string;
}

function TodoItem({
  title,
  description,
  date,
  tag1,
  tag2,
  link,
}: TodoItemProps) {
  // Update parameter to require props
  return (
    <div
      className={clsx(
        ' w-full select-none border p-6',
        'lg:w-96',
        'rounded-xl',
        'border-divider-light bg-white',
        'dark:border-divider-dark dark:bg-slate-900'
      )}
      role="presentation"
    >
      <div className={clsx('flex items-center', 'mb-4 justify-between')}>
        <div className={clsx('flex')}>
          <div
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center',
              'rounded-full',
              'border-white bg-sky-400 text-white'
            )}
          >
            E
          </div>
        </div>
        <div
          className={clsx(
            ['rounded-full'],
            ['px-2 py-0.5'],
            [''],

            'bg-red-100 text-red-800',
            'dark:bg-red-500/20 dark:text-red-300'
          )}
        >
          High
        </div>
      </div>
      <div
        className={clsx(
          'mb-1 text-lg font-bold',
          'text-slate-700',
          'dark:text-slate-300'
        )}
      >
        {title}
      </div>
      <div className={clsx('mb-4', 'text-slate-600', 'dark:text-slate-400')}>
        {description}
      </div>

      <div className={clsx('flex', ['mb-6 gap-2'], [''])}>
        <Link
          href={link}
          target="_blank"
          aria-label="My Instagram Profile "
          title="My Instagram Profile "
          className={clsx(
            ['rounded-full'],
            ['px-2 py-0.5'],

            [
              'bg-blue-100 text-blue-700',
              'dark:bg-blue-500/20 dark:text-blue-300',
            ]
          )}
        >
          {tag1}
        </Link>
        <div
          className={clsx(
            ['rounded-full'],
            ['px-2 py-0.5'],
            [''],

            [
              'bg-yellow-100 text-yellow-700',
              'dark:bg-yellow-500/20 dark:text-yellow-300',
            ]
          )}
        >
          {tag2}
        </div>
      </div>
      <div className={clsx('flex items-center gap-1', 'text-xs font-medium')}>
        <CalendarIcon
          className={clsx(
            '-mt-1 h-4 w-4',
            'text-slate-400',
            'dark:text-slate-600'
          )}
        />
        <div className={clsx('text-slate-600', 'dark:text-slate-400')}>
          {date}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
