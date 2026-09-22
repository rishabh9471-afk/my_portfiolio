import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { profile, heroMetrics } from "../data/content.js";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.1, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v);
    });
    return unsub;
  }, [spring]);

  return (
    <span className="value">
      <span ref={ref}>0</span>
      <span className="suffix">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-field" aria-hidden="true" />
      <div className="wrap hero-inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero-kicker">
            <span className="dot" />
            Available immediately · {profile.location}
          </motion.div>

          <motion.h1 variants={item}>
            AI product manager who ships numbers, <em>not just roadmaps</em>
          </motion.h1>

          <motion.p variants={item} className="hero-summary">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a className="btn btn-primary" href="#work">
              Read the case studies
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-metrics"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={container}
        >
          {heroMetrics.map((m) => (
            <motion.div className="hero-metric" key={m.label} variants={item}>
              <CountUp value={m.value} suffix={m.suffix} />
              <div className="label">{m.label}</div>
              <div className="detail">{m.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
