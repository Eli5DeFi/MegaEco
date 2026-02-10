export interface ProgressSegment {
  filled: boolean;
  label?: string;
}

export interface SubMetric {
  label: string;
  current: number | string;
  target: number | string;
  unit: string;
  description: string;
  progress: number;
  segments?: number;
}

export interface KPICategory {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  overallProgress: number;
  overallLabel: string;
  subMetrics: SubMetric[];
}

export const kpiCategories: KPICategory[] = [
  {
    id: "live-mafia-apps",
    number: "01",
    title: "LIVE MAFIA APPS",
    headline: "5/10",
    description:
      "All 10 Mafia apps must have verified contracts deployed on MegaETH with functioning core loops and public front-ends.",
    overallProgress: 50,
    overallLabel: "5 of 10 apps live",
    subMetrics: [
      {
        label: "Verified Contracts",
        current: 5,
        target: 10,
        unit: "/10",
        description: "Verified smart contracts deployed on MegaETH mainnet",
        progress: 50,
        segments: 10,
      },
      {
        label: "Functioning Core Loop",
        current: 5,
        target: 10,
        unit: "/10",
        description: "Apps with working core functionality",
        progress: 50,
        segments: 10,
      },
      {
        label: "Public Front-ends",
        current: 5,
        target: 10,
        unit: "/10",
        description: "Apps with publicly accessible front-end interfaces",
        progress: 50,
        segments: 10,
      },
    ],
  },
  {
    id: "usdm-supply",
    number: "02",
    title: "$500M USDM",
    headline: "7%",
    description:
      "$USDM must reach a 30-day time-weighted average supply of >$500M with 25% deposited into verified smart contracts.",
    overallProgress: 7,
    overallLabel: "$500M 30d TWAP target",
    subMetrics: [
      {
        label: "Circulating Supply",
        current: "7%",
        target: "$500M",
        unit: "",
        description: "Reaches a 30d time-weighted supply of >$500M",
        progress: 7,
      },
      {
        label: "25% Deposited in Apps",
        current: "45%",
        target: "25%",
        unit: "",
        description: "25% of circulating USDM deposited into verified smart contracts",
        progress: 45,
      },
    ],
  },
  {
    id: "daily-fees",
    number: "03",
    title: "$50K DAILY FEES",
    headline: "0%",
    description:
      "Three protocols must each generate >$50K in daily fees for 30 consecutive days.",
    overallProgress: 0,
    overallLabel: "30 consecutive days >$50k",
    subMetrics: [
      {
        label: "Cap",
        current: "$0k",
        target: "$50k",
        unit: "",
        description: "Daily fees from Cap protocol",
        progress: 0,
        segments: 30,
      },
      {
        label: "Kumbaya",
        current: "$0k",
        target: "$50k",
        unit: "",
        description: "Daily fees from Kumbaya protocol",
        progress: 0,
        segments: 30,
      },
      {
        label: "AVON",
        current: "$0k",
        target: "$50k",
        unit: "",
        description: "Daily fees from AVON protocol",
        progress: 0,
        segments: 30,
      },
    ],
  },
];

export const tgeFlow = {
  steps: ["1 KPI HITS", "7 DAYS", "TGE"],
  updateNote: "Data is updated daily at 10am ET",
};

export const mafiaApps = [
  { name: "Avon", active: true },
  { name: "Cap Money", active: true },
  { name: "Kumbaya", active: true },
  { name: "TopStrike", active: true },
  { name: "Showdown", active: true },
  { name: "Offshore", active: false },
  { name: "AiCrypts", active: false },
  { name: "LeverageSir", active: false },
  { name: "SectorOne", active: false },
  { name: "Canonic", active: false },
];
