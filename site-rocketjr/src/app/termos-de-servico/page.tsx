"use client";

import { useEffect, useState } from "react";

/**
 * Componente TermosDeServico
 * Página principal de Termos de Serviços da Rocket Júnior.
 * Estrutura da página:
 *  - Título: "TERMOS DE SERVIÇOS" em destaque.
 *  - Conteúdo: texto completo dividido em 5 seções numeradas,
 *    com subtítulos em negrito e listas de marcadores.
 * Responsividade:
 *  - Smartphone (< 640px): fonte menor, padding reduzido.
 *  - Tablet (640px–1023px): espaçamentos intermediários.
 *  - Desktop (≥ 1024px): conteúdo centralizado com largura máxima.
 * Tema:
 *  - Detecta automaticamente a preferência do sistema (dark/light).
 *  - Dark mode: fundo preto com texto branco.
 *  - Light mode: fundo branco com texto preto.
 *  - Atualiza em tempo real se o usuário mudar a preferência do sistema.
 */
export default function TermosDeServico() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const theme = {
    bg: isDark ? "#000000" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ─── Título da página ─── */}
      <div className="flex justify-center pt-8 sm:pt-12 pb-6 sm:pb-10">
        <h1
          className="uppercase text-center px-4"
          style={{
            color: theme.text,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 5vw, 30px)",
            lineHeight: 1.21,
            letterSpacing: "0.02em",
            margin: "30px",
          }}
        >
          Termos de Serviços
        </h1>
      </div>

      {/* ─── Conteúdo dos termos ─── */}
      <div
        className="max-w-[1123px] mx-auto px-8 sm:px-16 lg:px-28 xl:px-36 pb-16 sm:pb-20 text-justify"
        style={{
          color: theme.text,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(13px, 2vw, 16px)",
          lineHeight: "1.75",
          letterSpacing: "0.04em",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <p className="mb-0">
          &nbsp;&nbsp;Ao acessar o site da Rocket Júnior, você concorda com os presentes Termos e Condições de Uso. Caso não concorde com qualquer disposição aqui descrita, recomendamos que não utilize este site.
        </p>
        <p className="mb-0">&nbsp;</p>

        {/* ─── 1. Finalidade do Site ─── */}
        <p className="mb-0" style={{ fontWeight: 800 }}>1. Finalidade do Site</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Este site possui finalidade exclusivamente:</p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Institucional;</li>
          <li className="mb-0"> * Informativa;</li>
          <li className="mb-0"> * Comercial.</li>
        </ul>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Seu objetivo é apresentar:</p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Os serviços de desenvolvimento web e soluções digitais;</li>
          <li className="mb-0"> * Serviços de consultoria estratégica em Tecnologia da Informação;</li>
          <li className="mb-0"> * Portfólio de projetos realizados;</li>
          <li className="mb-0"> * Formas de contato com a equipe.</li>
        </ul>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          As informações disponibilizadas não constituem oferta vinculante, mas sim material de apresentação institucional.
        </p>
        <p className="mb-0">&nbsp;</p>

        {/* ─── 2. Conteúdo e Propriedade Intelectual ─── */}
        <p className="mb-0" style={{ fontWeight: 800 }}>2. Conteúdo e Propriedade Intelectual</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Todo o conteúdo disponível neste site, incluindo textos, imagens, logotipos, identidade visual, projetos apresentados, elementos gráficos e demais materiais é:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * De titularidade da Rocket Júnior; ou</li>
          <li className="mb-0"> * Utilizado mediante autorização de terceiros; ou</li>
          <li className="mb-0"> * Apresentado como portfólio com permissão dos respectivos clientes.</li>
        </ul>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Esse conteúdo está protegido pela legislação aplicável de direitos autorais e propriedade intelectual.
        </p>
        <p className="mb-0">
          É vedada a reprodução, distribuição, modificação, republicação ou qualquer forma de utilização do conteúdo sem autorização prévia e por escrito.
        </p>
        <p className="mb-0">&nbsp;</p>

        {/* ─── 3. Limitação de Responsabilidade ─── */}
        <p className="mb-0" style={{ fontWeight: 800 }}>3. Limitação de Responsabilidade</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          A Rocket Júnior se empenha para manter as informações do site claras, corretas e atualizadas. Contudo:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Não garantimos que o conteúdo esteja permanentemente isento de erros ou omissões;</li>
          <li className="mb-0"> * Informações sobre projetos apresentados podem sofrer atualizações posteriores à publicação;</li>
          <li className="mb-0"> * O conteúdo possui caráter informativo e institucional.</li>
        </ul>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Quanto aos links direcionados para sites de clientes apresentados no portfólio:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * A Rocket Júnior não se responsabiliza por alterações posteriores realizadas pelos próprios clientes em seus respectivos sites;</li>
          <li className="mb-0"> * O conteúdo desses ambientes externos é de responsabilidade exclusiva de seus proprietários.</li>
        </ul>
        <p className="mb-0">O uso das informações disponíveis neste site é de responsabilidade do usuário.</p>
        <p className="mb-0">&nbsp;</p>

        {/* ─── 4. Canais de Contato e Plataformas Externas ─── */}
        <p className="mb-0" style={{ fontWeight: 800 }}>4. Canais de Contato e Plataformas Externas</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Nosso site disponibiliza:</p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Botões de WhatsApp;</li>
          <li className="mb-0"> * Formulários de contato;</li>
          <li className="mb-0"> * Links para Instagram e LinkedIn;</li>
          <li className="mb-0"> * Links para sites de clientes.</li>
        </ul>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>4.1 Plataformas Externas</p>
        <p className="mb-0">
          Ao clicar nesses links, você será direcionado a ambientes externos, sujeitos aos seus próprios termos de uso e políticas de privacidade. A Rocket Júnior não possui controle sobre essas plataformas e não se responsabiliza por suas práticas.
        </p>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>4.2 Formulários de Contato</p>
        <p className="mb-0">
          Ao preencher e enviar um formulário, você declara estar ciente de que os dados fornecidos serão utilizados para:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Retornar seu contato;</li>
          <li className="mb-0"> * Prestar esclarecimentos;</li>
          <li className="mb-0"> * Apresentar propostas comerciais;</li>
          <li className="mb-0"> * Dar continuidade ao relacionamento institucional.</li>
        </ul>
        <p className="mb-0">
          O tratamento dos dados pessoais ocorre conforme descrito na Política de Privacidade.
        </p>
        <p className="mb-0">&nbsp;</p>

        {/* ─── 5. Modificações dos Termos ─── */}
        <p className="mb-0" style={{ fontWeight: 800 }}>5. Modificações dos Termos</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Estes Termos de Uso poderão ser atualizados a qualquer momento para refletir:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Alterações nos serviços;</li>
          <li className="mb-0"> * Mudanças na legislação;</li>
          <li className="mb-0"> * Ajustes institucionais.</li>
        </ul>
        <p className="mb-0">Recomendamos a revisão periódica deste documento.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Última atualização: 04 de fevereiro de 2026</p>
        <p>
          Em caso de dúvidas, entre em contato conosco pelos canais oficiais disponibilizados no site.  </p>
      </div>
    </div>
  );
}