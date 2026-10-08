import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingCookie = () => {
  const { scrollYProgress } = useScroll();

  // Coordinates tuned across overall page scroll (0.0 to 1.0)
  const top = useTransform(scrollYProgress, [0, 0.45, 1], ['50vh', '48vh', 'calc(100vh - 270px)']);
  const left = useTransform(scrollYProgress, [0, 0.45, 1], ['50vw', '22vw', '50vw']);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.3, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.img
      src="/cookie-2.png"
      alt="Monster Cookie"
      className="floating-cookie"
      style={{
        position: 'fixed',
        top,
        left,
        x: '-50%',
        y: '-50%',
        scale,
        rotate,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    />
  );
};

export default FloatingCookie;