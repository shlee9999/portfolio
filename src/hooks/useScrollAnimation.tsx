import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const onScroll = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onScroll, {
      threshold: threshold,
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);
  return { ref, isVisible };
};
