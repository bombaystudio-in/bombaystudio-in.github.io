"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { Project } from "@/data/projects";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Home,
  Images,
  Play,
  Quote,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  X,
  Maximize2,
} from "lucide-react";

interface ProjectDetailViewProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectDetailView({
  project,
  prevProject,
  nextProject,
}: ProjectDetailViewProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = project.images;
  const activeImage = images[activePhotoIdx] || images[0];

  const nextPhoto = useCallback(() => {
    setActivePhotoIdx((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevPhoto = useCallback(() => {
    setActivePhotoIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation for carousel & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPhoto, prevPhoto]);

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Top Breadcrumb & Project Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-[#D4AF37] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Quick Project Switcher */}
        <div className="flex items-center gap-3 text-xs">
          <Link
            href={`/projects/${prevProject.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#D4AF37]/50 transition-colors"
            title={`Previous: ${prevProject.name}`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Previous Project</span>
          </Link>
          <span className="text-[#A1A1AA]/40 font-mono text-[11px]">|</span>
          <Link
            href={`/projects/${nextProject.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#D4AF37]/50 transition-colors"
            title={`Next: ${nextProject.name}`}
          >
            <span className="hidden sm:inline">Next Project</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Project Title Header - Clean Without Redundant Badges */}
      <div className="space-y-3 max-w-4xl">
        <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-semibold">
          Turnkey Interior Architecture Case Study
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {project.name}
        </h1>

        <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed max-w-2xl">
          Complete turnkey interior architecture executed by Bombay Studio under Principal Architect Ar. Aakhir Choudhary.
        </p>
      </div>

      {/* Primary Media Stage - Maximum View & Progressive Hover Disclosure */}
      <div className="space-y-3">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[58svh] sm:max-h-[66svh] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl group select-none">
          {isVideoMode && project.walkthroughVideo ? (
            <video
              src={project.walkthroughVideo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <Image
                src={activeImage}
                alt={`${project.name} - Photo ${activePhotoIdx + 1}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover cursor-pointer transition-all duration-700 filter contrast-105"
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none opacity-60" />

              {/* Chevrons on Main Frame (Visible on Hover) */}
              {images.length > 1 && (
                <div className="absolute inset-y-0 inset-x-3 sm:inset-x-6 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevPhoto();
                    }}
                    className="pointer-events-auto p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextPhoto();
                    }}
                    className="pointer-events-auto p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              )}

              {/* Fullscreen Lightbox Trigger */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                title="Open Fullscreen Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Photo Index Counter */}
              <div className="absolute bottom-4 right-4 sm:right-6 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono text-[#D4AF37] border border-white/10 font-semibold">
                  Photo {String(activePhotoIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </div>

              {/* Progressive Disclosure Dock: Reveals Thumbnails ONLY on Hover */}
              <div className="absolute bottom-4 left-4 right-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 max-w-fit scrollbar-none">
                  {images.map((imgSrc, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoMode(false);
                        setActivePhotoIdx(imgIdx);
                      }}
                      className={`relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        activePhotoIdx === imgIdx
                          ? "border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/30"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                      title={`Jump to photo ${imgIdx + 1}`}
                    >
                      <Image src={imgSrc} alt="" fill sizes="48px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Media Tour Switcher (if video available) */}
        {project.walkthroughVideo && (
          <div className="flex items-center justify-end pt-1">
            <button
              onClick={() => setIsVideoMode((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                isVideoMode
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20"
                  : "bg-[#121212] text-[#D4AF37] border-[#D4AF37]/40 hover:border-[#D4AF37]"
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isVideoMode ? "Back to Photo View" : "Watch Walkthrough Video Tour"}</span>
            </button>
          </div>
        )}
      </div>

      {/* Architectural Specifications Grid - Single Authoritative Source */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0F0F0F] border border-white/10">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Typology</span>
          </p>
          <p className="text-white font-serif font-bold text-base sm:text-lg">
            {project.typology} Project
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Location</span>
          </p>
          <p className="text-white font-serif font-bold text-base sm:text-lg">
            {project.location}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Documentation</span>
          </p>
          <p className="text-white font-serif font-bold text-base sm:text-lg">
            {project.photoCount} Actual Photos
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Execution Model</span>
          </p>
          <p className="text-[#D4AF37] font-serif font-bold text-base sm:text-lg">
            Complete Turnkey
          </p>
        </div>
      </div>

      {/* Contextual Testimonial Section (Exclusive to the Project Page) */}
      {project.clientReview && (
        <section className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 border border-[#D4AF37]/40 shadow-2xl bg-gradient-to-br from-[#0F0F0F] via-[#050505] to-[#121008]">
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#D4AF37] w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Client Portrait & Credentials */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl p-1 bg-gradient-to-br from-[#D4AF37] to-[#FCF6BA]/40 shadow-xl shrink-0">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  {project.clientReview.image ? (
                    <Image
                      src={project.clientReview.image}
                      alt={project.clientReview.name}
                      fill
                      sizes="128px"
                      className="object-cover object-top filter contrast-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#18181B] text-[#D4AF37] font-serif text-2xl font-bold">
                      {project.clientReview.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                  <h2 className="font-serif font-bold text-white text-lg sm:text-xl">
                    {project.clientReview.name}
                  </h2>
                  {project.clientReview.occupation && (
                    <span className="text-[10px] font-mono text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                      {project.clientReview.occupation}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Client · {project.name}
                </p>
                <p className="text-[11px] text-[#D4AF37] font-mono mt-1 flex items-center gap-1 justify-center sm:justify-start">
                  <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                  <span>Verified Turnkey Handover</span>
                </p>
              </div>
            </div>

            {/* Right: Testimonial Quote */}
            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-[#D4AF37]/40" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20 font-semibold">
                  Client Handover Review
                </span>
              </div>

              <blockquote className="font-serif text-lg sm:text-2xl text-white font-light italic leading-relaxed">
                &quot;{project.clientReview.quote}&quot;
              </blockquote>

              <p className="text-xs text-[#A1A1AA] font-light">
                Direct feedback shared following successful site completion and key handover in {project.location}.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div>
              <p className="font-serif font-bold text-sm sm:text-base">{project.name}</p>
              <p className="text-xs text-[#A1A1AA]">
                Photo {activePhotoIdx + 1} of {images.length}
              </p>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Image Container */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`${project.name} Fullscreen Photo ${activePhotoIdx + 1}`}
              className="max-h-[82svh] max-w-full object-contain rounded-lg shadow-2xl select-none"
            />

            {/* Nav Chevrons */}
            {images.length > 1 && (
              <div className="absolute inset-x-2 sm:inset-x-8 flex items-center justify-between pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="pointer-events-auto p-3 sm:p-4 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="pointer-events-auto p-3 sm:p-4 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white border border-white/20 transition-all backdrop-blur-md cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>

          {/* Lightbox Footer Thumbnail Bar */}
          <div
            className="flex items-center justify-center gap-2 overflow-x-auto py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIdx(idx)}
                className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border transition-all ${
                  activePhotoIdx === idx
                    ? "border-[#D4AF37] scale-110 shadow-md shadow-[#D4AF37]/30"
                    : "border-white/10 opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={thumb} alt="" fill sizes="48px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Conversion & Studio Consultation Banner */}
      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
          Planning an Interior Transformation in <span className="gold-gradient-text">{project.location}?</span>
        </h2>
        <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
          Book a site walkthrough and design consultation with Ar. Aakhir Choudhary to discuss your layout, materials, and turnkey estimation.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            onClick={() => trackEvent("click_consultation", "lead_action", "project_detail_bottom")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-full"
          >
            <span>Book Design Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+917070704181"
            onClick={() => trackEvent("click_call", "lead_action", "project_detail_bottom")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#121212] text-white border border-white/15 text-xs font-semibold hover:border-[#D4AF37] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Studio Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
}
