"use client";

import { useState } from 'react';

const SubscribeForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, you would handle the form submission here,
        // e.g., send the data to your newsletter service.
        console.log({ fullName, email });
        // Optionally, clear the form or show a success message
        setFullName('');
        setEmail('');
    };

    return (
        <div>
            <h6 className="text-lg font-semibold text-foreground mb-4">Subscribe to AIChief Newsletter</h6>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Enter Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-input border border-border rounded-[10px] px-4 py-3 placeholder:text-muted-foreground text-foreground focus:ring-2 focus:ring-ring focus:border-primary outline-none transition-colors"
                    aria-label="Full Name for Newsletter"
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-input border border-border rounded-[10px] px-4 py-3 placeholder:text-muted-foreground text-foreground focus:ring-2 focus:ring-ring focus:border-primary outline-none transition-colors"
                    aria-label="Email for Newsletter"
                    required
                />
                <button
                    type="submit"
                    className="w-full border border-secondary text-secondary hover:bg-secondary/10 transition-colors py-3 rounded-[10px] font-semibold"
                >
                    Join 200K+ Subscribers
                </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-3 px-2">
                Read By Thousands Of Tech Companies, AI Influencers and Bloggers.
            </p>
        </div>
    );
};


const Footer = () => {
    const quickLinks = [
        { href: "#", label: "AI Courses", new: true },
        { href: "#", label: "Free AI Tools" },
        { href: "#", label: "Top 100 AI Tools" },
        { href: "#", label: "Toolkits", new: true },
        { href: "#", label: "Deals", new: true },
        { href: "#", label: "Press Release" },
        { href: "#", label: "User Reviews" },
        { href: "#", label: "Write For Us" },
        { href: "#", label: "Request a Feature" },
    ];

    const competitors = [
        { href: "#", label: "Vs Futurepedia" },
        { href: "#", label: "Vs Toolify" },
        { href: "#", label: "Vs Theresanaiforthat" },
        { href: "#", label: "Vs Insidr AI" },
        { href: "#", label: "Vs Aixploria" },
    ];

    const companyLinks = [
        { href: "#", label: "About Us" },
        { href: "#", label: "Contact Us" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Disclaimer" },
        { href: "#", label: "Cookie Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "FAQs" },
        { href: "#", label: "Careers" },
    ];

    const FooterLinkList = ({ title, links }: { title: string, links: Array<{ href: string, label: string, new?: boolean }> }) => (
        <div>
            <h6 className="text-lg font-semibold text-foreground mb-4">{title}</h6>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className="text-muted-foreground hover:text-foreground hover:underline transition-colors text-base">
                            {link.label}
                            {link.new && <sup className="text-secondary text-xs font-bold ml-1">new</sup>}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-background border-t border-border mt-10">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
                    {/* About AIChief */}
                    <div className="sm:col-span-2 md:col-span-3 xl:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <span className="text-black dark:text-blackish font-bold text-xl">A</span>
                            </div>
                            <h6 className="text-lg font-semibold text-foreground">About AIChief</h6>
                        </div>
                        <p className="text-muted-foreground text-base">
                            AIChief is the largest & best AI tools directory, organized in 180+ categories. Explore free AI tools list. AI news, GPTs, and AI agents all in one place! Each tool is manually tested and verified by our expert editors. We're here to keep you updated with latest news insights, tool comparison, and detailed guides.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <FooterLinkList title="Quick Links" links={quickLinks} />

                    {/* Competitors */}
                    <FooterLinkList title="Competitors" links={competitors} />

                    {/* Company */}
                    <FooterLinkList title="Company" links={companyLinks} />

                    {/* Subscribe */}
                    <div className="md:col-span-3 xl:col-span-1">
                      <SubscribeForm />
                    </div>
                </div>

                <div className="mt-16 border-t border-border pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        Copyright © 2023 - 2025 AIChief LLC | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;