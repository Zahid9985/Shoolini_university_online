/**
 * PressButton — Spring-physics press effect on every button
 *
 * Uses Motion's `press` + `animate` for a satisfying scale-down
 * on mousedown/touchstart and a springy scale-back on release.
 *
 * Drop-in replacement for any <button> or <a> tag.
 *
 * Props:
 *  className  — CSS class(es) to apply (e.g. "btn-primary")
 *  onClick    — click handler
 *  href       — if provided, renders an <a> tag instead of <button>
 *  as         — override element type ("button" | "a" | "div")
 *  children   — button content
 *  ...rest    — any other native props (type, aria-*, etc.)
 */

import { useEffect, useRef } from 'react';
import { animate, press } from 'motion';


const PressButton = ({
  className = '',
  onClick,
  href,
  as,
  children,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* press() returns a cleanup function — call it on unmount */
    const cleanup = press(el, (element) => {
      /* Press DOWN — spring squish */
      animate(
        element,
        { scale: 0.88 },
        { type: 'spring', stiffness: 800, damping: 20 }
      );

      /* Press UP / cancel — spring back */
      return () =>
        animate(
          element,
          { scale: 1 },
          { type: 'spring', stiffness: 400, damping: 15 }
        );
    });

    return cleanup;
  }, []);

  /* Decide which element to render */
  const Tag = as || (href ? 'a' : 'button');

  return (
    <Tag
      ref={ref}
      className={`press-btn ${className}`}
      onClick={onClick}
      href={href}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default PressButton;
