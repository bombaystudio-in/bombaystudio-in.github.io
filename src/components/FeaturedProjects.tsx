"use client";

import { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { MapPin, Maximize2, IndianRupee, Clock, Layers, Star, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS_DATA[0]);
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
              Case Studies &amp; Proof of Execution
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Featured <span className="gold-gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-[#A1A1AA] text-sm max-w-md font-light">
            Real site transformations with complete transparency on budgets, square footage, timelines, materials, and client reviews.
          </p>
        </div>

        {/* Highlighted Master Project Case Study */}
        <div className="mb-16 rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Viewer */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-[280px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/15">
                <img
                  src={
                    activeTab === "after"
                      ? selectedProject.afterImage
                      : selectedProject.beforeImage
                  }
                  alt={selectedProject.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15">
                    {activeTab === "after" ? "Completed Site Photo" : "Raw Before Demolition"}
                  </span>
                </div>
              </div>

              {/* View Toggle Tabs */}
              <div className="flex items-center gap-3 p-1.5 rounded-xl bg-[#121212] border border-white/10">
                <button
                  onClick={() => setActiveTab("after")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "after"
                      ? "bg-[#D4AF37] text-[#050505] shadow-md font-bold"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  After (Completed Site)
                </button>
                <button
                  onClick={() => setActiveTab("before")}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "before"
                      ? "bg-[#D4AF37] text-[#050505] shadow-md font-bold"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  Before Site Photo
                </button>
              </div>
            </div>

            {/* Project Details & Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                  Featured Case Study
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#121212] border border-white/10 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <p className="text-[#A1A1AA]">Location</p>
                    <p className="text-white font-semibold">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <p className="text-[#A1A1AA]">Carpet Area</p>
                    <p className="text-white font-semibold">{selectedProject.area}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <IndianRupee className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <p className="text-[#A1A1AA]">Total Budget</p>
                    <p className="text-white font-semibold text-[#D4AF37]">{selectedProject.budget}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <div>
                    <p className="text-[#A1A1AA]">Execution Time</p>
                    <p className="text-white font-semibold">{selectedProject.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Style & Scope */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#A1A1AA]">Design Style: </span>
                  <span className="text-white font-medium">{selectedProject.designStyle}</span>
                </div>
                <div>
                  <span className="text-[#A1A1AA]">Material Palette: </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {selectedProject.materialPalette.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-[#1C1C1C] text-white border border-white/10"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Review */}
              <div className="p-4 rounded-xl bg-[#1C1C1C] border border-white/10 text-xs italic text-white">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <p>"{selectedProject.clientReview.quote}"</p>
                <p className="mt-2 text-[#D4AF37] font-semibold not-italic">
                  — {selectedProject.clientReview.name} ({selectedProject.clientReview.role})
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab("after");
              }}
              className={`cursor-pointer p-4 rounded-2xl bg-[#121212] border transition-all duration-300 group hover:-translate-y-1 ${
                selectedProject.id === project.id
                  ? "border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src={project.afterImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#050505]/80 backdrop-blur-sm text-white text-[11px] font-medium">
                  {project.category}
                </span>
              </div>

              <h4 className="font-bold text-white text-base mb-2 group-hover:text-[#D4AF37] transition-colors">
                {project.name}
              </h4>

              <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                <span>{project.location}</span>
                <span className="text-[#D4AF37] font-semibold">{project.budget}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
