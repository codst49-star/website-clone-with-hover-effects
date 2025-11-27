import React from 'react';

const AboutDirectorySection = () => {
  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-10">
      <h2 className="mb-12 text-center">
        <span className="text-gradient">AIChief</span> - World Largest AI Tool Directory
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="text-foreground">
            AIChief is the largest AI tools directory, built to empower professionals, creators, and businesses to stay ahead in the fast-evolving world of artificial intelligence. As a trusted AI tools list website, we bring together all AI tools in one website, free, helping users across the globe and beyond discover, compare, and apply the most effective AI technologies to boost innovation and productivity.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="text-foreground">
            Our platform offers a free AI tools directory that features thousands of solutions designed to simplify workflows and enhance creativity. From automation and analytics to design, writing, and coding tools, AIChief provides an extensive and regularly updated AI tools directory list a one-stop resource where you can explore the latest AI tools driving the next wave of digital transformation.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="text-foreground">
            At AIChief, we don't just list products we build understanding. Our curated guides, expert insights, and tool comparisons help professionals make informed decisions with confidence. Whether you're an entrepreneur, developer, marketer, or educator, you'll find everything you need to transform complexity into clarity. To help you stay consistently informed, AIChief delivers a <a href="#" className="text-primary hover:underline">daily AI newsletter</a> featuring hand-picked resources, breaking AI news, and updates on emerging tools keeping you ahead of the AI learning curve with relevant, actionable content.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="text-foreground">
            We're proud to host a thriving community of over 200,000+ members worldwide a network of innovators, learners, and industry leaders who are transforming curiosity into expertise. Beyond written content, AIChief offers complete visual support through our official <a href="#" className="text-primary hover:underline">YouTube channel</a>, where we share tool demos, tutorials, and AI trends explained simply. This multi-format approach makes AIChief not just a list of AI tools, but a complete learning ecosystem for professionals who want to excel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDirectorySection;