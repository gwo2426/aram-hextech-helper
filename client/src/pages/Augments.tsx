import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import DataNotice from "@/components/DataNotice";
import { allAugments, augmentCategories, getAugmentsByTier, searchAugments, type Augment } from "@/data/augments-complete";

type TierType = "棱彩" | "金色" | "银色" | "全部";

const tierMeta: Record<Augment["tier"], { tone: string; dot: string }> = {
  棱彩: { tone: "border-fuchsia-400/35 bg-fuchsia-400/5 text-fuchsia-200", dot: "bg-fuchsia-300" },
  金色: { tone: "border-amber-300/35 bg-amber-300/5 text-amber-100", dot: "bg-amber-300" },
  银色: { tone: "border-slate-300/25 bg-slate-300/5 text-slate-200", dot: "bg-slate-300" },
};

export default function Augments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<TierType>("全部");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredAugments = useMemo(() => {
    const base = searchQuery.trim() ? searchAugments(searchQuery.trim()) : allAugments;
    return base.filter((augment) => (selectedTier === "全部" || augment.tier === selectedTier) && (selectedCategory === "全部" || augment.category === selectedCategory));
  }, [searchQuery, selectedTier, selectedCategory]);

  const tierCounts: Record<TierType, number> = {
    全部: allAugments.length,
    棱彩: getAugmentsByTier("棱彩").length,
    金色: getAugmentsByTier("金色").length,
    银色: getAugmentsByTier("银色").length,
  };

  const hasFilters = Boolean(searchQuery || selectedTier !== "全部" || selectedCategory !== "全部");
  const clearFilters = () => { setSearchQuery(""); setSelectedTier("全部"); setSelectedCategory("全部"); };

  return (
    <div className="app-shell">
      <Navigation />
      <main className="container py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="eyebrow">Reference / Augments</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">符文速查</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">按效果和类型缩小选择范围。先判断它是否匹配英雄玩法，再考虑是否能与已有符文组成套路。</p>
        </header>

        <DataNotice scope="当前符文资料" className="mt-7" />

        <section className="mt-8 rounded-lg border border-border bg-card/50 p-4 sm:p-5" aria-label="符文筛选">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" placeholder="搜索中文名、英文名或效果，例如：雪球、护盾、暴击" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
          </div>
          <div className="mt-5 space-y-4">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground"><SlidersHorizontal className="h-3.5 w-3.5" />稀有度</p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(tierCounts) as TierType[]).map((tier) => (
                  <button key={tier} type="button" data-active={selectedTier === tier} aria-pressed={selectedTier === tier} onClick={() => setSelectedTier(tier)} className="filter-pill inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm">
                    {tier}<span className="metric-value text-xs opacity-75">{tierCounts[tier]}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground"><SlidersHorizontal className="h-3.5 w-3.5" />类型</p>
              <div className="flex flex-wrap gap-2">
                {["全部", ...augmentCategories].map((category) => (
                  <button key={category} type="button" data-active={selectedCategory === category} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)} className="filter-pill rounded-md px-3 py-1.5 text-xs sm:text-sm">{category}{category === "全部" ? "类型" : ""}</button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">显示 <span className="metric-value font-semibold text-foreground">{filteredAugments.length}</span> / {allAugments.length} 个符文</p>
          {hasFilters && <button type="button" onClick={clearFilters} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"><X className="h-4 w-4" />清除筛选</button>}
        </div>

        {filteredAugments.length > 0 ? (
          <section className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {filteredAugments.map((augment) => {
              const meta = tierMeta[augment.tier];
              return (
                <article key={augment.id} className="surface surface-hover flex min-h-64 flex-col rounded-lg p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs ${meta.tone}`}><span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />{augment.tier}</span>
                    <span className="truncate text-xs text-muted-foreground">{augment.category}</span>
                  </div>
                  <div className="mt-5">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">{augment.name}</h2>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{augment.nameEn}</p>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-foreground/90">{augment.effect}</p>
                  <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">{augment.detailedEffect}</p>
                  {augment.synergy.length > 0 && <div className="mt-auto pt-5"><p className="mb-2 text-xs text-muted-foreground">适配方向</p><div className="flex flex-wrap gap-1.5">{augment.synergy.slice(0, 4).map((hero) => <span key={hero} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">{hero}</span>)}</div></div>}
                </article>
              );
            })}
          </section>
        ) : (
          <div className="surface mt-4 rounded-lg px-5 py-16 text-center"><Sparkles className="mx-auto h-6 w-6 text-muted-foreground" /><p className="mt-4 font-medium text-foreground">没有匹配的符文</p><p className="mt-1 text-sm text-muted-foreground">换一个关键词，或清除筛选后再试。</p><button type="button" onClick={clearFilters} className="mt-5 text-sm font-medium text-primary hover:underline">重置筛选</button></div>
        )}
      </main>
    </div>
  );
}
