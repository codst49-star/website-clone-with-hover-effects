import Image from 'next/image';

interface NewsCardProps {
  title: string;
  timestamp: string;
  image: string;
  href: string;
}

const newsItems: NewsCardProps[] = [
  {
    title: 'ChatGPT\'s Voice Feature Now Works Directly in the Main Chat',
    timestamp: '11/26/2025 • 06:13 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_18.png',
    href: '#',
  },
  {
    title: 'Microsoft\'s Copilot AI Leaves WhatsApp on January 15',
    timestamp: '11/26/2025 • 06:21 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_19.png',
    href: '#',
  },
  {
    title: 'Google and Anthropic Lower AI Costs and Introduce New Models',
    timestamp: '11/26/2025 • 06:25 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_20.png',
    href: '#',
  },
  {
    title: 'AWS commits $50B to build AI infrastructure for U.S. government',
    timestamp: '11/25/2025 • 06:36 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_21.png',
    href: '#',
  },
  {
    title: 'ChatGPT launches shopping research tool for smarter product discovery',
    timestamp: '11/25/2025 • 06:39 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_22.png',
    href: '#',
  },
  {
    title: 'Anthropic unveils Claude Opus 4.5 with cheaper pricing and coding',
    timestamp: '11/25/2025 • 06:32 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_23.png',
    href: '#',
  },
  {
    title: 'Google rejects claims that Gmail uses your emails to train Gemini AI',
    timestamp: '11/24/2025 • 07:33 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_24.png',
    href: '#',
  },
  {
    title: 'Google Launches Gemini 3 as AI Race with OpenAI Heats Up',
    timestamp: '11/25/2025 • 05:08 AM',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_25.png',
    href: '#',
  },
];

const NewsCard = ({ title, timestamp, image, href }: NewsCardProps) => (
  <a
    href={href}
    className="group block overflow-visible rounded-[10px] border border-border transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-primaryCardShadow"
  >
    <div className="relative w-full aspect-[16/9] rounded-t-[10px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-2 left-2 bg-secondary text-black dark:text-blackish text-xs font-bold px-2 py-0.5 rounded">
        Featured
      </div>
      <div className="absolute bottom-4 left-2 flex items-center bg-gradient-light text-white text-[10px] font-bold py-1 px-3 rounded-sm space-x-1.5 uppercase">
        <span>BREAKING NEWS</span>
        <div className="w-px h-3 bg-white/50" />
        <span className="opacity-90">AIChief</span>
      </div>
    </div>
    <div className="p-4 space-y-2 bg-card rounded-b-[10px]">
      <h3 className="text-h6 font-semibold text-foreground line-clamp-2 h-[48px] group-hover:text-gradient transition-colors">
        {title}
      </h3>
      <p className="text-p3 text-muted-foreground">{timestamp}</p>
    </div>
  </a>
);

export default function FeaturedNewsSection() {
  return (
    <section className="py-10 bg-background">
      <div className="flex items-center gap-2 justify-center pb-8">
        <h2 className="text-h2 max-lg:text-h3 font-bold text-center text-gradient">
          <span className="text-3xl max-lg:text-2xl mr-2">🟠</span>
          Featured AI News
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 max-lg:px-4">
        {newsItems.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-8">
        <a
          href="#"
          className="relative flex items-center justify-center gap-2 px-7 py-2 rounded-[10px] cursor-pointer active:scale-95 transition-all duration-200 ease-in-out border border-border text-foreground hover:bg-foreground/10"
        >
          <span className="text-p1 font-semibold">View All</span>
        </a>
      </div>
    </section>
  );
}