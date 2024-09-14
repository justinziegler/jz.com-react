import React from 'react';
import { useIntersection } from './useIntersection'

export const ViewportAnchor = ({ setInViewport }) => {
  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  React.useEffect(() => {
    if (isVisible) {
      setInViewport(true) // Trigger a function when the div is visible on view port
    }
  }, [setInViewport, isVisible]);

  return <div ref={triggerRef}></div>;
};