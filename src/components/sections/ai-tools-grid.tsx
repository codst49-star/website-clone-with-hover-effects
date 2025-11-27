import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Bookmark, Star, StarHalf, BadgeCheck } from "lucide-react";

type Pricing =
  | { type: "Free" }
  | { type: "Paid"; text: string }
  | { type: "None" };

interface Tool {
  logo: string;
  name: string;
  isVerified: boolean;
  rating: number;
  pricing: Pricing;
  category: string;
  secondaryCategory?: string;
  description: string;
  views: number;
  bookmarks: number;
  slug: string;
}

const toolsData: Tool[] = [
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_6.png",
    name: "Freebeat",
    isVerified: true,
    rating: 4.6,
    pricing: { type: "Free" },
    category: "AI Video Tools",
    description: "Freebeat turns your music into AI-powered videos with one click. Read our review for features, pricing, pros, and ideal use cases.",
    views: 397,
    bookmarks: 177,
    slug: "freebeat",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_7.png",
    name: "Generor Video",
    isVerified: true,
    rating: 4.5,
    pricing: { type: "Free" },
    category: "AI Video Tools",
    description: "Explore Generor Video, a web-based AI video tool for creators and marketers. Review covers features, pros, cons, and verdict.",
    views: 476,
    bookmarks: 201,
    slug: "generor-video",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_8.png",
    name: "UGC Maker",
    isVerified: true,
    rating: 4.5,
    pricing: { type: "Free" },
    category: "AI Video Tools",
    description: "UGC Maker lets you create AI-generated UGC-style videos in minutes; no filming or editing needed. Free & premium plans available.",
    views: 484,
    bookmarks: 289,
    slug: "ugc-maker",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_9.png",
    name: "BankGPT",
    isVerified: true,
    rating: 4.6,
    pricing: { type: "Free" },
    category: "AI Business Tools",
    description: "Automate bank statements, invoices, and receipts with BankGPT. AI-powered, secure, and free to use—ideal for finance teams, accountants, and businesses.",
    views: 502,
    bookmarks: 279,
    slug: "bankgpt",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_10.png",
    name: "Video Transcriber AI",
    isVerified: true,
    rating: 4.5,
    pricing: { type: "Free" },
    category: "AI Video Tools",
    description: "Convert video and audio into clean, accurate transcripts, free. Video Transcriber AI supports 98+ languages, no sign-up, and instant YouTube transcription.",
    views: 404,
    bookmarks: 197,
    slug: "video-transcriber-ai",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_11.png",
    name: "Learn Place AI",
    isVerified: true,
    rating: 4.5,
    pricing: { type: "Paid", text: "Paid Plans - From $129" },
    category: "AI Education Tools",
    description: "Discover Learn Place AI, an adaptive learning platform that builds custom syllabi, accelerates skill-building, and supports career growth with hyper-personalized education.",
    views: 397,
    bookmarks: 221,
    slug: "learn-place-ai",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_12.png",
    name: "Grokipedia",
    isVerified: true,
    rating: 3.8,
    pricing: { type: "None" },
    category: "AI Search Engine",
    secondaryCategory: "Web",
    description: "Explore Grokipedia, Elon Musk's AI‑powered online encyclopedia launched by xAI in 2025. Learn what it offers, how it works, and its strengths & weaknesses.",
    views: 458,
    bookmarks: 267,
    slug: "grokipedia",
  },
  {
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/images_13.png",
    name: "ChatGPT Atlas",
    isVerified: true,
    rating: 4.5,
    pricing: { type: "Paid", text: "Paid Plans - From $20" },
    category: "AI Search Engine",
    description: "Explore ChatGPT Atlas in our 2025 review, a smarter way to discover, organize, and learn using interactive AI-powered knowledge maps. Features & FAQs inside.",
    views: 431,
    bookmarks: 203,
    slug: "chatgpt-atlas",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => <Star key={`full_${i}`} className="w-[17px] h-[17px] text-amber-400 fill-amber-400" />)}
        {halfStar === 1 && <StarHalf key="half" className="w-[17px] h-[17px] text-amber-400 fill-amber-400" />}
        {[...Array(emptyStars)].map((_, i) => <Star key={`empty_${i}`} className="w-[17px] h-[17px] text-muted fill-muted/20" />)}
      </div>
      <span className="text-p3 text-muted-foreground mt-0.5">({rating})</span>
    </div>
  );
};

const ToolCard = ({ tool, index }: { tool: Tool; index: number }) => (
  <article 
    className="rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.4)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-border hover:!border-secondary p-4 bg-card transition-all duration-200 flex flex-col h-full animate-fade-in hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(255,84,0,0.2)]"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <header className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Link href={`/ai-tools/${tool.slug}`} className="flex-shrink-0">
          <div className="w-[45px] h-[45px] relative bg-muted/20 rounded-full border border-border">
            <Image src={tool.logo} alt={`${tool.name} logo`} width={45} height={45} className="object-cover rounded-full" />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <div className="mb-1 flex items-center gap-1">
            <Link href={`/ai-tools/${tool.slug}`} className="font-semibold text-foreground text-p1 truncate hover:text-gradient transition-colors">
              {tool.name}
            </Link>
            {tool.isVerified && <BadgeCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />}
          </div>
          <StarRating rating={tool.rating} />
        </div>
      </div>
    </header>
    
    <div className="flex flex-col gap-3 flex-grow">
      <div className="flex flex-wrap gap-2 items-center">
        {tool.pricing.type === 'Free' && (
          <div className="text-xs font-bold text-white bg-[#10b981] px-2 py-0.5 rounded-md">Free</div>
        )}
        {tool.pricing.type === 'Paid' && (
          <div className="text-xs font-bold text-black dark:text-blackish bg-gradient-light px-2 py-0.5 rounded-md">{tool.pricing.text}</div>
        )}
        <div className="text-xs font-semibold text-muted-foreground bg-accent px-2 py-0.5 rounded-md">{tool.category}</div>
        {tool.secondaryCategory && <div className="text-xs font-semibold text-muted-foreground bg-accent px-2 py-0.5 rounded-md">{tool.secondaryCategory}</div>}
      </div>
      <p className="text-p2 text-muted-foreground line-clamp-3">{tool.description}</p>
    </div>

    <footer className="mt-auto pt-4 border-t border-border/50">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-p3 text-muted-foreground">
          <div className="flex items-center gap-1.5"><ArrowUp size={14} /> {tool.views}</div>
          <div className="flex items-center gap-1.5"><Bookmark size={14} /> {tool.bookmarks}</div>
        </div>
        <Link href={`/ai-tools/${tool.slug}`} className="bg-white text-black dark:text-blackish font-semibold rounded-lg py-2 px-5 text-sm hover:opacity-90 active:scale-95 transition">
          Try Now
        </Link>
      </div>
    </footer>
  </article>
);


export default function AiToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {toolsData.map((tool, index) => (
        <ToolCard key={tool.slug} tool={tool} index={index} />
      ))}
    </div>
  );
}