import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import { portfolioProjects } from "../../portfolio/projects";
import { fetchOpenGraphMetadata } from "../../utils/linkMetadata";
import ProjectPageClient, {
  type ProjectSerialized,
  type ProjectResultSerialized,
} from "./ProjectPageClient";

type Params = { slug: string };
type MaybePromise<T> = T | Promise<T>;

function resultIconKey(icon: unknown): ProjectResultSerialized["iconKey"] {
  if (icon === TrendingUp) return "trendingUp";
  if (icon === Users) return "users";
  if (icon === DollarSign) return "dollarSign";
  return "dollarSign";
}

function serializeProject(
  project: (typeof portfolioProjects)[number],
  linkMeta?: ProjectSerialized["linkMeta"],
): ProjectSerialized {
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    description: project.description,
    overview: project.overview,
    whatWeDid: project.whatWeDid,
    results: project.results.map((r) => ({
      label: r.label,
      value: r.value,
      iconKey: resultIconKey(r.icon),
    })),
    technologies: project.technologies,
    image: project.image,
    websiteUrl: project.websiteUrl,
    linkMeta,
  };
}

export function generateStaticParams(): Params[] {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: MaybePromise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project" };
  }

  return {
    title: `${project.title} | Project`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: MaybePromise<Params>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const linkMeta = project.websiteUrl
    ? await fetchOpenGraphMetadata(project.websiteUrl)
    : undefined;

  return <ProjectPageClient project={serializeProject(project, linkMeta)} />;
}
