"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Project = {
  number: string;
  handle: string;
  href: string;
  image: string;
  workLinks?: string[];
};

const projects: Project[] = [
  {
    number: "01",
    handle: "@zama",
    href: "https://x.com/zama",
    image: "/images/zama.png",
    workLinks: [
      "https://x.com/web3_scholar_/status/1992694634267509048",
      "https://x.com/web3_scholar_/status/1984219787593982214",
      "https://x.com/web3_scholar_/status/2000514871620690061",
      "https://x.com/web3_scholar_/status/1990754615453798637",
      "https://x.com/web3_scholar_/status/1997559749840159192",
      "https://x.com/web3_scholar_/status/1995209525742510498",
      "https://x.com/web3_scholar_/status/2000089844676972689",
      "https://x.com/web3_scholar_/status/1996988524210667776",
    ],
  },
  {
    number: "02",
    handle: "@MEXC_Official",
    href: "https://x.com/MEXC_Official",
    image: "/images/mexc.png",
    workLinks: [
      "https://x.com/web3_scholar_/status/2103595743340626398",
    ],
  },
  {
    number: "03",
    handle: "@fhenix",
    href: "https://x.com/fhenix",
    image: "/images/fhenix.png",
    workLinks: [
      "https://x.com/web3_scholar_/status/2009863725566591307",
      "https://x.com/web3_scholar_/status/2014246402281386256",
    ],
  },
  {
    number: "04",
    handle: "@jumperapp",
    href: "https://x.com/jumperapp",
    image: "/images/jumper.png",
    workLinks: [
      "https://x.com/web3_scholar_/status/2085075135346659380",
    ],
  },
];

export function Work() {
  const reducedMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <section id="work" className="work-section">
      <div className="work-background" aria-hidden="true">
        <div className="work-glow work-glow-one" />
        <div className="work-glow work-glow-two" />
        <div className="work-grid" />
      </div>

      <div className="work-container">
        <motion.div
          className="work-heading"
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
          <div className="work-heading-top">
            <span className="work-heading-line" />
            <span>selected work</span>
          </div>

          <h2>projects i&apos;ve worked with.</h2>
        </motion.div>

        <div className="work-grid-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.handle}
              className="work-card rry-liquid-card"
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: reducedMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="work-card-content">
                <div className="work-card-topline">
                  <span>{project.number}</span>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-link"
                    aria-label={`Open ${project.handle} on X`}
                  >
                    visit project ↗
                  </Link>
                </div>

                <div className="work-logo-wrap">
                  <Image
                    src={project.image}
                    alt={`${project.handle} logo`}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1000px) 42vw, 260px"
                    className="work-logo"
                  />
                </div>

                <div className="work-card-footer">
                  <span className="work-handle">{project.handle}</span>
                  {project.workLinks ? (
                    <button
                      type="button"
                      className="work-see-button"
                      onClick={() => setActiveProject(project)}
                    >
                      see my work <span aria-hidden="true">↗</span>
                    </button>
                  ) : (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-see-button"
                      aria-label={`Open ${project.handle} on X`}
                    >
                      view project <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </div>

              <div className="rry-liquid-reflection" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>

      </section>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="work-modal-backdrop"
            role="presentation"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.section
              className="work-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="work-modal-title"
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                      scale: 0.985,
                    }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="work-modal-header">
                <div>
                  <span className="work-modal-kicker">{activeProject.handle}</span>
                  <h3 id="work-modal-title">selected work.</h3>
                </div>

                <button
                  type="button"
                  className="work-modal-close"
                  onClick={() => setActiveProject(null)}
                  aria-label={`Close ${activeProject.handle} work links`}
                >
                  ×
                </button>
              </div>

              <div className="work-link-grid">
                {activeProject.workLinks?.map((href, index) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link-item"
                  >
                    <span>work {String(index + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true">open on x ↗</span>
                  </Link>
                ))}
              </div>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
