"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type ContentItem = {
  id: string;
  category: string;
  title: string;
  href: string;
  image: string;
  actionLabel?: string;
};

const items: ContentItem[] = [
  {
    id: "2093598412373479815",
    category: "MARKETS",
    title: "the food court of sports betting",
    href: "https://x.com/web3_scholar_/status/2093598412373479815",
    image: "/images/content/content-2093598412373479815.jpg",
    actionLabel: "view on x →",
  },
  {
    id: "2093032238052983219",
    category: "MARKETS",
    title: "what if popularity had a price?",
    href: "https://x.com/web3_scholar_/status/2093032238052983219",
    image: "/images/content/content-2093032238052983219.jpg",
    actionLabel: "view on x →",
  },
  {
    id: "2092888294136713242",
    category: "AI",
    title: "ranking grok, chatgpt, claude & gemini",
    href: "https://x.com/web3_scholar_/status/2092888294136713242",
    image: "/images/content/content-2092888294136713242.jpg",
    actionLabel: "view on x →",
  },
  {
    id: "2088700997593874440",
    category: "AI",
    title: "my first real experience with heyaura",
    href: "https://x.com/web3_scholar_/status/2088700997593874440",
    image: "/images/content/content-2088700997593874440.jpg",
    actionLabel: "read article →",
  },
  {
    id: "2087220835463713096",
    category: "GROWTH",
    title: "onboarding my circle to cademarket",
    href: "https://x.com/web3_scholar_/status/2087220835463713096",
    image: "/images/content/content-2087220835463713096.jpg",
    actionLabel: "view on x →",
  },
  {
    id: "2073100436291121273",
    category: "FINTECH",
    title: "africa's mobile money revolution",
    href: "https://x.com/web3_scholar_/status/2073100436291121273",
    image: "/images/content/content-2073100436291121273.jpg",
    actionLabel: "view on x →",
  },
  {
    id: "2056093943310303441",
    category: "ART & CULTURE",
    title: "from minsk streets to surrealism: dima kashtalyan",
    href: "https://x.com/web3_scholar_/status/2056093943310303441",
    image: "/images/content/content-2056093943310303441.jpg",
    actionLabel: "read article →",
  },
  {
    id: "2048146586023141751",
    category: "STRATEGY",
    title: "netflix vs blockbuster: the $50m turning point",
    href: "https://x.com/web3_scholar_/status/2048146586023141751",
    image: "/images/content/content-2048146586023141751.jpg",
    actionLabel: "view on x →",
  },
];

export function Content() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="content" className="content-section">
      <div className="content-background" aria-hidden="true">
        <div className="content-glow content-glow-one" />
        <div className="content-glow content-glow-two" />
      </div>

      <div className="content-container">
        <motion.div
          className="content-heading"
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
          <div className="content-heading-top">
            <span className="content-heading-line" />
            <span>threads & writing</span>
          </div>

          <h2>breakdowns, essays & research.</h2>
        </motion.div>

        <div className="content-grid-list">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              className="content-card rry-liquid-card"
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
                duration: 0.7,
                delay: reducedMotion ? 0 : (index % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="content-card-link"
                aria-label={`Open "${item.title}" on X`}
              >
                <div className="content-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 275px"
                    className="content-image"
                  />
                </div>

                <div className="content-card-body">
                  <span className="content-category">{item.category}</span>
                  <h3 className="content-title">{item.title}</h3>
                  <div className="content-action">
                    <span>{item.actionLabel || "view on x →"}</span>
                  </div>
                </div>
              </Link>

              <div className="rry-liquid-reflection" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
