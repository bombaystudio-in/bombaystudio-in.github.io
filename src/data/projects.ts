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
    ],
    "clientReview": {
      "name": "Anchor - Mayuri Malandkar",
      "image": "/testimonials/anchor-mayuri-malandkar.jpg",
      "occupation": "Media Anchor",
      "quote": "Working with Bombay Studio was a very smooth experience. We didn’t have to follow up on every small thing, whether it was material selection, design decisions, or work updates. The team managed everything well and kept things moving on time. It made the entire process stress-free for us, and we’re really happy with the final result!"
    }
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
    ],
    "clientReview": {
      "name": "Adv. Mitesh Pabari",
      "image": "/testimonials/adv-mitesh-pabari.jpg",
      "occupation": "Advocate",
      "quote": "Choosing Bombay Studio for our interior work was a good decision. The team understood our requirements and made the whole process smooth. Architect Aakhir Choudhary was helpful and guided us whenever we needed support. We are happy with how everything turned out!"
    }
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
    ],
    "clientReview": {
      "name": "Adv. Praveen Singh",
      "image": "/testimonials/adv-praveen-singh.jpg",
      "occupation": "Advocate",
      "quote": "Bombay Studio did a wonderful job understanding our needs and turning our ideas into reality. The team was helpful, and everything was explained clearly at every stage. Architect Aakhir Choudhary made sure the work was planned well. Overall, a smooth and satisfying experience!"
    }
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
    ],
    "clientReview": {
      "name": "Actress - Isha & Vikas Talwar",
      "image": "/testimonials/actress-isha-vikas-talwar.jpg",
      "occupation": "Celebrity Homeowners",
      "quote": "Honestly, the whole experience with Bombay Studio was quite smooth. We had a lot of things to manage, but the team took care of most of the details, from selecting materials to getting the work done. We didn’t have to keep chasing people for updates, which made things much easier for us. We’re really happy with our home and the way everything came together!"
    }
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
    ],
    "clientReview": {
      "name": "Actress Adrija Sinha",
      "image": "/testimonials/actress-adrija-sinha.jpg",
      "occupation": "Actress",
      "quote": "Bombay Studio made our home look beautiful and comfortable, just the way we wanted. The team was patient with our suggestions and helped us make the right choices. The overall experience was smooth, and we are really happy with the final outcome!"
    }
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
    ],
    "clientReview": {
      "name": "Swaraj Singh",
      "image": "/testimonials/swaraj-singh-producer.jpg",
      "occupation": "Film Producer",
      "quote": "Bombay Studio did a great job with our interiors. The team was friendly, understood our requirements, and was always ready to help with our suggestions. The work was done with good attention to detail, and we are really happy with how our space has turned out!"
    }
  },
  {
    "id": "heena-khan-3bhk-miraroad",
    "name": "Heena Khan Residence",
    "typology": "3BHK",
    "category": "3BHK",
    "location": "Mira Road, Mumbai",
    "photoCount": 11,
    "images": [
      "/projects/heena-khan-3bhk-miraroad/photo-01.png",
      "/projects/heena-khan-3bhk-miraroad/photo-02.png",
      "/projects/heena-khan-3bhk-miraroad/photo-03.png",
      "/projects/heena-khan-3bhk-miraroad/photo-04.png",
      "/projects/heena-khan-3bhk-miraroad/photo-05.png",
      "/projects/heena-khan-3bhk-miraroad/photo-06.png",
      "/projects/heena-khan-3bhk-miraroad/photo-07.png",
      "/projects/heena-khan-3bhk-miraroad/photo-08.png",
      "/projects/heena-khan-3bhk-miraroad/photo-09.png",
      "/projects/heena-khan-3bhk-miraroad/photo-10.png",
      "/projects/heena-khan-3bhk-miraroad/photo-11.png"
    ],
    "clientReview": {
      "name": "Satish Pawar",
      "image": "/testimonials/satish-pawar.png",
      "occupation": "Verified Homeowner",
      "quote": "My experience with Bombay Studio was really good. The team was helpful, understood our needs, and made sure the work was done properly. They were always available to discuss our ideas and suggestions. Overall, happy with the work and the way everything was handled!"
    }
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
    ],
    "clientReview": {
      "name": "Chintan Shah",
      "image": "/testimonials/chintan-shah.jpg",
      "occupation": "Homeowner",
      "quote": "Bombay Studio made the entire interior work much easier for us. From planning and material selection to the final finishing, everything was handled in a well-organised way. We didn’t have to get involved in every small detail, and the team kept things moving smoothly. Overall, it was a great experience working with them!"
    }
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
    ],
    "clientReview": {
      "name": "Dharmesh Dixit",
      "image": "/testimonials/dharmesh-dixit.jpg",
      "occupation": "Homeowner",
      "quote": "One thing we really liked about working with Bombay Studio was the timely handover. The team planned the work properly and kept things moving without unnecessary delays. Whenever we had any questions, they were available to help. The entire process was well managed, and we’re happy with the quality of the work!"
    }
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
    ],
    "clientReview": {
      "name": "Hardit Malhi",
      "image": "/testimonials/hardit-malhi.jpg",
      "occupation": "Homeowner",
      "quote": "Really happy with the work done by Bombay Studio. The team was supportive, easy to communicate with, and always ready to help with our ideas. They paid attention to the small details and made the space look beautiful. Overall, a very good experience!"
    }
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
    "walkthroughVideo": "/projects/yash-jain-3bhk-charni-road/walkthrough.mp4",
    "clientReview": {
      "name": "Rohit Pathak",
      "image": "/testimonials/rohit-pathak.jpg",
      "occupation": "Homeowner",
      "quote": "What I liked most about Bombay Studio was the way they handled the entire project. We got proper guidance at every stage, and the team helped us make decisions without any confusion. The work was well coordinated, and the finishing was done nicely. Overall, a smooth experience and a result we’re happy with!"
    }
  }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return PROJECTS_DATA.map((p) => p.id);
}
