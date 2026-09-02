"use client";

import { motion, useReducedMotion } from "motion/react";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="about-section">
      <div className="about-atmosphere" aria-hidden="true">
        <div className="about-orb about-orb-one" />
        <div className="about-orb about-orb-two" />
      </div>

      <div className="about-container">
        <motion.div
          className="about-heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="about-heading-line" />
          <span className="about-heading-label">about</span>
        </motion.div>

        <motion.div
          className="about-card-wrap"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                  scale: 0.99,
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="about-card">
            <div className="about-card-inner">
              <div className="about-card-content">
                <p className="about-text">
                  i’m an{" "}
                  <span className="about-highlight">
                    ai and crypto content creator
                  </span>{" "}
                  focused on making emerging technology accessible.
                </p>

                <p className="about-text">
                  i break down complex topics across{" "}
                  <span className="about-highlight">
                    artificial intelligence, crypto, defi, and on chain
                    infrastructure
                  </span>{" "}
                  into clear, engaging content that educates, informs, and
                  sparks conversations.
                </p>

                <p className="about-text">
                  i also work as a{" "}
                  <span className="about-highlight">
                    marketing manager
                  </span>{" "}
                  helping projects shape strategy, run campaigns, and turn
                  attention into actual growth through{" "}
                  <span className="about-highlight">
                    content, distribution, and social media.
                  </span>
                </p>

                <div className="about-clipper">
                  <p className="about-text">
                    coupled with the fact i’m a{" "}
                    <span className="about-highlight about-highlight-warm">
                      clipper.
                    </span>
                  </p>

                  <p className="about-text about-clips-text">
                    behind every hidden gem you discover, there’s usually
                    someone who found it first, cut it clean, and put it in
                    front of the right people.{" "}
                    <span className="about-highlight">
                      that’s me.
                    </span>
                  </p>
                </div>
              </div>

              <div className="about-card-shine" aria-hidden="true" />
              <div className="about-card-beam" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}