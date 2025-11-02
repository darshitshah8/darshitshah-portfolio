import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <section className="flex items-center justify-center min-h-screen dark:bg-color text-dark dark:text-light p-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl p-6 text-center"
      >
        {/* Animate subtle pulsing shadow for full card */}
        <motion.div
          animate={{
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <h1 className="text-lg md:text-xl font-semibold bg-yellow-400 text-dark py-2 px-4 rounded-lg inline-block mb-3">
            🚧 Page Under Construction 🚧
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We're working hard to bring this page to life. Stay tuned!
          </p>

          <div className="flex justify-center space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-3 h-3 bg-yellow-400 rounded-full"
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
      </motion.div>
    </section>
  );
};

export default UnderConstruction;
