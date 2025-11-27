import Image from "next/image";
import Link from "next/link";
import { Eye, Bookmark, Star, StarHalf, BadgeCheck, Wand2, Briefcase, CircleDollarSign, Video } from "lucide-react";

type Tool = {
  logo?: string;
  logoPlaceholder: string;
  name: string;
  href: string;
  rating: number;
  isVerified: boolean;
  badges: {
    text: string;
    type: 'free' | 'paid' | 'category';
  }[];
  description: string;
  views: number;
  bookmarks: number;
  buttonText: 'Read More' | 'Try Now';
};

const toolsData: Tool[] = [
  {
    logoPlaceholder: "L",
    name: "LipSync.video",
    href: "#",
    rating: 4.5,
    isVerified: true,
    badges: [],
    description: "LipSync.video uses AI to sync lips with any audio. Perfect for content creators, brands, educators, and hobbyists. No signup needed, just upload and go.",
    views: 79,
    bookmarks: 17,
    buttonText: "Read More",
  },
  {
    logoPlaceholder: "gH",
    name: "goHeather",
    href: "#",
    rating: 4.5,
    isVerified: true,
    badges: [
      { text: "Paid Plans - From $49.99", type: 'paid' },
      { text: "AI Business Tools", type: 'category' }
    ],
    description: "goHeather uses lawyer-trained AI to review contracts faster and smarter. See pricing, features, and use cases in this complete goHeather review.",
    views: 104,
    bookmarks: 34,
    buttonText: "Read More",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_14.png",
    logoPlaceholder: "I",
    name: "ImageTranslator",
    href: "#",
    rating: 4.6,
    isVerified: true,
    badges: [
      { text: "Free", type: 'free' },
      { text: "AI Productivity Tools", type: 'category' }
    ],
    description: "Discover how ImageTranslator lets you translate text in photos while preserving layout and design. 100+ languages. No cost, no sign-up.",
    views: 135,
    bookmarks: 50,
    buttonText: "Read More",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_15.png",
    logoPlaceholder: "P",
    name: "PDFTranslator",
    href: "#",
    rating: 4.6,
    isVerified: true,
    badges: [
      { text: "Free", type: 'free' },
      { text: "AI Productivity Tools", type: 'category' }
    ],
    description: "Translate PDFs instantly in 100+ languages while preserving formatting. No sign-up, no fees. Read our full review of PDFTranslator.",
    views: 200,
    bookmarks: 76,
    buttonText: "Read More",
  },
    {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_16.png",
    logoPlaceholder: "F",
    name: "Freebeat",
    href: "/ai-video-tools/freebeat/",
    rating: 4.6,
    isVerified: true,
    badges: [
      { text: "Free", type: "free" },
      { text: "AI Video Tools", type: "category" },
    ],
    description: "Freebeat turns your music into AI-powered videos with one click. Read our review for features, pricing, pros, and ideal use cases.",
    views: 397,
    bookmarks: 177,
    buttonText: "Try Now",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_17.png",
    logoPlaceholder: "G",
    name: "Generor Video",
    href: "#",
    rating: 4.5,
    isVerified: true,
    badges: [
      { text: "Free", type: "free" },
      { text: "AI Video Tools", type: "category" },
    ],
    description: "Explore Generor Video, a web-based AI video tool for creators and marketers. Review covers features, pros, cons, and verdict.",
    views: 476,
    bookmarks: 201,
    buttonText: "Try Now",
  },
  {
    logoPlaceholder: "U",
    name: "UGC Maker",
    href: "#",
    rating: 4.5,
    isVerified: true,
    badges: [
      { text: "Free", type: "free" },
      { text: "AI Video Tools", type: "category" },
    ],
    description: "UGC Maker lets you create AI-generated UGC-style videos in minutes; no filming or editing needed. Free & premium plans available.",
    views: 484,
    bookmarks: 289,
    buttonText: "Try Now",
  },
  {
    logoPlaceholder: "B",
    name: "BankGPT",
    href: "#",
    rating: 4.6,
    isVerified: true,
    badges: [
      { text: "Free", type: "free" },
      { text: "AI Business Tools", type: "category" },
    ],
    description: "Automate bank statements, invoices, and receipts with BankGPT. AI-powered, secure, and free to use—ideal for finance teams, accountants, and businesses.",
    views: 502,
    bookmarks: 279,
    buttonText: "Try Now",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-[17px] h-[17px] text-amber-400 fill-amber-400" />
      ))}
      {halfStar && <StarHalf className="w-[17px] h-[17px] text-amber-400 fill-amber-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-[17px] h-[17px] text-gray-700 fill-gray-700" />
      ))}
    </div>
  );
};

const ToolCard = ({ tool }: { tool: Tool }) => {
  const getBadgeIcon = (text: string) => {
    if (text.includes("Paid")) return <CircleDollarSign className="w-3 h-3" />;
    if (text.includes("Productivity")) return <Wand2 className="w-3 h-3" />;
    if (text.includes("Business")) return <Briefcase className="w-3 h-3" />;
    if (text.includes("Video")) return <Video className="w-3 h-3" />;
    return null;
  };

  return (
    <article className="rounded-lg shadow-primaryCardShadow border border-border hover:!border-primary py-4 px-4 bg-card flex flex-col justify-between transition-all duration-200">
      <div>
        <header className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Link href={tool.href}>
              <div className="w-[45px] h-[45px] flex-shrink-0 relative bg-muted/20 rounded-full border-border border-[1px] flex items-center justify-center text-xl font-bold text-foreground">
                {tool.logo ? (
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-cover rounded-full"
                  />
                ) : (
                  <span>{tool.logoPlaceholder}</span>
                )}
              </div>
            </Link>
            <div className="flex-1 min-w-0">
              <div className="mb-1 flex items-center gap-1.5">
                <Link href={tool.href} className="font-semibold text-foreground text-p1 truncate hover:text-gradient transition-colors">
                  {tool.name}
                </Link>
                {tool.isVerified && <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500/20 flex-shrink-0" />}
              </div>
              <div className="flex items-center gap-1">
                <StarRating rating={tool.rating} />
                <span className="text-p3 text-muted-foreground">({tool.rating})</span>
              </div>
            </div>
          </div>
        </header>
        
        {tool.badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {tool.badges.map((badge, index) => (
              <div key={index} 
                className={`flex items-center gap-1.5 text-xs font-bold rounded-[5px] px-2 py-0.5
                  ${badge.type === 'free' ? 'bg-emerald-500 text-white' : ''}
                  ${badge.type === 'paid' ? 'bg-gradient-light text-black dark:text-blackish' : ''}
                  ${badge.type === 'category' ? 'border border-border text-muted-foreground' : ''}
                `}>
                {badge.type === 'category' && getBadgeIcon(badge.text)}
                <span className="text-p3 leading-none">{badge.text}</span>
              </div>
            ))}
          </div>
        )}

        <p className="mt-2 mb-4 text-p2 text-muted-foreground line-clamp-2">{tool.description}</p>
      </div>

      <footer className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-p3 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{tool.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bookmark className="w-4 h-4" />
            <span>{tool.bookmarks}</span>
          </div>
        </div>
        <Link 
          href={tool.href} 
          className="px-4 py-2 font-semibold text-center rounded-[10px] text-black dark:text-blackish bg-white cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-95 text-p2"
        >
          {tool.buttonText}
        </Link>
      </footer>
    </article>
  );
};

export default function JustLaunchedSection() {
  return (
    <section className="py-10 px-10 max-lg:px-4 bg-background">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-h2 font-bold text-center">
          ✨ <span className="text-gradient">Just</span> <span className="text-gradient">Launched</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {toolsData.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}