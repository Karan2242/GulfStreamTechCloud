'use client';

import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ target, suffix = '', decimals = 0, duration = 2000 }) => {
  const [value, setValue] = useState((0).toFixed(decimals));
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    const el = ref.current;
    if (!el) return;

    const animateCounter = () => {
      const startTime = performance.now();
      const numTarget = parseFloat(target);

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = (numTarget * eased).toFixed(decimals);
        setValue(currentVal);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setValue(numTarget.toFixed(decimals));
        }
      };
      requestAnimationFrame(update);
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, decimals, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
};

export default Counter;
