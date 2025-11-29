// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center"
      >
        {/* Header */}
        <h1 className="text-lg md:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-3">
          🚧 Page Under Construction 🚧
        </h1>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          We're working hard to bring this page to life. Please check back soon!
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-orange-400 dark:bg-orange-500 rounded-full"
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

export default UnderConstruction;
