/* Cyberpunk Futurism Design - Builds Page
 * Enhanced build showcase with filtering and detailed strategies
 * This is the signature feature of the website
 */

import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { builds } from "@/data/builds";
import { allAugments } from "@/data/augments-complete";
import { Star, Layers, Target, TrendingUp, Zap, Shield, Swords, Heart } from "lucide-react";
import { useState, useMemo } from "react";

type BuildCategory = 'All' | '输出' | '坦克' | '辅助' | '混合';

export default function Builds() {
  const [selectedCategory, setSelectedCategory] = useState<BuildCategory>('All');
  const [selectedBuild, setSelectedBuild] = useState<string | null>(null);

  const getAugmentName = (augmentId: string) => {
    const augment = allAugments.find(a => a.id === augmentId);
    return augment ? augment.name : augmentId;
  };

  const getAugmentDetails = (augmentId: string) => {
    return allAugments.find(a => a.id === augmentId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '输出':
        return <Swords className="w-4 h-4" />;
      case '坦克':
        return <Shield className="w-4 h-4" />;
      case '辅助':
        return <Heart className="w-4 h-4" />;
      case '混合':
        return <Zap className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const filteredBuilds = useMemo(() => {
    if (selectedCategory === 'All') return builds;
    return builds.filter(build => build.category === selectedCategory);
  }, [selectedCategory]);

  const categories: BuildCategory[] = ['All', '输出', '坦克', '辅助', '混合'];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="fixed inset-0 hexagon-pattern pointer-events-none" />
      
      <div className="pt-24 pb-12 container relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            符文套路 Build
          </h1>
          <p className="text-muted-foreground text-lg">
            学习高手的符文组合构筑思路，打造属于你的无敌流派
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Target className="w-4 h-4" />
            <span>流派分类</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  ${selectedCategory === category ? "neon-glow" : "border-border/50"}
                  transition-all
                `}
              >
                {getCategoryIcon(category)}
                <span className="ml-1">{category === 'All' ? '全部流派' : category + '流'}</span>
                <Badge variant="secondary" className="ml-2">
                  {category === 'All' ? builds.length : builds.filter(b => b.category === category).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="cyber-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono">{builds.length}</p>
                <p className="text-xs text-muted-foreground">套路总数</p>
              </div>
            </div>
          </Card>
          <Card className="cyber-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20">
                <Swords className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono">{builds.filter(b => b.category === '输出').length}</p>
                <p className="text-xs text-muted-foreground">输出流</p>
              </div>
            </div>
          </Card>
          <Card className="cyber-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono">{builds.filter(b => b.category === '坦克').length}</p>
                <p className="text-xs text-muted-foreground">坦克流</p>
              </div>
            </div>
          </Card>
          <Card className="cyber-card p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <Heart className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold font-mono">{builds.filter(b => b.category === '辅助').length}</p>
                <p className="text-xs text-muted-foreground">辅助流</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          找到 <span className="text-primary font-mono font-bold">{filteredBuilds.length}</span> 个套路
        </div>

        {/* Builds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBuilds.map((build) => (
            <Card 
              key={build.id} 
              className={`cyber-card p-6 transition-all hover:scale-[1.02] cursor-pointer ${
                selectedBuild === build.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedBuild(selectedBuild === build.id ? null : build.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold neon-text">{build.name}</h3>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {getCategoryIcon(build.category)}
                      <span className="ml-1">{build.category}流</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{build.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 font-bold font-mono">{build.rating}</span>
                      <span className="text-muted-foreground text-sm">/ 5.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-bold font-mono">{build.popularity}</span>
                      <span className="text-muted-foreground text-sm">热度</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Augments */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  核心符文组合
                </h4>
                <div className="space-y-2">
                  {build.augments.map((augmentId) => {
                    const augment = getAugmentDetails(augmentId);
                    return (
                      <div 
                        key={augmentId} 
                        className="p-3 bg-background/50 rounded-md border border-border/30 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-primary">{getAugmentName(augmentId)}</span>
                              {augment && (
                                <Badge variant="outline" className="text-xs">
                                  {augment.tier}
                                </Badge>
                              )}
                            </div>
                            {augment && selectedBuild === build.id && (
                              <p className="text-xs text-muted-foreground">{augment.effect}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Suitable Champions */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">适用英雄</h4>
                <div className="flex flex-wrap gap-2">
                  {build.suitableFor.map((champion) => (
                    <Badge key={champion} variant="secondary" className="hover:bg-secondary/80 transition-colors">
                      {champion}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Playstyle */}
              <div className="p-4 bg-gradient-to-br from-background/80 to-background/50 rounded-md border border-border/30">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  玩法思路
                </h4>
                <p className="text-sm text-foreground/90 leading-relaxed">{build.playstyle}</p>
              </div>

              {/* Expanded Details */}
              {selectedBuild === build.id && (
                <div className="mt-4 pt-4 border-t border-border/30 space-y-3">
                  {/* Strengths */}
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">优势</h4>
                    <ul className="space-y-1">
                      {build.strengths.map((strength, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Weaknesses */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">劣势</h4>
                    <ul className="space-y-1">
                      {build.weaknesses.map((weakness, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="p-3 bg-primary/10 rounded-md border border-primary/30">
                    <h4 className="text-sm font-semibold text-primary mb-2">💡 进阶技巧</h4>
                    <p className="text-xs text-foreground/80 leading-relaxed">{build.tips}</p>
                  </div>
                </div>
              )}

              {/* Expand Indicator */}
              <div className="mt-4 text-center">
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-primary">
                  {selectedBuild === build.id ? '收起详情 ▲' : '展开详情 ▼'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredBuilds.length === 0 && (
          <div className="text-center py-20">
            <Layers className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground text-lg">
              该分类下暂无套路
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
