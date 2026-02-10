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
    icon: "/icons/kumbaya.svg",
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
    icon: "/icons/sectorone.svg",
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
    icon: "/icons/warpx.svg",
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
    icon: "/icons/prism.svg",
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
    icon: "/icons/maniafun.svg",
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
    icon: "/icons/hitone.svg",
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
    icon: "/icons/supernova.svg",
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
    icon: "/icons/canonic.svg",
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
    icon: "/icons/leveragesir.svg",
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
    icon: "/icons/avon.svg",
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
    icon: "/icons/capmoney.svg",
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
    icon: "/icons/topstrike.svg",
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
    icon: "/icons/showdown.svg",
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
    icon: "/icons/offshore.svg",
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
    icon: "/icons/aicrypts.svg",
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
    icon: "/icons/aveforge.svg",
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
    icon: "/icons/dorado.svg",
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
    icon: "/icons/pumpparty.svg",
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
    icon: "/icons/prioritytrade.svg",
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
    icon: "/icons/bananagun.svg",
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
    icon: "/icons/birdeye.svg",
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
    icon: "/icons/dexscreener.svg",
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
    icon: "/icons/kyberswap.svg",
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
    icon: "/icons/ubitel.svg",
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
    icon: "/icons/cilium.svg",
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
    icon: "/icons/reach.svg",
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
    icon: "/icons/lemonade.svg",
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
    icon: "/icons/nectarai.svg",
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
    icon: "/icons/brix.svg",
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
