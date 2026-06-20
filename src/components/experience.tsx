import ExperienceCard from "./experience-card";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            organization={experience.organization}
            period={experience.period}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
}