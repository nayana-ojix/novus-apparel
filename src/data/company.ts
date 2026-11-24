export interface OfficeLocation {
  city: string;
  country: string;
  role: string;
  address: string[];
  phones?: string[];
  emails?: string[];
  coordinates: { lat: number; lng: number };
  status: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  qualification: string;
  bio: string[];
  specialties: string[];
  image: string;
}

export interface TechnologyPartner {
  name: string;
  country: string;
  specialty: string;
  description: string;
  metric: string;
}

export interface ProductMaterial {
  title: string;
  category: string;
  tagline: string;
  specs: string[];
  description: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "NOVUS APPAREL",
  legalName: "Novus Apparel Limited",
  parentGroup: "Sri Dhanalakshmi Group",
  parentGroupEst: 1971,
  groupTurnoverUSD: "160 Million",
  tagline: "Engineering Excellence. Creating Comfort.",
  subTagline: "Technology to Complement Comfort.",
  mission:
    "To provide seamless vertical apparel solutions from technical fabric research and engineering to end garments, empowering global brands through sustainable technology and peerless precision.",
  vision:
    "To lead the global textile ecosystem through science-backed innovation, international partnerships, ethical accountability, and responsible green manufacturing.",
  coreValues: [
    {
      title: "Respect for People",
      description:
        "Every stakeholder, artisan, partner, and client is treated with dignity, fairness, and mutual professional respect.",
    },
    {
      title: "Ethical Behaviour",
      description:
        "Transparent supply chains, strict compliance, fair labor standards, and uncompromising integrity in every deal.",
    },
    {
      title: "Commitment",
      description:
        "From raw fiber to retail floor, we fulfill our promises in lead time, product durability, and design fidelity.",
    },
    {
      title: "Sustainable Technology",
      description:
        "Harmonizing industrial productivity with ecological responsibility via green wind energy and clean chemistry.",
    },
    {
      title: "Leadership",
      description:
        "Setting benchmark standards in vertical integration, advanced material blends, and cross-border agility.",
    },
  ],
  motto: "MAKE A DIFFERENCE.",
};

export const LEADERSHIP_PROFILES: LeadershipMember[] = [
  {
    name: "Chandrasekhar Vallabhaneni",
    role: "Co-Founder & Managing Director",
    qualification: "B.Tech in Textile Technology",
    bio: [
      "Chandrasekhar brings more than two decades of senior executive experience spanning vertical apparel manufacturing, international exports, global sales strategy, marketing communications, and corporate profit-center governance.",
      "Under his leadership, Novus Apparel expanded its operational footprint across continents, pioneering high-efficiency manufacturing pipelines and strategic cross-border partnerships connecting South Asia, East Asia, and the Americas.",
    ],
    specialties: [
      "Global Supply Chain Orchestration",
      "Textile Manufacturing Operations",
      "International Trade & Export Logistics",
      "Strategic Profit-Center Governance",
    ],
    image: "/images/founders/chaand.jpg",
  },
  {
    name: "Mohmad Noorulla",
    role: "Co-Founder & Technical Director",
    qualification: "M.Tech in Textile Technology",
    bio: [
      "Mohmad Noorulla is a distinguished textile engineering authority with deep mastery across yarn development, fabric merchandising, and technical product R&D. He previously served as Vice President of Technical & Product Development.",
      "Recognizing the critical importance of localized raw material sourcing and polymer-fiber innovations in East Asia, he established Newwell Textiles in China, catalyzing Novus's specialized fabric sourcing, greige goods development, and technical material leadership.",
    ],
    specialties: [
      "Textile Engineering & Polymer Science",
      "Advanced Greige & Fabric Development",
      "China & East Asia Sourcing Architecture",
      "Performance Finish Formulations",
    ],
    image: "/images/founders/noor.jpg",
  },
];

export const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    city: "Bangalore",
    country: "India",
    role: "Global Headquarters & Commercial Hub",
    address: [
      "Novus Apparel Limited",
      "#23, Siva Arcade (3rd Floor), 29th Main",
      "1st Cross, 1st Stage, BTM Layout",
      "Bangalore - 560068, Karnataka, India",
    ],
    phones: ["+91 99808 12727"],
    emails: ["chaand@novusapparels.com", "vasanthkumar@novusapparels.com"],
    coordinates: { lat: 12.9166, lng: 77.6101 },
    status: "Operational HQ & Design Studio",
  },
  {
    city: "North Brunswick",
    country: "United States",
    role: "Americas Client Relations & Sourcing Liaison",
    address: [
      "Novus Apparel Limited",
      "Suite #1, 825 Georges Rd",
      "North Brunswick, NJ - 08902",
      "United States of America",
    ],
    phones: ["+1 (732) 825-9000"],
    emails: ["chaand@novusapparels.com"],
    coordinates: { lat: 40.4573, lng: -74.4846 },
    status: "Americas Strategic Office",
  },
  {
    city: "Shanghai",
    country: "China",
    role: "Technical Sourcing & Fabric R&D Center",
    address: [
      "Novus Apparel Limited / Newwell Textiles",
      "Room #1109, Yuzhou Plaza #299, Jingang Road",
      "Pudong New District",
      "Shanghai - 201206, China",
    ],
    phones: ["+86-021-68970132", "+86-021-68970139"],
    emails: ["chaand@novusapparels.com"],
    coordinates: { lat: 31.2304, lng: 121.4737 },
    status: "R&D & Material Sourcing Center",
  },
];

export const MANUFACTURING_HUBS = [
  {
    country: "India",
    flag: "🇮🇳",
    capabilities: "Integrated spinning, sizing, weaving, apparel manufacturing & green wind power",
    highlights: "Direct integration with Sri Dhanalakshmi Group facilities (est. 1971)",
  },
  {
    country: "China",
    flag: "🇨🇳",
    capabilities: "Technical fabric sourcing, polymer innovation & specialized greige development",
    highlights: "Led by Newwell Textiles in Pudong, Shanghai",
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    capabilities: "High-volume sporting goods assembly & performance lifestyle outerwear",
    highlights: "Optimized duty-free export corridors and technical garmenting",
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    capabilities: "Large-scale woven shirt, bottom-weight & structured garment manufacturing",
    highlights: "High-capacity certified manufacturing lines",
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
    capabilities: "Duty-free duty-advantaged apparel exports to North American brands",
    highlights: "Fast-turnaround supply channels for US retailers",
  },
  {
    country: "Ethiopia",
    flag: "🇪🇹",
    capabilities: "Sustainable eco-industrial manufacturing with clean hydroelectric power",
    highlights: "Competitive global cost-basis & modern manufacturing parks",
  },
];

export const PRODUCT_COLLECTIONS: ProductMaterial[] = [
  {
    title: "Renaissance™ Collection",
    category: "Signature Concept & Performance",
    tagline: "Technology to Complement Comfort",
    specs: ["Micro-polyester Blends", "Dual-Core Stretch", "Rapid Moisture Dispersal", "Shape Retention"],
    description:
      "Renaissance represents our pinnacle synergy between technical textile physics and everyday human comfort. Designed for apparel lifestyle and sporting goods leaders who demand featherweight breathability, superior recovery, and elegant tactile hand-feel.",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Greige & Engineered Bottom-Weights",
    category: "Woven & Structured Textiles",
    tagline: "High-Durability Foundations for Modern Tailoring",
    specs: ["100% Cotton Twills", "TC (Tetoron-Cotton)", "PR Fabrics", "Structured Dobbies"],
    description:
      "Precision-woven bottom-weight greige and finished textiles engineered for luxury trousers, casual bottoms, and refined workwear. Developed with controlled shrinkage, abrasion resistance, and deep pigment stability.",
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Shirt-Weight & Yarn-Dyed Fabrics",
    category: "Shirting & Fine Weaves",
    tagline: "Artisanal Elegance with Modern Performance",
    specs: ["High-Count Compact Cotton", "Viscose Blends", "Silken Luster", "Wrinkle-Resist Finish"],
    description:
      "Engineered from high-twist compact combed yarns with exquisite yarn-dyed patterns and flawless piece-dyeings. Formulated for executive menswear, contemporary luxury womenswear, and modern lifestyle shirting.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sporting Goods & Active Performance",
    category: "Technical Activewear",
    tagline: "Engineered Kinetics for Peak Movement",
    specs: ["Dual-Core Elasticity", "Antimicrobial Silver Ions", "Hydrophilic Wicking", "Thermal Regulation"],
    description:
      "High-performance textiles formulated specifically for global athletic and lifestyle sporting brands. Tested for dynamic friction reduction, stretch longevity, and high-frequency wash stability.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: "Wind Mill Renewable Energy",
    subtitle: "Powered by Nature",
    stat: "100%",
    statLabel: "Wind-assisted clean energy generation through Sri Dhanalakshmi Group infrastructure",
    description:
      "The Sri Dhanalakshmi Group operates dedicated wind energy facilities, delivering captive green power across our primary spinning, sizing, and weaving units in India, mitigating heavy industrial carbon footprints.",
  },
  {
    title: "Clean Chemistry & Safe Dyes",
    subtitle: "Eco-Conscious Processing",
    stat: "Zero",
    statLabel: "Compromise on hazardous discharge standards",
    description:
      "Our dyeing and finishing facilities implement rigorous closed-loop liquor ratios, non-toxic auxiliary chemistry, and modern effluent treatment protocols compliant with leading international apparel brand guidelines.",
  },
  {
    title: "Sustainable Raw Material Sourcing",
    subtitle: "Fiber Integrity",
    stat: "1971",
    statLabel: "Legacy of agricultural and textile stewardship",
    description:
      "From certified organic and sustainably cultivated cotton to recycled poly filaments and natural viscose blends, we prioritize fibers that reduce soil degradation and fossil-fuel reliance.",
  },
  {
    title: "Ethical Human Capital",
    subtitle: "People-First Manufacturing",
    stat: "100%",
    statLabel: "Adherence to fair wages, dignified workplaces, and safety",
    description:
      "Governed by our core value 'Respect for People', Novus enforces transparent, audited labor practices, zero child labor, ergonomic work conditions, and ongoing technical upskilling.",
  },
];
