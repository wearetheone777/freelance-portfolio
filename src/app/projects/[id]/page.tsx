import { projects } from "@/data/projects";
import { ProjectDetail } from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProjectDetail params={params} />;
}
