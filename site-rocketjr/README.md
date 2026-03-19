# 🚀 Site Institucional – RocketJR

Este projeto utiliza **Next.js (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4** para desenvolver o site institucional da RocketJR.

O objetivo é manter uma aplicação moderna, performática, escalável e bem organizada, com foco em SEO técnico e boa experiência em dispositivos móveis e desktop.

---

## 🔧 Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** 18+
- **npm** 9+

Verifique no terminal:
```bash
node -v
npm -v
```

---

## 📥 Como Clonar e Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/ej-rocketjr/site-rocketjr.git

# Acesse a pasta
cd site-rocketjr

# Instale dependências
npm install

# Ambiente de desenvolvimento
npm run dev
```

A aplicação ficará disponível em: `http://localhost:3000`

---

## 🚀 Scripts Disponíveis

Todos os comandos devem ser executados na raiz do projeto.

| Comando | Quando usar |
| --- | --- |
| `npm run dev` | Desenvolvimento local com recarregamento automático. |
| `npm run build` | Gera build de produção otimizada. |
| `npm run start` | Sobe o build de produção localmente. |
| `npm run lint` | Executa análise de código com **Biome**. |

---

## 🔎 Lint e Qualidade de Código

O projeto usa **Biome** para validação estática de código.

Execute antes de abrir PR:

```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

Este projeto utiliza o **App Router** do Next.js. Estrutura atual:

```text
/
├── public/                              # Arquivos públicos acessados por URL
│
├── src/
│ ├── app/                               # Rotas da aplicação (App Router)
│ │ ├── layout.tsx                       # Layout global (Header, Footer, metadata base)
│ │ ├── page.tsx                         # Home
│ │ ├── globals.css                      # Estilos globais
│ │ ├── robots.ts                        # Configuração de robots
│ │ ├── sitemap.ts                       # Geração de sitemap
│ │ ├── contato/                         # Rota /contato
│ │ │ ├── layout.tsx                     # Metadata específico de contato
│ │ │ └── page.tsx
│ │ ├── dados/                           # Rota /dados
│ │ │ └── page.tsx
│ │ ├── decisoes-tecnologicas/           # Rota /decisoes-tecnologicas
│ │ │ └── page.tsx
│ │ ├── e-commerce/                      # Rota /e-commerce
│ │ │ └── page.tsx
│ │ ├── quem-somos/                      # Rota /quem-somos
│ │ │ └── page.tsx
│ │ ├── solucoes-digitais/               # Rota /solucoes-digitais
│ │ │ └── page.tsx
│ │ └── transformacao-digital/           # Rota /transformacao-digital
│ │   └── page.tsx
│ │
│ ├── assets/                            # Assets importados como módulo
│ │ ├── icons/
│ │ ├── images/
│ │ └── logos/
│ │
│ └── components/                        # Componentes reutilizáveis
│   ├── layout/
│   │ ├── Header.tsx                     # Cabeçalho global
│   │ └── Footer.tsx                     # Rodapé global
│   ├── sections/
│   │ ├── Hero.tsx                       # Hero da Home
│   │ ├── Servicos.tsx                   # Seção de serviços
│   │ ├── Clientes.tsx                   # Seção de clientes
│   │ ├── QuemSomos.tsx                  # Seção de quem somos (Home)
│   │ └── HeroPages.tsx                  # Hero reutilizável para páginas internas
│   └── ui/
│     ├── CardsCarrossel.tsx             # Card de serviço (carrossel)
│     ├── ScrollReveal.tsx               # Efeito de entrada por scroll
│     └── cursorBlur.tsx                 # Efeito visual de cursor
│
├── next.config.ts                       # Configuração Next.js
├── postcss.config.mjs                   # Configuração PostCSS
├── eslint.config.mjs                    # Configuração de lint no repositório
├── tsconfig.json                        # Configuração TypeScript
├── package.json                         # Dependências e scripts
└── README.md
```

---

## 🧩 Componentização (Next + React)

### Organização

* **`components/layout`** → Estrutura global (Header e Footer).
* **`components/sections`** → Blocos completos de página.
* **`components/ui`** → Componentes de apoio reutilizáveis.

> 💡 Essa separação facilita manutenção, reuso e escalabilidade.

---

## 🖼️ Imagens e Performance

### Padrão adotado no projeto

* Importar imagens por módulo (`src/assets`).
* Utilizar imagens raster otimizadas em formato **`.webp`** sempre que possível.
* Renderizar com `next/image`.
* Definir `alt`, `width` e `height`.
* Definir `sizes` para comportamento responsivo.
* Usar `priority` apenas em imagens críticas acima da dobra.
* Usar `loading="lazy"` para imagens secundárias.

### Formato das imagens

Para melhorar compressão, tempo de carregamento e entrega em produção, as imagens do projeto foram padronizadas em **`.webp`** quando aplicável.

Esse formato é preferido para imagens fotográficas e visuais raster porque reduz o tamanho dos arquivos sem perda perceptível relevante na maior parte dos casos.

### Exemplo recomendado (sem uso de `<img>`)

```tsx
import Image from "next/image";
import RaccoonMascoteRocket from "@/assets/icons/raccoon-mascote-rocket-jr.svg";

export default function Mascote() {
  return (
    <Image
      src={RaccoonMascoteRocket}
      alt="Raccoon Mascote da RocketJR"
      width={350}
      height={350}
      loading="lazy"
      sizes="(max-width: 1024px) 60vw, 25vw"
    />
  );
}
```

---

## 🔍 SEO Técnico

As páginas utilizam metadata por rota em `src/app` com:

* `title`
* `description`
* `alternates.canonical`
* `openGraph`

Além disso, o projeto inclui:

* `robots.ts`
* `sitemap.ts`

---

## ✨ Animações de Scroll

O componente `src/components/ui/ScrollReveal.tsx` é usado para revelar seções com animação de entrada ao entrar na viewport.

Exemplo:

```tsx
import ScrollReveal from "@/components/ui/ScrollReveal";

<ScrollReveal delayMs={80}>
  <MinhaSection />
</ScrollReveal>
```

---

## 📏 Padrão de Commit

Utilizamos **Conventional Commits**.

Formato:
`tipo: descrição breve`

Tipos comuns:

* `feat`
* `fix`
* `refactor`
* `style`
* `docs`
* `chore`
* `test`

Exemplos:

* `feat: adicionar animação de scroll na timeline`
* `fix: corrigir metadata da home`
* `docs: atualizar estrutura real no README`

📚 Referência: [Padrões de Commits por iuricode](https://github.com/iuricode/padroes-de-commits)

---

## 🔀 Checklist de Pull Request

* [ ] Funcionalidade implementada conforme esperado.
* [ ] Responsividade validada em mobile e desktop.
* [ ] Sem erros no console do navegador.
* [ ] `npm run lint` executado com sucesso.
* [ ] Commits organizados seguindo padrão.
* [ ] Código revisado antes de abrir PR.

---

## 📚 Documentação Oficial

* 📘 [Next.js Docs](https://nextjs.org/docs)
* ⚛️ [React Docs](https://react.dev)
* 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
* 🧪 [Biome Docs](https://biomejs.dev/)