type SectionFrameProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionFrame({
  title,
  children,
}: SectionFrameProps) {
  return (
    <div className="border border-zinc-700 rounded-xl p-8 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-8">
        {title}
      </h2>

      {children}
    </div>
  );
}