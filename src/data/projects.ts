export interface Project {
  id: string;
  name: string;
  typology: string;
  category: "Luxury Homes" | "Apartments" | "Villas" | "Office" | "Retail" | "Restaurants" | "Clinic" | "Salon";
  location: string;
  area: string;
  budget: string;
  timeline: string;
  scopeOfWork: string;
  designStyle: string;
  materialPalette: string[];
  afterImage: string;
  beforeImage: string;
  render3DImage: string;
  completedImage: string;
  images: string[];
  walkthroughVideo?: string;
  clientReview: {
    name: string;
    role: string;
    quote: string;
    rating: number;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    "id": "ajinkya-kamble-4bhk-kandivali",
    "name": "Ajinkya Kamble Residence",
    "typology": "4BHK Luxury Handover",
    "category": "Luxury Homes",
    "location": "Kandivali West, Mumbai",
    "area": "2,200 sq.ft.",
    "budget": "\u20b942 Lakhs",
    "timeline": "90 Days",
    "scopeOfWork": "Complete 4BHK Turnkey Interior, Italian Marble Joinery, Wall Relief Sculptures & Custom Fluted Paneling",
    "designStyle": "Modern Organic Luxe",
    "materialPalette": [
      "Italian Botticino Marble",
      "Custom Relief Feature Wall",
      "Charcoal Fluted Panels",
      "Warm Brushed Gold"
    ],
    "afterImage": "/projects/ajinkya-kamble-4bhk-kandivali/photo-01.jpg",
    "beforeImage": "/projects/ajinkya-kamble-4bhk-kandivali/photo-02.jpg",
    "render3DImage": "/projects/ajinkya-kamble-4bhk-kandivali/photo-03.jpg",
    "completedImage": "/projects/ajinkya-kamble-4bhk-kandivali/photo-04.jpg",
    "images": [
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-01.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-02.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-03.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-04.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-05.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-06.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-07.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-08.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-09.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-10.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-11.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-12.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-13.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-14.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-15.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-16.jpg",
      "/projects/ajinkya-kamble-4bhk-kandivali/photo-17.jpg"
    ],
    "clientReview": {
      "name": "Ajinkya Kamble",
      "role": "4BHK Homeowner, Kandivali",
      "quote": "Bombay Studio did a great job with our home interiors. The team was helpful, listened to our ideas, and made sure everything was done properly. Architect Aakhir Choudhary guided us well throughout the process. Really happy with the final result!",
      "rating": 5
    }
  },
  {
    "id": "gautam-trivedi-3bhk-bandra",
    "name": "Gautam Trivedi Residence",
    "typology": "3BHK Luxury Handover",
    "category": "Luxury Homes",
    "location": "Bandra West, Mumbai",
    "area": "1,750 sq.ft.",
    "budget": "\u20b938 Lakhs",
    "timeline": "85 Days",
    "scopeOfWork": "Heritage-Meets-Modern Turnkey Design, Bespoke TV Unit, Bar Counter & Master Bedroom Suite",
    "designStyle": "Art Deco Modern Fusion",
    "materialPalette": [
      "Burma Teak Details",
      "Travertine Marble",
      "Fluted Louvers",
      "Custom Brass Hardware"
    ],
    "afterImage": "/projects/gautam-trivedi-3bhk-bandra/photo-01.jpg",
    "beforeImage": "/projects/gautam-trivedi-3bhk-bandra/photo-02.jpg",
    "render3DImage": "/projects/gautam-trivedi-3bhk-bandra/photo-03.jpg",
    "completedImage": "/projects/gautam-trivedi-3bhk-bandra/photo-04.jpg",
    "images": [
      "/projects/gautam-trivedi-3bhk-bandra/photo-01.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-02.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-03.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-04.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-05.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-06.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-07.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-08.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-09.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-10.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-11.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-12.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-13.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-14.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-15.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-16.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-17.jpg",
      "/projects/gautam-trivedi-3bhk-bandra/photo-18.jpg"
    ],
    "clientReview": {
      "name": "Gautam Trivedi",
      "role": "3BHK Homeowner, Bandra West",
      "quote": "Bandra living requires thoughtful space management; Bombay Studio delivered an absolute showstopper. The custom bar counter and woodwork are masterpieces.",
      "rating": 5
    }
  },
  {
    "id": "ashwini-dingare-4bhk-sewri",
    "name": "Ashwini Dingare Residence",
    "typology": "4BHK Sea-View Handover",
    "category": "Luxury Homes",
    "location": "Sewri, South Mumbai",
    "area": "2,350 sq.ft.",
    "budget": "\u20b946 Lakhs",
    "timeline": "95 Days",
    "scopeOfWork": "High-Rise Panoramic Living Concept, Master Suite Dressing, Civil Modifications & Turnkey Finishing",
    "designStyle": "Grand Contemporary Luxe",
    "materialPalette": [
      "Imported Italian Marble",
      "Acoustic Fabric Headboards",
      "Fluted Glass Partitions",
      "PU Duco Finish"
    ],
    "afterImage": "/projects/ashwini-dingare-4bhk-sewri/photo-01.jpg",
    "beforeImage": "/projects/ashwini-dingare-4bhk-sewri/photo-02.jpg",
    "render3DImage": "/projects/ashwini-dingare-4bhk-sewri/photo-03.jpg",
    "completedImage": "/projects/ashwini-dingare-4bhk-sewri/photo-04.jpg",
    "images": [
      "/projects/ashwini-dingare-4bhk-sewri/photo-01.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-02.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-03.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-04.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-05.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-06.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-07.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-08.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-09.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-10.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-11.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-12.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-13.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-14.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-15.jpg",
      "/projects/ashwini-dingare-4bhk-sewri/photo-16.jpg"
    ],
    "clientReview": {
      "name": "Ashwini Dingare",
      "role": "4BHK Homeowner, Sewri",
      "quote": "A stunning transformation that maximized our sea views and created a tranquil, opulent living space. Handover was punctual and seamless.",
      "rating": 5
    }
  },
  {
    "id": "dr-sunil-mhatre-3bhk-wadala",
    "name": "Dr. Sunil Mhatre Residence",
    "typology": "3BHK Highrise Handover",
    "category": "Apartments",
    "location": "Wadala, Mumbai",
    "area": "1,600 sq.ft.",
    "budget": "\u20b932 Lakhs",
    "timeline": "80 Days",
    "scopeOfWork": "Aesthetic & Functional Interior Architecture, Concealed Storage Solutions & Modular Kitchen",
    "designStyle": "Warm Biophilic Modernism",
    "materialPalette": [
      "Light Oak Veneer",
      "Anti-Microbial Quartz",
      "Micro-Perforated Acoustic Ceilings",
      "Warm 3000K LEDs"
    ],
    "afterImage": "/projects/dr-sunil-mhatre-3bhk-wadala/photo-01.jpg",
    "beforeImage": "/projects/dr-sunil-mhatre-3bhk-wadala/photo-02.jpg",
    "render3DImage": "/projects/dr-sunil-mhatre-3bhk-wadala/photo-03.jpg",
    "completedImage": "/projects/dr-sunil-mhatre-3bhk-wadala/photo-04.jpg",
    "images": [
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-01.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-02.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-03.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-04.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-05.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-06.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-07.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-08.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-09.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-10.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-11.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-12.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-13.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-14.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-15.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-16.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-17.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-18.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-19.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-20.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-21.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-22.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-23.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-24.jpg",
      "/projects/dr-sunil-mhatre-3bhk-wadala/photo-25.jpg"
    ],
    "clientReview": {
      "name": "Dr. Sunil Mhatre",
      "role": "3BHK Homeowner, Wadala",
      "quote": "Ar. Aakhir Choudhary gave our home a calming, therapeutic atmosphere with flawless craftsmanship. We receive endless compliments from every guest.",
      "rating": 5
    }
  },
  {
    "id": "ujesh-shetty-3bhk-hiranandani-powai",
    "name": "Ujesh Shetty Residence",
    "typology": "3BHK Luxury Handover",
    "category": "Luxury Homes",
    "location": "Hiranandani Gardens, Powai",
    "area": "1,800 sq.ft.",
    "budget": "\u20b936 Lakhs",
    "timeline": "80 Days",
    "scopeOfWork": "Neoclassical Modern Interiors, European Cornice Mouldings, Fluted Kitchen & Luxury Bathrooms",
    "designStyle": "Neoclassical Modern Glamour",
    "materialPalette": [
      "White Statuario Marble",
      "Polyurethane Lacquer",
      "Tinted Mirror Paneling",
      "Brass Trims"
    ],
    "afterImage": "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-01.jpg",
    "beforeImage": "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-02.jpg",
    "render3DImage": "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-03.jpg",
    "completedImage": "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-04.jpg",
    "images": [
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-01.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-02.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-03.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-04.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-05.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-06.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-07.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-08.jpg"
    ],
    "clientReview": {
      "name": "Ujesh Shetty",
      "role": "3BHK Homeowner, Powai",
      "quote": "Captures the grand European vibe of Hiranandani while keeping modern ergonomics top of mind. The moulding details and finishes are exquisite.",
      "rating": 5
    }
  },
  {
    "id": "jayant-joshi-2bhk-vileparle",
    "name": "Jayant Joshi Residence",
    "typology": "2BHK Compact Handover",
    "category": "Apartments",
    "location": "Vile Parle East, Mumbai",
    "area": "950 sq.ft.",
    "budget": "\u20b919 Lakhs",
    "timeline": "60 Days",
    "scopeOfWork": "Smart Compact Living, Space-Maximizing Storage, Open-Plan Living & Dining, False Ceiling",
    "designStyle": "Modern Clean Minimalist",
    "materialPalette": [
      "High-Gloss Acrylic",
      "BWP Marine Plywood",
      "Concealed Profile Lighting",
      "Soft Grey Vitrified Flooring"
    ],
    "afterImage": "/projects/jayant-joshi-2bhk-vileparle/photo-01.jpg",
    "beforeImage": "/projects/jayant-joshi-2bhk-vileparle/photo-02.jpg",
    "render3DImage": "/projects/jayant-joshi-2bhk-vileparle/photo-03.jpg",
    "completedImage": "/projects/jayant-joshi-2bhk-vileparle/photo-04.jpg",
    "images": [
      "/projects/jayant-joshi-2bhk-vileparle/photo-01.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-02.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-03.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-04.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-05.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-06.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-07.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-08.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-09.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-10.jpg",
      "/projects/jayant-joshi-2bhk-vileparle/photo-11.jpg"
    ],
    "clientReview": {
      "name": "Mr. Jayant Joshi",
      "role": "2BHK Homeowner, Vile Parle",
      "quote": "Had a really good experience with Bombay Studio. The team understood what we wanted and helped us at every step. The work was completed nicely, and the final result looks even better than we expected. Happy with the overall experience!",
      "rating": 5
    }
  },
  {
    "id": "arunima-panchal-4bhk-mulund",
    "name": "Arunima Panchal Residence",
    "typology": "4BHK Luxury Handover",
    "category": "Luxury Homes",
    "location": "Mulund West, Mumbai",
    "area": "2,100 sq.ft.",
    "budget": "\u20b939 Lakhs",
    "timeline": "85 Days",
    "scopeOfWork": "Spacious Living Room Feature Wall, Custom Dining Credenza, 4 Bedrooms Fitout & Designer Ceilings",
    "designStyle": "Sophisticated Modern Luxury",
    "materialPalette": [
      "Statuario Quartz",
      "Champagne Gold Accents",
      "Acoustic Wall Paneling",
      "Premium Veneers"
    ],
    "afterImage": "/projects/arunima-panchal-4bhk-mulund/photo-01.jpg",
    "beforeImage": "/projects/arunima-panchal-4bhk-mulund/photo-02.jpg",
    "render3DImage": "/projects/arunima-panchal-4bhk-mulund/photo-03.jpg",
    "completedImage": "/projects/arunima-panchal-4bhk-mulund/photo-04.jpg",
    "images": [
      "/projects/arunima-panchal-4bhk-mulund/photo-01.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-02.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-03.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-04.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-05.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-06.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-07.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-08.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-09.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-10.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-11.jpg",
      "/projects/arunima-panchal-4bhk-mulund/photo-12.jpg"
    ],
    "clientReview": {
      "name": "Arunima Panchal",
      "role": "4BHK Homeowner, Mulund",
      "quote": "The team understood our aesthetic vision flawlessly and delivered impeccable finishing across all 4 bedrooms and the living lounge.",
      "rating": 5
    }
  },
  {
    "id": "amey-chavan-3bhk-andheri",
    "name": "Amey Chavan Residence",
    "typology": "3BHK Modern Handover",
    "category": "Apartments",
    "location": "Andheri West, Mumbai",
    "area": "1,450 sq.ft.",
    "budget": "\u20b928 Lakhs",
    "timeline": "75 Days",
    "scopeOfWork": "Complete Turnkey Execution, Living Room Wall Treatment, Custom Plywood Joinery & Master Bedroom Suite",
    "designStyle": "Contemporary Warm Minimalist",
    "materialPalette": [
      "Natural Walnut Veneer",
      "PU Matte Laminates",
      "Profile Light Diffusers",
      "BWP Marine Plywood"
    ],
    "afterImage": "/projects/amey-chavan-3bhk-andheri/photo-01.jpg",
    "beforeImage": "/projects/amey-chavan-3bhk-andheri/photo-02.jpg",
    "render3DImage": "/projects/amey-chavan-3bhk-andheri/photo-03.jpg",
    "completedImage": "/projects/amey-chavan-3bhk-andheri/photo-04.jpg",
    "images": [
      "/projects/amey-chavan-3bhk-andheri/photo-01.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-02.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-03.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-04.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-05.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-06.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-07.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-08.jpg",
      "/projects/amey-chavan-3bhk-andheri/photo-09.jpg"
    ],
    "clientReview": {
      "name": "Amey Chavan",
      "role": "3BHK Homeowner, Andheri West",
      "quote": "Bombay Studio executed our 3BHK with excellent craftsmanship and attention to detail. Every inch of storage was optimized perfectly.",
      "rating": 5
    }
  },
  {
    "id": "amit-ranka-3bhk-vileparle",
    "name": "Amit Ranka Residence",
    "typology": "3BHK Sleek Handover",
    "category": "Apartments",
    "location": "Vile Parle East, Mumbai",
    "area": "1,380 sq.ft.",
    "budget": "\u20b926 Lakhs",
    "timeline": "70 Days",
    "scopeOfWork": "Full Turnkey Renovation, Designer False Ceiling Grid, Ambient Cove Lighting & Custom Wardrobes",
    "designStyle": "Modern Sleek Contemporary",
    "materialPalette": [
      "Engineered Quartz",
      "Tinted Glass Shutters",
      "PU Lacquer",
      "Brushed Gold Trims"
    ],
    "afterImage": "/projects/amit-ranka-3bhk-vileparle/photo-01.jpg",
    "beforeImage": "/projects/amit-ranka-3bhk-vileparle/photo-02.jpg",
    "render3DImage": "/projects/amit-ranka-3bhk-vileparle/photo-03.jpg",
    "completedImage": "/projects/amit-ranka-3bhk-vileparle/photo-04.jpg",
    "images": [
      "/projects/amit-ranka-3bhk-vileparle/photo-01.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-02.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-03.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-04.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-05.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-06.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-07.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-08.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-09.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-10.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-11.jpg",
      "/projects/amit-ranka-3bhk-vileparle/photo-12.jpg"
    ],
    "clientReview": {
      "name": "Amit Ranka",
      "role": "3BHK Homeowner, Vile Parle",
      "quote": "Seamless turnkey execution without having to run after contractors. Ar. Aakhir and the team delivered a gorgeous home within budget.",
      "rating": 5
    }
  },
  {
    "id": "nitin-pendbhaje-3bhk-goregaon",
    "name": "Nitin Pendbhaje Residence",
    "typology": "3BHK Urban Handover",
    "category": "Apartments",
    "location": "Goregaon East, Mumbai",
    "area": "1,400 sq.ft.",
    "budget": "\u20b927 Lakhs",
    "timeline": "75 Days",
    "scopeOfWork": "Turnkey Joinery, Integrated Work-from-Home Desk, Master Wardrobe Wall & Designer Living Room",
    "designStyle": "Urban Functional Contemporary",
    "materialPalette": [
      "Matte Laminates",
      "Brushed Black Handles",
      "Textured Wall Plaster",
      "Warm Timber Finishes"
    ],
    "afterImage": "/projects/nitin-pendbhaje-3bhk-goregaon/photo-01.jpg",
    "beforeImage": "/projects/nitin-pendbhaje-3bhk-goregaon/photo-02.jpg",
    "render3DImage": "/projects/nitin-pendbhaje-3bhk-goregaon/photo-03.jpg",
    "completedImage": "/projects/nitin-pendbhaje-3bhk-goregaon/photo-04.jpg",
    "images": [
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-01.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-02.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-03.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-04.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-05.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-06.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-07.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-08.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-09.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-10.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-11.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-12.jpg",
      "/projects/nitin-pendbhaje-3bhk-goregaon/photo-13.jpg"
    ],
    "clientReview": {
      "name": "Nitin Pendbhaje",
      "role": "3BHK Homeowner, Goregaon",
      "quote": "Practical, durable, and elegant design executed with strict adherence to the committed budget. A stress-free experience from day one.",
      "rating": 5
    }
  },
  {
    "id": "vaibhav-beriwal-2bhk-malad",
    "name": "Vaibhav Beriwal Residence",
    "typology": "2BHK Scandi Handover",
    "category": "Apartments",
    "location": "Malad West, Mumbai",
    "area": "1,050 sq.ft.",
    "budget": "\u20b921 Lakhs",
    "timeline": "65 Days",
    "scopeOfWork": "Full Turnkey Renovation, Customized TV Feature Wall, Space-Saving Sliding Wardrobes & Modular Kitchen",
    "designStyle": "Warm Scandinavian Minimalist",
    "materialPalette": [
      "Light Ash Wood",
      "Seamless Quartz Counter",
      "Soft Ambient Backlighting",
      "Matt Acrylic"
    ],
    "afterImage": "/projects/vaibhav-beriwal-2bhk-malad/photo-01.jpg",
    "beforeImage": "/projects/vaibhav-beriwal-2bhk-malad/photo-02.jpg",
    "render3DImage": "/projects/vaibhav-beriwal-2bhk-malad/photo-03.jpg",
    "completedImage": "/projects/vaibhav-beriwal-2bhk-malad/photo-04.jpg",
    "images": [
      "/projects/vaibhav-beriwal-2bhk-malad/photo-01.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-02.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-03.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-04.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-05.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-06.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-07.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-08.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-09.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-10.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-11.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-12.jpg",
      "/projects/vaibhav-beriwal-2bhk-malad/photo-13.jpg"
    ],
    "clientReview": {
      "name": "Vaibhav Beriwal",
      "role": "2BHK Homeowner, Malad",
      "quote": "Exceptional value and transparent execution. Handover was stress-free and completed on time without surprise costs.",
      "rating": 5
    }
  },
  {
    "id": "yash-jain-3bhk-charni-road",
    "name": "Yash Jain Residence",
    "typology": "3BHK Heritage Handover",
    "category": "Apartments",
    "location": "Charni Road, South Mumbai",
    "area": "1,500 sq.ft.",
    "budget": "\u20b931 Lakhs",
    "timeline": "75 Days",
    "scopeOfWork": "South Bombay Classic Modernization, Soundproof Double-Glazed Windows, Full Joinery & Walkthrough Video Execution",
    "designStyle": "South Mumbai Classic Contemporary",
    "materialPalette": [
      "Natural Polished Veneer",
      "Italian Marble Inlays",
      "Fluted Glass Partitions",
      "Concealed Lighting"
    ],
    "afterImage": "/projects/yash-jain-3bhk-charni-road/photo-01.jpg",
    "beforeImage": "/projects/yash-jain-3bhk-charni-road/photo-02.jpg",
    "render3DImage": "/projects/yash-jain-3bhk-charni-road/photo-03.jpg",
    "completedImage": "/projects/yash-jain-3bhk-charni-road/photo-04.jpg",
    "images": [
      "/projects/yash-jain-3bhk-charni-road/photo-01.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-02.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-03.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-04.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-05.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-06.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-07.jpg"
    ],
    "walkthroughVideo": "/projects/yash-jain-3bhk-charni-road/walkthrough.mp4",
    "clientReview": {
      "name": "Yash Jain",
      "role": "3BHK Homeowner, Charni Road",
      "quote": "Renovating in South Mumbai can be logistically challenging; Bombay Studio handled everything with complete finesse and on-time delivery.",
      "rating": 5
    }
  }
];
