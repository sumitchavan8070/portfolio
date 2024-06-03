import clsx from 'clsx';
import React, { MutableRefObject, useEffect, useRef } from 'react';

interface GistProps {
  id: string;
}

function Gist({ id }: GistProps): JSX.Element {
  const gistContainerRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  useEffect(() => {
    const gistContainer = gistContainerRef.current;

    const gistScript = document.createElement('script');
    gistScript.src = `https://gist.github.com/${id}.js`;
    gistScript.async = true;

    gistContainer.appendChild(gistScript);

    return (): void => {
      if (gistContainer) {
        gistContainer.innerHTML = '';
      }
    };
  }, [id]);

  return <div ref={gistContainerRef} className={clsx('gist-container')} />;
}

export default Gist;
