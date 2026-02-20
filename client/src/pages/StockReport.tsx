/* Cyberpunk Futurism Design - Daily Stock Analysis Report
 * Comprehensive tech sector analysis with AI-powered insights
 * Real-time data from Yahoo Finance API
 * Neon glow effects and hexagonal design elements
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  Activity,
  DollarSign,
  Globe,
  Zap,
  Shield,
  Star,
  ChevronDown,
  ChevronUp,
  Clock,
  Database,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import reportData from "@/data/stock_report.json";

type StockAnalysis = (typeof reportData.stockAnalyses)[keyof typeof reportData.stockAnalyses];

// Helper functions
const formatPrice = (price: number) => `$${price.toFixed(2)}`;
const formatMarketCap = (cap: number) => {
  if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(1)}B`;
  return `$${(cap / 1e6).toFixed(0)}M`;
};
const formatVolume = (vol: number) => {
  if (vol >= 1e9) return `${(vol / 1e9).toFixed(2)}B`;
  if (vol >= 1e6) return `${(vol / 1e6).toFixed(1)}M`;
  return `${(vol / 1e3).toFixed(0)}K`;
};

const getActionColor = (action: string) => {
  switch (action?.toLowerCase()) {
    case "strong_buy": return "text-emerald-400";
    case "buy": return "text-green-400";
    case "hold": return "text-yellow-400";
    case "sell": return "text-orange-400";
    case "strong_sell": return "text-red-400";
    default: return "text-muted-foreground";
  }
};

const getActionBadgeClass = (action: string) => {
  switch (action?.toLowerCase()) {
    case "strong_buy": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
    case "buy": return "bg-green-500/20 text-green-400 border-green-500/50";
    case "hold": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case "sell": return "bg-orange-500/20 text-orange-400 border-orange-500/50";
    case "strong_sell": return "bg-red-500/20 text-red-400 border-red-500/50";
    default: return "bg-muted/20 text-muted-foreground border-muted/50";
  }
};

const getRiskBadgeClass = (risk: string) => {
  switch (risk?.toLowerCase()) {
    case "low": return "bg-green-500/20 text-green-400 border-green-500/50";
    case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case "high": return "bg-orange-500/20 text-orange-400 border-orange-500/50";
    case "very_high": return "bg-red-500/20 text-red-400 border-red-500/50";
    default: return "bg-muted/20 text-muted-foreground border-muted/50";
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend?.toLowerCase()) {
    case "bullish": return <TrendingUp className="w-4 h-4 text-green-400" />;
    case "bearish": return <TrendingDown className="w-4 h-4 text-red-400" />;
    default: return <Minus className="w-4 h-4 text-yellow-400" />;
  }
};

const getSentimentColor = (sentiment: string) => {
  switch (sentiment?.toLowerCase()) {
    case "very_bullish": return "text-emerald-400";
    case "bullish": return "text-green-400";
    case "neutral": return "text-yellow-400";
    case "bearish": return "text-orange-400";
    case "very_bearish": return "text-red-400";
    default: return "text-muted-foreground";
  }
};

const formatActionLabel = (action: string) => {
  return action?.replace(/_/g, " ").toUpperCase() || "N/A";
};

// Score bar component
const ScoreBar = ({ score, max = 10 }: { score: number; max?: number }) => {
  const pct = (score / max) * 100;
  const color = pct >= 70 ? "bg-green-500" : pct >= 50 ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-muted/30 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color} transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-mono text-muted-foreground w-8">
        {score}/{max}
      </span>
    </div>
  );
};

// Price chart component
const PriceChart = ({ stock }: { stock: StockAnalysis }) => {
  const data = stock.priceHistory.timestamps.map((ts, i) => ({
    date: ts.slice(5), // MM-DD
    price: stock.priceHistory.close[i],
  }));

  const minPrice = Math.min(...data.map((d) => d.price)) * 0.99;
  const maxPrice = Math.max(...data.map((d) => d.price)) * 1.01;
  const isPositive = stock.monthChange >= 0;

  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,217,255,0.1)" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 9, fill: "rgba(255,255,255,0.4)" }}
          tickLine={false}
          interval={4}
        />
        <YAxis
          domain={[minPrice, maxPrice]}
          tick={{ fontSize: 9, fill: "rgba(255,255,255,0.4)" }}
          tickLine={false}
          tickFormatter={(v) => `$${v.toFixed(0)}`}
          width={45}
        />
        <Tooltip
          contentStyle={{
            background: "rgba(10,14,39,0.95)",
            border: "1px solid rgba(0,217,255,0.3)",
            borderRadius: "4px",
            fontSize: "11px",
          }}
          formatter={(v: number) => [`$${v.toFixed(2)}`, "Price"]}
        />
        <ReferenceLine
          y={stock.sma20}
          stroke="rgba(168,85,247,0.5)"
          strokeDasharray="3 3"
          label={{ value: "SMA20", fill: "rgba(168,85,247,0.7)", fontSize: 9 }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke={isPositive ? "#4ade80" : "#f87171"}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 3, fill: isPositive ? "#4ade80" : "#f87171" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Individual stock card
const StockCard = ({ stock }: { stock: StockAnalysis }) => {
  const [expanded, setExpanded] = useState(false);
  const rec = stock.recommendation as any;
  const tech = stock.technicalAnalysis as any;
  const fund = stock.fundamentalAnalysis as any;
  const sent = stock.sentimentAnalysis as any;
  const isPositiveDay = stock.dayChange >= 0;
  const isPositiveMonth = stock.monthChange >= 0;

  return (
    <div className="cyber-card rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-bold neon-text font-mono">{stock.symbol}</span>
              <Badge className={`text-xs border ${getActionBadgeClass(rec?.action)}`}>
                {formatActionLabel(rec?.action)}
              </Badge>
              <Badge className={`text-xs border ${getRiskBadgeClass(rec?.riskLevel)}`}>
                {rec?.riskLevel?.toUpperCase()} RISK
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground truncate max-w-[200px]">{stock.name}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold font-mono">{formatPrice(stock.currentPrice)}</div>
            <div className={`text-sm font-mono ${isPositiveDay ? "text-green-400" : "text-red-400"}`}>
              {isPositiveDay ? "+" : ""}{stock.dayChange.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Price chart */}
        <PriceChart stock={stock} />

        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">1-Month</div>
            <div className={`text-sm font-mono font-bold ${isPositiveMonth ? "text-green-400" : "text-red-400"}`}>
              {isPositiveMonth ? "+" : ""}{stock.monthChange.toFixed(1)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">RSI</div>
            <div className={`text-sm font-mono font-bold ${
              stock.rsi14 > 70 ? "text-red-400" : stock.rsi14 < 30 ? "text-green-400" : "text-yellow-400"
            }`}>
              {stock.rsi14.toFixed(1)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">P/E</div>
            <div className="text-sm font-mono font-bold text-primary">
              {stock.trailingPE > 0 ? stock.trailingPE.toFixed(1) : "N/A"}x
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">Score</div>
            <div className={`text-sm font-mono font-bold ${
              stock.overallScore >= 7 ? "text-green-400" : stock.overallScore >= 5 ? "text-yellow-400" : "text-red-400"
            }`}>
              {stock.overallScore}/10
            </div>
          </div>
        </div>
      </div>

      {/* Analysis summary */}
      <div className="p-4 space-y-3">
        {/* Technical */}
        <div className="flex items-start gap-2">
          <Activity className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-primary">Technical</span>
              {getTrendIcon(tech?.trend)}
              <span className="text-xs text-muted-foreground capitalize">{tech?.trend} ({tech?.trendStrength})</span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">{tech?.summary}</p>
          </div>
        </div>

        {/* Fundamental */}
        <div className="flex items-start gap-2">
          <DollarSign className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-secondary">Fundamental</span>
              <span className="text-xs text-muted-foreground capitalize">{fund?.valuationAssessment?.replace(/_/g, " ")} | {fund?.businessHealth}</span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">{fund?.summary}</p>
          </div>
        </div>

        {/* Sentiment */}
        <div className="flex items-start gap-2">
          <Brain className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold" style={{ color: "#fbbf24" }}>Sentiment</span>
              <span className={`text-xs capitalize ${getSentimentColor(sent?.overallSentiment)}`}>
                {sent?.overallSentiment?.replace(/_/g, " ")}
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">{sent?.summary}</p>
          </div>
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors py-1"
        >
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {expanded ? "Less" : "More Details"}
        </button>

        {/* Expanded details */}
        {expanded && (
          <div className="border-t border-border/50 pt-3 space-y-3">
            {/* Recommendation */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary">Recommendation</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{rec?.rationale}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-muted/20 rounded p-2">
                  <div className="text-muted-foreground">Target Price</div>
                  <div className="font-mono font-bold text-green-400">{formatPrice(rec?.targetPrice || 0)}</div>
                </div>
                <div className="bg-muted/20 rounded p-2">
                  <div className="text-muted-foreground">Stop Loss</div>
                  <div className="font-mono font-bold text-red-400">{formatPrice(rec?.stopLoss || 0)}</div>
                </div>
                <div className="bg-muted/20 rounded p-2">
                  <div className="text-muted-foreground">Time Horizon</div>
                  <div className="font-bold capitalize">{rec?.timeHorizon?.replace(/_/g, " ")}</div>
                </div>
                <div className="bg-muted/20 rounded p-2">
                  <div className="text-muted-foreground">Confidence</div>
                  <div className="font-bold">{rec?.confidenceLevel}/10</div>
                </div>
              </div>
            </div>

            {/* Key metrics */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground mb-2">KEY METRICS</div>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Market Cap</span>
                  <span className="font-mono">{formatMarketCap(stock.marketCap)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beta</span>
                  <span className="font-mono">{stock.beta.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">52W High</span>
                  <span className="font-mono text-green-400">{formatPrice(stock.fiftyTwoWeekHigh)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">52W Low</span>
                  <span className="font-mono text-red-400">{formatPrice(stock.fiftyTwoWeekLow)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">50D MA</span>
                  <span className="font-mono">{formatPrice(stock.fiftyDayAverage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">200D MA</span>
                  <span className="font-mono">{formatPrice(stock.twoHundredDayAverage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fwd P/E</span>
                  <span className="font-mono">{stock.forwardPE > 0 ? `${stock.forwardPE.toFixed(1)}x` : "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target</span>
                  <span className="font-mono">{formatPrice(stock.targetMeanPrice)}</span>
                </div>
              </div>
            </div>

            {/* Watch points */}
            {rec?.keyWatchPoints && (
              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-2">WATCH POINTS</div>
                <ul className="space-y-1">
                  {rec.keyWatchPoints.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-1 text-xs text-muted-foreground">
                      <span className="text-primary mt-0.5">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Score breakdown */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground mb-2">SCORE BREAKDOWN</div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Technical</span>
                    <span>{tech?.score}/10</span>
                  </div>
                  <ScoreBar score={tech?.score || 0} />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Fundamental</span>
                    <span>{fund?.score}/10</span>
                  </div>
                  <ScoreBar score={fund?.score || 0} />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Sentiment</span>
                    <span>{sent?.score}/10</span>
                  </div>
                  <ScoreBar score={sent?.score || 0} />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold">Overall</span>
                    <span className="font-semibold">{stock.overallScore}/10</span>
                  </div>
                  <ScoreBar score={stock.overallScore} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function StockReport() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [sortBy, setSortBy] = useState<"score" | "change" | "price">("score");

  const report = reportData;
  const overview = report.marketOverview as any;
  const strategy = report.investmentStrategy as any;
  const techOutlook = report.technicalOutlook as any;

  const stocks = Object.values(report.stockAnalyses) as StockAnalysis[];

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "score") return b.overallScore - a.overallScore;
    if (sortBy === "change") return b.monthChange - a.monthChange;
    if (sortBy === "price") return b.currentPrice - a.currentPrice;
    return 0;
  });

  const alloc = strategy?.portfolioAllocation || {};
  const strongBuys = alloc.strongBuy || [];
  const buys = alloc.buy || [];
  const holds = alloc.hold || [];
  const sells = alloc.sell || [];

  const generatedDate = new Date(report.generatedAt);
  const formattedDate = generatedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = generatedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="fixed inset-0 hexagon-pattern pointer-events-none" />

      <div className="container relative z-10 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="w-8 h-8 text-primary neon-glow" />
            <div>
              <h1 className="text-3xl font-bold neon-text">DAILY STOCK ANALYSIS</h1>
              <p className="text-sm text-muted-foreground font-mono">
                AI-Powered Tech Sector Report
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Badge className={`border ${
                overview?.sectorTrend === "bullish" ? "bg-green-500/20 text-green-400 border-green-500/50" :
                overview?.sectorTrend === "bearish" ? "bg-red-500/20 text-red-400 border-red-500/50" :
                "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
              }`}>
                {overview?.sectorTrend?.toUpperCase()} SECTOR
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/50 border">
                {overview?.sectorStrength?.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{formattedDate} · {formattedTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Database className="w-3 h-3" />
              <span>Stored in Cloudflare D1 · ID: {report.reportId}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>Data: Yahoo Finance API</span>
            </div>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="mb-6 bg-card/50 border border-border">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Globe className="w-4 h-4 mr-2" />
              Market Overview
            </TabsTrigger>
            <TabsTrigger value="stocks" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <BarChart3 className="w-4 h-4 mr-2" />
              Stock Analysis
            </TabsTrigger>
            <TabsTrigger value="strategy" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Target className="w-4 h-4 mr-2" />
              Strategy
            </TabsTrigger>
          </TabsList>

          {/* MARKET OVERVIEW TAB */}
          <TabsContent value="overview">
            <div className="space-y-6">
              {/* Executive Summary */}
              <div className="cyber-card rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-primary">{overview?.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{overview?.executiveSummary}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-muted/20 rounded p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Market Conditions</div>
                    <div className="font-bold capitalize text-primary">
                      {overview?.marketConditions?.overall?.replace(/_/g, " ")}
                    </div>
                  </div>
                  <div className="bg-muted/20 rounded p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Momentum</div>
                    <div className={`font-bold capitalize ${
                      overview?.marketConditions?.momentum === "positive" ? "text-green-400" :
                      overview?.marketConditions?.momentum === "negative" ? "text-red-400" : "text-yellow-400"
                    }`}>
                      {overview?.marketConditions?.momentum}
                    </div>
                  </div>
                  <div className="bg-muted/20 rounded p-3 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Volatility</div>
                    <div className={`font-bold capitalize ${
                      overview?.marketConditions?.volatility === "high" ? "text-red-400" :
                      overview?.marketConditions?.volatility === "low" ? "text-green-400" : "text-yellow-400"
                    }`}>
                      {overview?.marketConditions?.volatility}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top/Under performers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cyber-card rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <h3 className="font-bold text-green-400">Top Performers</h3>
                  </div>
                  <div className="space-y-2">
                    {overview?.topPerformers?.map((ticker: string) => {
                      const s = report.stockAnalyses[ticker as keyof typeof report.stockAnalyses] as StockAnalysis;
                      if (!s) return null;
                      return (
                        <div key={ticker} className="flex items-center justify-between bg-green-500/10 rounded p-2">
                          <div>
                            <span className="font-mono font-bold text-green-400">{ticker}</span>
                            <span className="text-xs text-muted-foreground ml-2">{s.name.split(" ").slice(0, 2).join(" ")}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-sm">{formatPrice(s.currentPrice)}</div>
                            <div className="text-xs text-green-400 font-mono">
                              {s.monthChange >= 0 ? "+" : ""}{s.monthChange.toFixed(1)}% 1mo
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="cyber-card rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <h3 className="font-bold text-red-400">Underperformers</h3>
                  </div>
                  <div className="space-y-2">
                    {overview?.underperformers?.map((ticker: string) => {
                      const s = report.stockAnalyses[ticker as keyof typeof report.stockAnalyses] as StockAnalysis;
                      if (!s) return null;
                      return (
                        <div key={ticker} className="flex items-center justify-between bg-red-500/10 rounded p-2">
                          <div>
                            <span className="font-mono font-bold text-red-400">{ticker}</span>
                            <span className="text-xs text-muted-foreground ml-2">{s.name.split(" ").slice(0, 2).join(" ")}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-mono text-sm">{formatPrice(s.currentPrice)}</div>
                            <div className="text-xs text-red-400 font-mono">
                              {s.monthChange >= 0 ? "+" : ""}{s.monthChange.toFixed(1)}% 1mo
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Key Themes */}
              <div className="cyber-card rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-primary">Key Market Themes</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {overview?.keyThemes?.map((theme: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 bg-primary/5 rounded p-2">
                      <span className="text-primary font-mono text-xs mt-0.5">0{i + 1}</span>
                      <span className="text-sm text-muted-foreground">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks & Catalysts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cyber-card rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <h3 className="font-bold text-orange-400">Market Risks</h3>
                  </div>
                  <ul className="space-y-2">
                    {overview?.marketRisks?.map((risk: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-orange-400 mt-0.5">▸</span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cyber-card rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <h3 className="font-bold text-green-400">Positive Catalysts</h3>
                  </div>
                  <ul className="space-y-2">
                    {overview?.catalysts?.map((catalyst: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-400 mt-0.5">▸</span>
                        {catalyst}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Outlook */}
              <div className="cyber-card rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-secondary" />
                  <h3 className="font-bold text-secondary">Technical Sector Outlook</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{techOutlook?.summary}</p>
                <p className="text-sm text-muted-foreground">{techOutlook?.keyLevels}</p>
              </div>
            </div>
          </TabsContent>

          {/* STOCK ANALYSIS TAB */}
          <TabsContent value="stocks">
            <div className="space-y-4">
              {/* Sort controls */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                {(["score", "change", "price"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSortBy(s)}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      sortBy === s
                        ? "bg-primary/20 text-primary border border-primary/50"
                        : "bg-muted/20 text-muted-foreground border border-border hover:border-primary/30"
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
                <span className="ml-auto text-xs text-muted-foreground">
                  {stocks.length} stocks analyzed
                </span>
              </div>

              {/* Summary table */}
              <div className="cyber-card rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50 bg-muted/10">
                        <th className="text-left p-3 text-xs text-muted-foreground font-mono">TICKER</th>
                        <th className="text-right p-3 text-xs text-muted-foreground font-mono">PRICE</th>
                        <th className="text-right p-3 text-xs text-muted-foreground font-mono">DAY</th>
                        <th className="text-right p-3 text-xs text-muted-foreground font-mono">1-MO</th>
                        <th className="text-right p-3 text-xs text-muted-foreground font-mono">RSI</th>
                        <th className="text-right p-3 text-xs text-muted-foreground font-mono">P/E</th>
                        <th className="text-center p-3 text-xs text-muted-foreground font-mono">ACTION</th>
                        <th className="text-center p-3 text-xs text-muted-foreground font-mono">SCORE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedStocks.map((stock) => {
                        const rec = stock.recommendation as any;
                        return (
                          <tr key={stock.symbol} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                            <td className="p-3">
                              <div className="font-mono font-bold text-primary">{stock.symbol}</div>
                              <div className="text-xs text-muted-foreground truncate max-w-[120px]">{stock.name.split(" ").slice(0, 2).join(" ")}</div>
                            </td>
                            <td className="p-3 text-right font-mono">{formatPrice(stock.currentPrice)}</td>
                            <td className={`p-3 text-right font-mono ${stock.dayChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                              {stock.dayChange >= 0 ? "+" : ""}{stock.dayChange.toFixed(2)}%
                            </td>
                            <td className={`p-3 text-right font-mono ${stock.monthChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                              {stock.monthChange >= 0 ? "+" : ""}{stock.monthChange.toFixed(1)}%
                            </td>
                            <td className={`p-3 text-right font-mono ${
                              stock.rsi14 > 70 ? "text-red-400" : stock.rsi14 < 30 ? "text-green-400" : "text-yellow-400"
                            }`}>
                              {stock.rsi14.toFixed(1)}
                            </td>
                            <td className="p-3 text-right font-mono">
                              {stock.trailingPE > 0 ? `${stock.trailingPE.toFixed(1)}x` : "—"}
                            </td>
                            <td className="p-3 text-center">
                              <Badge className={`text-xs border ${getActionBadgeClass(rec?.action)}`}>
                                {formatActionLabel(rec?.action)}
                              </Badge>
                            </td>
                            <td className="p-3 text-center">
                              <span className={`font-mono font-bold ${
                                stock.overallScore >= 7 ? "text-green-400" :
                                stock.overallScore >= 5 ? "text-yellow-400" : "text-red-400"
                              }`}>
                                {stock.overallScore}/10
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Individual stock cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {sortedStocks.map((stock) => (
                  <StockCard key={stock.symbol} stock={stock} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* STRATEGY TAB */}
          <TabsContent value="strategy">
            <div className="space-y-6">
              {/* Strategy Summary */}
              <div className="cyber-card rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-bold text-primary">Investment Strategy</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`border ${
                      strategy?.overallApproach === "aggressive" ? "bg-red-500/20 text-red-400 border-red-500/50" :
                      strategy?.overallApproach === "conservative" ? "bg-green-500/20 text-green-400 border-green-500/50" :
                      strategy?.overallApproach === "defensive" ? "bg-blue-500/20 text-blue-400 border-blue-500/50" :
                      "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                    }`}>
                      {strategy?.overallApproach?.toUpperCase()} APPROACH
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/50 border">
                      {strategy?.timeHorizon?.replace(/_/g, " ").toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{strategy?.summary}</p>
              </div>

              {/* Portfolio Allocation */}
              <div className="cyber-card rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-primary">Portfolio Allocation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Strong Buy */}
                  {strongBuys.length > 0 && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                        <span className="font-bold text-emerald-400 text-sm">STRONG BUY</span>
                      </div>
                      <div className="space-y-2">
                        {strongBuys.map((ticker: string) => {
                          const s = report.stockAnalyses[ticker as keyof typeof report.stockAnalyses] as StockAnalysis;
                          if (!s) return null;
                          return (
                            <div key={ticker} className="flex items-center justify-between">
                              <span className="font-mono font-bold text-emerald-400">{ticker}</span>
                              <div className="text-right text-xs">
                                <div className="font-mono">{formatPrice(s.currentPrice)}</div>
                                <div className={s.monthChange >= 0 ? "text-green-400" : "text-red-400"}>
                                  {s.monthChange >= 0 ? "+" : ""}{s.monthChange.toFixed(1)}%
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Buy */}
                  {buys.length > 0 && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <span className="font-bold text-green-400 text-sm">BUY</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {buys.map((ticker: string) => {
                          const s = report.stockAnalyses[ticker as keyof typeof report.stockAnalyses] as StockAnalysis;
                          if (!s) return null;
                          return (
                            <div key={ticker} className="flex items-center justify-between">
                              <span className="font-mono font-bold text-green-400">{ticker}</span>
                              <span className="text-xs font-mono">{formatPrice(s.currentPrice)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Hold */}
                  {holds.length > 0 && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="font-bold text-yellow-400 text-sm">HOLD</span>
                      </div>
                      <div className="space-y-2">
                        {holds.map((ticker: string) => {
                          const s = report.stockAnalyses[ticker as keyof typeof report.stockAnalyses] as StockAnalysis;
                          if (!s) return null;
                          return (
                            <div key={ticker} className="flex items-center justify-between">
                              <span className="font-mono font-bold text-yellow-400">{ticker}</span>
                              <div className="text-right text-xs">
                                <div className="font-mono">{formatPrice(s.currentPrice)}</div>
                                <div className={s.monthChange >= 0 ? "text-green-400" : "text-red-400"}>
                                  {s.monthChange >= 0 ? "+" : ""}{s.monthChange.toFixed(1)}%
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Sell */}
                  {sells.length > 0 && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="font-bold text-red-400 text-sm">SELL / AVOID</span>
                      </div>
                      <div className="space-y-2">
                        {sells.map((ticker: string) => {
                          const s = report.stockAnalyses[ticker as keyof typeof report.stockAnalyses] as StockAnalysis;
                          if (!s) return null;
                          return (
                            <div key={ticker} className="flex items-center justify-between">
                              <span className="font-mono font-bold text-red-400">{ticker}</span>
                              <span className="text-xs font-mono">{formatPrice(s.currentPrice)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Recommendations */}
              <div className="cyber-card rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-primary">Key Recommendations</h2>
                </div>
                <div className="space-y-3">
                  {strategy?.keyRecommendations?.map((rec: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-primary/5 rounded p-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Management & Sector Rotation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cyber-card rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-4 h-4 text-secondary" />
                    <h3 className="font-bold text-secondary">Risk Management</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{strategy?.riskManagement}</p>
                </div>

                <div className="cyber-card rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-gold" style={{ color: "#fbbf24" }} />
                    <h3 className="font-bold" style={{ color: "#fbbf24" }}>Sector Rotation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{strategy?.sectorRotation}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
