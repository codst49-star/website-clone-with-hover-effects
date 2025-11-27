import Image from "next/image";
import Link from "next/link";

const toolkitsData = [
  {
    href: "/ai-tools-for-developers/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_26.png",
    category: "DEVELOPERS",
    title: "Top 14 Best AI Tools for Developers in 2025",
  },
  {
    href: "/ai-tools-for-freelancers/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_27.png",
    category: "FREELANCERS",
    title: "Best AI Tools for Freelancers in 2025",
  },
  {
    href: "/ai-tools-for-filmmakers/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_28.png",
    category: "FILMMAKERS",
    title: "Best AI Tools for FilmMakers in 2025",
  },
  {
    href: "/ai-tools-for-entrepreneurs/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_29.png",
    category: "ENTREPRENEURS",
    title: "Best AI Tools for Entrepreneurs in 2025",
  },
];

const ToolkitsSection = () => {
  return (
    <section className="py-4 px-10 max-lg:px-4 bg-background">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-foreground">
          Toolkits{' '}
          <Link href="/toolkits/" className="text-base font-semibold text-muted hover:text-primary transition-colors">
            (View All)
          </Link>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {toolkitsData.map((toolkit) => (
          <Link key={toolkit.category} href={toolkit.href} className="block group h-full">
            <article className="h-full flex flex-col bg-card border border-border rounded-lg shadow-primaryCardShadow overflow-hidden transition-all duration-200 hover:border-primary hover:-translate-y-1">
              <div className="relative h-[160px] p-4 flex flex-col justify-end items-start gap-1">
                <Image
                  src={toolkit.imageSrc}
                  alt={`${toolkit.category} toolkit illustration`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full -z-10"
                />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#351200] to-[rgba(255,84,0,0.4)] -z-[5]" />

                <p className="text-sm font-bold text-white uppercase">
                  Best AI Tools
                </p>
                <h3 className="text-3xl font-semibold text-gradient uppercase">
                  {toolkit.category}
                </h3>
                <div className="mt-1 px-2 py-0.5 rounded bg-white text-black dark:text-blackish text-xs font-bold">
                  FREE + PAID
                </div>
              </div>

              <div className="p-4 flex-grow bg-card">
                <h5 className="text-xl font-semibold text-foreground group-hover:underline">
                  {toolkit.title}
                </h5>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ToolkitsSection;