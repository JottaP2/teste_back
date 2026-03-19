import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a RocketJR para desenvolver seu site, e-commerce ou solução digital personalizada.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato - RocketJR | Soluções Digitais e Desenvolvimento Web",
    description: "Fale com a RocketJR e tire seu projeto digital do papel.",
    url: "/contato",
    type: "website",
  },
};

export default function ContatoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
