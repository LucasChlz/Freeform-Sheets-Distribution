import { defineConfig } from "vitepress";

// Sheet Tailor documentation, served by a Cloudflare Worker with static assets (see wrangler.toml), the same
// account as the Patreon gate. English lives at the root, Portuguese under /pt/.

const REPO = "https://github.com/LucasChlz/Freeform-Sheets-Distribution";
const DISCORD = "https://discord.gg/BtCGmbGEWR";
const BASE = "/";

const sidebarPt = [
  {
    text: "Começando",
    items: [
      { text: "Instalação", link: "/pt/guia/instalacao" },
      { text: "Primeiros passos", link: "/pt/guia/primeiros-passos" }
    ]
  },
  {
    text: "Personalizar a ficha do sistema",
    items: [{ text: "Personalizar ficha", link: "/pt/guia/personalizar-a-ficha" }]
  },
  {
    text: "Ficha Livre",
    items: [
      { text: "Visão geral", link: "/pt/guia/ficha-livre" },
      { text: "O editor de layout", link: "/pt/guia/editor-de-layout" },
      { text: "Páginas e fundos", link: "/pt/guia/paginas-e-fundos" },
      { text: "Elementos", link: "/pt/guia/elementos" },
      { text: "Vínculos com os dados", link: "/pt/guia/vinculos" }
    ]
  },
  {
    text: "Sistemas",
    items: [
      { text: "D&D 5e", link: "/pt/sistemas/dnd5e" },
      { text: "Pathfinder 2e", link: "/pt/sistemas/pf2e" },
      { text: "FateX", link: "/pt/sistemas/fatex" },
      { text: "Outros sistemas", link: "/pt/sistemas/outros" }
    ]
  },
  {
    text: "Recursos",
    items: [
      { text: "Compartilhar e exemplos", link: "/pt/guia/compartilhar" },
      { text: "Fichas animadas", link: "/pt/guia/fichas-animadas" },
      { text: "Configurações e permissões", link: "/pt/guia/configuracoes" },
      { text: "Perguntas frequentes", link: "/pt/guia/problemas" }
    ]
  },
  {
    text: "Desenvolvedores",
    collapsed: true,
    items: [
      { text: "API e ganchos", link: "/pt/dev/api" },
      { text: "Formato do layout", link: "/pt/dev/layout" },
      { text: "Adaptadores de sistema", link: "/pt/dev/adaptadores" }
    ]
  },
  { text: "Versões", link: "/pt/novidades" }
];

const sidebarEn = [
  {
    text: "Getting started",
    items: [
      { text: "Installation", link: "/guide/installation" },
      { text: "First steps", link: "/guide/getting-started" }
    ]
  },
  {
    text: "Customize the system's sheet",
    items: [{ text: "Customize sheet", link: "/guide/customize-sheet" }]
  },
  {
    text: "Freeform Sheet",
    items: [
      { text: "Overview", link: "/guide/freeform-sheet" },
      { text: "The layout editor", link: "/guide/layout-editor" },
      { text: "Pages and backgrounds", link: "/guide/pages-and-backgrounds" },
      { text: "Elements", link: "/guide/elements" },
      { text: "Data links", link: "/guide/data-links" }
    ]
  },
  {
    text: "Systems",
    items: [
      { text: "D&D 5e", link: "/systems/dnd5e" },
      { text: "Pathfinder 2e", link: "/systems/pf2e" },
      { text: "FateX", link: "/systems/fatex" },
      { text: "Other systems", link: "/systems/other" }
    ]
  },
  {
    text: "Resources",
    items: [
      { text: "Sharing and examples", link: "/guide/sharing" },
      { text: "Animated sheets", link: "/guide/animated-sheets" },
      { text: "Settings and permissions", link: "/guide/settings" },
      { text: "FAQ", link: "/guide/faq" }
    ]
  },
  {
    text: "Developers",
    collapsed: true,
    items: [
      { text: "API and hooks", link: "/dev/api" },
      { text: "Layout format", link: "/dev/layout" },
      { text: "System adapters", link: "/dev/adapters" }
    ]
  },
  { text: "Versions", link: "/changelog" }
];

export default defineConfig({
  base: BASE,
  cleanUrls: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", type: "image/svg+xml", href: `${BASE}logo.svg` }]],

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Sheet Tailor",
    // Page addresses differ between languages (/guide/... and /pt/guia/...), so the language menu opens the other
    // language's home page instead of guessing a path that does not exist.
    i18nRouting: false,
    socialLinks: [
      { icon: "discord", link: DISCORD },
      { icon: "github", link: REPO }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          pt: {
            translations: {
              button: { buttonText: "Buscar", buttonAriaLabel: "Buscar" },
              modal: {
                displayDetails: "Mostrar detalhes",
                resetButtonTitle: "Limpar a busca",
                backButtonTitle: "Fechar a busca",
                noResultsText: "Nada encontrado para",
                footer: { selectText: "abrir", navigateText: "navegar", closeText: "fechar" }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "Sheet Tailor",
      description: "Documentation of Sheet Tailor, the character sheet module for Foundry VTT.",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/getting-started", activeMatch: "^/guide/" },
          { text: "Systems", link: "/systems/dnd5e", activeMatch: "^/systems/" },
          { text: "Developers", link: "/dev/api", activeMatch: "^/dev/" },
          { text: "Versions", link: "/changelog" }
        ],
        sidebar: { "/guide/": sidebarEn, "/systems/": sidebarEn, "/dev/": sidebarEn, "/changelog": sidebarEn },
        outline: { level: [2, 3], label: "On this page" },
        footer: {
          message: "Sheet Tailor is free. Made by Lontra the Wizard.",
          copyright: "MIT License"
        }
      }
    },
    pt: {
      label: "Português",
      lang: "pt-BR",
      link: "/pt/",
      title: "Sheet Tailor",
      description: "Documentação do Sheet Tailor, o módulo de fichas para o Foundry VTT.",
      themeConfig: {
        nav: [
          { text: "Guia", link: "/pt/guia/primeiros-passos", activeMatch: "/pt/guia/" },
          { text: "Sistemas", link: "/pt/sistemas/dnd5e", activeMatch: "/pt/sistemas/" },
          { text: "Desenvolvedores", link: "/pt/dev/api", activeMatch: "/pt/dev/" },
          { text: "Versões", link: "/pt/novidades" }
        ],
        sidebar: { "/pt/": sidebarPt },
        outline: { level: [2, 3], label: "Nesta página" },
        docFooter: { prev: "Anterior", next: "Próxima" },
        lastUpdated: { text: "Atualizado em" },
        darkModeSwitchLabel: "Aparência",
        lightModeSwitchTitle: "Mudar para o tema claro",
        darkModeSwitchTitle: "Mudar para o tema escuro",
        sidebarMenuLabel: "Menu",
        returnToTopLabel: "Voltar ao topo",
        langMenuLabel: "Mudar o idioma",
        notFound: {
          title: "PÁGINA NÃO ENCONTRADA",
          quote: "Esta página não existe ou mudou de lugar.",
          linkLabel: "Ir para o início",
          linkText: "Voltar ao início"
        },
        footer: {
          message: "Sheet Tailor é gratuito. Feito por Lontra the Wizard.",
          copyright: "Licença MIT"
        }
      }
    }
  }
});
