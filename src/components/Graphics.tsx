"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type ClipItem = {
  id: string;
  url: string;
  title: string;
  videoSrc: string;
  posterSrc?: string;
  tag?: string;
};

const clips: ClipItem[] = [
  {
    id: "2086827741911925159",
    url: "https://x.com/web3_scholar_/status/2086827741911925159",
    title: "jonathan hurst on humanoid robots",
    videoSrc: "/videos/clip-2086827741911925159.mp4",
    posterSrc: "/images/clips/poster-2086827741911925159.jpg",
    tag: "ROBOTICS",
  },
  {
    id: "2085587839706632213",
    url: "https://x.com/web3_scholar_/status/2085587839706632213",
    title: "vlad & chris camillo on trading",
    videoSrc: "/videos/clip-2085587839706632213.mp4",
    posterSrc: "/images/clips/poster-2085587839706632213.jpg",
    tag: "MARKETS",
  },
  {
    id: "2084760511032205693",
    url: "https://x.com/web3_scholar_/status/2084760511032205693",
    title: "holland on sobriety & clarity",
    videoSrc: "/videos/clip-2084760511032205693.mp4",
    posterSrc: "/images/clips/poster-2084760511032205693.jpg",
    tag: "STORY",
  },
  {
    id: "2084698718025007520",
    url: "https://x.com/web3_scholar_/status/2084698718025007520",
    title: "sam altman on when ai is perfect",
    videoSrc: "/videos/clip-2084698718025007520.mp4",
    posterSrc: "/images/clips/poster-2084698718025007520.jpg",
    tag: "AI",
  },
  {
    id: "2082987854427300320",
    url: "https://x.com/web3_scholar_/status/2082987854427300320",
    title: "moonpay ceo hints airdrop",
    videoSrc: "/videos/clip-2082987854427300320.mp4",
    posterSrc: "/images/clips/poster-2082987854427300320.jpg",
    tag: "CRYPTO",
  },
  {
    id: "2082230368350908486",
    url: "https://x.com/web3_scholar_/status/2082230368350908486",
    title: "tom holland has never seen the matrix",
    videoSrc: "/videos/clip-2082230368350908486.mp4",
    posterSrc: "/images/clips/poster-2082230368350908486.jpg",
    tag: "CULTURE",
  },
  {
    id: "2082172244478828599",
    url: "https://x.com/web3_scholar_/status/2082172244478828599",
    title: "garry tan asks sam altman for insights",
    videoSrc: "/videos/clip-2082172244478828599.mp4",
    posterSrc: "/images/clips/poster-2082172244478828599.jpg",
    tag: "STARTUPS",
  },
  {
    id: "2081998049384006011",
    url: "https://x.com/web3_scholar_/status/2081998049384006011",
    title: "holland & batalon on what's next",
    videoSrc: "/videos/clip-2081998049384006011.mp4",
    posterSrc: "/images/clips/poster-2081998049384006011.jpg",
    tag: "FILM",
  },
];

const stackRotations = [0, -5, 6, -3, 8, -7, 4, -9];

export function Graphics() {
  const [isExpanded, setIsExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Exact 5-second preview loop
    if (e.currentTarget.currentTime >= 5) {
      e.currentTarget.currentTime = 0;
    }
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="graphics" ref={sectionRef} className="graphics-section">
      <div className="graphics-background" aria-hidden="true">
        <div className="graphics-glow graphics-glow-one" />
        <div className="graphics-glow graphics-glow-two" />
      </div>

      <div className="graphics-container">
        <motion.div
          className="graphics-heading"
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
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="graphics-heading-top">
            <span className="graphics-heading-line" />
            <span>video clips & motion</span>
          </div>

          <div className="graphics-heading-row">
            <h2>motion & short-form edits.</h2>

            {isExpanded && (
              <motion.button
                type="button"
                className="graphics-back-btn"
                onClick={handleCollapse}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
              >
                <span aria-hidden="true">←</span> back to stack
              </motion.button>
            )}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* STACKED DECK VIEW */
            <motion.div
              key="stack"
              className="graphics-stack-wrapper"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="graphics-stack"
                onClick={handleExpand}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleExpand();
                  }
                }}
                aria-label="Expand 8 clips into a grid"
              >
                {clips.map((clip, index) => {
                  const rot = stackRotations[index % stackRotations.length];
                  const isTop = index === 0;
                  const zIdx = clips.length - index;

                  return (
                    <motion.div
                      key={clip.id}
                      className={`graphics-stack-card rry-liquid-card ${isTop ? "is-top-card" : ""}`}
                      style={{
                        zIndex: zIdx,
                        transform: `rotate(${rot}deg) translateZ(${zIdx * 2}px)`,
                      }}
                      whileHover={
                        isTop
                          ? { scale: 1.025, transition: { duration: 0.3 } }
                          : undefined
                      }
                    >
                      <div className="graphics-stack-media">
                        {isTop ? (
                          <video
                            src={clip.videoSrc}
                            poster={clip.posterSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            onTimeUpdate={handleTimeUpdate}
                            className="graphics-video"
                          />
                        ) : clip.posterSrc ? (
                          <div
                            className="graphics-poster-bg"
                            style={{ backgroundImage: `url(${clip.posterSrc})` }}
                          />
                        ) : (
                          <div className="graphics-card-fallback" />
                        )}

                        <div className="graphics-stack-overlay">
                          <span className="graphics-badge">{clip.tag}</span>
                          <span className="graphics-title">{clip.title}</span>
                        </div>
                      </div>

                      <div className="rry-liquid-reflection" aria-hidden="true" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="graphics-pill-wrap">
                <button
                  type="button"
                  className="graphics-pill-btn"
                  onClick={handleExpand}
                  aria-label="Tap to expand 8 clips"
                >
                  <span className="graphics-pill-count">{clips.length} graphics</span>
                  <span className="graphics-pill-dot">·</span>
                  <span className="graphics-pill-action">tap to expand</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* EXPANDED 4x2 GRID VIEW */
            <motion.div
              key="grid"
              className="graphics-grid-wrapper"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="graphics-grid">
                {clips.map((clip, index) => (
                  <motion.article
                    key={clip.id}
                    className="graphics-grid-card rry-liquid-card"
                    initial={
                      reducedMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 20,
                            scale: 0.96,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: reducedMotion ? 0 : index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={clip.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="graphics-card-link"
                      aria-label={`Open "${clip.title}" on X`}
                    >
                      <div className="graphics-video-wrap">
                        <video
                          src={clip.videoSrc}
                          poster={clip.posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          onTimeUpdate={handleTimeUpdate}
                          className="graphics-video"
                        />

                        <div className="graphics-card-gradient" />

                        <div className="graphics-card-overlay">
                          <span className="graphics-badge">{clip.tag}</span>
                          <h3 className="graphics-title">{clip.title}</h3>
                          <span className="graphics-open-hint">
                            open clip on x ↗
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="rry-liquid-reflection" aria-hidden="true" />
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
