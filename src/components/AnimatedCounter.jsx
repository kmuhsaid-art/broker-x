import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;

    started.current = true;

    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / duration,
        1
      );

      const value = end * progress;

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}