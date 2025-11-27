import Image from 'next/image';
import Link from 'next/link';

interface Comparison {
  title: string;
  tool1: { name: string; logo: string };
  tool2: { name:string; logo: string };
  slug: string;
}

const comparisons: Comparison[] = [
  {
    title: "Dall-E 2 vs. Bing Creator - Which AI Image Generator is Better?",
    tool1: { name: "Dall-E 2", logo: "https://images.aichief.com/uploads/2025/09/dall-e-2-icon-1755152342080.webp" },
    tool2: { name: "Bing Creator", logo: "https://images.aichief.com/uploads/2025/09/bing-creator-icon-1755152342087.webp" },
    slug: "/comparison/dall-e-2-vs-bing-image-creator",
  },
  {
    title: "Jasper vs Rytr AI: Comparing the Features to Help You Pick the Best",
    tool1: { name: "Jasper", logo: "https://images.aichief.com/uploads/2025/09/jasper-icon-1755153213569.webp" },
    tool2: { name: "Rytr AI", logo: "https://images.aichief.com/uploads/2025/09/rytr-icon-1755153213576.webp" },
    slug: "/comparison/jasper-ai-vs-rytr-ai",
  },
  {
    title: "Jasper Vs Copy.ai: Choosing the Better Writing Tool?",
    tool1: { name: "Jasper", logo: "https://images.aichief.com/uploads/2025/09/jasper-icon-1755153213569.webp" },
    tool2: { name: "Copy.ai", logo: "https://images.aichief.com/uploads/2025/09/copyai-icon-1755153328229.webp" },
    slug: "/comparison/jasper-ai-vs-copy-ai",
  },
  {
    title: "Writesonic vs. Jasper AI: A Comprehensive Comparison",
    tool1: { name: "Writesonic", logo: "https://images.aichief.com/uploads/2025/09/writesonic-icon-1755153406456.webp" },
    tool2: { name: "Jasper", logo: "https://images.aichief.com/uploads/2025/09/jasper-icon-1755153213569.webp" },
    slug: "/comparison/writesonic-vs-jasper-ai",
  },
];

const ComparisonCard = ({ comparison }: { comparison: Comparison }) => (
  <Link href={comparison.slug} className="group block">
    <div 
      className="relative flex h-[350px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-accent p-5 text-center transition-all duration-300 hover:border-primary"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex h-full flex-col">
        <p className="font-bold text-xl text-white tracking-wider self-center">@CHIEF</p>
        
        <div className="flex flex-grow items-center justify-around px-2 py-4">
          <Image src={comparison.tool1.logo} alt={comparison.tool1.name} width={80} height={80} className="w-20 h-20 rounded-lg object-contain" />
          <span className="text-4xl font-bold text-white">Vs</span>
          <Image src={comparison.tool2.logo} alt={comparison.tool2.name} width={80} height={80} className="w-20 h-20 rounded-lg object-contain" />
        </div>

        <div className="flex justify-around items-center text-white text-sm font-semibold mt-auto mb-2 px-2">
          <p className="w-2/5 truncate">{comparison.tool1.name}</p>
          <div className="w-1/5"></div>
          <p className="w-2/5 truncate">{comparison.tool2.name}</p>
        </div>

        <h5 className="text-white text-base font-semibold leading-tight h-[48px] mb-3 line-clamp-2">{comparison.title}</h5>
        
        <p className="text-primary font-bold text-sm">Read More &gt;&gt;</p>
      </div>
    </div>
  </Link>
);

const ComparisonSection = () => {
  return (
    <section className="py-10 px-10 max-lg:px-4 bg-background">
      <div className="mb-6 flex items-center justify-between">
        <h5 className="text-h5 font-semibold text-foreground">
          Comparison (
          <Link href="/comparison/" className="text-primary underline hover:text-gradient">
            View All
          </Link>
          )
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {comparisons.map((comparison, index) => (
          <ComparisonCard key={index} comparison={comparison} />
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;