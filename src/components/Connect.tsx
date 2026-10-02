"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function Connect() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="connect" className="connect-section" aria-label="Connect with Rry">
      {/* Ambient background glows */}
      <div className="connect-atmosphere" aria-hidden="true">
        <div className="connect-orb connect-orb-primary" />
        <div className="connect-orb connect-orb-secondary" />
        <div className="connect-grid-overlay" />
      </div>

      <div className="connect-container">
        {/* Top capability capsule bar (Ref: Image 1) */}
        <motion.div
          className="connect-services-pill"
          initial={reducedMotion ? false : { opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="services-text">content strategy</span>
          <span className="services-dot">·</span>
          <span className="services-text">ghostwriting</span>
          <span className="services-dot">·</span>
          <span className="services-text">sponsored campaigns</span>
          <span className="services-dot">·</span>
          <span className="services-text">social media marketing</span>
        </motion.div>

        {/* Character & Headline Cluster (Ref: Image 2) */}
        <div className="connect-hero-group">
          {/* Peeking Avatar Character */}
          <motion.div
            className="connect-avatar-wrap"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="connect-avatar-floater"
              animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="connect-avatar-halo" />
              <div className="connect-avatar-disc">
                <Image
                  src="/images/rry-avatar.png"
                  alt="Rry waving and ready to talk"
                  fill
                  sizes="(max-width: 640px) 150px, 190px"
                  className="connect-avatar-img"
                  priority={false}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Kicker with pinkish lines */}
          <motion.div
            className="connect-kicker"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="kicker-line kicker-line-left" />
            <span className="kicker-text">connect</span>
            <span className="kicker-line kicker-line-right" />
          </motion.div>

          {/* Glowing headline */}
          <motion.h2
            className="connect-title"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            let&apos;s talk.
          </motion.h2>

          {/* Liquid Glass Social Links (Ref: Image 2) */}
          <motion.div
            className="connect-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="https://x.com/web3_scholar_"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-action-btn connect-btn-x"
              aria-label="Follow Rry on X (@web3_scholar_)"
            >
              <span className="btn-label">@web3_scholar_ on x</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </Link>

            <Link
              href="https://t.me/ciriry"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-action-btn connect-btn-telegram"
              aria-label="Direct message Rry on Telegram (@ciriry)"
            >
              <span className="btn-label">@ciriry on telegram</span>
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>

        {/* Closing subtle footer credit */}
        <footer className="connect-footer">
          <span>rry © {new Date().getFullYear()}</span>
          <span className="footer-sep">·</span>
          <span>ai × markets</span>
          <span className="footer-sep">·</span>
          <span>strategy &amp; distribution</span>
        </footer>
      </div>
    </section>
  );
}
