import { useEffect, useState } from 'react';

export const useIntersection = (ref, options) => {
  const [isInView, setIsInView] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
};
