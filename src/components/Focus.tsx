"use client";

import { motion, useReducedMotion } from "motion/react";

const focusItems = [
  "artificial intelligence",
  "crypto",
  "defi",
  "content strategy",
  "marketing manager",
  "clipper",
  "growth strategy",
  "tech infrastructure",
];

export function Focus() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="focus" className="focus-section">
      <div className="focus-background" aria-hidden="true">
        <div className="focus-glow focus-glow-one" />
        <div className="focus-glow focus-glow-two" />
        <div className="focus-grid" />
      </div>

      <div className="focus-container">
        <motion.div
          className="focus-heading"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="focus-heading-top">
            <span className="focus-heading-line" />
            <span>areas of focus</span>
          </div>

          <h2>what i do.</h2>
        </motion.div>

        <motion.div
          className="focus-card"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
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
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="focus-card-inner">
            <div className="focus-card-shine" aria-hidden="true" />

            <div className="focus-items">
              {focusItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="focus-item"
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
                    delay: reducedMotion ? 0 : index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="focus-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="focus-item-name">{item}</span>

                  <span className="focus-item-light" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}