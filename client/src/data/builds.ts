// ARAM Augment Build Guides

export interface Build {
  id: string;
  name: string;
  description: string;
  augments: string[];
  suitableFor: string[];
  playstyle: string;
  rating: number;
}

export const builds: Build[] = [
  {
    id: "archmage",
    name: "大法师流",
    description: "极致法术强度和技能急速，适合法师英雄的核心Build",
    augments: ["buff_buddies", "bread_and_cheese", "big_brain", "hextech_soul"],
    suitableFor: ["拉克丝", "泽拉斯", "维迦", "辛德拉"],
    playstyle: "堆叠法术强度，配合技能急速实现高频率技能输出。利用buff增益最大化伤害，适合远程Poke和团战AOE输出。",
    rating: 4.8,
  },
  {
    id: "support_god",
    name: "辅助之神",
    description: "最大化治疗护盾效果，成为团队的守护者",
    augments: ["all_for_you", "holy_fire", "buff_buddies", "ocean_soul"],
    suitableFor: ["萨勒芬妮", "娑娜", "索拉卡", "娜美"],
    playstyle: "专注于团队增益和保护，通过强化治疗护盾效果让团队立于不败之地。圣火提供额外输出能力。",
    rating: 4.9,
  },
  {
    id: "adc_carry",
    name: "ADC Carry流",
    description: "攻速暴击流，后期无敌的输出机器",
    augments: ["bread_and_jam", "cerberus", "infernal_soul"],
    suitableFor: ["金克丝", "厄运小姐", "崔丝塔娜", "凯特琳"],
    playstyle: "通过攻速和暴击堆叠，配合地狱三头犬的双重效果，实现恐怖的持续输出。后期团战收割利器。",
    rating: 4.7,
  },
  {
    id: "tank_immortal",
    name: "不死坦克",
    description: "极限坦度，前排永不倒下",
    augments: ["celestial_body", "adamant", "mountain_soul", "cant_touch_this"],
    suitableFor: ["茂凯", "奥恩", "塞恩", "石头人"],
    playstyle: "堆叠生命值和双抗，配合无敌技能在团战中持续吸收伤害。适合开团和保护后排。",
    rating: 4.6,
  },
  {
    id: "assassin_oneshot",
    name: "刺客秒杀",
    description: "极限爆发，瞬间蒸发敌方C位",
    augments: ["bread_and_butter", "blade_waltz", "cloud_soul"],
    suitableFor: ["劫", "卡特琳娜", "妖姬", "阿卡丽"],
    playstyle: "堆叠攻击力和穿透，利用刀锋华尔兹快速切入后排。需要精准的时机把握和操作。",
    rating: 4.5,
  },
  {
    id: "poke_master",
    name: "Poke大师",
    description: "超远距离消耗，让敌人无法靠近",
    augments: ["bread_and_cheese", "apex_inventor", "hextech_soul"],
    suitableFor: ["吉格斯", "泽拉斯", "韦鲁斯", "杰斯"],
    playstyle: "利用远程技能持续消耗敌人，装备急速确保技能循环。在团战前就将敌人血量压低。",
    rating: 4.7,
  },
  {
    id: "snowball_engage",
    name: "雪球开团流",
    description: "强化雪球技能，成为开团利器",
    augments: ["biggest_snowball_ever", "bounce_of_poro_king", "cloud_soul"],
    suitableFor: ["艾希", "阿木木", "蕾欧娜", "布隆"],
    playstyle: "利用强化雪球和波罗王之跃实现远距离开团，配合云端魂提高机动性。适合主动开团的英雄。",
    rating: 4.4,
  },
  {
    id: "no_ult_power",
    name: "无大招强化",
    description: "牺牲大招换取全面强化，适合大招不重要的英雄",
    augments: ["back_to_basics", "bread_and_cheese", "big_brain"],
    suitableFor: ["卡萨丁", "瑞兹", "卡西奥佩娅"],
    playstyle: "通过返璞归真获得35%技能伤害提升和70技能急速，配合其他增益实现超高频率输出。仅适合大招依赖度低的英雄。",
    rating: 4.3,
  },
];
