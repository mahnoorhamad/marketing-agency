export interface FaqQuestion {
  id: string;
  question: string;
  category: 'Overview & Services' | 'Plans & Pricing' | 'Ads & Strategy';
  answer: string;
}

export const FAQ_QUESTIONS: FaqQuestion[] = [
  {
    id: 'what-is-hawar-studio',
    category: 'Overview & Services',
    question: 'What is Hawar Studio?',
    answer:
      'Hawar Studio is an AI-powered creative and digital marketing studio founded by Warda Khawaja in Cantt, Sialkot District, Punjab, Pakistan. With 6+ years of experience and 1,000+ creative projects, we deliver full social media management, brand storytelling, Reels, AI product photography, AI commercials, graphic design, and paid growth for brands in Pakistan and worldwide.',
  },
  {
    id: 'what-services-does-hawar-studio-offer',
    category: 'Overview & Services',
    question: 'What services does Hawar Studio offer?',
    answer:
      'We offer social media management & organic growth, content strategy & copywriting, Reels & video editing, AI product photography & virtual model shoots, Amazon listing & Shopify store visuals, AI UGC videos & AI commercials, graphic & Panaflex design, marketing consulting, project management, and Meta Ads. You can choose a monthly plan or a standalone service.',
  },
  {
    id: 'who-does-hawar-studio-work-with',
    category: 'Overview & Services',
    question: 'Who does Hawar Studio work with?',
    answer:
      'We work with D2C brands, e-commerce businesses, modest fashion & clothing brands, Amazon sellers, Shopify stores, corporate businesses, schools & educational institutions, and international clients across Pakistan, the UK, the USA, and globally.',
  },
  {
    id: 'what-plans-does-hawar-studio-offer',
    category: 'Plans & Pricing',
    question: 'What plans does Hawar Studio offer?',
    answer:
      "We offer three monthly plans: Grow, Thrive and Partner. Grow covers 15 reels, 5 carousels, 15 stories, posting and community replies. Thrive covers 20 reels, 10 carousels, 30 stories, full social media management and a complete TOFU, MOFU and BOFU content funnel. Partner is a fully customized growth partnership including 30 reels, 15 carousels, exclusive customized stories, dedicated WhatsApp group, personalized content strategy, and ongoing optimization. All plans have a 3-month minimum and 50% advance payment.",
  },
  {
    id: 'can-i-buy-just-one-service',
    category: 'Overview & Services',
    question: 'Can I buy just one service?',
    answer:
      'Yes. AI product photography, virtual fashion model shoots, Amazon & Shopify product visuals, AI UGC video ads, Reels/video editing, graphic & banner design, marketing consulting, and Meta Ads management are all available individually.',
  },
  {
    id: 'do-i-need-meta-ads-or-is-organic-enough',
    category: 'Ads & Strategy',
    question: 'Do I need Meta ads, or is organic content enough?',
    answer:
      'Most brands should start with organic content. Consistent posting shows which topics and formats people respond to. Once one format clearly works, Meta ads can put budget behind it. We start organic and add ads only behind proven content.',
  },
  {
    id: 'who-pays-for-the-ad-spend',
    category: 'Ads & Strategy',
    question: 'Who pays for the ad spend?',
    answer:
      'Please note: Meta Ads management fees and advertising spend are two separate costs. You pay Meta directly for ad spend through your own connected payment card in your ad account. HAWAR STUDIO management fees cover strategy, setup, creative management, and optimization. Advertising spend is not included in any package price.',
  },
  {
    id: 'does-hawar-studio-use-ai-for-everything',
    category: 'Ads & Strategy',
    question: 'Does Hawar Studio use AI for everything?',
    answer:
      'No. AI makes us faster, and people make the decisions. Strategy, scripts and final review are always led by humans.',
  },
  {
    id: 'can-hawar-studio-guarantee-viral-results',
    category: 'Ads & Strategy',
    question: 'Can Hawar Studio guarantee viral results?',
    answer:
      'No studio can honestly guarantee virality. We commit to a clear strategy, consistent quality and honest monthly reporting.',
  },
  {
    id: 'does-hawar-studio-build-or-fix-websites',
    category: 'Overview & Services',
    question: 'Does Hawar Studio build or fix websites?',
    answer:
      'No. We do not offer website development. We can run a website audit on request, but we do not fix or build sites.',
  },
  {
    id: 'what-is-tofu-mofu-and-bofu',
    category: 'Ads & Strategy',
    question: 'What is TOFU, MOFU and BOFU?',
    answer:
      'TOFU, MOFU and BOFU stand for top, middle and bottom of the funnel. Top content attracts new people, middle content builds trust, and bottom content turns interested people into customers. Our Thrive plan includes a full funnel plan.',
  },
  {
    id: 'where-is-hawar-studio-based-and-who-founded-it',
    category: 'Overview & Services',
    question: 'Where is Hawar Studio based and who founded it?',
    answer:
      'Hawar Studio is based in Cantt, Sialkot District, Punjab, Pakistan, serving clients locally and worldwide, and was founded by Warda Khawaja, Social Media Growth Strategist and Creative Director.',
  },
  {
    id: 'what-are-your-payment-terms',
    category: 'Plans & Pricing',
    question: 'What are your payment terms?',
    answer:
      'We take a 50% advance payment to confirm your slot, begin strategic research, and initiate creative production. The remaining 50% is due upon milestone or monthly delivery.',
  },
  {
    id: 'how-do-we-start',
    category: 'Plans & Pricing',
    question: 'How do we start?',
    answer:
      'Click "Book a free call." We will talk about your goals and tell you honestly whether we are the right fit.',
  },
];

export const PLAN_COMPARISON_ROWS = [
  {
    feature: 'Core Deliverables',
    grow: '15 Reels + 5 Carousels + 15 Stories',
    thrive: '20 Reels + 10 Carousels + 30 Stories',
    partner: '30 Reels + 15 Carousels + Exclusive Stories',
  },
  {
    feature: 'Platforms Covered',
    grow: 'TikTok, Facebook, Instagram',
    thrive: 'TikTok, Facebook, Instagram, YouTube',
    partner: 'TikTok, Facebook, Instagram, YouTube, LinkedIn, Pinterest',
  },
  {
    feature: 'Strategy & Direction',
    grow: 'Content calendar & pillar alignment',
    thrive: 'Full TOFU / MOFU / BOFU funnel strategy',
    partner: 'Personalized strategy & tailored creative direction',
  },
  {
    feature: 'Content Planning',
    grow: 'Monthly scheduled pipeline',
    thrive: 'Priority creative testing & ad setups',
    partner: 'Flexible planning based on brand growth & ongoing optimization',
  },
  {
    feature: 'Publishing & Engagement',
    grow: 'Posting, scheduling & community replies',
    thrive: 'Full management & community nurturing',
    partner: 'Full multi-platform presence management',
  },
  {
    feature: 'Meta Ads Management',
    grow: 'Available as optional add-on',
    thrive: 'Included strategy & ad creative production',
    partner: 'End-to-end performance scaling',
  },
  {
    feature: 'Exclusivity & Capacity',
    grow: 'Standard agency workflow',
    thrive: 'High-touch priority support',
    partner: 'Strictly limited to 1 client per niche',
  },
  {
    feature: 'Commitment Period',
    grow: '3-month minimum',
    thrive: '3-month minimum',
    partner: '3-month minimum',
  },
  {
    feature: 'Payment Terms',
    grow: '50% advance payment',
    thrive: '50% advance payment',
    partner: '50% advance payment',
  },
];
