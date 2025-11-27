"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ChevronDown, Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";

type NavItem = {
  label: string;
  href?: string;
  isNew?: boolean;
  isDropdown?: boolean;
};

const navItems: NavItem[] = [
  { href: "/ai-tools", label: "AI Tools" },
  {
    href: "https://learn.aichief.com/?utm_source=aichief&utm_medium=referral&utm_campaign=aichief_header",
    label: "AI Courses",
    isNew: true,
  },
  { label: "AI Insights", isDropdown: true },
  { label: "Submit/Advertise", isDropdown: true },
  { label: "Resources", isDropdown: true },
  { href: "/ai-agents", label: "AI Agents", isNew: true },
];

const NavLink = ({ item }: { item: NavItem }) => {
  const commonContent = (
    <div className="flex items-center gap-1">
      <span className="dark:group-hover:text-gradient group-hover:text-primary transition-colors duration-200">
        {item.label}
      </span>
      {item.isDropdown && (
        <ChevronDown className="h-5 w-5 text-current dark:group-hover:text-primary group-hover:text-primary transition-colors duration-200" />
      )}
    </div>
  );

  return (
    <div className="relative">
      {item.isNew && (
        <div className="absolute max-w-fit top-[-14px] right-[-17px] leading-none text-[9px] text-black dark:text-blackish animate-pulse px-2 py-1 bg-gradient-light rounded-full">
          New
        </div>
      )}
      {item.isDropdown ? (
        <button className="group cursor-pointer outline-none text-foreground hover:text-primary">
          {commonContent}
        </button>
      ) : (
        <a href={item.href} className="group text-foreground hover:text-primary">
          {commonContent}
        </a>
      )}
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-14 h-7 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200 ease-out active:scale-[0.98] will-change-transform ${
        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'
      }`}
      aria-label={`Current theme: ${isDark ? 'Dark' : 'Light'}. Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      <div className={`absolute inset-0 rounded-full transition-all duration-200 ease-out ${
        isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-gray-200 to-gray-300'
      }`} />
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun className={`h-4 w-4 transition-all duration-200 ease-out ${
          isDark ? 'text-gray-400 opacity-50' : 'text-amber-500 opacity-100'
        }`} />
        <Moon className={`h-4 w-4 transition-all duration-200 ease-out ${
          isDark ? 'text-gray-200 opacity-100' : 'text-gray-400 opacity-50'
        }`} />
      </div>
      <div className={`absolute top-0.5 w-6 h-6 rounded-full shadow-lg transition-transform duration-200 ease-out flex items-center justify-center will-change-transform ${
        isDark ? 'translate-x-7 bg-gray-900' : 'translate-x-0.5 bg-white'
      }`}>
        {isDark ? (
          <Moon className="h-3.5 w-3.5 transition-colors duration-200 ease-out text-gray-200" />
        ) : (
          <Sun className="h-3.5 w-3.5 transition-colors duration-200 ease-out text-amber-500" />
        )}
      </div>
    </button>
  );
};

const HeaderLogo = () => {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" 
    ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/svgs/svgs_2.svg"
    : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/daecfa25-89b7-4e79-8e39-5f8ce8c1a4b4-aichief-com/assets/svgs/svgs_1.svg";

  return (
    <Link href="/" aria-label="AIChief Home">
      <Image
        alt="AIChief best ai tools directory"
        width={175}
        height={35}
        src={logoSrc}
        className="object-cover max-md:max-w-[120px] max-md:max-h-[35px]"
      />
    </Link>
  );
};

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className="px-10 max-lg:px-4 max-md:px-2 py-2 w-full sticky top-0 z-40 font-semibold flex items-center justify-between backdrop-filter border-b-gray-400/40 border-b-[1px] backdrop-blur-xl bg-background/80"
      role="banner"
    >
      <div className="flex items-center flex-shrink-0">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Open mobile menu"
              className="xl:hidden h-10 w-10 rounded-full border-border bg-background hover:bg-accent text-foreground focus:ring-ring"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background border-r-gray-400/40 p-6 w-[300px] sm:w-[340px]">
            <div className="mb-8">
              <HeaderLogo />
            </div>
            <nav className="flex flex-col space-y-6 text-p1">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <NavLink item={item} />
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href="/login/"
                  className="!mt-8 relative flex items-center justify-center gap-2 px-7 py-2 font-semibold rounded-[10px] cursor-pointer active:scale-95 transition-all duration-200 ease-in-out bg-gradient-light text-black dark:text-blackish"
                >
                  Login
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="hidden xl:flex">
          <HeaderLogo />
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 xl:hidden">
        <HeaderLogo />
      </div>

      <div className="flex-1 hidden xl:flex justify-center items-center">
        <nav
          className="flex items-center space-x-7 mt-1 text-p1 font-semibold"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink item={item} key={item.label} />
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="xl:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="h-6 w-6" />
          </Button>
          <ThemeToggle />
        </div>
        <div className="hidden xl:flex items-center gap-5">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="h-7 w-7" />
          </Button>
          <ThemeToggle />
          <a
            href="/login/"
            className="relative flex items-center justify-center gap-2 px-7 py-2 font-semibold rounded-[10px] cursor-pointer active:scale-95 transition-all duration-200 ease-in-out bg-gradient-light"
          >
            <div className="text-black dark:text-blackish">Login</div>
          </a>
        </div>
      </div>
    </header>
  );
}