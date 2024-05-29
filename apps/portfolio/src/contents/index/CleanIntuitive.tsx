import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  title: string;
  description: string;
};

type ToDoList = {
  state: TodoItemState;
  title: string;
  description: string;
  date: string;
  tag1: string;
  tag2: string;
};

const content: Content[] = [
  {
    state: 'typography',
    title: 'Typography',
    description: 'Selecting the font type, font size, and font weight.',
  },
  {
    state: 'spacing',
    title: 'Spacing',
    description: 'Positioning and adding spacing between elements.',
  },
  {
    state: 'colors',
    title: 'Colors',
    description: 'Choosing a color scheme with sufficient contrast.',
  },
  {
    state: 'effects',
    title: 'Effects',
    description: 'Add effects like borders, shadows, rounded corners, etc.',
  },
];

const todo: ToDoList[] = [
  {
    state: 'typography',
    title: 'Test Typography',
    description: 'Selecting the font type, font size, and font weight.',
    date: '10:00 AM · Tomorrow',
    tag1: 'Docs',
    tag2: 'Support',
  },
  {
    state: 'spacing',
    title: 'Test Spacing',
    description: 'Positioning and adding spacing between elements.',
    date: '10:00 AM · Tomorrow',
    tag1: 'Docs',
    tag2: 'Support',
  },
  {
    state: 'colors',
    title: 'Test Colors',
    description: 'Choosing a color scheme with sufficient contrast.',
    date: '10:00 AM · Tomorrow',
    tag1: 'Docs',
    tag2: 'Support',
  },
  {
    state: 'effects',
    title: 'Test Effects',
    description: 'Add effects like borders, shadows, rounded corners, etc.',
    date: '10:00 AM · Tomorrow',
    tag1: 'Docs',
    tag2: 'Support',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<TodoItemState | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<ToDoList | null>(null);

  useEffect(() => {
    if (!currentState && !selectedTodo) {
      setCurrentState(todo[0].state);
      setSelectedTodo(todo[0]);
    }
  }, [currentState, selectedTodo]);

  const handleButtonClick = (item: Content) => {
    setCurrentState(item.state);

    const clickedTodo = todo.find((todoItem) => todoItem.state === item.state);
    if (clickedTodo) {
      setSelectedTodo(clickedTodo);
    }
  };

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Eye Catching, Modern & Minimalist Design."
          caption="Clean & Intuitive"
          description="Keep the User Interface clean with a modern touch without
            compromising the User Experience."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState === item.state}
                onClick={() => handleButtonClick(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                {selectedTodo && (
                  <TodoItem
                    title={selectedTodo.title}
                    description={selectedTodo.description}
                    date={selectedTodo.date}
                    tag1={selectedTodo.tag1}
                    tag2={selectedTodo.tag2}
                  />
                )}
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
