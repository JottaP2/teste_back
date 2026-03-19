import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rocketjr.com.br";
  const now = new Date();

  const routes = [
    "/",
    "/quem-somos",
    "/e-commerce",
    "/dados",
    "/transformacao-digital",
    "/solucoes-digitais",
    "/decisoes-tecnologicas",
    "/contato",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
