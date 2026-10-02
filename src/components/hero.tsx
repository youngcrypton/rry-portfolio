"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const navigation = [
  { label: "about", href: "#about" },
  { label: "focus", href: "#focus" },
  { label: "numbers", href: "#numbers" },
  { label: "work", href: "#work" },
  { label: "content", href: "#content" },
  { label: "graphics", href: "#graphics" },
  { label: "ai", href: "#ai" },
  { label: "clients", href: "#clients" },
  { label: "connect", href: "#connect" },
];


export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero-background" />
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-glow hero-glow-three" />

      <header className="site-header">
        <Link href="#top" className="site-logo">
          rry
        </Link>

        <nav className="site-navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://x.com/web3_scholar_"
          target="_blank"
          rel="noopener noreferrer"
          className="x-button"
        >
          <span>x</span>
          <span>↗</span>
        </Link>
      </header>

      <div className="hero-top-label">
        <span>01</span>
        <span>artificial intelligence · markets</span>
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  x: -35,
                }
          }
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          transition={{
            delay: 0.25,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="hero-kicker">
            <span />
            <span>marketing manager</span>
          </div>

          <h1 className="hero-title">Rry</h1>

          <div className="hero-title-line">
            <span>AI</span>
            <span className="hero-title-symbol">×</span>
            <span>MARKETS</span>
          </div>

          <p className="hero-description">
            I build strategy, create the content about ai,
            crypto and push the ideas far enough to make
            people notice.
          </p>

          <div className="hero-actions">
            <Link href="#work" className="primary-button">
              <span>see the work</span>
              <span>↗</span>
            </Link>

            <Link href="#about" className="secondary-button">
              a little about me
            </Link>
          </div>

          <div className="hero-bottom-meta">
            <span>strategy</span>
            <span>content</span>
            <span>distribution</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.78,
                }
          }
          animate={
            reducedMotion
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{
            delay: 0.1,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="avatar-ambient-aura" />
          <div className="visual-glow" />

          <motion.div
            className="avatar-container avatar-alive-shining"
            animate={
              reducedMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="avatar-light" />
            <div className="avatar-shimmer-sweep" />

            <Image
              src="/images/rry-avatar.png"
              alt="Rry"
              fill
              priority
              sizes="(max-width: 700px) 75vw, 520px"
              className="hero-avatar"
            />
          </motion.div>

          <div className="visual-center-glow" />
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>scroll to explore</span>

        <div className="scroll-line">
          <span />
        </div>
      </div>
    </section>
  );
}