import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { builds } from "@/data/builds";
import { augments } from "@/data/augments";
import { Star, Layers } from "lucide-react";

export default function Builds() {
  const getAugmentName = (augmentId: string) => {
    const augment = augments.find(a => a.id === augmentId);
    return augment ? augment.name : augmentId;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="fixed inset-0 hexagon-pattern pointer-events-none" />
      <div className="pt-24 pb-12 container relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">符文套路</h1>
          <p className="text-muted-foreground text-lg">学习热门符文组合Build，掌握高手的构筑思路</p>
        </div>
        <div className="mb-6 text-muted-foreground">共有 <span className="text-primary font-mono font-bold">{builds.length}</span> 个热门套路</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {builds.map((build) => (
            <Card key={build.id} className="cyber-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold neon-text mb-2">{build.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{build.description}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-accent font-bold font-mono">{build.rating}</span>
                    <span className="text-muted-foreground text-sm">/ 5.0</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2"><Layers className="w-4 h-4" />符文组合</h4>
                <div className="flex flex-wrap gap-2">
                  {build.augments.map((augmentId) => (
                    <Badge key={augmentId} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 transition-colors">{getAugmentName(augmentId)}</Badge>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">适用英雄</h4>
                <div className="flex flex-wrap gap-2">
                  {build.suitableFor.map((champion) => (
                    <Badge key={champion} variant="secondary">{champion}</Badge>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-background/50 rounded-md border border-border/30">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">玩法思路</h4>
                <p className="text-sm text-foreground/90 leading-relaxed">{build.playstyle}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
