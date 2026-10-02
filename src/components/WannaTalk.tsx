"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function WannaTalk() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="talk-button-wrapper">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.9, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="#connect"
          className="talk-button"
          aria-label="Talk to Rry"
        >
          <span className="talk-label">wanna talk?</span>

          <span className="talk-avatar">
            <span className="talk-avatar-glow" />

            <Image
              src="/images/rry-avatar.png"
              alt="Rry"
              fill
              sizes="66px"
              className="talk-avatar-image"
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
