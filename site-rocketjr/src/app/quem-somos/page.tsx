import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LogoRocketHeroDark from "@/assets/logos/logo-rocket-hero-dark.svg";
import LogoRocketHeroLight from "@/assets/logos/Logo-rocket-hero-light.svg";
import FotoAlmej2025 from "@/assets/images/foto-almej-2025.webp";
import FotoBandeiraRocket from "@/assets/images/foto-bandeira-rocket.webp";
import FotoMascotesEJ from "@/assets/images/foto-mascote-ej.webp";
import FotoMembrosCorredor from "@/assets/images/foto-membros-corredor.webp";
import FotoMembrosRocket from "@/assets/images/foto-membros-rocket.webp";
import FotoGuerrilha2025 from "@/assets/images/foto-guerrilha-2025.webp";
import FotoGuerrilha from "@/assets/images/foto-guerrilha.webp";
import FotoLegado from "@/assets/images/foto-legado.webp";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a trajetória da RocketJR, Empresa Júnior de Sistemas de Informação da UFAL, e os projetos que marcaram nossa história.",
  alternates: {
    canonical: "/quem-somos",
  },
  openGraph: {
    title: "Quem Somos - RocketJR | Soluções Digitais e Desenvolvimento Web",
    description:
      "História, equipe e trajetória da RocketJR em soluções digitais e inovação.",
    url: "/quem-somos",
    type: "website",
  },
};

export default function QuemSomos() {
  return (

    <section className="bg-white dark:bg-black flex flex-col items-center justify-center">
    
      <section className="flex flex-col items-center justify-center">
        <div className="w-full py-8 sm:py-12 flex items-center justify-center">
          <Image
            src={LogoRocketHeroDark}
            alt="Logo Rocket - tema escuro"
            width={400}
            height={160}
            priority
            className="mx-auto w-full max-w-56 md:max-w-72 lg:max-w-80 h-auto hidden dark:block"
          />

          <Image
            src={LogoRocketHeroLight}
            alt="Logo Rocket - tema claro"
            width={400}
            height={160}
            priority
            className="mx-auto w-full max-w-56 md:max-w-72 lg:max-w-80 h-auto block dark:hidden"
          />
        </div>

        <div className="w-10/12 md:w-11/12 py-20 flex items-center justify-center max-w-7xl">
          <p className="text-justify md:text-center text-xs md:text-xl font-light md:font-medium">
            A Rocket Júnior (RJR) é a Empresa Júnior do curso de Sistemas de Informação do Campus Arapiraca – Unidade Educacional Penedo. Somos um time de estudantes apaixonados por tecnologia e inovação, que aplicam na prática os conhecimentos adquiridos em sala de aula para desenvolver soluções digitais para o mercado. Nosso principal objetivo é proporcionar aos nossos membros uma experiência empresarial real, preparando-os para os desafios do mercado de trabalho e impulsionando suas carreiras!
          </p>
        </div>

      </section>

     
      <section className="flex flex-col justify-center items-center py-15px w-full">
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-1 p-4 sm:p-1">
            
            <div className="flex justify-center items-center p-2">
              <Image
                src={FotoAlmej2025}
                alt="Almej 2025"
                width={435}
                height={279}
                priority
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 435px"
              />
            </div>

            <div className="flex justify-center items-center p-2">
              <Image
                src={FotoMembrosCorredor}
                alt="Foto dos membros no corredor"
                width={240}
                height={320}
                loading="lazy"
                sizes="(max-width: 768px) 36vw, 240px"
                className="w-[155px] h-auto md:w-[240px]"
              />
            </div>

            <div className="flex justify-center items-center p-2 col-span-2">
              <Image
                src={FotoLegado}
                alt="Legado Rocket"
                width={450}
                height={279}
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 55vw, 450px"
                className="rounded-md"
              />
            </div>

             <div className="flex justify-center items-center p-2">
              <Image
                src={FotoGuerrilha}
                alt="Guerrilha"
                width={240}
                height={320}
                loading="lazy"
                sizes="(max-width: 768px) 45vw, 240px"
                className="rounded-md"
              />
            </div>


            <div className="flex justify-center items-center p-2">
              <Image
                src={FotoBandeiraRocket}
                alt="Bandeira da Rocket"
                width={190}
                height={297}
                loading="lazy"
                sizes="(max-width: 768px) 34vw, 190px"
                className="w-[144px] h-auto md:w-[190px]"
              />
            </div>

            <div className="flex justify-center items-center p-2">
              <Image
                src={FotoMascotesEJ}
                alt="Mascotes EJ"
                width={458}
                height={229}
                loading="lazy"
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 458px"
              />
            </div>

            <div className="hidden md:flex justify-center items-center p-2 col-span-2">
              <Image
                src={FotoMembrosRocket}
                alt="Membros Rocket JR"
                width={350}
                height={334}
                loading="lazy"
                sizes="(max-width: 1024px) 55vw, 350px"
              />
            </div>

            <div className="hidden md:flex justify-center items-center p-2 ">
              <Image
                src={FotoGuerrilha2025}
                alt="Guerrilha 2025"
                width={262}
                height={168}
                loading="lazy"
                sizes="262px"
                className="rounded-md"
              />
            </div>

          </div>
        </div>
      </section>



      <section className="mt-8 container mx-auto px-4 py-8">
        
        <div className="flex py-10 flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Nossa Trajetória</h1>
        </div>

        <div className="relative">
     
          <div className="md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0 border-l-2 border-dashed border-[#D9D9D9]"/>

          <ScrollReveal>
            <div className="mb-16 relative">
              <div className="flex flex-row items-center">
                <div className="w-1/2 pr-[8%] text-right">
                  <h3 className="text-6 md:text-xl font-bold dark:text-[#E7E7E7]">Aplicação Do Formulário PNDL 2024</h3>
                  <div className="text-sm font-medium text-[#990000] mt-1">Out - Nov 2024</div>
                  <p className="mt-3 text-xs font-light md:font-medium md:text-base dark:text-[#E7E7E7]">Pesquisa e ligações para as escolas do Brasil para levantamento de dados e identificação de necessidades.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-10 h-10 md:w-18 md:h-18 rounded-full border-2 border-[#FF0000] border-dashed flex items-center justify-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#FF0000]"/>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>



          <ScrollReveal delayMs={70}>
            <div className="mb-16 relative">
              <div className="flex flex-row justify-end items-center">
                <div className="w-1/2 pl-[8%] text-left">
                  <h3 className="text-6 md:text-xl font-bold dark:text-[#E7E7E7]">SisWeek 2024</h3>
                  <div className="text-sm font-medium text-[#990000] mt-1">Abr 2024</div>
                  <p className="mt-3 text-xs font-light md:font-medium md:text-base dark:text-[#E7E7E7]">Participação na Semana de Sistemas de Informação com apresentação de projetos e desenvolvimento de aplicação web.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-10 h-10 md:w-18 md:h-18 rounded-full border-2 dark:border-[#FFFFFF] border-dashed flex items-center justify-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full  bg-black dark:bg-[#FFFFFF]"/>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>


          <ScrollReveal delayMs={110}>
            <div className="mb-16 relative">
              <div className="flex flex-row items-center">
                <div className="w-1/2 pr-[8%] text-right">
                  <h3 className="text-6 md:text-xl font-bold dark:text-[#E7E7E7]">Fundação da Rocket Jr</h3>
                  <div className="text-sm font-medium text-[#990000] mt-1">Jan 2024</div>
                  <p className="mt-3 text-xs font-light md:font-medium md:text-base dark:text-[#E7E7E7]">Criação oficial da empresa júnior do curso de Sistemas de Informação, com definição de missão, visão e valores.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-10 h-10 md:w-18 md:h-18 rounded-full border-2 border-[#FF0000] border-dashed flex items-center justify-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#FF0000]"/>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>


          <ScrollReveal delayMs={150}>
            <div className="mb-16 relative">
              <div className="flex flex-row justify-end items-center pb-40">
                <div className="w-1/2 pl-[8%] text-left">
                  <h3 className="text-6 md:text-xl font-bold dark:text-[#E7E7E7]">Primeiro Projeto Comercial</h3>
                  <div className="text-sm font-medium text-[#990000] mt-1">Mar 2024</div>
                  <p className="mt-3 text-xs font-light md:font-medium md:text-base dark:text-[#E7E7E7]">Desenvolvimento do primeiro projeto comercial, consolidando a entrada da Rocket Jr no mercado de tecnologia.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-10 h-10 md:w-18 md:h-18 rounded-full border-2 dark:border-[#FFFFFF] border-dashed flex items-center justify-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-black dark:bg-[#FFFFFF]"/>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          
        </div>
      </section>
    </section>

  );
}