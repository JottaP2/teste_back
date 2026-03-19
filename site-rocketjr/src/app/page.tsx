import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Clientes from "@/components/sections/Clientes";
import QuemSomos from "@/components/sections/QuemSomos";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Início - RocketJR | Soluções Digitais e Desenvolvimento Web",
  description:
    "Conheça a RocketJR: Empresa Júnior de Sistemas de Informação da UFAL especializada em desenvolvimento web, e-commerce e soluções digitais.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Início - RocketJR | Soluções Digitais e Desenvolvimento Web",
    description:
      "Conheça os serviços da RocketJR em desenvolvimento web, e-commerce, transformação digital e análise de dados.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />

      <ScrollReveal delayMs={120}>
        <Clientes />
      </ScrollReveal>

      <ScrollReveal delayMs={160}>
        <QuemSomos />
      </ScrollReveal>
    </main>
  );
}
