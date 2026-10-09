import { Link } from "wouter";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="app-shell grid min-h-screen place-items-center px-5">
      <section className="surface w-full max-w-md rounded-lg p-7 text-center sm:p-9">
        <SearchX className="mx-auto h-7 w-7 text-primary" />
        <p className="eyebrow mt-5">404 / Not found</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">这个页面不存在</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">链接可能有误，或页面已经移动。返回概览继续查询即可。</p>
        <Link href="/"><span className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"><ArrowLeft className="h-4 w-4" />返回概览</span></Link>
      </section>
    </main>
  );
}
