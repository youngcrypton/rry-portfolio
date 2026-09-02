"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const highlightItems = [
  {
    target: 10,
    suffix: "m+",
    label: "impressions",
  },
  {
    target: 300,
    suffix: "k+",
    label: "engagements",
  },
  {
    target: 10,
    suffix: "k+",
    label: "bookmarks",
  },
  {
    target: 2,
    suffix: "+",
    label: "years in crypto",
  },
];

function useCountUp(
  target: number,
  duration = 1800,
  shouldStart = false,
  reducedMotion = false,
) {
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    if (reducedMotion) {
      setValue(target);
      return;
    }

    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out so the counter moves quickly at first and settles smoothly.
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(target * easedProgress);

      setValue(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, reducedMotion, shouldStart, target]);

  return value;
}

function Counter({
  target,
  suffix,
  start,
  reducedMotion,
}: {
  target: number;
  suffix: string;
  start: boolean;
  reducedMotion: boolean;
}) {
  const value = useCountUp(target, 1800, start, reducedMotion);

  return (
    <span className="numbers-value" aria-label={`${target}${suffix}`}>
      {value}
      {suffix}
    </span>
  );
}

export function Numbers() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    if (reducedMotion) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="numbers"
      className="numbers-section"
    >
      <div className="numbers-background" aria-hidden="true">
        <div className="numbers-glow numbers-glow-one" />
        <div className="numbers-glow numbers-glow-two" />
        <div className="numbers-grid" />
      </div>

      <div className="numbers-container">
        <motion.div
          className="numbers-heading"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="numbers-heading-line" />
          <span className="numbers-heading-label">
            highlights
          </span>
        </motion.div>

        <motion.div
          className="numbers-card"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
                  scale: 0.985,
                }
          }
          whileInView={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="numbers-card-shine" aria-hidden="true" />

          <div className="numbers-items">
            {highlightItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="numbers-item"
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.55,
                  delay: reducedMotion ? 0 : 0.12 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Counter
                  target={item.target}
                  suffix={item.suffix}
                  start={hasStarted}
                  reducedMotion={reducedMotion ?? false}
                />

                <span className="numbers-label">
                  {item.label}
                </span>

                <span
                  className="numbers-item-light"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
