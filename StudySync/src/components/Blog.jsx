import "./Blog.css";

const blogs = [
  {
    id: 1,
    category: "Study Tips",
    title: "10 Smart Study Techniques Every Student Should Know",
    description:
      "Discover effective learning strategies that improve focus, retention, and productivity.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    author: "StudySync Team",
    date: "14 Jul 2026",
  },
  {
    id: 2,
    category: "Productivity",
    title: "Beat Procrastination With These Daily Habits",
    description:
      "Simple routines that help you stay consistent and finish your work on time.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    author: "Krishna",
    date: "12 Jul 2026",
  },
  {
    id: 3,
    category: "Technology",
    title: "Best AI Tools Every Student Should Start Using",
    description:
      "Explore AI-powered tools that can make studying faster, smarter, and more efficient.",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800",
    author: "StudySync Team",
    date: "10 Jul 2026",
  },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-header">
        <span>OUR BLOG</span>

        <h2>
          Latest Learning <span>Articles</span>
        </h2>

        <p>
          Stay updated with study techniques, productivity hacks, and the
          latest technology trends to improve your learning journey.
        </p>
      </div>

      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <div className="blog-footer">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <button>Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;