"use client";

import { useMemo, useState } from "react";
import { Protocol } from "@/data/protocols";

interface UseFilteredProtocolsReturn {
  filtered: Protocol[];
  search: string;
  setSearch: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
  showMafiaOnly: boolean;
  setShowMafiaOnly: (b: boolean) => void;
  showLiveOnly: boolean;
  setShowLiveOnly: (b: boolean) => void;
}

export function useFilteredProtocols(
  protocols: Protocol[]
): UseFilteredProtocolsReturn {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showMafiaOnly, setShowMafiaOnly] = useState(false);
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...protocols];

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // Mafia filter
    if (showMafiaOnly) {
      result = result.filter((p) => p.isMegaMafia);
    }

    // Live only filter
    if (showLiveOnly) {
      result = result.filter((p) => p.status === "live");
    }

    return result;
  }, [protocols, search, category, showMafiaOnly, showLiveOnly]);

  return {
    filtered,
    search,
    setSearch,
    category,
    setCategory,
    showMafiaOnly,
    setShowMafiaOnly,
    showLiveOnly,
    setShowLiveOnly,
  };
}
