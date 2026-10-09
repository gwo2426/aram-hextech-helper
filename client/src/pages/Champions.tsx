import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import DataNotice from "@/components/DataNotice";
import { allAugments } from "@/data/augments-complete";
import { allChampions, getTierColor, getTierLabel, roles } from "@/data/champions-full";

const tierOrder: Record<string, number> = { "S+": 0, S: 1, A: 2, B: 3, C: 4, D: 5 };

export default function Champions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("全部");

  const filteredChampions = useMemo(() => allChampions
    .filter((champion) => {
      const keyword = searchQuery.trim().toLowerCase();
      const matchesSearch = !keyword || champion.name.toLowerCase().includes(keyword) || champion.nameEn.toLowerCase().includes(keyword);
      return matchesSearch && (selectedRole === "全部" || champion.role.includes(selectedRole));
    })
    .sort((left, right) => tierOrder[left.tier] - tierOrder[right.tier] || right.winRate - left.winRate), [searchQuery, selectedRole]);

  const getAugmentName = (reference: string) => allAugments.find((augment) => augment.id === reference || augment.name === reference)?.name ?? reference;

  return (
    <div className="app-shell">
      <Navigation />
      <main className="container py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="eyebrow">Reference / Champions</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">英雄参考</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">用英雄玩法、模式统计快照和推荐符文做快速判断。数据是参考，不替代当局阵容与个人熟练度。</p>
        </header>

        <DataNotice scope="英雄胜率、登场率与推荐" className="mt-7" />

        <section className="mt-8 rounded-lg border border-border bg-card/50 p-4 sm:p-5" aria-label="英雄筛选">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" placeholder="搜索英雄中文名或英文名，例如：拉克丝、Lux" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {roles.map((role) => <button key={role} type="button" data-active={selectedRole === role} aria-pressed={selectedRole === role} onClick={() => setSelectedRole(role)} className="filter-pill rounded-md px-3 py-1.5 text-sm">{role}</button>)}
          </div>
        </section>

        <div className="mt-7 flex items-center justify-between gap-4"><p className="text-sm text-muted-foreground">显示 <span className="metric-value font-semibold text-foreground">{filteredChampions.length}</span> / {allChampions.length} 位英雄</p><span className="hidden text-xs text-muted-foreground sm:block">按评级与胜率快照排序</span></div>

        {filteredChampions.length > 0 ? (
          <section className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {filteredChampions.map((champion) => (
              <article key={champion.id} className="surface surface-hover rounded-lg p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-semibold tracking-tight">{champion.name}</h2><span className={`rounded border border-current/25 px-1.5 py-0.5 text-xs font-medium ${getTierColor(champion.tier)}`}>{getTierLabel(champion.tier)}</span></div>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{champion.nameEn}</p>
                  </div>
                  <span className="metric-value text-sm text-muted-foreground">{champion.difficulty}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">{champion.role.map((role) => <span key={role} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">{role}</span>)}</div>
                <div className="mt-4 grid grid-cols-2 divide-x divide-border border-y border-border py-3">
                  <div className="pr-3"><p className="text-xs text-muted-foreground">胜率快照</p><p className="metric-value mt-1 text-lg font-semibold text-primary">{champion.winRate}%</p></div>
                  <div className="pl-3"><p className="text-xs text-muted-foreground">登场率</p><p className="metric-value mt-1 text-lg font-semibold text-foreground">{champion.pickRate}%</p></div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{champion.playstyle}</p>
                <div className="mt-4 border-t border-border pt-4"><p className="mb-2 text-xs text-muted-foreground">优先考虑</p><div className="flex flex-wrap gap-1.5">{champion.recommendedAugments.slice(0, 4).map((augment) => <span key={augment} className="rounded border border-border px-2 py-1 text-xs text-foreground/85">{getAugmentName(augment)}</span>)}</div></div>
              </article>
            ))}
          </section>
        ) : (
          <div className="surface mt-4 rounded-lg px-5 py-16 text-center"><Users className="mx-auto h-6 w-6 text-muted-foreground" /><p className="mt-4 font-medium text-foreground">没有匹配的英雄</p><p className="mt-1 text-sm text-muted-foreground">请尝试更短的关键词，或选择“全部”。</p></div>
        )}
      </main>
    </div>
  );
}
