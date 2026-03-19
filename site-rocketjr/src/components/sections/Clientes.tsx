"use client";
import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import setaDireta from '@/assets/icons/seta-direita.svg';
import setaEsquerda from '@/assets/icons/seta-esquerda.svg';
import eduardoPalmeira from '@/assets/images/Eduardo_Palmeira_Section_Nossos_Clientes.webp';
import clinicaSallute from '@/assets/images/Clinica-Sallute_nossos-clientes.webp';
import oticaLorgil from '@/assets/images/Site-Otica-Lorgil_nossos_clientes.webp';
import linktreeRaquel from '@/assets/images/Linktree-Raquel-Paulina_nossos_clientes.webp';
import linktreeEduardo from '@/assets/images/Linktree-Eduardo-Palmeira_nossos_clientes.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const inter = Inter({ subsets: ['latin'] });

const clientes = [
  {
    id: 'eduardo-palmeira',
    nome: 'Eduardo Palmeira',
    descricao:
      'Desenvolvemos um site institucional com foco em autoridade e captação de leads no mercado imobiliário. Estruturamos páginas de serviços, imóveis e diferenciais de forma estratégica, priorizando clareza, credibilidade e conversão. A solução fortalece o posicionamento profissional e amplia as oportunidades de negócio no digital.',
    imagem: eduardoPalmeira,
    alt: 'Logo Eduardo Palmeira',
    link: 'https://eduardopalmeiracorretor.com.br/',
    loading: 'priority',
  },
  {
    id: 'clinica-sallute',
    nome: 'Clinica Sallute',
    descricao: 'Criamos uma presença digital profissional, transmitindo confiança, organização e cuidado. O projeto foi estruturado para apresentar especialidades, equipe e formas de contato de maneira objetiva e acessível. O resultado é um canal institucional que fortalece a credibilidade da marca e consolida sua autoridade no mercado da saúde.',
    imagem: clinicaSallute,
    alt: 'Logo Clinica Sallute',
    link: 'https://clinicasallute.com.br/',
    loading: 'priority',
  },
  {
    id: 'otica-lorgil',
    nome: 'Ótica Lorgil',
    descricao: 'Desenvolvemos um site catálogo para exposição estratégica de produtos, facilitando a visualização de armações e modelos disponíveis. A navegação foi pensada para ser simples, intuitiva e responsiva. A solução amplia a vitrine digital da marca e fortalece sua presença no mercado local.',
    imagem: oticaLorgil,
    alt: 'Logo Ótica Lorgil',
    link: 'https://oticalorgil.com.br/',
    loading: 'priority',
  }, {
    id: 'linktree-raquel',
    nome: 'Linktree Raquel Paulina',
    descricao: 'Desenvolvemos uma página estratégica para organizar canais de atendimento e fortalecer a presença digital profissional. O design prioriza sobriedade, clareza e credibilidade. A solução facilita o contato direto e melhora a experiência do usuário nas redes sociais.',
    imagem: linktreeRaquel,
    alt: 'Logo Linktree Raquel Paulina',
    link: 'https://raquelpaulinaadvogada.com.br/',
    width: 260,
    height: 110,
    loading: 'priority',

  }, {
    id: 'linktree-eduardo',
    nome: 'Linktree Eduardo Palmeira',
    descricao: 'Criamos uma página personalizada para centralizar contatos, imóveis e canais digitais em um único ambiente profissional. O layout foi desenvolvido para reforçar identidade visual e facilitar o direcionamento de potenciais clientes. Uma solução prática para otimizar conversões nas redes sociais.',
    imagem: linktreeEduardo,
    alt: 'Logo Linktree Eduardo Palmeira',
    link: 'https://links.eduardopalmeiracorretor.com.br/',
    width: 260,
    height: 110,
    loading: 'eager',
  }
];

export default function Clientes() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);

  useEffect(() => {
    if (shouldLoadCarousel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadCarousel(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '200px 0px',
        threshold: 0.01,
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, [shouldLoadCarousel]);

  return (
    <section ref={sectionRef} className="bg-white dark:bg-black px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10" id="clientes">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-black dark:text-white text-3xl sm:text-4xl font-extrabold mb-12 lg:mb-2">
          Nossos Clientes
        </h2>

        <div className="relative px-2 sm:px-8 lg:px-12">
          {shouldLoadCarousel ? (
            <>
              <button type="button" className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-6 ml-4">
                <Image src={setaEsquerda} alt="Anterior" width={32} height={32} />
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.swiper-prev',
                  nextEl: '.swiper-next',
                }}
                spaceBetween={32}
                slidesPerView={1}
                loop={true}
                className=""
              >
                {clientes.map((cliente, index) => (
                  <SwiperSlide key={cliente.id} className="h-full">
                    <div className="flex min-h-[720px] flex-col justify-between gap-8 px-2 sm:px-4 lg:px-8 md:min-h-[560px] md:flex-row md:items-center md:justify-between">
                      {/* Desktop */}
                      <div className="flex-1 hidden md:block">
                        <h2 className="text-black dark:text-white text-5xl font-thin">
                          {cliente.nome}
                        </h2>
                        <p className="mt-4 max-w-2xl text-justify text-lg text-gray-600 dark:text-gray-300">
                          {cliente.descricao}
                        </p>
                      </div>
                      <div className="hidden h-[360px] w-[420px] flex-shrink-0 items-center justify-center md:flex">
                        <a
                          href={cliente.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Acessar site de ${cliente.nome}`}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <Image
                            src={cliente.imagem}
                            alt={cliente.alt}
                            width={cliente.width ?? 500}
                            height={cliente.height ?? 800}
                            priority={index === 0}
                            loading={index === 0 ? undefined : 'lazy'}
                            unoptimized
                            className="h-full w-auto max-w-full object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:drop-shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
                          />
                        </a>
                      </div>
                      {/* Mobile */}
                      <div className="flex min-h-[720px] flex-col gap-4 md:hidden">
                        <h2 className="text-black dark:text-white text-3xl font-thin mb-2">
                          {cliente.nome}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-justify">
                          {cliente.descricao}
                        </p>
                        <div className="mx-auto flex h-[260px] w-[300px] items-center justify-center md:hidden">
                          <a
                            href={cliente.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Acessar site de ${cliente.nome}`}
                            className="flex h-full w-full items-center justify-center"
                          >
                            <Image
                              src={cliente.imagem}
                              alt={cliente.alt}
                              width={cliente.width ?? 300}
                              height={cliente.height ?? 620}
                              loading="lazy"
                              unoptimized
                              className="mx-auto h-full w-auto max-w-full object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.99]"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button type="button" className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-6 mr-4">
                <Image src={setaDireta} alt="Próximo" width={32} height={32} />
              </button>
            </>
          ) : (
            <div className="flex min-h-[360px] items-center justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Carregando clientes...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}