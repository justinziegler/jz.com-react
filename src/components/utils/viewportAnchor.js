import React from 'react';
import { useIntersection } from './useIntersection'

export const ViewportAnchor = (props) => {
  const triggerRef = React.useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  React.useEffect(() => {
    if (isVisible) {
      props.setInViewport(true) // Trigger a function when the div is visible on view port
    }
  }, [props.setInViewport, isVisible]);

  return <div ref={triggerRef}></div>;
};