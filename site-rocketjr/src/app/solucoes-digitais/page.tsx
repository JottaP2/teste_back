import type { Metadata } from "next";
import Image from "next/image";
import RaccoonMascoteRocket from "@/assets/icons/raccoon-mascote-rocket-jr.svg";

export const metadata: Metadata = {
  title: "Soluções Digitais",
  description:
    "Desenvolvemos soluções digitais sob medida para acelerar resultados e gerar valor real para o seu negócio.",
  alternates: {
    canonical: "/solucoes-digitais",
  },
  openGraph: {
    title: "Soluções Digitais - RocketJR | Soluções Digitais e Desenvolvimento Web",
    description:
      "Do conceito ao produto final, criamos soluções digitais de alto impacto.",
    url: "/solucoes-digitais",
    type: "website",
  },
};

export default function SolucoesDigitais() {
  return (
    <div className="relative min-h-screen lg:h-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-white dark:bg-black flex flex-col">

      <main className="w-full relative flex-1 flex flex-col z-10 pb-[300px] lg:pb-0">
        <section>
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white text-center py-12 lg:py-16">
                Soluções Digitais que Geram Resultado
                </h1>
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-5 md:px-8 lg:px-10">
          <div className="max-w-4xl relative lg:pl-10">
              <h2 className="text-xl lg:text-2xl italic text-black dark:text-white mb-6 lg:mb-8 text-center lg:text-left leading-relaxed">
                Transforme sua ideia em uma solução digital de alto impacto
                </h2>
              <p className="text-base lg:text-lg text-black dark:text-white leading-relaxed text-center lg:text-left">
                Do conceito ao produto final, criamos soluções digitais sob medida para acelerar resultados, escalar operações e gerar valor real para o seu negócio.
                </p>
            </div>
        </section>
        <div className="flex justify-center lg:pl-20 mt-8 lg:mt-10 w-full relative z-30">
            <button type="button" className="bg-gradient-to-r from-[#530101] via-[#750404] to-[#fd0404] text-white px-6 py-3 lg:px-10 lg:py-4 rounded-md font-bold uppercase tracking-widest text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">Quero vender mais</button>
        </div>
      </main>
      <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[250px] lg:left-auto lg:right-10 lg:translate-x-0 lg:w-[25vw] lg:max-w-[350px]">
          <Image
            src={RaccoonMascoteRocket}
            alt="Raccoon Mascote da RocketJR"
            width={350}
            height={350}
            loading="lazy"
            sizes="(max-width: 1024px) 60vw, 25vw"
            className="w-full h-auto block"
          />
      </div>
      <div className="pointer-events-none absolute z-0 rounded-full border-[#585A5C33] opacity-[0.30]  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] border-[40px] lg:top-[100%] lg:-translate-y-[50%] lg:w-[1200px] lg:h-[1200px] lg:border-[180px]" />
    </div>
  );
}