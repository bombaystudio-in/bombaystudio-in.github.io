"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import CarouselControls from "./CarouselControls";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Actress - Isha & Vikas Talwar",
      text: "Honestly, the whole experience with Bombay Studio was quite smooth. We had a lot of things to manage, but the team took care of most of the details, from selecting materials to getting the work done. We didn’t have to keep chasing people for updates, which made things much easier for us. We’re really happy with our home and the way everything came together!",
      image: "/testimonials/actress-isha-vikas-talwar.jpg",
    },
    {
      name: "Actress Adrija Sinha",
      text: "Bombay Studio made our home look beautiful and comfortable, just the way we wanted. The team was patient with our suggestions and helped us make the right choices. The overall experience was smooth, and we are really happy with the final outcome!",
      image: "/testimonials/actress-adrija-sinha.jpg",
    },
    {
      name: "Adv. Mitesh Pabari",
      text: "Choosing Bombay Studio for our interior work was a good decision. The team understood our requirements and made the whole process smooth. Architect Aakhir Choudhary was helpful and guided us whenever we needed support. We are happy with how everything turned out!",
      image: "/testimonials/adv-mitesh-pabari.jpg",
    },
    {
      name: "Adv. Praveen Singh",
      text: "Bombay Studio did a wonderful job understanding our needs and turning our ideas into reality. The team was helpful, and everything was explained clearly at every stage. Architect Aakhir Choudhary made sure the work was planned well. Overall, a smooth and satisfying experience!",
      image: "/testimonials/adv-praveen-singh.jpg",
    },
    {
      name: "Ajinkya Kamble",
      text: "Bombay Studio did a great job with our home interiors. The team was helpful, listened to our ideas, and made sure everything was done properly. Architect Aakhir Choudhary guided us well throughout the process. Really happy with the final result!",
      image: "/testimonials/ajinkya-kamble.jpg",
    },
    {
      name: "Anchor - Mayuri Malandkar",
      text: "Working with Bombay Studio was a very smooth experience. We didn’t have to follow up on every small thing, whether it was material selection, design decisions, or work updates. The team managed everything well and kept things moving on time. It made the entire process stress-free for us, and we’re really happy with the final result!",
      image: "/testimonials/anchor-mayuri-malandkar.jpg",
    },
    {
      name: "Chintan Shah",
      text: "Bombay Studio made the entire interior work much easier for us. From planning and material selection to the final finishing, everything was handled in a well-organised way. We didn’t have to get involved in every small detail, and the team kept things moving smoothly. Overall, it was a great experience working with them!",
      image: "/testimonials/chintan-shah.jpg",
    },
    {
      name: "Dharmesh Dixit",
      text: "One thing we really liked about working with Bombay Studio was the timely handover. The team planned the work properly and kept things moving without unnecessary delays. Whenever we had any questions, they were available to help. The entire process was well managed, and we’re happy with the quality of the work!",
      image: "/testimonials/dharmesh-dixit.jpg",
    },
    {
      name: "Hardit Malhi",
      text: "Really happy with the work done by Bombay Studio. The team was supportive, easy to communicate with, and always ready to help with our ideas. They paid attention to the small details and made the space look beautiful. Overall, a very good experience!",
      image: "/testimonials/hardit-malhi.jpg",
    },
    {
      name: "Jayant Joshi",
      text: "Had a really good experience with Bombay Studio. The team understood what we wanted and helped us at every step. The work was completed nicely, and the final result looks even better than we expected. Happy with the overall experience!",
      image: "/testimonials/jayant-joshi.jpg",
    },
    {
      name: "Kirti Sakhpara",
      text: "What we liked most about Bombay Studio was how they helped us at every stage. From choosing materials to finalising the small details, the team made things simple for us. They understood our preferences, gave useful suggestions, and kept us updated about the progress. It was a comfortable experience, and we’re really happy with the final outcome!",
      image: "/testimonials/kirti-sakhpara.jpg",
    },
    {
      name: "Kishore Vichare",
      text: "What I liked about Bombay Studio was that the team took care of things without making us run around for every small detail. They helped us with material choices, gave practical suggestions, and kept the work organised. Communication was good, and the overall experience was smooth. Happy with the work done by the team!",
      image: "/testimonials/kishore-vichare.jpg",
    },
    {
      name: "Paulomi Sarkar",
      text: "Had a lovely experience with Bombay Studio. The team understood my ideas and helped me make the right choices for my home. Architect Aakhir Choudhary was supportive throughout the process, and the team paid attention to the little details. Really happy with the final outcome!",
      image: "/testimonials/paulomi-sarkar.jpg",
    },
    {
      name: "Prakash Desai",
      text: "Right from the beginning, the team at Bombay Studio was easy to work with. They understood our requirements, suggested good options, and helped us stay within our budget. We were kept informed about the progress, and whenever we needed anything, the team was there to help. Overall, a very satisfying experience!",
      image: "/testimonials/prakash-desai.jpg",
    },
    {
      name: "Rohit Pathak",
      text: "What I liked most about Bombay Studio was the way they handled the entire project. We got proper guidance at every stage, and the team helped us make decisions without any confusion. The work was well coordinated, and the finishing was done nicely. Overall, a smooth experience and a result we’re happy with!",
      image: "/testimonials/rohit-pathak.jpg",
    },
    {
      name: "Swaraj Singh - Producer",
      text: "Bombay Studio did a great job with our interiors. The team was friendly, understood our requirements, and was always ready to help with our suggestions. The work was done with good attention to detail, and we are really happy with how our space has turned out!",
      image: "/testimonials/swaraj-singh-producer.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-24 bg-[#050505] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Client <span className="gold-gradient-text">Feedback</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl font-light mt-1.5 mx-auto">
            Direct, authentic feedback from homeowners and clients across Mumbai.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {!isPaused && (
            <div
              key={currentIndex}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] animate-timer-progress w-full opacity-60"
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Client Portrait */}
            <div className="lg:col-span-4 relative aspect-[3/4] max-h-[30svh] sm:max-h-[35svh] w-auto mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 group shadow-xl bg-black flex items-center justify-center">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">
                  Verified Homeowner Story
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                  <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                  <span className="w-6 h-[1px] bg-[#D4AF37]/40" />
                  <span className="text-[#A1A1AA]">{String(testimonials.length).padStart(2, "0")}</span>
                </div>
              </div>

              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]/30" />

              <p className="text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed italic line-clamp-3">
                &quot;{current.text}&quot;
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                    {current.name}
                  </h3>
                  <p className="text-[11px] text-[#A1A1AA]">Completed Residence · Mumbai</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20 font-semibold">
                    Turnkey Handover ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls Below Section */}
        <CarouselControls
          isPaused={isPaused}
          onTogglePause={() => setIsPaused((prev) => !prev)}
          onPrev={prevTestimonial}
          onNext={nextTestimonial}
          prevLabel="Previous Review"
          nextLabel="Next Review"
        />
      </div>
    </section>
  );
}
