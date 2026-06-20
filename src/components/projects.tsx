import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio with AI-powered features."
        />

        <ProjectCard
          title="Movie Recommender"
          description="Recommendation system for discovering movies."
        />

        <ProjectCard
          title="Expense Tracker"
          description="Track expenses and manage budgets."
        />
      </div>
    </section>
  );
}