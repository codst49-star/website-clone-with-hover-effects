import Link from 'next/link';
import React from 'react';

interface ShowcaseItem {
  title: string;
  href: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Marketing Data Warehousing for Non-Engineers: A Beginner's Guide",
    href: "/showcases/marketing-data-warehousing-for-non-engineers-a-beginners-guide/",
  },
  {
    title: "How to Select the Best AI Voice API in 2025",
    href: "/showcases/how-to-select-the-best-ai-voice-api-in-2025/",
  },
  {
    title: "The 5 Best AI Website Builders in 2025",
    href: "/showcases/the-5-best-ai-website-builders-in-2025/",
  },
  {
    title: "Top 4 AI Receptionists Across Industries",
    href: "/showcases/top-4-ai-receptionists-across-industries/",
  },
];

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => {
  return (
    <Link href={item.href} className="group relative block w-full overflow-hidden rounded-lg">
      <div className="aspect-video w-full bg-card transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h5 className="text-base font-semibold leading-6 text-white line-clamp-2">
          {item.title}
        </h5>
      </div>
    </Link>
  );
};

const ShowcaseSection = () => {
  return (
    <section className="bg-background py-10 px-10 max-lg:px-4">
      <h2 className="text-xl font-semibold text-foreground">
        <Link href="/showcases" className="transition-colors hover:text-gradient">
          Showcase (View All)
        </Link>
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {showcaseItems.map((item, index) => (
          <ShowcaseCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;