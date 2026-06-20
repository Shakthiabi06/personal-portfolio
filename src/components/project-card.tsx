type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}