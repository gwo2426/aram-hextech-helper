/* Cyberpunk Futurism Design - Augments Page
 * Complete augment database with 60+ augments
 * Card-based layout with tier-based styling
 * Search and filter functionality with category support
 */

import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allAugments, getAugmentsByTier, searchAugments, augmentCategories, type Augment } from "@/data/augments-complete";
import { useState, useMemo } from "react";
import { Search, Sparkles, Crown, Star, Zap, Filter } from "lucide-react";

type TierType = '棱彩' | '金色' | '银色' | 'All';

export default function Augments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<TierType>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredAugments = useMemo(() => {
    let results = allAugments;
    
    // Filter by search query
    if (searchQuery) {
      results = searchAugments(searchQuery);
    }
    
    // Filter by tier
    if (selectedTier !== "All") {
      results = results.filter(aug => aug.tier === selectedTier);
    }
    
    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(aug => aug.category === selectedCategory);
    }
    
    return results;
  }, [searchQuery, selectedTier, selectedCategory]);

  const tierCounts = {
    All: allAugments.length,
    '棱彩': getAugmentsByTier('棱彩').length,
    '金色': getAugmentsByTier('金色').length,
    '银色': getAugmentsByTier('银色').length,
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "棱彩":
        return <Crown className="w-4 h-4" />;
      case "金色":
        return <Star className="w-4 h-4" />;
      case "银色":
        return <Zap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "棱彩":
        return "text-purple-400";
      case "金色":
        return "text-yellow-400";
      case "银色":
        return "text-gray-300";
      default:
        return "text-cyan-400";
    }
  };

  const getTierBorderColor = (tier: string) => {
    switch (tier) {
      case "棱彩":
        return "border-purple-500/50 hover:border-purple-400";
      case "金色":
        return "border-yellow-500/50 hover:border-yellow-400";
      case "银色":
        return "border-gray-400/50 hover:border-gray-300";
      default:
        return "border-cyan-500/50 hover:border-cyan-400";
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

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: '符文总数', value: tierCounts.All, icon: Sparkles, tier: 'All' },
            { label: '棱彩符文', value: tierCounts['棱彩'], icon: Crown, tier: '棱彩' },
            { label: '金色符文', value: tierCounts['金色'], icon: Star, tier: '金色' },
            { label: '银色符文', value: tierCounts['银色'], icon: Zap, tier: '银色' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="cyber-card p-4 cursor-pointer transition-all hover:scale-105"
                onClick={() => setSelectedTier(stat.tier as TierType)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${
                    stat.tier === '棱彩' ? 'from-purple-500/20 to-pink-500/20' :
                    stat.tier === '金色' ? 'from-yellow-500/20 to-orange-500/20' :
                    stat.tier === '银色' ? 'from-gray-400/20 to-gray-500/20' :
                    'from-cyan-500/20 to-purple-500/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${getTierColor(stat.tier)}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-mono">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="搜索符文名称、英文名或效果..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card/50 border-border/50 focus:border-primary neon-glow"
            />
          </div>

          {/* Tier Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>稀有度筛选</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["All", "棱彩", "金色", "银色"] as const).map((tier) => (
                <Button
                  key={tier}
                  variant={selectedTier === tier ? "default" : "outline"}
                  onClick={() => setSelectedTier(tier)}
                  className={`
                    ${selectedTier === tier ? "neon-glow" : "border-border/50"}
                    transition-all
                  `}
                >
                  {getTierIcon(tier)}
                  <span className="ml-1">{tier === "All" ? "全部" : tier}</span>
                  <Badge variant="secondary" className="ml-2">
                    {tier === "All" ? tierCounts.All : tierCounts[tier]}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span>类型筛选</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                onClick={() => setSelectedCategory("All")}
                size="sm"
                className={selectedCategory === "All" ? "neon-glow" : ""}
              >
                全部类型
              </Button>
              {augmentCategories.slice(0, 10).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                  className={selectedCategory === category ? "neon-glow" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
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
              className={`cyber-card p-5 ${getTierBorderColor(augment.tier)} border-2 transition-all hover:scale-[1.02]`}
            >
              {/* Tier Badge */}
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="outline"
                  className={`${getTierColor(augment.tier)} border-current`}
                >
                  {getTierIcon(augment.tier)}
                  <span className="ml-1">{augment.tier}</span>
                </Badge>
                
                <Badge variant="secondary" className="text-xs">
                  {augment.category}
                </Badge>
              </div>

              {/* Name */}
              <h3 className={`text-xl font-bold mb-2 ${getTierColor(augment.tier)}`}>
                {augment.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 font-mono">
                {augment.nameEn}
              </p>

              {/* Effect */}
              <p className="text-sm text-foreground/90 leading-relaxed mb-3">
                {augment.effect}
              </p>

              {/* Detailed Effect */}
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
                {augment.detailedEffect}
              </p>

              {/* Synergy */}
              {augment.synergy.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border/30">
                  <p className="text-xs text-muted-foreground mb-2">适合英雄：</p>
                  <div className="flex flex-wrap gap-1">
                    {augment.synergy.slice(0, 4).map((hero, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {hero}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
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
