import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categoryPills = [
  { name: 'AI 3d Tools', href: '/ai-3d-tools/' },
  { name: 'AI Coding Tools', href: '/ai-coding-tools/' },
  { name: 'AI Text Tools', href: '/ai-text-tools/' },
  { name: 'AI Email Writer', href: '/ai-email-writer/' },
  { name: 'AI Video Tools', href: '/ai-video-tools/' },
  { name: 'AI Image Generator', href: '/ai-image-generator/' },
  { name: 'Chat Bots', href: '/ai-chatbots/' },
];

const seenOnLogos = [
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/hugging-face-dark-1.png', alt: 'Hugging Face logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/meta-dark-2.png', alt: 'Meta logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/perplexity-dark-3.png', alt: 'Perplexity logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/nvidia-dark-4.png', alt: 'NVIDIA logo' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/images/hacker-noon-text-icon-5.webp', alt: 'Hacker Noon logo' },
];

const HeroSection = () => {
  return (
    <section className="py-10 relative flex items-center justify-center bg-background overflow-hidden">
      <div className="flex flex-col gap-4 items-center z-10 text-foreground lg:max-w-[77vw] max-md:px-4 w-full">
        <div className="absolute w-[600px] hidden dark:block max-md:w-full h-[541px] left-1/2 top-[70%] -translate-x-1/2 -translate-y-[400px] z-[-1] radial-glow-bg"></div>
        <h1 className="text-[3rem] max-lg:text-[2.25rem] font-bold text-center leading-tight tracking-tight animate-fade-in">
          The <span className="text-gradient">Best</span> AI Tools Directory
        </h1>
        <h2 className="text-[1.25rem] font-semibold text-center text-muted-foreground max-md:text-base max-md:leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Link href="/ai-tools/" className="text-gradient hover:border-b hover:border-b-primary">
            10689 AI Tools
          </Link>{' '}
          and{' '}
          <Link href="/ai-tools/" className="text-gradient hover:border-b hover:border-b-primary">
            180+
          </Link>{' '}
          Categories in The World's Best & Largest Directory
        </h2>
        <p className="text-[1.25rem] max-md:text-[0.875rem] flex gap-2 font-bold items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Spotlight:{' '}
          <a
            href="https://zeemo.ai/?via=ai-chief"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient pb-0.5 leading-tight md:border-b-[3px] md:border-primary max-md:underline"
          >
            Zeemo
          </a>
        </p>
        <div className="py-2 flex items-center gap-4 lg:w-[55vw] max-md:w-full animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Find AI Tool With AI"
              className="py-3 px-4 w-full rounded-[10px] bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200"
            />
          </div>
          <button className="relative flex items-center justify-center shrink-0 px-7 py-3 font-semibold rounded-[10px] cursor-pointer active:scale-95 transition-all duration-200 ease-in-out bg-gradient-light text-black dark:text-blackish max-md:px-4 max-md:py-2.5 hover:scale-105">
            Search
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {categoryPills.map((pill, index) => (
            <Link href={pill.href} key={pill.name} className="flex p-1" style={{ animationDelay: `${0.5 + index * 0.05}s` }}>
              <div className="px-2 py-1 rounded-[10px] text-foreground cursor-pointer border border-primary font-bold hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out transform animate-fade-in">
                <p className="text-sm max-md:text-xs">{pill.name}</p>
              </div>
            </Link>
          ))}
          <Link
            href="/ai-tools/"
            className="relative flex items-center justify-center gap-2 font-semibold cursor-pointer active:scale-95 transition-all duration-200 ease-in-out bg-gradient-light text-sm px-4 py-1 rounded-[10px] text-black dark:text-blackish m-1 hover:scale-105 animate-fade-in"
          >
            View All
          </Link>
        </div>
        <div className="flex items-center gap-10 max-md:gap-4 flex-wrap justify-center py-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-xl max-md:text-lg text-foreground font-semibold">As Seen On</p>
          {seenOnLogos.map((logo, index) => (
            <Image
              key={index}
              width={120}
              height={40}
              alt={logo.alt}
              src={logo.src}
              className="object-contain h-[40px] w-auto opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.9 + index * 0.1}s`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>
        <div className="hover:scale-110 transition-transform duration-300 ease-in-out animate-scale-in" style={{ animationDelay: '1.2s' }}>
          <Link
            href="/advertise/"
            className="relative flex items-center justify-center gap-2 px-7 py-2 font-semibold rounded-[10px] cursor-pointer active:scale-95 transition-all duration-200 ease-in-out bg-gradient-light"
          >
            <div className="text-black dark:text-blackish">Get Your AI Tool Featured Now</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;