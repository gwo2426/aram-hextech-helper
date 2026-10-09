import { Link } from "wouter";
import { ArrowRight, BookOpen, ChevronRight, Layers3, Search, Sparkles, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import DataNotice from "@/components/DataNotice";
import { allAugments } from "@/data/augments-complete";
import { builds } from "@/data/builds";
import { allChampions } from "@/data/champions-full";
import { siteMeta } from "@/data/siteMeta";

const quickLinks = [
  { step: "01", title: "符文速查", description: "按名称、效果、稀有度和类型快速缩小选择。", href: "/augments", icon: Sparkles },
  { step: "02", title: "英雄参考", description: "查看当前收录的英雄资料、胜率快照和推荐符文。", href: "/champions", icon: Users },
  { step: "03", title: "套路优先", description: "先理解组合思路，再决定这轮该不该拿。", href: "/builds", icon: BookOpen },
];

export default function Home() {
  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <section className="border-b border-border">
          <div className="container grid gap-10 py-14 lg:grid-cols-[1.45fr_0.8fr] lg:items-end lg:py-20">
            <div>
              <p className="eyebrow mb-5">ARAM: MAYHEM / QUICK DECISIONS</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-foreground sm:text-6xl">
                拿到英雄后，<br />
                <span className="text-primary">快速找到下一步。</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                一个简约的海克斯大乱斗参考站：查符文、看英雄、抄思路。把复杂的信息压缩成对局里真正用得上的几步。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/augments">
                  <span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                    <Search className="h-4 w-4" />开始查符文<ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link href="/builds">
                  <span className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                    <Layers3 className="h-4 w-4" />先看套路
                  </span>
                </Link>
              </div>
            </div>

            <div className="surface divide-y divide-border rounded-lg">
              <div className="p-5">
                <p className="eyebrow">当前收录</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div><p className="metric-value text-2xl font-semibold text-foreground">{allAugments.length}</p><p className="mt-1 text-xs text-muted-foreground">符文条目</p></div>
                  <div><p className="metric-value text-2xl font-semibold text-foreground">{allChampions.length}</p><p className="mt-1 text-xs text-muted-foreground">英雄资料</p></div>
                  <div><p className="metric-value text-2xl font-semibold text-foreground">{builds.length}</p><p className="mt-1 text-xs text-muted-foreground">特色套路</p></div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-foreground">使用顺序</p>
                <ol className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex gap-3"><span className="metric-value text-primary">01</span><span>确认英雄的输出方式和队伍缺口。</span></li>
                  <li className="flex gap-3"><span className="metric-value text-primary">02</span><span>通过符文效果和类型筛掉明显不适合的选项。</span></li>
                  <li className="flex gap-3"><span className="metric-value text-primary">03</span><span>对照套路，判断能否围绕核心组合继续构筑。</span></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-14 sm:py-18">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div><p className="eyebrow">Start here</p><h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">三步完成一次选择</h2></div>
            <span className="hidden text-sm text-muted-foreground sm:block">信息尽量少，决策尽量快。</span>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href}>
                  <article className="surface surface-hover h-full rounded-lg p-5">
                    <div className="flex items-center justify-between"><span className="metric-value text-xs text-primary">{item.step}</span><Icon className="h-4 w-4 text-muted-foreground" /></div>
                    <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">进入页面 <ChevronRight className="h-4 w-4" /></span>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="container pb-14 sm:pb-20">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <DataNotice scope="站内符文、英雄与套路" />
            <p className="text-xs text-muted-foreground lg:text-right">资料版本：{siteMeta.lastReviewed}<br />非官方个人工具</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="container flex flex-col gap-1 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>ARAM MAYHEM HELPER · 非官方个人工具</p>
          <p>以游戏客户端与官方公告为准</p>
        </div>
      </footer>
    </div>
  );
}
