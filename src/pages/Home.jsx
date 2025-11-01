import Profile from "../assets/profile/profile.png";
import { useExperience } from "../hooks/useExperience";
import { useTypewriter } from "../hooks/useTypewriter";

const HomePage = () => {
  const experience = useExperience(new Date(2023, 1, 1));
  const text = useTypewriter(
    ["Software Engineer.", "Full Stack Developer.", "UI Enthusiast."],
    120,
    60,
    1500
  );

  return (
    <section className="section bg-light text-dark">
      <div className="container">
        {/* Responsive columns — stacks to column on mobile */}
        <div className="columns is-vcentered is-variable is-6">
          {/* Profile Image column */}
          <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
            <figure className="image is-128x128">
              <img
                src={Profile}
                alt="Darshit Shah"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                className="is-rounded"
              />
            </figure>
          </div>

          {/* Text Section column */}
          <div className="column">
            <h1 className="title is-2 mb-2 text-primary">Darshit Shah</h1>

            <p className="subtitle is-4 mb-3 text-dark">
              <span>{text}</span>
              <span className="has-text-weight-bold">|</span>
            </p>

            <p className="is-size-5 text-dark">
              A passionate <span className="has-text-weight-semibold text-primary">software developer</span> building
              modern full-stack applications with attention to detail and performance.
            </p>

            <p className="mt-3">
              <strong className="mt-3 text-dark">Experience:</strong> {experience}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
