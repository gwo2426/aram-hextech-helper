// ARAM Champions Data with Augment Recommendations

export interface Champion {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  tier: "S" | "A" | "B" | "C";
  winRate: number;
  playRate: number;
  recommendedAugments: string[];
  playstyle: string;
}

export const champions: Champion[] = [
  {
    id: "lux",
    name: "拉克丝",
    nameEn: "Lux",
    role: "法师",
    tier: "S",
    winRate: 54.2,
    playRate: 8.5,
    recommendedAugments: ["bread_and_cheese", "big_brain", "hextech_soul"],
    playstyle: "远程Poke，控制链，团战AOE伤害",
  },
  {
    id: "jinx",
    name: "金克丝",
    nameEn: "Jinx",
    role: "射手",
    tier: "S",
    winRate: 53.8,
    playRate: 9.2,
    recommendedAugments: ["bread_and_jam", "cerberus", "infernal_soul"],
    playstyle: "后期carry，团战收割，超远距离输出",
  },
  {
    id: "lillia",
    name: "莉莉娅",
    nameEn: "Lillia",
    role: "法师",
    tier: "S",
    winRate: 56.1,
    playRate: 6.8,
    recommendedAugments: ["bread_and_cheese", "celestial_body", "ocean_soul"],
    playstyle: "持续伤害，团战控制，高机动性",
  },
  {
    id: "seraphine",
    name: "萨勒芬妮",
    nameEn: "Seraphine",
    tier: "S",
    role: "辅助/法师",
    winRate: 55.3,
    playRate: 7.1,
    recommendedAugments: ["all_for_you", "holy_fire", "buff_buddies"],
    playstyle: "团队增益，AOE控制，治疗护盾",
  },
  {
    id: "ziggs",
    name: "吉格斯",
    nameEn: "Ziggs",
    role: "法师",
    tier: "A",
    winRate: 52.4,
    playRate: 7.8,
    recommendedAugments: ["bread_and_cheese", "apex_inventor", "hextech_soul"],
    playstyle: "推塔专家，远程Poke，区域控制",
  },
  {
    id: "sona",
    name: "娑娜",
    nameEn: "Sona",
    role: "辅助",
    tier: "S",
    winRate: 54.9,
    playRate: 6.3,
    recommendedAugments: ["all_for_you", "buff_buddies", "ocean_soul"],
    playstyle: "持续治疗，团队增益，后期强势",
  },
  {
    id: "veigar",
    name: "维迦",
    nameEn: "Veigar",
    role: "法师",
    tier: "A",
    winRate: 52.1,
    playRate: 5.9,
    recommendedAugments: ["bread_and_cheese", "big_brain", "back_to_basics"],
    playstyle: "无限叠加，爆发秒杀，控制保护",
  },
  {
    id: "maokai",
    name: "茂凯",
    nameEn: "Maokai",
    role: "坦克",
    tier: "S",
    winRate: 55.7,
    playRate: 5.2,
    recommendedAugments: ["celestial_body", "adamant", "mountain_soul"],
    playstyle: "前排坦克，团战开团，控制链",
  },
  {
    id: "ashe",
    name: "艾希",
    nameEn: "Ashe",
    role: "射手",
    tier: "A",
    winRate: 51.8,
    playRate: 8.1,
    recommendedAugments: ["bread_and_jam", "biggest_snowball_ever", "cloud_soul"],
    playstyle: "远程开团，持续减速，视野控制",
  },
  {
    id: "brand",
    name: "布兰德",
    nameEn: "Brand",
    role: "法师",
    tier: "A",
    winRate: 52.6,
    playRate: 6.7,
    recommendedAugments: ["bread_and_cheese", "blunt_force", "infernal_soul"],
    playstyle: "百分比伤害，AOE爆发，团战收割",
  },
  {
    id: "xerath",
    name: "泽拉斯",
    nameEn: "Xerath",
    role: "法师",
    tier: "A",
    winRate: 51.9,
    playRate: 7.3,
    recommendedAugments: ["bread_and_cheese", "big_brain", "hextech_soul"],
    playstyle: "超远距离Poke，精准打击，消耗流",
  },
  {
    id: "miss_fortune",
    name: "厄运小姐",
    nameEn: "Miss Fortune",
    role: "射手",
    tier: "A",
    winRate: 52.3,
    playRate: 7.9,
    recommendedAugments: ["bread_and_jam", "cerberus", "infernal_soul"],
    playstyle: "大招AOE，团战输出，移速优势",
  },
  {
    id: "zed",
    name: "劫",
    nameEn: "Zed",
    role: "刺客",
    tier: "B",
    winRate: 49.8,
    playRate: 6.4,
    recommendedAugments: ["bread_and_butter", "blade_waltz", "cloud_soul"],
    playstyle: "单点爆发，切后排，高操作",
  },
  {
    id: "yasuo",
    name: "亚索",
    nameEn: "Yasuo",
    role: "战士",
    tier: "B",
    winRate: 48.9,
    playRate: 9.8,
    recommendedAugments: ["bread_and_jam", "cant_touch_this", "mountain_soul"],
    playstyle: "近战carry，风墙保护，团战切入",
  },
  {
    id: "lee_sin",
    name: "李青",
    nameEn: "Lee Sin",
    role: "战士",
    tier: "C",
    winRate: 47.2,
    playRate: 5.6,
    recommendedAugments: ["bread_and_butter", "bounce_of_poro_king", "cloud_soul"],
    playstyle: "高机动，踢人开团，前期强势",
  },
];

export const roles = ["全部", "法师", "射手", "坦克", "辅助", "刺客", "战士"];

export const getTierColor = (tier: string): string => {
  switch (tier) {
    case "S":
      return "text-accent neon-text-gold";
    case "A":
      return "text-primary neon-text";
    case "B":
      return "text-secondary neon-text-purple";
    case "C":
      return "text-muted-foreground";
    default:
      return "text-foreground";
  }
};

export const getTierLabel = (tier: string): string => {
  switch (tier) {
    case "S":
      return "S级";
    case "A":
      return "A级";
    case "B":
      return "B级";
    case "C":
      return "C级";
    default:
      return tier;
  }
};
