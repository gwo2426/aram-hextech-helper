import { CalendarDays, Info } from "lucide-react";
import { siteMeta } from "@/data/siteMeta";

interface DataNoticeProps {
  scope?: string;
  className?: string;
}

export default function DataNotice({ scope = "当前页面资料", className = "" }: DataNoticeProps) {
  return (
    <aside className={`flex gap-3 rounded-md border border-border bg-secondary/35 px-4 py-3 text-sm ${className}`} aria-label="数据说明">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <div className="min-w-0">
        <p className="leading-6 text-muted-foreground">
          <span className="font-medium text-foreground">{scope}</span>为{siteMeta.dataMode}，并非实时 API 数据。{siteMeta.disclaimer}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          复核：{siteMeta.lastReviewed} · 参考：{siteMeta.sources}
        </p>
      </div>
    </aside>
  );
}
