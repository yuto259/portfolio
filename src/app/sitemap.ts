import type { MetadataRoute } from "next";
import { projects, shouldShowProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/experience", "/about", "/skills"];
  const projectRoutes = shouldShowProjects
    ? ["/projects", ...projects.map((project) => `/projects/${project.slug}`)]
    : [];

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
