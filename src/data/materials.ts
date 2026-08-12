export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  description: string;
  durability: string;
  bestFor: string;
  image: string;
}

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "veneer",
    name: "Natural Fluted Veneer",
    category: "Veneer",
    description: "Real wood slices offering organic texture, deep grain character, and natural warmth.",
    durability: "15+ Years (Refinishable)",
    bestFor: "Living Room Feature Walls & Accent Cabinetry",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pu-finish",
    name: "Ultra Matte PU Finish",
    category: "PU Finish",
    description: "Polyurethane coat providing fingerprint-resistant, seamless velvet-smooth surfaces.",
    durability: "20+ Years (Scratch Proof)",
    bestFor: "Modular Kitchen Cabinets & Wardrobe Doors",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "marble",
    name: "Italian Botticino Marble",
    category: "Marble",
    description: "Imported beige Italian marble with soft veining for timeless opulence.",
    durability: "Lifetime Investment",
    bestFor: "Main Living Flooring & Temple Podiums",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "quartz",
    name: "Statuario Engineered Quartz",
    category: "Quartz",
    description: "Stain and heat resistant non-porous surface mimicking high-grade Statuario marble.",
    durability: "25+ Years (Stain Proof)",
    bestFor: "Kitchen Countertops & Vanity Counters",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tiles",
    name: "Large Format Vitrified Slab Tiles",
    category: "Tiles",
    description: "8ft x 4ft seamless porcelain slabs creating continuous marble effect with minimal joints.",
    durability: "20+ Years",
    bestFor: "Bathroom Walls & Accent Columns",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lighting",
    name: "Architectural Magnetic Track Lighting",
    category: "Lighting",
    description: "Dimmable 2700K warm magnetic track lights with glare-free COB spotlights.",
    durability: "50,000 Hours LED Life",
    bestFor: "Ceilings, Art Illumination & Mood Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wallpaper",
    name: "Textured Linen & Metallic Wallpaper",
    category: "Wallpaper",
    description: "Breathable fabric-backed wallpapers with champagne gold leaf accents.",
    durability: "10+ Years",
    bestFor: "Master Bedroom Headboard Backdrop",
    image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "curtains",
    name: "100% Blackout Linen Drapes",
    category: "Curtains",
    description: "Motorized ripple-fold linen shears paired with acoustic blackout lining.",
    durability: "12+ Years",
    bestFor: "Double Height Living Windows & Bedrooms",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hardware",
    name: "Hafele / Blum Soft-Close Concealed Hardware",
    category: "Hardware",
    description: "German-engineered soft-close hinges, tandem boxes, and touch-to-open lifts.",
    durability: "1,000,000 Open Cycles",
    bestFor: "All Kitchen Drawers & Pantry Pull-Outs",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "laminate",
    name: "Anti-Fingerprint Acrylic Laminate",
    category: "Laminate",
    description: "Super-matte 1.5mm acrylic laminate resistant to scratches and household chemicals.",
    durability: "15+ Years",
    bestFor: "Kids Rooms & Utility Cabinets",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80",
  },
];
