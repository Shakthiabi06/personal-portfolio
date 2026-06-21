import { timeline } from "@/data/timeline";
import TimelineItem from "./timeline-item";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen max-w-2xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-4">
        Journey
      </h2>

      <p className="text-gray-600 mb-12">
        A timeline of where I've been, what I'm building, and where I'm heading.
      </p>

      <div className="space-y-12">
        {timeline.map((item) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}