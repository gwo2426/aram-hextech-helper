/* Cyberpunk Futurism Design - Home Page
 * Hero section with animated background
 * Feature cards with neon glow effects
 * Hexagonal design elements throughout
 */

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, Users, Layers, Zap, Shield, Swords } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "海克斯符文库",
      description: "完整的符文数据库，包含所有稀有度符文的详细效果说明",
      link: "/augments",
      color: "cyan",
    },
    {
      icon: Users,
      title: "英雄推荐",
      description: "根据英雄特性推荐最适合的符文组合，助你在选择时快速决策",
      link: "/champions",
      color: "purple",
    },
    {
      icon: Layers,
      title: "符文套路",
      description: "热门符文组合Build，学习高手的构筑思路",
      link: "/builds",
      color: "gold",
    },
  ];

  const stats = [
    { icon: Zap, value: "180+", label: "海克斯符文" },
    { icon: Shield, value: "160+", label: "英雄数据" },
    { icon: Swords, value: "50+", label: "热门套路" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hexagon pattern background */}
      <div className="fixed inset-0 hexagon-pattern pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Iz6SHPeLOM7iXXZa9kZ4Sb/sandbox/MuxsvA9e0vYz4lq2gjFZvs-img-1_1770907237000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSXo2U0hQZUxPTTdpWFhaYTlrWjRTYi9zYW5kYm94L011eHN2QTllMHZZejRscTJnakZadnMtaW1nLTFfMTc3MDkwNzIzNzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OnvmdYoy9Xt~lMUl8l9S8EEghYGaxABYegUJw3wReGDqDxUoCP3J4ZcNGmyPFcj2q0WeNrRqY039gsYjQPROdx~c~zKRQleu-UnEYBEBvSbQ9dNAiAcnaZNWwLktb7GZqvv-eWnRntGSDr7WUN-c9q~KgbfV~YGjgpE1ckTY6ufRT1nWLePOZSn7CCKoJhWhGCvH4ejOiuQgP7WkswvGcBivyJB~0W9qlQv354qbUSLtdhfL3WXg4tDJu2aj8Mk-mfCL-GKLlxd3eP4iSAWFTk-DL-7ykrOSBORCskT6j168A-T4wMR65U-KxjX5mwKZBHWRHR0ahXvBHVmv8ENNRw__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-mono neon-glow">
                PATCH 26.3 | 最新版本
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              ARAM HEXTECH
              <br />
              <span className="text-secondary neon-text-purple">HELPER</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              专为英雄联盟海克斯大乱斗模式打造的辅助工具
              <br />
              海克斯符文数据库 · 英雄推荐系统 · 符文Build套路
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/augments">
                <Button size="lg" className="neon-glow text-lg px-8 py-6">
                  <Sparkles className="w-5 h-5 mr-2" />
                  探索符文库
                </Button>
              </Link>
              <Link href="/champions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                  <Users className="w-5 h-5 mr-2" />
                  英雄推荐
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold neon-text mb-2 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-text">
              核心功能
            </h2>
            <p className="text-muted-foreground text-lg">
              一站式海克斯大乱斗辅助平台
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const glowClass = 
                feature.color === "cyan" ? "neon-glow" :
                feature.color === "purple" ? "neon-glow-purple" :
                "neon-glow-gold";
              
              return (
                <Link key={index} href={feature.link}>
                  <Card className={`cyber-card p-6 h-full cursor-pointer group`}>
                    <div className={`w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 ${glowClass} transition-all group-hover:scale-110`}>
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="cyber-card p-12 text-center relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/Iz6SHPeLOM7iXXZa9kZ4Sb/sandbox/MuxsvA9e0vYz4lq2gjFZvs-img-3_1770907251000_na1fn_Y2hhbXBpb24tYmFubmVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSXo2U0hQZUxPTTdpWFhaYTlrWjRTYi9zYW5kYm94L011eHN2QTllMHZZejRscTJnakZadnMtaW1nLTNfMTc3MDkwNzI1MTAwMF9uYTFmbl9ZMmhoYlhCcGIyNHRZbUZ1Ym1WeS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oeoeH4Gk2htRAqe0ehgNETztjwBxt-fiHmpRpnTXl-Nn~DJZXv8N~f6e3jSH5eltaPvFBtHz8bbiwEBdyJ7Pj6QmwaBaLuO~mgat02QS7ZAC4PQnGiKfpSJtH-Mvj5W90rR26UvlnKWcVFogLp2qbM1dGyZlhs-cQnE~9cGomnStYIIDAagoju9fZw3wW9V~1W4I6YYAsRpw3av4aBofyhUtbEQ01tKUGJuegrVPpQN2kIIyfHPJgdaB-ygdIlZOI0fg4xDADtWFZAczAZzlFXPZVE3wJbly9omcqj3YntU7fazXlhHaFhQTEt24JzOEFvpJm4yuJ2lHFQH7i-e7vQ__')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 neon-text">
                准备好称霸嚎哭深渊了吗？
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                使用最新的符文数据和专业推荐，在海克斯大乱斗中取得优势
              </p>
              <Link href="/augments">
                <Button size="lg" className="neon-glow-gold text-lg px-8 py-6">
                  <Sparkles className="w-5 h-5 mr-2" />
                  开始探索
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container text-center text-muted-foreground">
          <p className="font-mono text-sm">
            ARAM HEXTECH HELPER © 2026 | 非官方辅助工具
          </p>
          <p className="text-xs mt-2">
            数据来源于英雄联盟官方Wiki | Patch 26.3
          </p>
        </div>
      </footer>
    </div>
  );
}
