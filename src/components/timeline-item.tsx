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
      <div className="font-bold text-xl min-w-[80px]">
        {year}
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}