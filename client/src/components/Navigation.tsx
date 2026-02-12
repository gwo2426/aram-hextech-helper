/* Cyberpunk Futurism Design - Navigation Component
 * Hexagonal logo with neon glow
 * Transparent background with backdrop blur
 * Neon cyan highlights on hover
 */

import { Link, useLocation } from "wouter";
import { Hexagon, Sparkles, Users, Layers } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "首页", icon: Hexagon },
    { path: "/augments", label: "符文库", icon: Sparkles },
    { path: "/champions", label: "英雄", icon: Users },
    { path: "/builds", label: "套路", icon: Layers },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Hexagon className="w-10 h-10 text-primary neon-glow transition-all group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all" />
              </div>
              <div>
                <h1 className="text-xl font-bold neon-text tracking-wider">
                  ARAM HEXTECH
                </h1>
                <p className="text-xs text-muted-foreground font-mono">
                  HELPER v2.0
                </p>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link key={item.path} href={item.path}>
                  <div
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-md
                      transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "bg-primary/20 text-primary neon-glow"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
