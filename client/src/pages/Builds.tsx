import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, ShieldCheck, Swords } from "lucide-react";
import Navigation from "@/components/Navigation";
import DataNotice from "@/components/DataNotice";
import { allAugments } from "@/data/augments-complete";
import { builds } from "@/data/builds";

type BuildCategory = "全部" | "输出" | "坦克" | "辅助" | "混合";
const categories: BuildCategory[] = ["全部", "输出", "坦克", "辅助", "混合"];

export default function Builds() {
  const [selectedCategory, setSelectedCategory] = useState<BuildCategory>("全部");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const filteredBuilds = useMemo(() => selectedCategory === "全部" ? builds : builds.filter((build) => build.category === selectedCategory), [selectedCategory]);
  const getAugmentName = (reference: string) => allAugments.find((augment) => augment.id === reference || augment.name === reference)?.name ?? reference;
  const countByCategory = (category: BuildCategory) => category === "全部" ? builds.length : builds.filter((build) => build.category === category).length;

  return (
    <div className="app-shell">
      <Navigation />
      <main className="container py-10 sm:py-14">
        <header className="max-w-3xl">
          <p className="eyebrow">Signature / Builds</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">特色套路</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">从核心符文、适用英雄到风险点，先理解一套构筑怎样成立，再决定要不要围绕它继续拿。</p>
        </header>

        <DataNotice scope="套路、热度与评分" className="mt-7" />

        <section className="mt-8 flex flex-wrap gap-2" aria-label="套路分类">
          {categories.map((category) => <button key={category} type="button" data-active={selectedCategory === category} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)} className="filter-pill inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm">{category === "全部" ? "全部套路" : `${category}流`}<span className="metric-value text-xs opacity-75">{countByCategory(category)}</span></button>)}
        </section>

        <div className="mt-7 flex items-center justify-between gap-4"><p className="text-sm text-muted-foreground">显示 <span className="metric-value font-semibold text-foreground">{filteredBuilds.length}</span> 个套路</p><p className="hidden text-xs text-muted-foreground sm:block">点击“展开分析”查看取舍</p></div>

        <section className="mt-4 grid gap-3 lg:grid-cols-2">
          {filteredBuilds.map((build) => {
            const expanded = expandedId === build.id;
            return (
              <article key={build.id} className="surface rounded-lg p-5">
                <div className="flex items-start justify-between gap-3">
                  <div><div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-semibold tracking-tight">{build.name}</h2><span className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">{build.category}流</span></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{build.description}</p></div>
                  <div className="shrink-0 text-right"><p className="metric-value text-lg font-semibold text-primary">{build.rating}</p><p className="text-xs text-muted-foreground">{build.popularity}热度</p></div>
                </div>

                <div className="mt-5 border-y border-border py-4"><p className="mb-2 text-xs text-muted-foreground">核心组合</p><div className="flex flex-wrap gap-1.5">{build.augments.map((augment) => <span key={augment} className="rounded border border-border px-2 py-1 text-xs text-foreground/90">{getAugmentName(augment)}</span>)}</div></div>
                <div className="mt-4"><p className="mb-2 text-xs text-muted-foreground">优先适配</p><div className="flex flex-wrap gap-1.5">{build.suitableFor.map((champion) => <span key={champion} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">{champion}</span>)}</div></div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{build.playstyle}</p>

                {expanded && <div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2"><div><p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-primary"><Swords className="h-3.5 w-3.5" />优势</p><ul className="space-y-1.5 text-sm text-muted-foreground">{build.strengths.map((item) => <li key={item}>— {item}</li>)}</ul></div><div><p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-amber-200"><ShieldCheck className="h-3.5 w-3.5" />风险</p><ul className="space-y-1.5 text-sm text-muted-foreground">{build.weaknesses.map((item) => <li key={item}>— {item}</li>)}</ul></div><div className="sm:col-span-2 rounded-md bg-secondary/55 p-3"><p className="flex items-center gap-1.5 text-xs font-medium text-foreground"><Lightbulb className="h-3.5 w-3.5 text-primary" />实战提示</p><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{build.tips}</p></div></div>}

                <button type="button" aria-expanded={expanded} onClick={() => setExpandedId(expanded ? null : build.id)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">{expanded ? <>收起分析 <ChevronUp className="h-4 w-4" /></> : <>展开分析 <ChevronDown className="h-4 w-4" /></>}</button>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
