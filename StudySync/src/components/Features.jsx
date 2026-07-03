import "./Features.css";
import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      id: 1,
      icon: "📚",
      title: "Smart Courses",
      description:
        "Access thousands of high-quality courses designed by industry experts to help you learn faster and smarter.",
    },
    {
      id: 2,
      icon: "📈",
      title: "Track Progress",
      description:
        "Visualize your learning journey with detailed progress tracking and performance insights.",
    },
    {
      id: 3,
      icon: "👨‍🏫",
      title: "Expert Mentors",
      description:
        "Learn directly from experienced professionals through mentorship and personalized guidance.",
    },
    {
      id: 4,
      icon: "🎯",
      title: "Personal Goals",
      description:
        "Create daily and weekly study goals to stay motivated and maintain learning consistency.",
    },
    {
      id: 5,
      icon: "🌍",
      title: "Global Community",
      description:
        "Join a vibrant community of learners, share ideas, ask questions, and grow together.",
    },
    {
      id: 6,
      icon: "⚡",
      title: "Interactive Learning",
      description:
        "Practice through quizzes, projects, and hands-on exercises that make learning engaging.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose StudySync?</h2>
          <p>
            Everything you need to make your learning journey more productive,
            interactive, and enjoyable.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;