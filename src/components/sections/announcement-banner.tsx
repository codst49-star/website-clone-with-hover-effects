import React from 'react';

const AnnouncementBanner = () => {
  const announcementText = "🚀 Master Generative AI Fundamentals. Enroll in the Free Course Today →";
  const announcementLink = "https://learn.aichief.com/?utm_source=aichief&utm_medium=referral&utm_campaign=aichief_header";
  
  const linkClasses = "flex items-center gap-2 px-8 text-p2 text-foreground font-semibold hover:opacity-90 transition-opacity cursor-pointer flex-shrink-0";

  return (
    <div className="w-full overflow-hidden py-2 relative bg-background border-b-[1px] border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        <a href={announcementLink} className={linkClasses}>
          <span>{announcementText}</span>
        </a>
        <a href={announcementLink} className={linkClasses}>
          <span>{announcementText}</span>
        </a>
        <a href={announcementLink} className={linkClasses}>
          <span>{announcementText}</span>
        </a>
        <a href={announcementLink} className={linkClasses}>
          <span>{announcementText}</span>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;