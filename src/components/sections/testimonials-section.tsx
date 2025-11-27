"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    title: '"Go-To Resource"',
    content: "Our hiring team uses AIChief weekly to shortlist tools for automation of daily processes, emails, and much more. It's become our go-to resource for reliable AI discovery.",
    author: "Daniel Romero",
    role: "Operations Manager",
    avatar: "https://via.placeholder.com/48/121212/FFA500?text=DR",
  },
  {
    title: '"Expertly Curated Directory"',
    content: "Instead of endless Google searches, we simply check AIChief to see which new tools have been created. It feels like having an expert editor curate and update the list of tools for us.",
    author: "Sophia Rose Anderson",
    role: "Analytics Lead",
    avatar: "https://via.placeholder.com/48/121212/FFA500?text=SA",
  },
  {
    title: '"Cuts Research in Half"',
    content: "I recommend AIChief to every founder I meet. The breadth of tools and clarity of reviews cut our research time in half. My favourite section is their toolkit, where anyone can find tools in a blog with a use case.",
    author: "Luca Moretti",
    role: "Creative Director",
    avatar: "https://via.placeholder.com/48/121212/FFA500?text=LM",
  },
  {
    title: '"Proven Every Time"',
    content: "AIChief is the only AI directory I trust. Every tool I've tested from here worked exactly as described, and it saved me endless trial and error.",
    author: "Mia Jane Williams",
    role: "Head of Product",
    avatar: "https://via.placeholder.com/48/121212/FFA500?text=MW",
  },
  {
    title: '"Verified and Trusted Tools"',
    content: "The verification badges on this directory are a game-changer. I don't waste time on shady tools anymore. It's like trusting the resource.",
    author: "Priya Narayan",
    role: "VP Engineering",
    avatar: "https://via.placeholder.com/48/121212/FFA500?text=PN",
  },
  {
    title: '"Trusted Source of AI"',
    content: "Honestly, AIChief saves me from going down Google rabbit holes. I just check here first, and everything I need is already organized in one place. 10/10 interface.",
    author: "Sarah Johnson",
    role: "Project Manager",
    avatar: "https://via.placeholder.com/48/121212/FFA500?text=SJ",
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
       api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  );
  
  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="py-10 px-10 max-lg:px-4 bg-background">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-semibold text-foreground">
            Integrity Backed by Testimonials
          </h3>
          <Link href="#" className="text-primary text-base font-semibold hover:underline">
            (View All)
          </Link>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true, slidesToScroll: 1, }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 xl:basis-1/3">
                <div className="p-1 h-full">
                  <div className="bg-card border border-border rounded-[10px] p-6 h-full flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.4)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                    <div className="relative mb-4">
                      <p className="absolute -top-3 -left-1 text-7xl font-bold text-primary opacity-20 -z-0">"</p>
                      <h5 className="relative z-10 text-xl font-semibold text-foreground">{testimonial.title}</h5>
                    </div>
                    <p className="text-base text-muted-foreground mb-6 flex-grow leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-foreground text-base">{testimonial.author}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="flex justify-center items-center gap-6 mt-16">
          <button onClick={scrollPrev} aria-label="Previous testimonial" className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-background">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index + 1
                  ? "bg-primary w-4" 
                  : "bg-muted/50 hover:bg-muted"
                }`}
              />
            ))}
          </div>
          
          <button onClick={scrollNext} aria-label="Next testimonial" className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-background">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}