import React from 'react';
import { Search, Compass, Rocket, LineChart } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    duration: 'Step 1',
    icon: Search,
    description: 'We start with a friendly call to learn about your brand, understand your target audience, and identify your core marketing goals.',
    deliverable: 'Initial Goals & Alignment Call',
  },
  {
    step: '02',
    title: 'Strategy & Reference Research',
    duration: 'Step 2',
    icon: Compass,
    description: 'We construct your content calendar, research successful format references, and define thematic content pillars tailored to your brand.',
    deliverable: 'Content Calendar & Hook Matrix',
  },
  {
    step: '03',
    title: 'Content Creation & Review',
    duration: 'Step 3',
    icon: Rocket,
    description: 'We script, edit, and design your reels, carousels, and static posts. You review and approve before anything goes live.',
    deliverable: 'Reels, Carousels & Post Creatives',
  },
  {
    step: '04',
    title: 'Publishing, Community & Growth',
    duration: 'Step 4',
    icon: LineChart,
    description: 'We manage scheduling, posting, and community replies. In Thrive and Partner, we take your proven organic winners and scale them with Meta ads.',
    deliverable: 'Publishing, Ad Scaling & Monthly Report',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-[var(--line)]">
      <div className="wrap">
        {/* Header */}
        <div className="section-head grid gap-2 mb-10 max-w-xl">
          <p className="eyebrow">Client Journey</p>
          <h2 className="text-[clamp(1.8rem,4.6vw,2.7rem)] font-display font-bold text-[var(--ink)]">
            How we work together
          </h2>
          <p className="text-[var(--muted)]">
            A clear, four-step process from the initial call to consistent organic growth and ad scaling.
          </p>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-[20px] bg-[#FAF9F6] border border-[var(--line)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white border border-[var(--line)] text-[var(--orchid-deep)] font-bold">
                      PHASE {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-[var(--line)] flex items-center justify-center text-[var(--orchid-deep)]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[var(--muted)] block mb-1">{item.duration}</span>
                  <h3 className="text-lg font-display font-bold text-[var(--ink)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[var(--line)] text-[11px] text-[var(--ink)]">
                  <span className="text-[var(--muted)] font-mono block text-[10px] uppercase mb-0.5">
                    What You Receive
                  </span>
                  <span className="font-medium">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
