'use client';
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EquipeRocketFoto from "@/assets/images/foto-almej-2025.webp";
import LogoRocketAnimada from "@/assets/logos/Logo_Rocket_Animada_Section_QuemSomos.svg";
import FogueteAnimado from "@/assets/logos/Foguete_Animado_Section_QuemSomos.svg";

const rocketSlides = Array.from({ length: 10 }, (_, i) => ({
  id: `rocket-${i}`,
}));
const fogueteSlides = Array.from({ length: 10 }, (_, i) => ({
  id: `foguete-${i}`,
}));

function QuemSomos() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-1 sm:pt-5 lg:pt-10 pb-15 sm:pb-20 lg:pb-25 dark:bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-black sm:text-4xl dark:text-white">
          Quem Somos
          </h2>
      </div>

      {/* Bloco central: foto + carrossel de fundo em largura total */}
      <div className="relative mt-6 sm:mt-8 lg:mt-10">
        {/* Linha 1 — Logos Rocket (para a direita) */}
        <div className="pointer-events-none absolute inset-x-0 top-[35%] z-0 -translate-y-1/2" aria-hidden="true">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={16}
            allowTouchMove={false}
            loop
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            className="!overflow-visible"
            breakpoints={{
              640: { spaceBetween: 24 },
              1024: { spaceBetween: 32 },
            }}
          >
            {rocketSlides.map((logo) => (
              <SwiperSlide key={logo.id} className="!w-auto">
                <Image
                  src={LogoRocketAnimada}
                  alt=""
                  width={160}
                  height={96}
                  loading="lazy"
                  className="h-16 w-auto object-contain sm:h-20 lg:h-24"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[65%] z-0 -translate-y-1/2" aria-hidden="true">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={16}
            allowTouchMove={false}
            loop
            speed={7000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
            breakpoints={{
              640: { spaceBetween: 24 },
              1024: { spaceBetween: 32 },
            }}
          >
            {fogueteSlides.map((logo) => (
              <SwiperSlide key={logo.id} className="!w-auto">
                <Image
                  src={FogueteAnimado}
                  alt=""
                  width={160}
                  height={96}
                  loading="lazy"
                  className="h-16 w-auto object-contain sm:h-20 lg:h-24"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Foto centralizada por cima do carrossel */}
        <div className="relative z-10 mx-auto w-full max-w-[330px] px-4 sm:max-w-[520px] sm:px-6 lg:max-w-[760px] lg:px-8">
          <Image
            className="h-auto w-full rounded-xl object-cover"
            src={EquipeRocketFoto}
            alt="Foto da equipe RocketJR"
            sizes="(max-width: 640px) 330px, (max-width: 1024px) 520px, 760px"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-7xl flex-col items-center px-4 sm:mt-8 sm:px-6 lg:px-8">
        <p className="max-w-5xl text-center text-xs leading-relaxed text-black sm:text-sm lg:text-base dark:text-white">
          A Rocket Júnior (RJR) é a Empresa Júnior do curso de Sistemas de Informação do Campus Arapiraca - Unidade Educacional de Penedo. Somos um time de estudantes apaixonados por tecnologia e inovação, que aplicam na prática os conhecimentos adquiridos em sala de aula para desenvolver soluções digitais para o mercado. Nosso principal objetivo é proporcionar aos nossos membros uma experiência empresarial real, preparando-os para os desafios do mercado de trabalho e impulsionando suas carreiras.
        </p>
      </div>
    </section>
  );
}
export default QuemSomos;
