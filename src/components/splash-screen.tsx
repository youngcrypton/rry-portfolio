"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function SplashScreen() {
  return (
    <motion.div
      className="rry-splash"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        delay: 2.82,
        duration: 0.42,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="splash-background" />

      <div className="splash-atmosphere splash-atmosphere-one" />
      <div className="splash-atmosphere splash-atmosphere-two" />
      <div className="splash-atmosphere splash-atmosphere-three" />

      <motion.div
        className="splash-orbit-system"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="splash-orbit splash-orbit-one" />
        <div className="splash-orbit splash-orbit-two" />
        <div className="splash-orbit splash-orbit-three" />

        <span className="splash-orbit-dot dot-one" />
        <span className="splash-orbit-dot dot-two" />
        <span className="splash-orbit-dot dot-three" />
        <span className="splash-orbit-dot dot-four" />
      </motion.div>

      {/* faint avatar visible from the beginning */}
      <motion.div
        className="splash-ghost-avatar"
        initial={{
          opacity: 0,
          scale: 0.88,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: [0, 0.16, 0.2, 0.13],
          scale: [0.88, 1, 1.03, 1],
          filter: [
            "blur(12px)",
            "blur(7px)",
            "blur(5px)",
            "blur(8px)",
          ],
        }}
        transition={{
          duration: 2.9,
          times: [0, 0.25, 0.6, 1],
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/rry-avatar.png"
          alt=""
          fill
          priority
          sizes="420px"
          className="splash-ghost-image"
        />
      </motion.div>

      {/* colour splash */}
      <motion.div
        className="splash-liquid liquid-one"
        initial={{
          scale: 0.05,
          opacity: 0,
        }}
        animate={{
          scale: [0.05, 1.1, 1.35, 1.15],
          opacity: [0, 1, 0.88, 0.72],
          rotate: [0, 22, -8, 15],
        }}
        transition={{
          duration: 2.9,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.32, 0.68, 1],
        }}
      />

      <motion.div
        className="splash-liquid liquid-two"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.15, 0.92, 1.12],
          opacity: [0, 0.92, 0.72, 0.5],
          rotate: [0, -28, 12, -20],
        }}
        transition={{
          duration: 2.7,
          delay: 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <motion.div
        className="splash-liquid liquid-three"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 0.9, 1.3, 1],
          opacity: [0, 0.8, 0.62, 0.42],
          rotate: [0, 30, -15, 25],
        }}
        transition={{
          duration: 2.65,
          delay: 0.24,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <motion.div
        className="splash-liquid liquid-four"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 1.2, 0.9, 1.08],
          opacity: [0, 0.75, 0.55, 0.35],
          rotate: [0, -18, 20, -10],
        }}
        transition={{
          duration: 2.8,
          delay: 0.38,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* particles */}
      <div className="splash-particles">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className={`splash-particle splash-particle-${index + 1}`}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0.65],
              opacity: [0, 1, 0],
              x: [
                0,
                (index % 2 === 0 ? 1 : -1) *
                  (20 + index * 4),
              ],
              y: [
                0,
                index % 3 === 0
                  ? -40 - index * 2
                  : 30 + index * 3,
              ],
            }}
            transition={{
              duration: 1.4 + (index % 4) * 0.18,
              delay: 0.25 + index * 0.055,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* sharp avatar reveal */}
      <motion.div
        className="splash-final-avatar"
        initial={{
          opacity: 0,
          scale: 0.7,
          filter: "blur(18px) saturate(0.5)",
        }}
        animate={{
          opacity: [0, 0.2, 0.65, 1],
          scale: [0.7, 0.92, 1.03, 1],
          filter: [
            "blur(18px) saturate(0.5)",
            "blur(10px) saturate(0.8)",
            "blur(3px) saturate(1)",
            "blur(0px) saturate(1)",
          ],
        }}
        transition={{
          duration: 2.25,
          delay: 0.62,
          times: [0, 0.3, 0.72, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="splash-final-glow" />

        <Image
          src="/images/rry-avatar.png"
          alt="Rry"
          fill
          priority
          sizes="420px"
          className="splash-final-image"
        />

        <motion.div
          className="splash-light-sweep"
          initial={{
            x: "-130%",
            opacity: 0,
          }}
          animate={{
            x: "130%",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            delay: 1.35,
            duration: 0.9,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="splash-signature"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: [0, 0.75, 0.75],
          y: 0,
        }}
        transition={{
          delay: 1.35,
          duration: 0.7,
        }}
      >
        <span>AI</span>
        <i>×</i>
        <span>MARKETS</span>
      </motion.div>

      <motion.div
        className="splash-progress"
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 2.95,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}