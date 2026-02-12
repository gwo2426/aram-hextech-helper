// ARAM Hextech Augments Data
// Based on Patch 26.3

export type AugmentTier = "Prismatic" | "Gold" | "Silver";
export type AugmentSet = string | null;

export interface Augment {
  id: string;
  name: string;
  nameEn: string;
  tier: AugmentTier;
  set: AugmentSet;
  effect: string;
  icon?: string;
}

export const augments: Augment[] = [
  // Prismatic Tier
  {
    id: "mystery_ping",
    name: "???",
    nameEn: "???",
    tier: "Prismatic",
    set: null,
    effect: "你的敌人失踪信号会向标记位置发射导弹，爆炸时对敌人造成100-400（基于等级）+ 目标已损失生命值10%的魔法伤害，并治疗范围内友军50-200（基于等级）+ 目标已损失生命值10%。",
  },
  {
    id: "back_to_basics",
    name: "返璞归真",
    nameEn: "Back to Basics",
    tier: "Prismatic",
    set: null,
    effect: "你的技能伤害提高35%，获得70技能急速和35%治疗护盾效果，但你的大招永久封印。",
  },
  {
    id: "cant_touch_this",
    name: "无法触碰",
    nameEn: "Can't Touch This",
    tier: "Prismatic",
    set: null,
    effect: "释放大招时获得2秒无敌效果（8秒冷却）。",
  },
  {
    id: "blade_waltz",
    name: "刀锋华尔兹",
    nameEn: "Blade Waltz",
    tier: "Prismatic",
    set: null,
    effect: "获得刀锋华尔兹技能：闪现到目标敌人身边并造成伤害，期间无法被选中且无法行动。",
  },
  {
    id: "bounce_of_poro_king",
    name: "波罗王之跃",
    nameEn: "Bounce of the Poro King",
    tier: "Prismatic",
    set: null,
    effect: "获得波罗王之跃技能：获得控制免疫和穿墙效果，落地时击退敌人。",
  },
  
  // Gold Tier
  {
    id: "all_for_you",
    name: "全为了你",
    nameEn: "All For You",
    tier: "Gold",
    set: "Wee Woo Wee Woo",
    effect: "你对友军的治疗和护盾效果提高30%。",
  },
  {
    id: "holy_fire",
    name: "圣火",
    nameEn: "Holy Fire",
    tier: "Gold",
    set: null,
    effect: "你的治疗和护盾会向最近的敌人发射导弹，造成基于目标最大生命值的灼烧伤害（1.5秒冷却）。",
  },
  {
    id: "apex_inventor",
    name: "顶尖发明家",
    nameEn: "Apex Inventor",
    tier: "Gold",
    set: null,
    effect: "获得100装备急速，相当于50%物品冷却缩减。",
  },
  {
    id: "buff_buddies",
    name: "增益伙伴",
    nameEn: "Buff Buddies",
    tier: "Gold",
    set: "Archmage",
    effect: "获得烬火印记和洞察印记buff。",
  },
  {
    id: "biggest_snowball_ever",
    name: "史上最大雪球",
    nameEn: "Biggest Snowball Ever",
    tier: "Gold",
    set: "Snowday",
    effect: "增强雪球技能：击中后击飞并减速敌人，雪球冷却时间减少，可以替换闪现。命中后眩晕敌人。",
  },
  {
    id: "blunt_force",
    name: "钝器打击",
    nameEn: "Blunt Force",
    tier: "Gold",
    set: null,
    effect: "你的攻击和技能造成额外基于目标最大生命值的物理伤害。",
  },
  {
    id: "bread_and_butter",
    name: "基础套餐",
    nameEn: "Bread And Butter",
    tier: "Gold",
    set: null,
    effect: "获得攻击力、生命值和技能急速。",
  },
  {
    id: "bread_and_cheese",
    name: "奶酪套餐",
    nameEn: "Bread And Cheese",
    tier: "Gold",
    set: null,
    effect: "获得法术强度、生命值和技能急速。",
  },
  {
    id: "bread_and_jam",
    name: "果酱套餐",
    nameEn: "Bread And Jam",
    tier: "Gold",
    set: null,
    effect: "获得攻击速度、暴击率和移动速度。",
  },
  {
    id: "big_brain",
    name: "大脑袋",
    nameEn: "Big Brain",
    tier: "Gold",
    set: null,
    effect: "基于你的最大法力值获得护盾。",
  },
  {
    id: "celestial_body",
    name: "天体",
    nameEn: "Celestial Body",
    tier: "Gold",
    set: null,
    effect: "获得额外最大生命值和体型增大。",
  },
  {
    id: "cerberus",
    name: "地狱三头犬",
    nameEn: "Cerberus",
    tier: "Gold",
    set: null,
    effect: "同时获得冰雹和强攻效果。",
  },
  {
    id: "cheating",
    name: "作弊",
    nameEn: "Cheating",
    tier: "Gold",
    set: null,
    effect: "回城时间缩短，可以在战斗中使用。",
  },
  
  // Silver Tier
  {
    id: "adapt",
    name: "适应",
    nameEn: "ADAPt",
    tier: "Silver",
    set: null,
    effect: "将所有额外攻击力转换为法术强度（0.6 AD = 1 AP），并提高法术强度。",
  },
  {
    id: "adamant",
    name: "坚定",
    nameEn: "Adamant",
    tier: "Silver",
    set: null,
    effect: "定身或禁锢敌人时获得2-10（基于等级）护甲和魔抗，持续10秒，最多叠加10层。",
  },
  {
    id: "hextech_soul",
    name: "海克斯魂",
    nameEn: "Hextech Soul",
    tier: "Silver",
    set: null,
    effect: "获得海克斯巨龙魂，如果已有则获得其他巨龙魂。",
  },
  {
    id: "infernal_soul",
    name: "炼狱魂",
    nameEn: "Infernal Soul",
    tier: "Silver",
    set: null,
    effect: "获得炼狱巨龙魂，如果已有则获得其他巨龙魂。",
  },
  {
    id: "ocean_soul",
    name: "海洋魂",
    nameEn: "Ocean Soul",
    tier: "Silver",
    set: null,
    effect: "获得海洋巨龙魂，如果已有则获得其他巨龙魂。",
  },
  {
    id: "mountain_soul",
    name: "山脉魂",
    nameEn: "Mountain Soul",
    tier: "Silver",
    set: null,
    effect: "获得山脉巨龙魂，如果已有则获得其他巨龙魂。",
  },
  {
    id: "cloud_soul",
    name: "云端魂",
    nameEn: "Cloud Soul",
    tier: "Silver",
    set: null,
    effect: "获得云端巨龙魂，如果已有则获得其他巨龙魂。",
  },
];

export const augmentSets = [
  "Wee Woo Wee Woo",
  "Snowday",
  "Archmage",
];

export const getTierColor = (tier: AugmentTier): string => {
  switch (tier) {
    case "Prismatic":
      return "text-accent neon-text-gold";
    case "Gold":
      return "text-secondary neon-text-purple";
    case "Silver":
      return "text-primary neon-text";
    default:
      return "text-foreground";
  }
};

export const getTierBorderColor = (tier: AugmentTier): string => {
  switch (tier) {
    case "Prismatic":
      return "border-accent neon-glow-gold";
    case "Gold":
      return "border-secondary neon-glow-purple";
    case "Silver":
      return "border-primary neon-glow";
    default:
      return "border-border";
  }
};
