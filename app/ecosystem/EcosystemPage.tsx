"use client";

import { protocols } from "@/data/protocols";
import { useFilteredProtocols } from "@/hooks/useFilteredProtocols";
import SearchBar from "@/components/ecosystem/SearchBar";
import CategoryFilter from "@/components/ecosystem/CategoryFilter";
import ProtocolGrid from "@/components/ecosystem/ProtocolGrid";
import styles from "./ecosystem.module.css";

export default function EcosystemPage() {
  const {
    filtered,
    search,
    setSearch,
    category,
    setCategory,
    showMafiaOnly,
    setShowMafiaOnly,
    showLiveOnly,
    setShowLiveOnly,
  } = useFilteredProtocols(protocols);

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>Directory</span>
          <h1 className={styles.title}>Ecosystem Map</h1>
          <p className={styles.subtitle}>
            Explore all {protocols.length} protocols building on MegaETH.
            Filter by category, status, or search by name.
          </p>
        </header>

        <div className={styles.controls}>
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter
            selected={category}
            onSelect={setCategory}
            showMafiaOnly={showMafiaOnly}
            onToggleMafia={setShowMafiaOnly}
            showLiveOnly={showLiveOnly}
            onToggleLive={setShowLiveOnly}
          />
        </div>

        <div className={styles.resultCount}>
          <span>
            {filtered.length} protocol{filtered.length !== 1 ? "s" : ""}
          </span>
          {(search || category !== "all" || showMafiaOnly || showLiveOnly) && (
            <button
              className={styles.clearAll}
              onClick={() => {
                setSearch("");
                setCategory("all");
                setShowMafiaOnly(false);
                setShowLiveOnly(false);
              }}
            >
              Clear all filters
            </button>
          )}
        </div>

        <ProtocolGrid protocols={filtered} />
      </div>
    </div>
  );
}
