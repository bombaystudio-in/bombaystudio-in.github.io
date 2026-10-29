export interface Project {
  id: string;
  name: string;
  typology: "4BHK" | "3BHK" | "2BHK";
  category: "4BHK" | "3BHK" | "2BHK";
  location: string;
  photoCount: number;
  images: string[];
  walkthroughVideo?: string;
  clientReview?: {
    name: string;
    quote: string;
    image?: string;
    occupation?: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    "id": "ajinkya-kamble-4bhk-kandivali",
    "name": "Ajinkya Kamble Residence",
    "typology": "4BHK",
    "category": "4BHK",
    "location": "Kandivali, Mumbai",
    "photoCount": 17,
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
      "image": "/testimonials/ajinkya-kamble.jpg",
      "occupation": "Verified Homeowner",
      "quote": "Bombay Studio did a great job with our home interiors. The team was helpful, listened to our ideas, and made sure everything was done properly. Architect Aakhir Choudhary guided us well throughout the process. Really happy with the final result!"
    }
  },
  {
    "id": "amey-chavan-3bhk-andheri",
    "name": "Amey Chavan Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Andheri, Mumbai",
    "photoCount": 9,
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
    ]
  },
  {
    "id": "amit-ranka-3bhk-vileparle",
    "name": "Amit Ranka Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Vile Parle, Mumbai",
    "photoCount": 12,
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
    ]
  },
  {
    "id": "arunima-panchal-4bhk-mulund",
    "name": "Arunima Panchal Residence",
    "typology": "4BHK",
    "category": "4BHK",
    "location": "Mulund, Mumbai",
    "photoCount": 12,
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
    ]
  },
  {
    "id": "ashwini-dingare-4bhk-sewri",
    "name": "Ashwini Dingare Residence",
    "typology": "4BHK",
    "category": "4BHK",
    "location": "Sewri, Mumbai",
    "photoCount": 16,
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
    ]
  },
  {
    "id": "dr-sunil-mhatre-3bhk-wadala",
    "name": "Dr. Sunil Mhatre Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Wadala, Mumbai",
    "photoCount": 25,
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
    ]
  },
  {
    "id": "gautam-trivedi-3bhk-bandra",
    "name": "Gautam Trivedi Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Bandra, Mumbai",
    "photoCount": 18,
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
    ]
  },
  {
    "id": "jayant-joshi-2bhk-vileparle",
    "name": "Jayant Joshi Residence",
    "typology": "2BHK",
    "category": "2BHK",
    "location": "Vile Parle, Mumbai",
    "photoCount": 11,
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
      "name": "Jayant Joshi",
      "image": "/testimonials/jayant-joshi.jpg",
      "occupation": "Verified Homeowner",
      "quote": "Had a really good experience with Bombay Studio. The team understood what we wanted and helped us at every step. The work was completed nicely, and the final result looks even better than we expected. Happy with the overall experience!"
    }
  },
  {
    "id": "nitin-pendbhaje-3bhk-goregaon",
    "name": "Nitin Pendbhaje Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Goregaon, Mumbai",
    "photoCount": 13,
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
    ]
  },
  {
    "id": "ujesh-shetty-3bhk-hiranandani-powai",
    "name": "Ujesh Shetty Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Hiranandani Powai, Mumbai",
    "photoCount": 8,
    "images": [
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-01.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-02.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-03.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-04.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-05.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-06.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-07.jpg",
      "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-08.jpg"
    ]
  },
  {
    "id": "vaibhav-beriwal-2bhk-malad",
    "name": "Vaibhav Beriwal Residence",
    "typology": "2BHK",
    "category": "2BHK",
    "location": "Malad, Mumbai",
    "photoCount": 13,
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
    ]
  },
  {
    "id": "yash-jain-3bhk-charni-road",
    "name": "Yash Jain Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Charni Road, Mumbai",
    "photoCount": 7,
    "images": [
      "/projects/yash-jain-3bhk-charni-road/photo-01.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-02.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-03.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-04.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-05.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-06.jpg",
      "/projects/yash-jain-3bhk-charni-road/photo-07.jpg"
    ],
    "walkthroughVideo": "/projects/yash-jain-3bhk-charni-road/walkthrough.mp4"
  }
];


export function getProjectById(id: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return PROJECTS_DATA.map((p) => p.id);
}
