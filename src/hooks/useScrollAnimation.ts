import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options
  });

  return { ref, isInView };
};

// Animaciones modernas
export const slideInUp = {
  hidden: { 
    opacity: 0, 
    y: 50
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1
  }
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1
  }
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -5
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0
  }
};

export const floatUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
};

// Aliases para compatibilidad hacia atrás
export const fadeInUp = slideInUp;
export const fadeInLeft = slideInLeft;
export const fadeInRight = slideInRight;
export const scaleIn = zoomIn;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};
