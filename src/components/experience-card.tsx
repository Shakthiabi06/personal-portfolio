type ExperienceCardProps = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export default function ExperienceCard({
  title,
  organization,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="text-gray-600">
        {organization}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        {period}
      </p>

      <p>{description}</p>
    </div>
  );
}