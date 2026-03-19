"use client";

import { useEffect, useState } from "react";

/**
 * Componente PoliticasPrivacidade
 * Página principal de Políticas e Privacidade da Rocket Júnior.
 *
 * Estrutura da página:
 *  - Título: "POLÍTICAS E PRIVACIDADE" em destaque.
 *  - Conteúdo: texto completo da política dividido em 6 seções numeradas,
 *    com subtítulos em negrito e listas de marcadores.
 *
 * Responsividade:
 *  - Smartphone (< 640px): fonte menor, padding reduzido.
 *  - Tablet (640px–1023px): espaçamentos intermediários.
 *  - Desktop (≥ 1024px): conteúdo centralizado com largura máxima.
 *
 * Tema:
 *  - Detecta automaticamente a preferência do sistema (dark/light).
 *  - Dark mode: fundo preto com texto branco.
 *  - Light mode: fundo branco com texto preto.
 *  - Atualiza em tempo real se o usuário mudar a preferência do sistema.\\\\
 */
export default function PoliticasPrivacidade() {
  // Detecta a preferência inicial do sistema
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true; // SSR: padrão dark
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Atualiza o tema quando o usuário muda a preferência do sistema
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Tokens de cor baseados no tema atual
  const theme = {
    bg: isDark ? "#000000" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
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
          Políticas e Privacidade
        </h1>
      </div>

      {/* ─── Conteúdo da política ─── */}
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
          &nbsp;&nbsp;A Rocket Júnior está comprometida com a proteção da sua
          privacidade e com a transparência no tratamento de dados pessoais.
          Esta Política de Privacidade descreve como coletamos, utilizamos e
          protegemos as informações dos usuários que acessam nosso site.
        </p>
        <p className="mb-0">
          Ao utilizar este site, você declara estar ciente e de acordo com as
          práticas descritas nesta política.
        </p>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          1. Dados que Coletamos
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Coletamos informações das seguintes formas:</p>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          1.1 Dados Fornecidos Diretamente por Você
        </p>
        <p className="mb-0">
          Ao preencher nosso formulário de contato, poderemos coletar as
          seguintes informações:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Nome completo;</li>
          <li className="mb-0"> * Endereço de e-mail;</li>
          <li className="mb-0"> * Número de telefone;</li>
          <li className="mb-0"> * Nome da empresa;</li>
          <li className="mb-0">
            {" "}
            * Serviço de interesse (selecionado por meio de botões de opção);
          </li>
          <li className="mb-0">
            {" "}
            * Descrição da necessidade ou mensagem enviada.
          </li>
          <li className="mb-0">&nbsp;</li>
        </ul>
        <p className="mb-0">Esses dados são fornecidos voluntariamente por você.</p>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          1.2 Dados de Navegação (Cookies)
        </p>
        <p className="mb-0">
          Nosso site pode utilizar cookies e tecnologias similares para coletar
          informações de navegação, tais como:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Tipo de navegador;</li>
          <li className="mb-0"> * Páginas acessadas;</li>
          <li className="mb-0"> * Tempo de permanência;</li>
          <li className="mb-0"> * Dispositivo utilizado.</li>
        </ul>
        <p className="mb-0">
          Essas informações são coletadas de forma automatizada e não
          identificam o usuário diretamente. Utilizamos ferramentas como o
          Google Analytics para:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Analisar o tráfego do site;</li>
          <li className="mb-0"> * Identificar a procura por nossos serviços;</li>
          <li className="mb-0">
            {" "}
            * Mapear as principais dúvidas e interesses dos visitantes;
          </li>
          <li className="mb-0">
            {" "}
            * Melhorar continuamente a experiência do usuário.
          </li>
        </ul>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          2. Finalidade do Uso dos Dados
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Os dados coletados são utilizados para:</p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0">
            {" "}
            * Responder solicitações enviadas pelo formulário de contato;
          </li>
          <li className="mb-0">
            {" "}
            * Entrar em contato para apresentar nossos serviços;
          </li>
          <li className="mb-0"> * Identificar demandas recorrentes;</li>
          <li className="mb-0">
            {" "}
            * Melhorar nossos serviços e estratégias digitais;
          </li>
          <li className="mb-0">
            {" "}
            * Otimizar a experiência de navegação no site.
          </li>
        </ul>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          3. Links para Plataformas Externas
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Nosso site pode conter links para plataformas de terceiros, incluindo:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * WhatsApp;</li>
          <li className="mb-0"> * Instagram;</li>
          <li className="mb-0"> * LinkedIn;</li>
          <li className="mb-0"> * Sites de clientes.</li>
        </ul>
        <p className="mb-0">
          Ao acessar esses links, você será direcionado para ambientes externos,
          sujeitos às respectivas políticas de privacidade dessas plataformas.
          Não possuímos controle sobre suas práticas de tratamento de dados e
          não nos responsabilizamos por seus conteúdos ou políticas.
        </p>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          4. Compartilhamento e Segurança das Informações
        </p>
        <p className="mb-0" style={{ fontWeight: 800 }}>
          Adotamos medidas técnicas e administrativas adequadas para proteger
          seus dados pessoais contra acessos não autorizados, uso indevido ou
          divulgação indevida.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Seus dados não são vendidos, trocados ou compartilhados com terceiros,
          exceto:
        </p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0"> * Quando houver obrigação legal;</li>
          <li className="mb-0"> * Para cumprimento de determinação judicial;</li>
          <li className="mb-0"> * Para exercício regular de direitos.</li>
        </ul>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          5. Direitos do Titular dos Dados
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Nos termos da legislação vigente, você poderá solicitar:</p>
        <ul className="list-disc mb-0 pl-6 sm:pl-10 lg:pl-12">
          <li className="mb-0">
            {" "}
            * Confirmação da existência de tratamento de dados;
          </li>
          <li className="mb-0"> * Acesso aos seus dados pessoais;</li>
          <li className="mb-0">
            {" "}
            * Correção de dados incompletos ou desatualizados;
          </li>
          <li className="mb-0">
            {" "}
            * Exclusão de dados tratados com base em consentimento.
          </li>
          <li className="mb-0">&nbsp;</li>
        </ul>
        <p className="mb-0">
          Para exercer seus direitos, entre em contato através do canal
          informado ao final desta política.
        </p>
        <p className="mb-0">
          Esta Política poderá ser atualizada a qualquer momento para refletir
          mudanças na legislação ou em nossas práticas internas.
        </p>
        <p className="mb-0">&nbsp;</p>

        <p className="mb-0" style={{ fontWeight: 800 }}>
          6. Alterações nesta Política
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Recomendamos que você revise este documento periodicamente.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Última atualização: 04 de fevereiro de 2026</p>
        <p>
          Em caso de dúvidas, entre em contato conosco pelos canais oficiais
          disponibilizados no site.
        </p>
      </div>
    </div>
  );
}