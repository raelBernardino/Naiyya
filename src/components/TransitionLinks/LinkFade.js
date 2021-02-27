import React, { useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

export const LinkFade = ({ children, url, style }) => {
  const exitTransition = {
    length: 0.8,
    zIndex: 2,
    trigger: ({ node }) => {
      exitTransition.exitTrigger(node);
      if (node) (node).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute('style', 'animation: fadeOut 0.8s ease forwards;');
    }, []),
  };

  const entryTransition = {
    zIndex: 1,
    trigger: ({ node }) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute('style', 'animation: fadeIn 0.8s ease forwards;');
    }, []),
  };

  return (
    <>
      <TransitionLink style={style} to={url} exit={exitTransition} entry={entryTransition}>
        {children}
      </TransitionLink>
    </>
  );
};

export default LinkFade;
