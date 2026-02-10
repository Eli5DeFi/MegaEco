export type ProtocolCategory =
  | "defi"
  | "trading"
  | "stablecoin"
  | "gaming"
  | "infrastructure"
  | "social"
  | "nft"
  | "tools"
  | "lending"
  | "analytics";

export type ProtocolStatus = "live" | "coming_soon" | "invite_only";

export interface Protocol {
  slug: string;
  name: string;
  description: string;
  category: ProtocolCategory;
  tags: string[];
  status: ProtocolStatus;
  isMegaMafia: boolean;
  icon: string;
  links: {
    website?: string;
    twitter?: string;
    discord?: string;
    docs?: string;
  };
}

export const protocols: Protocol[] = [
  // DeFi & Trading
  {
    slug: "kumbaya",
    name: "Kumbaya",
    description: "Ecosystem tokens & native launches with creator rewards",
    category: "trading",
    tags: ["dex", "trading", "launches"],
    status: "live",
    isMegaMafia: true,
    icon: "https://raw.githubusercontent.com/Kumbaya-xyz/brand-assets/main/with-logo/logo-only/kumbaya-icon-red.svg",
    links: {
      website: "https://kumbaya.xyz",
      twitter: "https://twitter.com/kumbaya_xyz",
    },
  },
  {
    slug: "sectorone",
    name: "SectorOne",
    description: "Native DLMM DEX for efficient trading",
    category: "trading",
    tags: ["dex", "dlmm", "trading"],
    status: "live",
    isMegaMafia: true,
    icon: "https://sectorone.xyz/favicon.ico",
    links: {
      website: "https://sectorone.xyz",
      twitter: "https://twitter.com/SectorOneDEX",
    },
  },
  {
    slug: "warpx",
    name: "WarpX",
    description: "Fast native AMM for low-slippage spot trading",
    category: "defi",
    tags: ["amm", "trading", "spot"],
    status: "live",
    isMegaMafia: false,
    icon: "https://warpx.xyz/favicon.ico",
    links: {
      website: "https://warpx.xyz",
    },
  },
  {
    slug: "prism",
    name: "Prism",
    description: "Fastest way to trade on MegaETH",
    category: "trading",
    tags: ["dex", "trading", "fast"],
    status: "live",
    isMegaMafia: false,
    icon: "https://prism.exchange/favicon.ico",
    links: {
      website: "https://prism.exchange",
    },
  },
  {
    slug: "maniafun",
    name: "ManiaFun",
    description: "Native real-time trading layer",
    category: "trading",
    tags: ["trading", "real-time"],
    status: "live",
    isMegaMafia: false,
    icon: "https://mania.fun/favicon.ico",
    links: {
      website: "https://mania.fun",
    },
  },
  {
    slug: "hitone",
    name: "Hit.One",
    description: "Gamified extreme leverage (666x ETH Long)",
    category: "trading",
    tags: ["leverage", "gamified"],
    status: "invite_only",
    isMegaMafia: false,
    icon: "https://hit.one/favicon.ico",
    links: {
      website: "https://hit.one",
    },
  },
  {
    slug: "supernova",
    name: "Supernova Labs",
    description: "Orderbook trading for interest rates, FX, cross-crypto",
    category: "trading",
    tags: ["orderbook", "fx", "rates"],
    status: "invite_only",
    isMegaMafia: false,
    icon: "https://supernovalabs.xyz/favicon.ico",
    links: {
      website: "https://supernovalabs.xyz",
      twitter: "https://twitter.com/SupernovaLabs_",
    },
  },
  {
    slug: "canonic",
    name: "Canonic",
    description: "Midpoint-anchored CLOB design",
    category: "trading",
    tags: ["clob", "orderbook"],
    status: "live",
    isMegaMafia: false,
    icon: "https://canonic.xyz/favicon.ico",
    links: {
      website: "https://canonic.xyz",
      twitter: "https://twitter.com/_canonic",
    },
  },
  {
    slug: "leveragesir",
    name: "LeverageSir",
    description: "Leverage without liquidation, no funding rates",
    category: "trading",
    tags: ["leverage", "no-liquidation"],
    status: "live",
    isMegaMafia: true,
    icon: "https://raw.githubusercontent.com/SIR-trading/sir-landing/main/public/logo_240x240.png",
    links: {
      website: "https://sir.trading",
      twitter: "https://twitter.com/leveragesir",
    },
  },

  // Yield & Stablecoins
  {
    slug: "avon",
    name: "Avon",
    description: "Composable orderbook-based lending (MegaVault)",
    category: "lending",
    tags: ["lending", "vault", "yield"],
    status: "live",
    isMegaMafia: true,
    icon: "https://avon.xyz/favicon.ico",
    links: {
      website: "https://avon.xyz",
      twitter: "https://twitter.com/avon_xyz",
    },
  },
  {
    slug: "capmoney",
    name: "Cap Money",
    description: "$CUSD stablecoin with verifiable yield",
    category: "stablecoin",
    tags: ["stablecoin", "yield", "cusd"],
    status: "live",
    isMegaMafia: true,
    icon: "https://raw.githubusercontent.com/megaeth-labs/mega-tokenlist/main/data/CUSD/logo.svg",
    links: {
      website: "https://cap.money",
      twitter: "https://twitter.com/capmoney_",
    },
  },

  // Gaming
  {
    slug: "topstrike",
    name: "TopStrike",
    description: "Fantasy football draft on real-time pitch data",
    category: "gaming",
    tags: ["gaming", "football", "fantasy"],
    status: "live",
    isMegaMafia: true,
    icon: "https://topstrike.io/favicon.ico",
    links: {
      website: "https://topstrike.io",
      twitter: "https://twitter.com/TopStrikeIO",
    },
  },
  {
    slug: "showdown",
    name: "Showdown",
    description: "Poker supercharged with TCG action cards",
    category: "gaming",
    tags: ["gaming", "poker", "tcg"],
    status: "live",
    isMegaMafia: true,
    icon: "https://showdown.gg/favicon.ico",
    links: {
      website: "https://showdown.gg",
      twitter: "https://twitter.com/Showdown_TCG",
    },
  },
  {
    slug: "offshore",
    name: "Offshore",
    description: "Gacha + perpetual money-game (GambolFi)",
    category: "gaming",
    tags: ["gaming", "gacha", "perp"],
    status: "coming_soon",
    isMegaMafia: true,
    icon: "https://offshore.game/favicon.ico",
    links: {
      website: "https://offshore.game",
      twitter: "https://twitter.com/OffshoreOnMega",
    },
  },
  {
    slug: "aicrypts",
    name: "AiCrypts",
    description: "AI prompt competition",
    category: "gaming",
    tags: ["gaming", "ai", "competition"],
    status: "live",
    isMegaMafia: true,
    icon: "https://aicrypts.xyz/favicon.ico",
    links: {
      website: "https://aicrypts.xyz",
      twitter: "https://twitter.com/AiCrypts",
    },
  },
  {
    slug: "aveforge",
    name: "Ave Forge",
    description: "Mecha battle game with wagers",
    category: "gaming",
    tags: ["gaming", "battle", "mecha"],
    status: "live",
    isMegaMafia: false,
    icon: "https://aveforge.xyz/favicon.ico",
    links: {
      website: "https://aveforge.xyz",
    },
  },
  {
    slug: "dorado",
    name: "Dorado",
    description: "Persistent 3D city with provably fair gambling",
    category: "gaming",
    tags: ["gaming", "3d", "gambling"],
    status: "coming_soon",
    isMegaMafia: false,
    icon: "https://dorado.xyz/favicon.ico",
    links: {
      website: "https://dorado.xyz",
    },
  },
  {
    slug: "pumpparty",
    name: "Pump Party",
    description: "Interactive game show",
    category: "gaming",
    tags: ["gaming", "show", "interactive"],
    status: "live",
    isMegaMafia: false,
    icon: "https://pumpparty.xyz/favicon.ico",
    links: {
      website: "https://pumpparty.xyz",
    },
  },

  // Infrastructure & Tools
  {
    slug: "prioritytrade",
    name: "PriorityTrade",
    description: "Native trading bot (Birdeye + DexScreener live)",
    category: "tools",
    tags: ["bot", "trading", "sniper"],
    status: "live",
    isMegaMafia: false,
    icon: "https://prioritytrade.xyz/favicon.ico",
    links: {
      website: "https://prioritytrade.xyz",
      twitter: "https://twitter.com/PriorityTrade_",
    },
  },
  {
    slug: "bananagun",
    name: "Banana Gun",
    description: "Established trading bot",
    category: "tools",
    tags: ["bot", "trading"],
    status: "live",
    isMegaMafia: false,
    icon: "https://bananagun.io/favicon.ico",
    links: {
      website: "https://bananagun.io",
      twitter: "https://twitter.com/BananaGunBot",
    },
  },
  {
    slug: "birdeye",
    name: "Birdeye",
    description: "Blockchain data aggregator",
    category: "analytics",
    tags: ["analytics", "data", "charts"],
    status: "live",
    isMegaMafia: false,
    icon: "https://birdeye.so/favicon.ico",
    links: {
      website: "https://birdeye.so",
      twitter: "https://twitter.com/birdeye_so",
    },
  },
  {
    slug: "dexscreener",
    name: "DexScreener",
    description: "DEX analytics platform",
    category: "analytics",
    tags: ["analytics", "dex", "charts"],
    status: "live",
    isMegaMafia: false,
    icon: "https://dexscreener.com/favicon.ico",
    links: {
      website: "https://dexscreener.com",
      twitter: "https://twitter.com/dexscreener",
    },
  },
  {
    slug: "kyberswap",
    name: "KyberSwap",
    description: "DEX aggregator",
    category: "defi",
    tags: ["aggregator", "dex", "swap"],
    status: "live",
    isMegaMafia: false,
    icon: "https://kyberswap.com/favicon.ico",
    links: {
      website: "https://kyberswap.com",
      twitter: "https://twitter.com/KyberNetwork",
    },
  },
  {
    slug: "ubitel",
    name: "Ubitel",
    description: "Sovereign internet nodes with eSIM",
    category: "infrastructure",
    tags: ["infrastructure", "esim", "nodes"],
    status: "live",
    isMegaMafia: false,
    icon: "https://ubitel.xyz/favicon.ico",
    links: {
      website: "https://ubitel.xyz",
    },
  },
  {
    slug: "cilium",
    name: "Cilium",
    description: "Real-time Motion Graph for autonomous systems",
    category: "infrastructure",
    tags: ["infrastructure", "ai", "autonomous"],
    status: "coming_soon",
    isMegaMafia: false,
    icon: "https://cilium.xyz/favicon.ico",
    links: {
      website: "https://cilium.xyz",
    },
  },
  {
    slug: "reach",
    name: "Reach",
    description: "Social engagement engine for on-chain actions",
    category: "social",
    tags: ["social", "engagement", "quests"],
    status: "live",
    isMegaMafia: false,
    icon: "https://reach.xyz/favicon.ico",
    links: {
      website: "https://reach.xyz",
    },
  },
  {
    slug: "lemonade",
    name: "Lemonade",
    description: "Culture capital markets using AI agents",
    category: "social",
    tags: ["social", "ai", "culture"],
    status: "live",
    isMegaMafia: false,
    icon: "https://lemonade.xyz/favicon.ico",
    links: {
      website: "https://lemonade.xyz",
    },
  },
  {
    slug: "nectarai",
    name: "Nectar AI",
    description: "AI storytelling and companions",
    category: "social",
    tags: ["ai", "storytelling", "companions"],
    status: "live",
    isMegaMafia: false,
    icon: "https://nectarai.xyz/favicon.ico",
    links: {
      website: "https://nectarai.xyz",
    },
  },
  {
    slug: "brix",
    name: "Brix",
    description: "Yield from emerging markets (Turkish Lira)",
    category: "defi",
    tags: ["yield", "emerging-markets", "fx"],
    status: "coming_soon",
    isMegaMafia: false,
    icon: "https://brix.xyz/favicon.ico",
    links: {
      website: "https://brix.xyz",
    },
  },
];

export const categoryLabels: Record<string, string> = {
  all: "All",
  defi: "DeFi",
  trading: "Trading",
  stablecoin: "Stablecoins",
  gaming: "Gaming",
  infrastructure: "Infrastructure",
  social: "Social",
  tools: "Tools",
  lending: "Lending",
  analytics: "Analytics",
};

export const filterCategories = [
  "all",
  "defi",
  "trading",
  "lending",
  "stablecoin",
  "gaming",
  "infrastructure",
  "tools",
  "analytics",
  "social",
] as const;
