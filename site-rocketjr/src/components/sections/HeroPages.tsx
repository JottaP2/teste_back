import Image from "next/image";
import LogoRocketHeroDark from "@/assets/logos/logo-rocket-hero-dark.svg";
import LogoRocketHeroLight from "@/assets/logos/Logo-rocket-hero-light.svg";

export default function HeroPages() {
  return (
    <section className="bg-white dark:bg-black px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl text-center">
        <Image
          src={LogoRocketHeroDark}
          alt="Logo Rocket - tema escuro"
          width={400}
          height={160}
          className="mx-auto mb-4 w-full max-w-56 md:max-w-72 lg:max-w-80 h-auto hidden dark:block"
        />

        <Image
          src={LogoRocketHeroLight}
          alt="Logo Rocket - tema claro"
          width={400}
          height={160}
          className="mx-auto mb-4 w-full max-w-56 md:max-w-72 lg:max-w-80 h-auto block dark:hidden"
        />
      </div>
    </section>
  );
}