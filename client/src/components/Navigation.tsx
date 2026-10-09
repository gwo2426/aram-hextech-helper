import { Link, useLocation } from "wouter";
import { BookOpen, Hexagon, LayoutGrid, Sparkles, Users } from "lucide-react";

const navItems = [
  { path: "/", label: "概览", icon: LayoutGrid },
  { path: "/augments", label: "符文", icon: Sparkles },
  { path: "/champions", label: "英雄", icon: Users },
  { path: "/builds", label: "套路", icon: BookOpen },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" aria-label="返回 ARAM Mayhem Helper 概览">
          <div className="flex items-center gap-2.5 text-foreground">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/60 bg-primary/10 text-primary">
              <Hexagon className="h-4.5 w-4.5" />
            </span>
            <span className="min-w-0 leading-tight">
              <strong className="block truncate text-sm font-semibold tracking-tight sm:text-base">ARAM MAYHEM</strong>
              <span className="hidden font-mono text-[10px] tracking-[0.16em] text-muted-foreground sm:block">QUICK HELPER</span>
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-0.5" aria-label="主导航">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path} aria-label={item.label}>
                <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
