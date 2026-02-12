/* Cyberpunk Futurism Design - Augments Page
 * Filterable augment database
 * Card-based layout with tier-based styling
 * Search and filter functionality
 */

import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { augments, getTierColor, getTierBorderColor, type AugmentTier } from "@/data/augments";
import { useState, useMemo } from "react";
import { Search, Sparkles, Award, Medal } from "lucide-react";

export default function Augments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<AugmentTier | "All">("All");

  const filteredAugments = useMemo(() => {
    return augments.filter((augment) => {
      const matchesSearch = 
        augment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        augment.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        augment.effect.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTier = selectedTier === "All" || augment.tier === selectedTier;
      
      return matchesSearch && matchesTier;
    });
  }, [searchQuery, selectedTier]);

  const tierCounts = {
    All: augments.length,
    Prismatic: augments.filter(a => a.tier === "Prismatic").length,
    Gold: augments.filter(a => a.tier === "Gold").length,
    Silver: augments.filter(a => a.tier === "Silver").length,
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "Prismatic":
        return <Sparkles className="w-4 h-4" />;
      case "Gold":
        return <Award className="w-4 h-4" />;
      case "Silver":
        return <Medal className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hexagon pattern background */}
      <div className="fixed inset-0 hexagon-pattern pointer-events-none" />
      
      <div className="pt-24 pb-12 container relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            海克斯符文库
          </h1>
          <p className="text-muted-foreground text-lg">
            探索所有可用的海克斯符文，找到最适合你的增强效果
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="搜索符文名称或效果..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card/50 border-border/50 focus:border-primary neon-glow"
            />
          </div>

          {/* Tier Filters */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Prismatic", "Gold", "Silver"] as const).map((tier) => (
              <Button
                key={tier}
                variant={selectedTier === tier ? "default" : "outline"}
                onClick={() => setSelectedTier(tier)}
                className={`
                  ${selectedTier === tier ? "neon-glow" : "border-border/50"}
                  transition-all
                `}
              >
                {tier !== "All" && getTierIcon(tier)}
                <span className="ml-1">
                  {tier === "All" ? "全部" : 
                   tier === "Prismatic" ? "棱彩" :
                   tier === "Gold" ? "金色" : "银色"}
                </span>
                <Badge variant="secondary" className="ml-2">
                  {tierCounts[tier]}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          找到 <span className="text-primary font-mono font-bold">{filteredAugments.length}</span> 个符文
        </div>

        {/* Augments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAugments.map((augment) => (
            <Card
              key={augment.id}
              className={`cyber-card p-5 ${getTierBorderColor(augment.tier)} border-2`}
            >
              {/* Tier Badge */}
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="outline"
                  className={`${getTierColor(augment.tier)} border-current`}
                >
                  {getTierIcon(augment.tier)}
                  <span className="ml-1">
                    {augment.tier === "Prismatic" ? "棱彩" :
                     augment.tier === "Gold" ? "金色" : "银色"}
                  </span>
                </Badge>
                
                {augment.set && (
                  <Badge variant="secondary" className="text-xs">
                    {augment.set}
                  </Badge>
                )}
              </div>

              {/* Name */}
              <h3 className={`text-xl font-bold mb-2 ${getTierColor(augment.tier)}`}>
                {augment.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 font-mono">
                {augment.nameEn}
              </p>

              {/* Effect */}
              <p className="text-sm text-foreground/90 leading-relaxed">
                {augment.effect}
              </p>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredAugments.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground text-lg">
              没有找到匹配的符文
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              尝试调整搜索条件或筛选器
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
