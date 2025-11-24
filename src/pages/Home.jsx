import Profile from "../assets/profile/profile.png";
import { useExperience } from "../hooks/useExperience";
import { useTypewriter } from "../hooks/useTypewriter";

const HomePage = () => {
  const experience = useExperience(new Date(2023, 1, 1));
  const text = useTypewriter(
    ["Software Engineer.", "Frontend Developer.", "UI Enthusiast."],
    120,
    60,
    1500
  );

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
        {/* === Image Section === */}
        <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <figure className="flex justify-center">
            <img
              src={Profile}
              alt="Darshit Shah"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg object-cover bg-white dark:bg-gray-800"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
          </figure>
        </div>

        {/* === Text Section === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-4">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">
            Darshit Shah
          </h1>

          <p className="text-blue-600 dark:text-blue-400 text-xl font-medium">
            <span>{text}</span>
            <span className="animate-pulse ml-1">|</span>
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">
              software developer
            </span>{" "}
            building modern full-stack applications with attention to detail and
            performance.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-blue-500 dark:text-blue-400">
              Experience:
            </span>{" "}
            {experience}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
