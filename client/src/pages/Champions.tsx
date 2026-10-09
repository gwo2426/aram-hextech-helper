import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Heart, Search, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import DataNotice from "@/components/DataNotice";
import { allAugments } from "@/data/augments-complete";
import { allChampions, getTierColor, getTierLabel, roles } from "@/data/champions-full";

const tierOrder: Record<string, number> = { "S+": 0, S: 1, A: 2, B: 3, C: 4, D: 5 };
const favoritesStorageKey = "aram-mayhem.favorite-champion-ids";

function loadFavoriteIds() {
  if (typeof window === "undefined") return new Set<string>();
  try {
    const value = window.localStorage.getItem(favoritesStorageKey);
    return new Set<string>(value ? JSON.parse(value) : []);
  } catch {
    return new Set<string>();
  }
}

export default function Champions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("全部");
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(loadFavoriteIds);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [expandedChampionId, setExpandedChampionId] = useState<string | null>(null);

  useEffect(() => {
    window.localStorage.setItem(favoritesStorageKey, JSON.stringify(Array.from(favoriteIds)));
  }, [favoriteIds]);

  const filteredChampions = useMemo(() => allChampions
    .filter((champion) => {
      const keyword = searchQuery.trim().toLowerCase();
      const matchesSearch = !keyword || champion.name.toLowerCase().includes(keyword) || champion.nameEn.toLowerCase().includes(keyword);
      const matchesRole = selectedRole === "全部" || champion.role.includes(selectedRole);
      const matchesFavorite = !favoritesOnly || favoriteIds.has(champion.id);
      return matchesSearch && matchesRole && matchesFavorite;
    })
    .sort((left, right) => {
      const favoriteDifference = Number(favoriteIds.has(right.id)) - Number(favoriteIds.has(left.id));
      return favoriteDifference || tierOrder[left.tier] - tierOrder[right.tier] || right.winRate - left.winRate;
    }), [favoriteIds, favoritesOnly, searchQuery, selectedRole]);

  const getAugmentName = (reference: string) => allAugments.find((augment) => augment.id === reference || augment.name === reference)?.name ?? reference;

  const toggleFavorite = (championId: string) => {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(championId)) next.delete(championId);
      else next.add(championId);
      return next;
    });
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedRole("全部");
    setFavoritesOnly(false);
  };

  return (
    <div className="app-shell">
      <Navigation />
      <main className="container py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="eyebrow">Reference / Champions</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">英雄参考</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">用英雄玩法、模式统计快照和推荐符文做快速判断。点击卡片底部可查看优势、风险和对局提示；收藏会保存在当前浏览器。</p>
        </header>

        <DataNotice scope="英雄胜率、登场率与推荐" className="mt-7" />

        <section className="mt-8 rounded-lg border border-border bg-card/50 p-4 sm:p-5" aria-label="英雄筛选">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" placeholder="搜索英雄中文名或英文名，例如：拉克丝、Lux" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {roles.map((role) => <button key={role} type="button" data-active={selectedRole === role} aria-pressed={selectedRole === role} onClick={() => setSelectedRole(role)} className="filter-pill rounded-md px-3 py-1.5 text-sm">{role}</button>)}
            <button type="button" data-active={favoritesOnly} aria-pressed={favoritesOnly} onClick={() => setFavoritesOnly((current) => !current)} className="filter-pill inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm"><Heart className={`h-3.5 w-3.5 ${favoritesOnly ? "fill-current" : ""}`} />只看收藏<span className="metric-value text-xs opacity-75">{favoriteIds.size}</span></button>
          </div>
        </section>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">显示 <span className="metric-value font-semibold text-foreground">{filteredChampions.length}</span> / {allChampions.length} 位英雄</p>
          <span className="text-xs text-muted-foreground">收藏优先，其次按评级与胜率快照排序</span>
        </div>

        {filteredChampions.length > 0 ? (
          <section className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {filteredChampions.map((champion) => {
              const isFavorite = favoriteIds.has(champion.id);
              const isExpanded = expandedChampionId === champion.id;
              return (
                <article key={champion.id} className={`surface rounded-lg p-5 transition-colors ${isExpanded ? "border-primary/60" : "surface-hover"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-semibold tracking-tight">{champion.name}</h2><span className={`rounded border border-current/25 px-1.5 py-0.5 text-xs font-medium ${getTierColor(champion.tier)}`}>{getTierLabel(champion.tier)}</span></div>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{champion.nameEn}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="metric-value text-sm text-muted-foreground">{champion.difficulty}</span>
                      <button type="button" aria-label={isFavorite ? `取消收藏 ${champion.name}` : `收藏 ${champion.name}`} aria-pressed={isFavorite} onClick={() => toggleFavorite(champion.id)} className={`grid h-8 w-8 place-items-center rounded-md border transition-colors ${isFavorite ? "border-rose-300/55 bg-rose-300/10 text-rose-200" : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"}`}>
                        <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">{champion.role.map((role) => <span key={role} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">{role}</span>)}</div>
                  <div className="mt-4 grid grid-cols-2 divide-x divide-border border-y border-border py-3">
                    <div className="pr-3"><p className="text-xs text-muted-foreground">胜率快照</p><p className="metric-value mt-1 text-lg font-semibold text-primary">{champion.winRate}%</p></div>
                    <div className="pl-3"><p className="text-xs text-muted-foreground">登场率</p><p className="metric-value mt-1 text-lg font-semibold text-foreground">{champion.pickRate}%</p></div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{champion.playstyle}</p>
                  <div className="mt-4 border-t border-border pt-4"><p className="mb-2 text-xs text-muted-foreground">优先考虑</p><div className="flex flex-wrap gap-1.5">{champion.recommendedAugments.slice(0, 4).map((augment) => <span key={augment} className="rounded border border-border px-2 py-1 text-xs text-foreground/85">{getAugmentName(augment)}</span>)}</div></div>

                  {isExpanded && <div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2"><div><p className="mb-2 text-xs font-medium text-primary">优势</p><ul className="space-y-1.5 text-sm text-muted-foreground">{champion.strengths.map((item) => <li key={item}>— {item}</li>)}</ul></div><div><p className="mb-2 text-xs font-medium text-amber-200">风险</p><ul className="space-y-1.5 text-sm text-muted-foreground">{champion.weaknesses.map((item) => <li key={item}>— {item}</li>)}</ul></div><div className="rounded-md bg-secondary/55 p-3 sm:col-span-2"><p className="text-xs font-medium text-foreground">对局判断</p><p className="mt-1.5 text-sm leading-6 text-muted-foreground">若你的队伍缺少{champion.role.includes("坦克") ? "前排或开团" : champion.role.includes("辅助") ? "保护与团队增益" : champion.role.includes("射手") ? "持续物理输出" : "远程输出与控制"}，可以优先考虑围绕该英雄构筑；同时留意上方列出的风险条件。</p></div></div>}

                  <button type="button" aria-expanded={isExpanded} onClick={() => setExpandedChampionId(isExpanded ? null : champion.id)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">{isExpanded ? <>收起详情 <ChevronUp className="h-4 w-4" /></> : <>查看详情 <ChevronDown className="h-4 w-4" /></>}</button>
                </article>
              );
            })}
          </section>
        ) : (
          <div className="surface mt-4 rounded-lg px-5 py-16 text-center"><Users className="mx-auto h-6 w-6 text-muted-foreground" /><p className="mt-4 font-medium text-foreground">{favoritesOnly ? "还没有收藏的英雄" : "没有匹配的英雄"}</p><p className="mt-1 text-sm text-muted-foreground">{favoritesOnly ? "点击英雄卡片右上角的心形按钮，即可在当前浏览器收藏。" : "请尝试更短的关键词，或选择“全部”。"}</p><button type="button" onClick={resetFilters} className="mt-5 text-sm font-medium text-primary hover:underline">重置筛选</button></div>
        )}
      </main>
    </div>
  );
}
