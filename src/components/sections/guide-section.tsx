import Link from "next/link";

interface GuideCardData {
  title: string;
  shortTitle: string;
  href: string;
  highlights: {
    text: string;
    color: "cyan" | "orange";
  }[];
}

const guideData: GuideCardData[] = [
  {
    title: "Character AI Plus - Your Gateway To Increased Productivity",
    shortTitle: "Character AI Plus - Your Gateway To Increased Productivity",
    href: "#",
    highlights: [{ text: "Character AI Plus", color: "cyan" }],
  },
  {
    title: "Character AI App - An Insight Into Its Functionalities & Features",
    shortTitle:
      "Character AI App - An Insight Into Its Functionalities & Features",
    href: "#",
    highlights: [{ text: "Character AI App", color: "cyan" }],
  },
  {
    title: "How to Delete A Character AI Character?",
    shortTitle: "How to Delete A Character AI Character?",
    href: "#",
    highlights: [{ text: "A Character AI Character", color: "cyan" }],
  },
  {
    title: "Hypotenuse AI Alternatives - Unleash Your Writing Productivity!",
    shortTitle:
      "Hypotenuse AI Alternatives - Unleash Your Writing Productivity!",
    href: "#",
    highlights: [{ text: "Hypotenuse AI", color: "orange" }],
  },
];

const renderTitle = (
  title: string,
  highlights: { text: string; color: "cyan" | "orange" }[]
) => {
  const regex = new RegExp(`(${highlights.map((h) => h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")})`, "g");
  const parts = title.split(regex).filter(Boolean);

  const colorMap = new Map(highlights.map((h) => [h.text, h.color]));

  return parts.map((part, index) => {
    const color = colorMap.get(part);
    if (color) {
      const className = color === "cyan" ? "text-cyan-400" : "text-primary";
      return (
        <span key={index} className={className}>
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const GuideSection = () => {
  return (
    <section className="py-4 px-10 max-lg:px-4 bg-background">
      <div className="flex items-baseline gap-3 mb-8">
        <h2 className="text-h5 font-bold text-foreground">Guide</h2>
        <Link href="#" className="text-sm font-semibold text-primary hover:underline">
          (View All)
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {guideData.map((card) => (
          <Link href={card.href} key={card.title} className="block group h-full">
            <article className="h-full bg-card border border-border rounded-lg shadow-primaryCardShadow group-hover:border-primary transition-colors duration-200 flex flex-col overflow-hidden">
             
              <div className="relative h-[220px] bg-gradient-to-b from-zinc-800 to-black rounded-t-lg">
                 <div className="absolute inset-0 bg-black/40" />
                 <div className="relative z-10 h-full p-4 flex flex-col justify-between items-center text-center">
                    <div className="flex items-center gap-1.5 text-white/80 font-bold text-sm">
                        <span>@</span>
                        <span>AI</span>
                        <span className="text-primary">CHIEF</span>
                    </div>
                    <h3 className="text-white text-[22px] font-bold leading-tight px-2">
                        {renderTitle(card.title, card.highlights)}
                    </h3>
                    <div className="font-semibold text-primary text-sm group-hover:underline">
                        Read More &gt;&gt;
                    </div>
                 </div>
              </div>

              <div className="p-4 flex-grow">
                <p className="text-foreground font-semibold text-base leading-snug line-clamp-2">
                  {card.shortTitle}
                </p>
              </div>

            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GuideSection;