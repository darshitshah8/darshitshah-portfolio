// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="flex items-center justify-center min-h-screen dark:bg-dark text-dark dark:text-light p-4">
      {/* Animated container card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl p-6 text-center"
      >
        {/* Animated header with glow */}
        <motion.h1
          className="text-lg md:text-xl font-semibold bg-blue-400 text-dark py-2 px-4 rounded-lg shadow-inner inline-block mb-3"
          transition={{ duration: 2, repeat: Infinity }}
        >
          🚀 Coming Soon 🚀
        </motion.h1>

        {/* Subtext */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Something awesome is in the works! <br />
          Stay tuned for exciting updates.
        </p>

        {/* Loader Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full shadow-md"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -6, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
