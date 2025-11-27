"use client";

import { useState } from "react";
import { Sparkles, TrendingUp, Gift } from "lucide-react";

type TabId = 'featured' | 'trending' | 'free';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

const TABS_CONFIG: TabConfig[] = [
  { 
    id: 'featured', 
    label: 'Featured', 
    icon: Sparkles,
    ariaLabel: 'Featured AI Tools',
  },
  { 
    id: 'trending', 
    label: 'Trending', 
    icon: TrendingUp,
    ariaLabel: 'Trending AI Tools',
  },
  { 
    id: 'free', 
    label: 'Free', 
    icon: Gift,
    ariaLabel: 'Free AI Tools',
  },
];

const FeaturedToolsTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TABS_CONFIG[0].id);

  const renderTabContent = () => {
    // The grid of tool cards would be rendered here based on the active tab.
    // This component focuses on cloning the tab navigation UI.
    return (
      <div className="transition-all duration-300" />
    );
  };

  return (
    <section className="py-4 px-10 max-lg:px-4">
      <div className="w-full">
        <nav
          className="flex justify-center mb-8"
          role="tablist"
          aria-label="AI Tools Categories"
        >
          <div className="flex bg-transparent gap-8 max-md:gap-7 max-md:items-center">
            {TABS_CONFIG.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  aria-label={tab.ariaLabel}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    cursor-pointer relative flex items-center font-bold gap-2 px-8 py-4
                    transition-all duration-200 focus:outline-none 
                    max-md:px-2 max-md:py-2
                    ${!isActive ? 'text-muted-foreground hover:text-foreground' : ''}
                  `}
                >
                  <div
                    className={`flex items-center justify-center ${isActive ? 'icon-gradient-mask' : 'text-inherit'}`}
                  >
                    <Icon className="w-5 h-5 max-md:w-4 max-md:h-4" />
                  </div>
                  <span
                    className={`max-md:text-p2 ${isActive ? 'text-gradient' : 'text-inherit'}`}
                  >
                    {tab.label}
                  </span>
                  <div
                    className={`
                      absolute bottom-0 left-0 right-0 h-[1px] max-md:h-[0.5px]
                      transition-all duration-200
                      ${isActive ? 'bg-gradient-light' : 'bg-muted'}
                    `}
                  ></div>
                </button>
              );
            })}
          </div>
        </nav>

        {TABS_CONFIG.map(tab => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
          >
            {activeTab === tab.id && renderTabContent()}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedToolsTabs;