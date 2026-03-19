import Image from "next/image";
import LogoRocketHeroDark from "@/assets/logos/logo-rocket-hero-dark.svg";
import LogoRocketHeroLight from "@/assets/logos/Logo-rocket-hero-light.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center text-center">
        <Image
          src={LogoRocketHeroDark}
          alt="Logo Rocket JR CTA - tema escuro"
          width={400}
          height={160}
          className="mx-auto mt-4 mb-12 sm:mb-20 w-full max-w-56 md:max-w-72 lg:max-w-80 h-auto hidden dark:block"
        />

        <Image
          src={LogoRocketHeroLight}
          alt="Logo Rocket JR CTA - tema claro"
          width={400}
          height={160}
          className="mx-auto mt-4 mb-12 sm:mb-20 w-full max-w-56 md:max-w-72 lg:max-w-80 h-auto block dark:hidden"
        />
        
        <h1 className="text-4xl md:text-6xl font-light font-sans text-black dark:text-white mb-6">
          Chegou A Hora Da Inovação, Venha Voar Com A Gente
        </h1>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">
          Aqui Damos Asas As Suas Ideias
        </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contato"
        >
            <button
            type="button"
            className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-700 hover:to-gray-900 text-white font-bold py-3 px-6 w-40 rounded-md
            transition duration-300 ease-in-out transform hover:scale-105">Contato</button>
        </Link>
        <Link
          href="/cases"
        >
            <button
            type="button"
            className="border-1 border-red-600 text-black dark:text-white font-bold py-3 px-6 w-40 rounded-md
            transition duration-300 ease-in-out transform hover:scale-105">Cases</button>
        </Link>
      </div>
      </div>
    </section>
  );
}