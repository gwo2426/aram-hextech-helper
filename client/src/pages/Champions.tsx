/* Cyberpunk Futurism Design - Champions Page
 * Champion database with tier rankings
 * Augment recommendations for each champion
 * Filterable by role and tier
 */

import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allChampions, roles, getTierColor, getTierLabel, type Champion } from "@/data/champions-full";
import { allAugments } from "@/data/augments-complete";
import { useState, useMemo } from "react";
import { Search, TrendingUp, Users } from "lucide-react";

export default function Champions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("全部");

  const filteredChampions = useMemo(() => {
    return allChampions.filter((champion) => {
      const matchesSearch = 
        champion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        champion.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = selectedRole === "全部" || champion.role.includes(selectedRole);
      
      return matchesSearch && matchesRole;
    }).sort((a, b) => {
      const tierOrder: Record<string, number> = { 'S+': 0, S: 1, A: 2, B: 3, C: 4, D: 5 };
      if (tierOrder[a.tier] !== tierOrder[b.tier]) {
        return tierOrder[a.tier] - tierOrder[b.tier];
      }
      return b.winRate - a.winRate;
    });
  }, [searchQuery, selectedRole]);

  const getAugmentName = (augmentId: string) => {
    const augment = allAugments.find(a => a.id === augmentId);
    return augment ? augment.name : augmentId;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="fixed inset-0 hexagon-pattern pointer-events-none" />
      <div className="pt-24 pb-12 container relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">英雄推荐</h1>
          <p className="text-muted-foreground text-lg">查看英雄强度排名和推荐符文组合</p>
        </div>
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="搜索英雄名称..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 h-12 bg-card/50 border-border/50 focus:border-primary neon-glow" />
          </div>
          <div className="flex flex-wrap gap-2">
            {roles.map((role: string) => (
              <Button key={role} variant={selectedRole === role ? "default" : "outline"} onClick={() => setSelectedRole(role)} className={`${selectedRole === role ? "neon-glow" : "border-border/50"} transition-all`}>{role}</Button>
            ))}
          </div>
        </div>
        <div className="mb-6 text-muted-foreground">找到 <span className="text-primary font-mono font-bold">{filteredChampions.length}</span> / {allChampions.length} 个英雄</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredChampions.map((champion) => (
            <Card key={champion.id} className="cyber-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-2xl font-bold ${getTierColor(champion.tier)}`}>{champion.name}</h3>
                    <Badge variant="outline" className={`${getTierColor(champion.tier)} border-current`}>{getTierLabel(champion.tier)}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">{champion.nameEn}</p>
                  <Badge variant="secondary">{champion.role}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-background/50 rounded-md border border-border/30">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1"><TrendingUp className="w-3 h-3" />胜率</div>
                  <div className="text-lg font-bold font-mono text-primary">{champion.winRate}%</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1"><Users className="w-3 h-3" />登场率</div>
                  <div className="text-lg font-bold font-mono text-primary">{champion.pickRate}%</div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">玩法风格</h4>
                <p className="text-sm text-foreground/90">{champion.playstyle}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">推荐符文</h4>
                <div className="flex flex-wrap gap-2">
                  {champion.recommendedAugments.map((augmentId) => (
                    <Badge key={augmentId} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 transition-colors">{getAugmentName(augmentId)}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {filteredChampions.length === 0 && (
          <div className="text-center py-20">
            <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground text-lg">没有找到匹配的英雄</p>
            <p className="text-muted-foreground text-sm mt-2">尝试调整搜索条件或筛选器</p>
          </div>
        )}
      </div>
    </div>
  );
}
