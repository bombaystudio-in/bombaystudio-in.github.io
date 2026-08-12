export interface Project {
  id: string;
  name: string;
  category: "Luxury Homes" | "Apartments" | "Villas" | "Office" | "Retail" | "Restaurants" | "Clinic" | "Salon";
  location: string;
  area: string;
  budget: string;
  timeline: string;
  scopeOfWork: string;
  designStyle: string;
  materialPalette: string[];
  beforeImage: string;
  afterImage: string;
  render3DImage: string;
  completedImage: string;
  clientReview: {
    name: string;
    role: string;
    quote: string;
    rating: number;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "kalpataru-magnus",
    name: "Kalpataru Magnus Luxury 2BHK",
    category: "Apartments",
    location: "Bandra East, Mumbai",
    area: "1,100 sq.ft.",
    budget: "₹18 Lakhs",
    timeline: "90 Days",
    scopeOfWork: "Complete Turnkey Interior Design, Custom Joinery, Smart Lighting & Modular Kitchen",
    designStyle: "Modern Organic Minimalist",
    materialPalette: ["Italian Botticino Marble", "PU Matte Finish", "Fluted Veneer", "Warm Brushed Gold"],
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    render3DImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    completedImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    clientReview: {
      name: "Rohan & Priya Mehta",
      role: "Homeowners at Kalpataru Magnus",
      quote: "Bombay Studio transformed our empty apartment into a serene masterpiece. Handover was on the 89th day—exactly within our timeline and budget!",
      rating: 5,
    },
  },
  {
    id: "juhu-seafront-villa",
    name: "Juhu Seafront Grand Residence",
    category: "Villas",
    location: "Juhu, Mumbai",
    area: "4,500 sq.ft.",
    budget: "₹85 Lakhs",
    timeline: "150 Days",
    scopeOfWork: "Architectural Planning, Full Interior Execution, Custom Furniture & Terrace Lounge",
    designStyle: "Tropical Contemporary Luxury",
    materialPalette: ["Travertine Stone", "Walnut Veneer", "Custom Brass Accents", "Linen Wallcoverings"],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    render3DImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    completedImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    clientReview: {
      name: "Vikramaditya Singhania",
      role: "Villa Owner, Juhu",
      quote: "The level of detail in material selection and site management was world-class. Truly Bombay’s best turnkey team.",
      rating: 5,
    },
  },
  {
    id: "worli-sky-penthouse",
    name: "Worli Sea Face Sky Penthouse",
    category: "Luxury Homes",
    location: "Worli, Mumbai",
    area: "3,200 sq.ft.",
    budget: "₹55 Lakhs",
    timeline: "120 Days",
    scopeOfWork: "Living & Master Suite Revamp, Custom Italian Kitchen, Home Theater & Automation",
    designStyle: "Art Deco Modern Fusion",
    materialPalette: ["Statuario Quartz", "High-Gloss Lacquer", "Tinted Mirror", "Bouclé Fabric"],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    render3DImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    completedImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    clientReview: {
      name: "Dr. Ananya Merchant",
      role: "Penthouse Owner",
      quote: "Every guest who enters our living room is stunned by the seamless finish and lighting layout. Exceptional work!",
      rating: 5,
    },
  },
  {
    id: "lower-parel-fintech-hub",
    name: "Lower Parel Executive HQ",
    category: "Office",
    location: "Lower Parel, Mumbai",
    area: "2,800 sq.ft.",
    budget: "₹38 Lakhs",
    timeline: "60 Days",
    scopeOfWork: "Acoustic Partitioning, Executive Cabins, Ergonomic Workstations & Cafe Corner",
    designStyle: "Industrial Chic Ergonomic",
    materialPalette: ["Exposed Microcement", "Acoustic Felt", "Black Matte Metal", "Oak Wood"],
    beforeImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    render3DImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    completedImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    clientReview: {
      name: "Siddharth Kapoor",
      role: "Founder & CEO, Apex Fintech",
      quote: "Turnkey office execution in just 60 days without compromising on quality or acoustic standards.",
      rating: 5,
    },
  },
  {
    id: "bandra-artisan-cafe",
    name: "Bandra Pali Hill Culinary Bistro",
    category: "Restaurants",
    location: "Bandra West, Mumbai",
    area: "1,800 sq.ft.",
    budget: "₹32 Lakhs",
    timeline: "75 Days",
    scopeOfWork: "Facade Redesign, Ambient Bar Counter, Vintage Seating & Kitchen Ergonomics",
    designStyle: "Heritage Bombay Warmth",
    materialPalette: ["Terrazzo Tiles", "Rattan Cane", "Solid Teak", "Warm Amber Lighting"],
    beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    render3DImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    completedImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    clientReview: {
      name: "Chef Kabir Sen",
      role: "Owner, Veranda Bistro",
      quote: "Bombay Studio created a vibe that customers constantly post on Instagram. Best ROI on design!",
      rating: 5,
    },
  },
  {
    id: "khar-wellness-clinic",
    name: "Khar Aesthetics Clinic",
    category: "Clinic",
    location: "Khar West, Mumbai",
    area: "1,400 sq.ft.",
    budget: "₹24 Lakhs",
    timeline: "45 Days",
    scopeOfWork: "Reception Lounge, Consultation Rooms, Hygiene Surfaces & Soothing Lighting",
    designStyle: "Biophilic Calm Minimalism",
    materialPalette: ["Anti-bacterial Quartz", "Warm Beech Wood", "Hidden LED Diffusers"],
    beforeImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    render3DImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    completedImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    clientReview: {
      name: "Dr. Sunita Rao",
      role: "Chief Dermatologist",
      quote: "Patients always compliment how tranquil and reassuring the clinic atmosphere feels.",
      rating: 5,
    },
  },
];
