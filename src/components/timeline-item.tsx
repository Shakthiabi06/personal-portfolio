type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      {/* Timeline Column */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-black"></div>
        <div className="w-[2px] h-32 bg-gray-300"></div>
      </div>

      {/* Content Column */}
      <div className="pb-8">
        <p className="text-sm text-gray-500 mb-2">
          {year}
        </p>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}