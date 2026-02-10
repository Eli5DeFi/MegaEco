export interface FlowStep {
  id: string;
  action: string;
  protocolName: string;
  protocolUrl: string;
  description: string;
  order: number;
  subSteps?: {
    protocolName: string;
    protocolUrl: string;
    description: string;
  }[];
}

export interface FlowCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  cssColor: string;
  steps: FlowStep[];
}

export const flowCategories: FlowCategory[] = [
  {
    id: "yield",
    name: "Yield",
    icon: "\u{1F7E2}",
    color: "yield",
    cssColor: "var(--accent-yield)",
    steps: [
      {
        id: "yield-1",
        action: "Deposit $USDM into MegaVault",
        protocolName: "Avon",
        protocolUrl: "https://avon.xyz",
        description:
          "Composable orderbook-based lending. Deposit into MegaVault for yield on your USDM holdings.",
        order: 1,
      },
      {
        id: "yield-2",
        action: "Bridge in and LP some $CUSD",
        protocolName: "Cap Money",
        protocolUrl: "https://cap.money",
        description:
          "$CUSD stablecoin with verifiable yield. Bridge in and provide liquidity for stablecoin yield.",
        order: 2,
      },
    ],
  },
  {
    id: "trading",
    name: "Trading",
    icon: "\u{1F535}",
    color: "trading",
    cssColor: "var(--accent-trading)",
    steps: [
      {
        id: "trading-1",
        action: "Trade memes, then leverage or LP",
        protocolName: "Kumbaya",
        protocolUrl: "https://kumbaya.xyz",
        description:
          "DEX for ecosystem tokens & native launches. Trade memes then send to leverage or DLMM.",
        order: 1,
        subSteps: [
          {
            protocolName: "LeverageSir",
            protocolUrl: "https://sir.trading",
            description: "Leverage without liquidation, no funding rates",
          },
          {
            protocolName: "SectorOne",
            protocolUrl: "https://sectorone.xyz",
            description: "Native DLMM DEX for fee generation",
          },
        ],
      },
      {
        id: "trading-2",
        action: "Trench with native bots",
        protocolName: "PriorityTrade",
        protocolUrl: "https://prioritytrade.xyz",
        description:
          "Native trading bot live on Birdeye & DexScreener. Fast execution for trenching.",
        order: 2,
      },
      {
        id: "trading-3",
        action: "Check out new midpoint-anchored CLOB",
        protocolName: "Canonic",
        protocolUrl: "https://canonic.xyz",
        description:
          "Novel CLOB design with midpoint-anchored orders. A new approach to on-chain orderbooks.",
        order: 3,
      },
      {
        id: "trading-4",
        action: "Trade rates, FX, and cross-crypto",
        protocolName: "Supernova Labs",
        protocolUrl: "https://supernovalabs.xyz",
        description:
          "Orderbook trading for interest rates, FX pairs, and cross-crypto instruments.",
        order: 4,
      },
    ],
  },
  {
    id: "games",
    name: "Games",
    icon: "\u{1F7E3}",
    color: "games",
    cssColor: "var(--accent-games)",
    steps: [
      {
        id: "games-1",
        action: "Football/soccer speculation",
        protocolName: "TopStrike",
        protocolUrl: "https://topstrike.io",
        description:
          "Fantasy football draft based on real-time pitch data. Speculate on live matches.",
        order: 1,
      },
      {
        id: "games-2",
        action: "Poker + TCG mechanics",
        protocolName: "Showdown",
        protocolUrl: "https://showdown.gg",
        description:
          "Poker supercharged with trading card game action cards. Unique blend of skill-based gameplay.",
        order: 2,
      },
      {
        id: "games-3",
        action: "Gacha + perp money-game",
        protocolName: "Offshore",
        protocolUrl: "https://offshore.game",
        description:
          "GambolFi — gacha mechanics combined with perpetual money-game elements. Currently bootstrapping.",
        order: 3,
      },
      {
        id: "games-4",
        action: "AI prompt competition",
        protocolName: "AiCrypts",
        protocolUrl: "https://aicrypts.xyz",
        description:
          "Compete with your AI prompts. Earn rewards for creative and effective prompt engineering.",
        order: 4,
      },
    ],
  },
];
