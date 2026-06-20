import { timeline } from "@/data/timeline";
import TimelineItem from "./timeline-item";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen max-w-4xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        My Journey
      </h2>

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