import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS_DATA, getProjectById, getAllProjectIds } from "@/data/projects";
import ProjectDetailView from "@/components/ProjectDetailView";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Residence Not Found | Bombay Studio Mumbai",
    };
  }

  const title = `${project.name} | ${project.typology} Completed Interior | Bombay Studio Mumbai`;
  const description = `View actual handover photography and specifications for ${project.name} (${project.typology}) located in ${project.location}. Turnkey execution by Bombay Studio & Ar. Aakhir Choudhary.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.images[0] || "/logo.png",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[projectIndex];
  const prevProject =
    PROJECTS_DATA[(projectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject =
    PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectDetailView
          project={project}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </div>
    </main>
  );
}
