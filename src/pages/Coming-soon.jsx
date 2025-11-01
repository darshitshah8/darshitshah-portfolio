// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./ComingSoon.css"; // we’ll define minimal custom styles here

const ComingSoon = () => {
  return (
    <section className="section has-text-centered">
      <div className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center" style={{ minHeight: "70vh" }}>
        
        {/* === Glass Card === */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card box has-text-centered p-6"
        >
          {/* === Title + Glow Effect === */}
          <div className="coming-title-wrapper">
            <motion.div
              className="glow-circle"
              animate={{
                opacity: [0.5, 0.9, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="title is-2 has-text-weight-bold has-text-dark coming-title">
              Coming Soon
            </h1>
          </div>

          {/* === Subtext === */}
          <p className="has-text-grey mt-4">
            Something awesome is in the works!  
            <br />
            Stay tuned for updates.
          </p>

          {/* === Loader Dots === */}
          <div className="is-flex is-justify-content-center mt-5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="loader-dot"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
