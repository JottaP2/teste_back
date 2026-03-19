'use client'

// ============================================================
import { useState, useActionState, useEffect } from "react";
import Image from "next/image";
import HeroPages from "@/components/sections/HeroPages";
import RaccoonMascoteRocket from "@/assets/icons/raccoon-mascote-anela-vermelho-rocket-jr.svg";
import { salvarContato } from "../server/action";


// ============================================================
// ContactSection — Seção de contato da Rocket Junior
//
// O que este componente faz:
//   - Exibe o mascote (imagem local) + formulário de contato
//   - Responsivo para Mobile, Tablet e Desktop
//
// O que NÃO está aqui (já existe no repositório):
//   - Hero (logo + heading)
// ============================================================

// ============================================================
// IMAGEM DO MASCOTE
// Troque o valor abaixo pelo caminho correto no seu projeto.
// Exemplos:
//   "/mascote.png"               → pasta /public (Next.js)
//   "/assets/images/mascote.png" → pasta /public/assets
// ============================================================


// ============================================================
// ÍCONES DOS SERVIÇOS — SVG inline extraído do Figma
// ============================================================

function IconLandingPage() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
      <title>Icone Landing Page</title>
      <path opacity="0.5" d="M3.10238e-05 6.73141C3.10238e-05 3.01396 2.94557 0 6.57881 0C10.2121 0 13.1576 3.01396 13.1576 6.73141C13.1606 7.67409 12.9672 8.60705 12.5898 9.47089C12.2124 10.3347 11.6592 11.1105 10.9655 11.7488C10.5182 12.1585 10.1857 12.4628 9.95066 12.6839C9.83159 12.7957 9.71461 12.9098 9.59979 13.026L9.57786 13.0497L9.57347 13.0549L9.57084 13.0576C9.36295 13.3207 9.31822 13.3874 9.2919 13.4488C9.26559 13.5102 9.24541 13.5891 9.19278 13.9225C9.17261 14.054 9.16998 14.2786 9.16998 14.8917V14.918C9.16998 15.2768 9.16997 15.5864 9.14805 15.8399C9.12436 16.1084 9.07173 16.375 8.93051 16.625C8.77414 16.9032 8.54723 17.1353 8.27263 17.2978C8.02878 17.4425 7.76826 17.496 7.50598 17.5206C7.25774 17.5434 6.95512 17.5434 6.60425 17.5434H6.55337C6.20251 17.5434 5.89988 17.5434 5.65164 17.5206C5.38849 17.496 5.12885 17.4417 4.88412 17.2978C4.60984 17.1351 4.38324 16.9031 4.22712 16.625C4.08677 16.375 4.03414 16.1092 4.00958 15.8399C3.98677 15.5856 3.98677 15.2768 3.98677 14.918V14.8917C3.98677 14.2786 3.98502 14.054 3.96397 13.9225C3.91134 13.5891 3.89291 13.5102 3.86572 13.4488C3.83941 13.3874 3.79467 13.3198 3.58678 13.0576L3.58415 13.0549L3.57977 13.0497L3.55784 13.026L3.48064 12.947C3.39069 12.858 3.29945 12.7703 3.20697 12.6839C2.97189 12.4628 2.63944 12.1585 2.19208 11.7479C1.4985 11.1097 0.945408 10.3341 0.56801 9.47042C0.190613 8.60674 -0.00281817 7.67394 3.10238e-05 6.73141Z" fill="#FF0000" />
      <path d="M5.68681 10.197C5.64393 10.1216 5.58655 10.0554 5.51799 10.0022C5.44942 9.94904 5.37101 9.90997 5.28728 9.88724C5.20355 9.86451 5.11615 9.85856 5.03011 9.86975C4.94407 9.88093 4.8611 9.90902 4.78596 9.9524C4.71083 9.99578 4.64501 10.0536 4.59231 10.1225C4.53961 10.1914 4.50106 10.2701 4.47888 10.354C4.45671 10.4379 4.45134 10.5253 4.4631 10.6113C4.47485 10.6972 4.50349 10.78 4.54737 10.8549C4.86198 11.398 5.37525 11.7977 5.97891 11.9697V13.1574C5.97891 13.3319 6.04822 13.4992 6.1716 13.6226C6.29498 13.746 6.46231 13.8153 6.63679 13.8153C6.81127 13.8153 6.9786 13.746 7.10198 13.6226C7.22536 13.4992 7.29467 13.3319 7.29467 13.1574V11.9706C7.89833 11.7986 8.4116 11.3989 8.72621 10.8557C8.81357 10.7046 8.83732 10.525 8.79225 10.3564C8.74717 10.1878 8.63697 10.044 8.48587 9.95663C8.33477 9.86928 8.15515 9.84552 7.98654 9.89059C7.81792 9.93567 7.67412 10.0459 7.58677 10.197C7.49077 10.3641 7.35239 10.5029 7.1856 10.5994C7.01881 10.696 6.8295 10.7468 6.63679 10.7468C6.44408 10.7468 6.25477 10.696 6.08798 10.5994C5.92119 10.5029 5.78281 10.3641 5.68681 10.197ZM5.34998 15.5039H8.13061C8.12896 15.5794 8.12486 15.6549 8.11833 15.7302C8.10254 15.9135 8.07447 15.9802 8.05605 16.0135C8.00352 16.1058 7.92797 16.1828 7.83676 16.2372C7.8043 16.2565 7.73939 16.2845 7.55957 16.3012C7.37186 16.3188 7.1245 16.3188 6.7403 16.3188C6.35697 16.3188 6.10873 16.3188 5.92102 16.3012C5.74207 16.2845 5.67629 16.2573 5.64383 16.2372C5.55263 16.1828 5.47707 16.1058 5.42454 16.0135C5.407 15.9802 5.37893 15.9135 5.36314 15.7302C5.35679 15.6546 5.3524 15.5797 5.34998 15.5039Z" fill="#D9D9D9" />
    </svg>
  );
}

function IconECommerce() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <title>Icone E-Commerce</title>
      <g clipPath="url(#clip0_5173_17134)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.803178 1.72221C0.842303 1.60462 0.926519 1.50738 1.03731 1.45187C1.14811 1.39636 1.27641 1.38711 1.39402 1.42616L1.55918 1.48163L1.58411 1.48973C1.97427 1.61999 2.30397 1.72969 2.56387 1.8506C2.83935 1.97899 3.07867 2.13729 3.26004 2.38971C3.44141 2.64088 3.51682 2.91823 3.5511 3.22051C3.58351 3.50471 3.58351 3.85249 3.58351 4.26383V5.92106C3.58351 6.81543 3.58476 7.43993 3.6477 7.91049C3.70941 8.36795 3.82222 8.60978 3.99423 8.78242C4.16687 8.95506 4.40932 9.06724 4.86679 9.12895C5.33734 9.19189 5.96122 9.19314 6.85559 9.19314H11.2184C11.2797 9.19314 11.3405 9.20523 11.3972 9.22872C11.4539 9.25221 11.5055 9.28664 11.5489 9.33005C11.5923 9.37346 11.6267 9.42499 11.6502 9.4817C11.6737 9.53841 11.6858 9.59919 11.6858 9.66058C11.6858 9.72196 11.6737 9.78275 11.6502 9.83946C11.6267 9.89617 11.5923 9.9477 11.5489 9.99111C11.5055 10.0345 11.4539 10.0689 11.3972 10.0924C11.3405 10.1159 11.2797 10.128 11.2184 10.128H6.82131C5.96932 10.128 5.28187 10.128 4.74151 10.0551C4.18059 9.98031 3.70816 9.81826 3.33296 9.44369C2.95839 9.06849 2.79696 8.59606 2.72155 8.03514C2.64863 7.49478 2.64863 6.80733 2.64863 5.95534V4.29001C2.64863 3.84563 2.64863 3.55146 2.62245 3.32646C2.59752 3.11331 2.55577 3.01047 2.50154 2.9363C2.44794 2.86151 2.3638 2.78859 2.16935 2.69822C1.96368 2.60286 1.68508 2.50875 1.26376 2.3679L1.0986 2.31305C0.981128 2.2738 0.884036 2.18953 0.828646 2.07875C0.773256 1.96797 0.764096 1.83974 0.803178 1.72221Z" fill="#C8070B" />
        <path opacity="0.5" d="M3.58008 3.74023C3.58257 3.90228 3.58361 4.077 3.58319 4.26439V5.92162C3.58319 6.81599 3.58444 7.44049 3.64739 7.91104C3.65695 7.9796 3.66733 8.04359 3.67855 8.103H9.98587C10.5836 8.103 10.8821 8.103 11.1165 7.94844C11.3508 7.79387 11.4686 7.51964 11.7036 6.96993L11.9716 6.34668C12.4758 5.16873 12.7276 4.581 12.4508 4.16031C12.1741 3.73961 11.5334 3.74023 10.252 3.74023H3.58008Z" fill="white" />
        <path d="M4.67511 11.2188C4.92306 11.2188 5.16085 11.3172 5.33617 11.4926C5.5115 11.6679 5.60999 11.9057 5.60999 12.1536C5.60999 12.4016 5.5115 12.6394 5.33617 12.8147C5.16085 12.99 4.92306 13.0885 4.67511 13.0885C4.42717 13.0885 4.18938 12.99 4.01405 12.8147C3.83873 12.6394 3.74023 12.4016 3.74023 12.1536C3.74023 11.9057 3.83873 11.6679 4.01405 11.4926C4.18938 11.3172 4.42717 11.2188 4.67511 11.2188ZM11.2193 12.1536C11.2193 11.9057 11.1208 11.6679 10.9454 11.4926C10.7701 11.3172 10.5323 11.2188 10.2844 11.2188C10.0364 11.2188 9.79865 11.3172 9.62333 11.4926C9.44801 11.6679 9.34951 11.9057 9.34951 12.1536C9.34951 12.4016 9.44801 12.6394 9.62333 12.8147C9.79865 12.99 10.0364 13.0885 10.2844 13.0885C10.5323 13.0885 10.7701 12.99 10.9454 12.8147C11.1208 12.6394 11.2193 12.4016 11.2193 12.1536Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_5173_17134">
          <rect width="14.9581" height="14.9581" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconSiteInstitucional() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <title>Icone Site Institucional</title>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0026 11.3409L14.0517 7.30359C14.6348 6.72258 14.9263 6.43173 15.0793 6.06262C15.2324 5.69352 15.2331 5.28148 15.2331 4.45948V4.06683C15.2331 2.80232 15.2331 2.17006 14.839 1.77741C14.445 1.38477 13.8114 1.38477 12.5434 1.38477H12.1487C11.3246 1.38477 10.9126 1.38477 10.5421 1.53781C10.1709 1.69085 9.87934 1.9817 9.29556 2.56271L5.24718 6.60001C4.56576 7.27866 4.14333 7.70039 3.9799 8.10689C3.92928 8.23043 3.90295 8.36257 3.90234 8.49608C3.90234 9.05147 4.35039 9.49883 5.24718 10.3928L5.36768 10.5127L6.779 9.07986C6.82688 9.03125 6.88387 8.99255 6.94671 8.96597C7.00954 8.93938 7.077 8.92544 7.14523 8.92492C7.21345 8.92441 7.28112 8.93734 7.34435 8.96297C7.40758 8.9886 7.46514 9.02644 7.51375 9.07432C7.56236 9.1222 7.60106 9.17919 7.62764 9.24202C7.65423 9.30486 7.66817 9.37232 7.66869 9.44055C7.6692 9.50877 7.65627 9.57644 7.63064 9.63967C7.60501 9.7029 7.56717 9.76046 7.51929 9.80907L6.10312 11.246L6.19799 11.3409C7.09478 12.2342 7.54353 12.6816 8.1003 12.6816C8.22356 12.6816 8.34129 12.6601 8.45971 12.6165C8.87729 12.4627 9.30387 12.0375 10.0026 11.3409ZM11.9049 6.60001C11.6523 6.85166 11.3103 6.99296 10.9538 6.99296C10.5972 6.99296 10.2552 6.85166 10.0026 6.60001C9.8776 6.47579 9.7784 6.32808 9.71071 6.16538C9.64302 6.00268 9.60817 5.82819 9.60817 5.65197C9.60817 5.47575 9.64302 5.30126 9.71071 5.13856C9.7784 4.97586 9.8776 4.82815 10.0026 4.70393C10.2552 4.45228 10.5972 4.31098 10.9538 4.31098C11.3103 4.31098 11.6523 4.45228 11.9049 4.70393C12.0299 4.82815 12.1291 4.97586 12.1968 5.13856C12.2645 5.30126 12.2993 5.47575 12.2993 5.65197C12.2993 5.82819 12.2645 6.00268 12.1968 6.16538C12.1291 6.32808 12.0299 6.47579 11.9049 6.60001Z" fill="#C7060A" />
      <path opacity="0.5" d="M6.25568 4.12946L4.49465 5.88634C4.17125 6.20904 3.87417 6.50474 3.63941 6.77274C3.48055 6.94942 3.33714 7.1394 3.21075 7.34059L3.19413 7.32328L3.12834 7.25819C2.82155 6.9618 2.46162 6.72593 2.06743 6.56291L1.98225 6.52829L1.71979 6.42441C1.63805 6.39219 1.56563 6.34012 1.50905 6.2729C1.45248 6.20568 1.41353 6.12543 1.39574 6.03939C1.37794 5.95335 1.38185 5.86424 1.40711 5.78009C1.43237 5.69594 1.47819 5.61941 1.54043 5.5574C2.31603 4.78318 3.24745 3.85453 3.69758 3.66825C4.08852 3.50495 4.51629 3.45016 4.93577 3.50967C5.31388 3.56576 5.67121 3.76035 6.25568 4.12946ZM9.26323 13.3744C9.40519 13.5184 9.49868 13.6202 9.58455 13.7289C9.69673 13.8725 9.79691 14.0244 9.88509 14.1846C9.98343 14.3647 10.0603 14.5565 10.2133 14.9408C10.2434 15.0135 10.2909 15.0776 10.3517 15.1276C10.4124 15.1775 10.4846 15.2116 10.5617 15.227C10.6389 15.2423 10.7186 15.2384 10.7938 15.2155C10.8691 15.1927 10.9375 15.1516 10.9931 15.0959L11.0513 15.0385C11.8269 14.2649 12.7583 13.3363 12.9453 12.8882C13.1095 12.499 13.1643 12.0723 13.1038 11.6542C13.0478 11.2768 12.8532 10.9201 12.4827 10.3371L10.7154 12.0988C10.3844 12.4291 10.0811 12.7317 9.80615 12.9686C9.64202 13.1112 9.46197 13.2525 9.26323 13.3744Z" fill="white" />
    </svg>
  );
}

/**
 * Returns an SVG element representing the icon for Analise Dados component.
 */
function IconAnaliseDados() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <title>Icone Analise de Dados</title>
      <path opacity="0.5" d="M1.24609 7.47862C1.24609 4.54061 1.24609 3.0716 2.15854 2.15854C3.07222 1.24609 4.54061 1.24609 7.47862 1.24609C10.4166 1.24609 11.8856 1.24609 12.7981 2.15854C13.7112 3.07222 13.7112 4.54061 13.7112 7.47862C13.7112 10.4166 13.7112 11.8856 12.7981 12.7981C11.8863 13.7112 10.4166 13.7112 7.47862 13.7112C4.54061 13.7112 3.0716 13.7112 2.15854 12.7981C1.24609 11.8863 1.24609 10.4166 1.24609 7.47862Z" fill="#C8060B" />
      <path d="M13.7108 3.11585C13.7108 3.61174 13.5138 4.08732 13.1632 4.43797C12.8125 4.78862 12.337 4.98561 11.8411 4.98561C11.3452 4.98561 10.8696 4.78862 10.5189 4.43797C10.1683 4.08732 9.9713 3.61174 9.9713 3.11585C9.9713 2.61996 10.1683 2.14438 10.5189 1.79373C10.8696 1.44309 11.3452 1.24609 11.8411 1.24609C12.337 1.24609 12.8125 1.44309 13.1632 1.79373C13.5138 2.14438 13.7108 2.61996 13.7108 3.11585ZM9.03643 6.69956C8.91245 6.69956 8.79356 6.65031 8.7059 6.56265C8.61823 6.47498 8.56899 6.35609 8.56899 6.23212C8.56899 6.10814 8.61823 5.98925 8.7059 5.90159C8.79356 5.81393 8.91245 5.76468 9.03643 5.76468H10.5946C10.7185 5.76468 10.8374 5.81393 10.9251 5.90159C11.0127 5.98925 11.062 6.10814 11.062 6.23212V7.79025C11.062 7.91422 11.0127 8.03312 10.9251 8.12078C10.8374 8.20844 10.7185 8.25769 10.5946 8.25769C10.4706 8.25769 10.3517 8.20844 10.264 8.12078C10.1764 8.03312 10.1271 7.91422 10.1271 7.79025V7.3602L8.87251 8.61481C8.66799 8.81919 8.39068 8.934 8.10155 8.934C7.81241 8.934 7.5351 8.81919 7.33058 8.61481L6.3421 7.62633C6.32763 7.61182 6.31044 7.60031 6.29151 7.59246C6.27258 7.5846 6.25228 7.58056 6.23179 7.58056C6.21129 7.58056 6.191 7.5846 6.17207 7.59246C6.15314 7.60031 6.13595 7.61182 6.12147 7.62633L4.69235 9.05545C4.60374 9.13802 4.48654 9.18297 4.36544 9.18084C4.24434 9.1787 4.1288 9.12964 4.04316 9.044C3.95752 8.95835 3.90846 8.84281 3.90632 8.72171C3.90419 8.60062 3.94914 8.48342 4.03171 8.3948L5.46082 6.96569C5.66535 6.76131 5.94265 6.6465 6.23179 6.6465C6.52092 6.6465 6.79823 6.76131 7.00275 6.96569L7.99123 7.95416C8.0057 7.96867 8.0229 7.98019 8.04183 7.98804C8.06076 7.9959 8.08105 7.99994 8.10155 7.99994C8.12204 7.99994 8.14233 7.9959 8.16126 7.98804C8.18019 7.98019 8.19739 7.96867 8.21186 7.95416L9.46585 6.69956H9.03643Z" fill="white" />
    </svg>
  );
}

const subjectOptions = [
  { id: "landing-page", label: "Landing Page", icon: <IconLandingPage /> },
  { id: "e-commerces", label: "E-Commerces", icon: <IconECommerce /> },
  { id: "site-institucional", label: "Site Institucional", icon: <IconSiteInstitucional /> },
  { id: "analise-dados", label: "Analise De Dados", icon: <IconAnaliseDados /> },
];

// ============================================================
// COMPONENTE: RadioCheckbox
// ============================================================
function RadioCheckbox({
  id, label, icon, checked, onChange,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
      <div className="relative flex items-center justify-center w-[11px] h-[11px] shrink-0">
        <svg width="11" height="11" viewBox="0 0 11.0801 11.0801" fill="none">
          <title>Selecionar opcao</title>
          <circle cx="5.54003" cy="5.54003" r="4.98602" stroke="url(#radio_grad)" strokeWidth="1.10801" />
          <defs>
            <linearGradient id="radio_grad" x1="0" x2="11.0801" y1="5.54003" y2="5.54003" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000" />
              <stop offset="1" stopColor="#990000" />
            </linearGradient>
          </defs>
        </svg>
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[5px] h-[5px] rounded-full bg-red-600" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-[6px]">
        <div
          className="flex items-center justify-center rounded-[6px] shrink-0"
          style={{
            width: "28.8px",
            height: "28.8px",
            backgroundImage: "linear-gradient(136.142deg, rgb(190, 22, 34) 24.576%, rgb(82, 1, 1) 76.068%)",
          }}
        >
          {icon}
        </div>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <span className="capitalize text-black dark:text-[#d9d9d9]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px" }}>
          {label}
        </span>
      </div>
    </label>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL: ContactSection
// ============================================================
export default function App() {

  const [selected, setSelected] = useState<string[]>([]);
  const [state, formAction, isPending] = useActionState(salvarContato.bind(null, selected), { success: false, error: "" });
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", empresa: "", assunto: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (state.success) {
      setForm({ nome: "", email: "", telefone: "", empresa: "", assunto: "" });
      setSelected([]);
    }
  }, [state.success]);

  const toggleSubject = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.nome.trim()) errors.nome = "Nome é obrigatório";
    if (!form.email.trim()) errors.email = "Email é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Email inválido";
    if (!form.assunto.trim()) errors.assunto = "Mensagem é obrigatória";
    return errors;
  };

  const isFormValid =
    form.nome.trim() !== "" &&
    form.email.trim() !== "" &&
    form.assunto.trim() !== "";

  const inputBase: React.CSSProperties = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: "14px",
    background: "transparent",
    color: "rgba(237, 237, 237, 0.6)",
  };
  const labelBase: React.CSSProperties = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: "15px",
    fontWeight: 700,
    color: "white",
    textTransform: "capitalize",
  };

  return (

    <section id="contato" className="w-full bg-black">
      <HeroPages />
      <h1 className="text-center text-[22px] md:text-[28px] lg:text-[32px] font-bold text-white mt-6 md:mt-10" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
        Soluções inovadoras e tecnologicas
      </h1>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 gap-6 md:gap-8 lg:gap-12 max-w-[1400px] mx-auto">

        {/* ── Mascote ── */}
        <div
          className="relative mx-auto md:mx-0 flex-shrink-0"
          style={{ width: "clamp(220px, 38vw, 800px)" }}
        >

          {/* ⚠️ Coloque o arquivo em public/mascote.png
              ou altere  no topo deste arquivo */}
          <Image
            src={RaccoonMascoteRocket}
            alt="Raccoon Mascote da RocketJR"
            width={520}
            height={520}
            className="relative block w-full"
            style={{
              maxWidth: "clamp(220px, 38vw, 600px)",
              maxHeight: "clamp(220px, 38vw, 600px)",
              objectFit: "contain",
              objectPosition: "bottom",
              margin: "0 auto",
            }}
          />
        </div>
        {/* ── Formulário ── */}
        <div className="w-full md:flex-1 md:max-w-[520px]">

          {/* Banner sucesso */}
          {state.success && (
            <div
              className="mb-4 p-3 md:p-4 rounded-[10px] flex items-center gap-3"
              style={{ background: "rgba(34,197,94,0.15)", border: "1px solid #22c55e" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <title>Sucesso</title>
                <circle cx="12" cy="12" r="11" stroke="#22c55e" strokeWidth="2" />
                <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ color: "#22c55e", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "14px", fontWeight: 600 }}>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </span>
            </div>
          )}

          {/* Banner erro */}
          {state.error && (
            <div
              className="mb-4 p-3 md:p-4 rounded-[10px] flex items-center gap-3"
              style={{ background: "rgba(239,68,68,0.12)", border: "1px solid #ef4444" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <title>Erro</title>
                <circle cx="12" cy="12" r="11" stroke="#ef4444" strokeWidth="2" />
                <path d="M12 8v4M12 16h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span style={{ color: "#ef4444", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "14px", fontWeight: 600 }}>
                {state.error}
              </span>
            </div>
          )}

          <form action={formAction} className="flex flex-col gap-3 md:gap-4" noValidate>

            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nome" className="text-black dark:text-white" style={labelBase}>
                Nome <span style={{ color: "#e30613" }}>*</span>
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={(e) => { setForm({ ...form, nome: e.target.value }); if (fieldErrors.nome) setFieldErrors({ ...fieldErrors, nome: "" }); }}
                className="w-full h-[44px] px-3 rounded-[7px] outline-none transition-colors bg-white dark:bg-transparent text-black dark:text-white placeholder:text-gray-400"
                style={{ ...inputBase, border: fieldErrors.nome ? "1px solid #ef4444" : "1px solid red" }}
              />
              {fieldErrors.nome && (
                <span style={{ color: "#ef4444", fontSize: "12px", fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {fieldErrors.nome}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-black dark:text-white" style={labelBase}>
                Email <span style={{ color: "#e30613" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" }); }}
                className="w-full h-[44px] px-3 rounded-[7px] outline-none transition-colors bg-white dark:bg-transparent text-black dark:text-white placeholder:text-gray-400"
                style={{ ...inputBase, border: fieldErrors.email ? "1px solid #ef4444" : "1px solid red" }}
              />
              {fieldErrors.email && (
                <span style={{ color: "#ef4444", fontSize: "12px", fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {fieldErrors.email}
                </span>
              )}
            </div>

            {/* Telefone + Empresa — Mobile: coluna | Tablet+: linha */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="telefone" className="text-black dark:text-white" style={labelBase}>Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full h-[44px] px-3 rounded-[7px] outline-none bg-white dark:bg-transparent text-black dark:text-white placeholder:text-gray-400"
                  style={{ ...inputBase, border: "1px solid red" }}
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="empresa" className="text-black dark:text-white" style={labelBase}>Nome Da Empresa</label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Sua empresa"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full h-[44px] px-3 rounded-[7px] outline-none bg-white dark:bg-transparent text-black dark:text-white placeholder:text-gray-400"
                  style={{ ...inputBase, border: "1px solid red" }}
                />
              </div>
            </div>

            {/* Checkboxes — Mobile: 1 coluna | Tablet+: 2 colunas */}
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-black dark:text-white" style={labelBase}>Assunto</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {subjectOptions.map((opt) => (
                  <RadioCheckbox
                    key={opt.id}
                    id={opt.id}
                    label={opt.label}
                    icon={opt.icon}
                    checked={selected.includes(opt.id)}
                    onChange={() => toggleSubject(opt.id)}
                  />
                ))}
              </div>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-1">
              <label htmlFor="mensagem" className="text-black dark:text-white" style={labelBase}>
                Mensagem <span style={{ color: "#e30613" }}>*</span>
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva seu projeto ou dúvida..."
                value={form.assunto}
                onChange={(e) => { setForm({ ...form, assunto: e.target.value }); if (fieldErrors.assunto) setFieldErrors({ ...fieldErrors, assunto: "" }); }}
                className="w-full px-3 py-2 rounded-[7px] outline-none resize-none transition-colors bg-white dark:bg-transparent text-black dark:text-white placeholder:text-gray-400"
                rows={4}
                style={{ ...inputBase, border: fieldErrors.assunto ? "1px solid #ef4444" : "1px solid red" }}
              />
              {fieldErrors.assunto && (
                <span style={{ color: "#ef4444", fontSize: "12px", fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {fieldErrors.assunto}
                </span>
              )}
            </div>

            {/* Botão Enviar */}
            <div className="flex justify-end mt-1">
              <button
                type="submit"
                disabled={isPending || !isFormValid}
                className="w-full sm:w-auto h-[43px] px-8 rounded-[10px] capitalize transition-all flex items-center gap-2"
                style={{
                  background: isPending || !isFormValid
                    ? "linear-gradient(to right, #3a0000, #a00000)"
                    : "linear-gradient(to right, #520101, #f60707)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "white",
                  minWidth: "134px",
                  justifyContent: "center",
                  opacity: !isFormValid ? 0.55 : 1,
                  cursor: (!isFormValid || isPending) ? "not-allowed" : "pointer",
                }}
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <title>Carregando</title>
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
