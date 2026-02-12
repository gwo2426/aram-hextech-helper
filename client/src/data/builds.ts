// ARAM Augment Build Guides - Enhanced Version

export interface Build {
  id: string;
  name: string;
  description: string;
  category: '输出' | '坦克' | '辅助' | '混合';
  augments: string[];
  suitableFor: string[];
  playstyle: string;
  rating: number;
  popularity: string;
  strengths: string[];
  weaknesses: string[];
  tips: string;
}

export const builds: Build[] = [
  {
    id: "archmage",
    name: "大法师流",
    description: "极致法术强度和技能急速，适合法师英雄的核心Build",
    category: '输出',
    augments: ["buff_buddies", "bread_and_cheese", "big_brain", "hextech_soul"],
    suitableFor: ["拉克丝", "泽拉斯", "维迦", "辛德拉"],
    playstyle: "堆叠法术强度，配合技能急速实现高频率技能输出。利用buff增益最大化伤害，适合远程Poke和团战AOE输出。",
    rating: 4.8,
    popularity: '高',
    strengths: ['法术伤害极高', '技能冷却短', 'AOE输出能力强'],
    weaknesses: ['脆皮易被秒', '需要走位', '依赖技能命中'],
    tips: '优先选择增益伙伴和大脑袋，确保生存能力。在团战中保持安全距离，利用超远射程持续输出。',
  },
  {
    id: "support_god",
    name: "辅助之神",
    description: "最大化治疗护盾效果，成为团队的守护者",
    category: '辅助',
    augments: ["all_for_you", "holy_fire", "buff_buddies", "ocean_soul"],
    suitableFor: ["萨勒芬妮", "娑纳", "索拉卡", "娜美"],
    playstyle: "专注于团队增益和保护，通过强化治疗护盾效果让团队立于不败之地。圣火提供额外输出能力。",
    rating: 4.9,
    popularity: '高',
    strengths: ['团队增益极强', '治疗量巨大', '保护能力出色'],
    weaknesses: ['依赖队友', '缺乏输出', '需要走位'],
    tips: '优先选择全为了你，最大化治疗效果。在团战中站位靠后，确保能持续为队友提供治疗。'
  },
  {
    id: "adc_carry",
    name: "ADC Carry流",
    description: "攻速暴击流，后期无敌的输出机器",
    category: '输出',
    augments: ["bread_and_jam", "cerberus", "infernal_soul"],
    suitableFor: ["金克丝", "厄运小姐", "崔丝塔娜", "凯特琳"],
    playstyle: "通过攻速和暴击堆叠，配合地狱三头犬的双重效果，实现恐怖的持续输出。后期团战收割利器。",
    rating: 4.7,
    popularity: '极高',
    strengths: ['后期伤害爆炸', '持续输出强', '推塔快'],
    weaknesses: ['前期较弱', '怕刺客', '需要发育'],
    tips: '前期猥琐发育，选择攻速和暴击相关符文。后期站位靠后，利用射程优势持续输出。',
  },
  {
    id: "tank_immortal",
    name: "不死坦克",
    description: "极限坦度，前排永不倒下",
    category: '坦克',
    augments: ["celestial_body", "adamant", "mountain_soul", "cant_touch_this"],
    suitableFor: ["茂凯", "奥恩", "塞恩", "石头人"],
    playstyle: "堆叠生命值和双抗，配合无敌技能在团战中持续吸收伤害。适合开团和保护后排。",
    rating: 4.6,
    popularity: '中',
    strengths: ['坦度极高', '开团能力强', '保护后排'],
    weaknesses: ['缺乏输出', '机动性差', '怕百分比伤害'],
    tips: '优先选择天体和山脉魂，最大化坦度。在团战中主动吸收伤害，为队友创造输出空间。',
  },
  {
    id: "assassin_oneshot",
    name: "刺客秒杀",
    description: "极限爆发，瞬间蒸发敌方C位",
    category: '输出',
    augments: ["bread_and_butter", "blade_waltz", "cloud_soul"],
    suitableFor: ["劫", "卡特琳娜", "妖姬", "阿卡丽"],
    playstyle: "堆叠攻击力和穿透，利用刀锋华尔兹快速切入后排。需要精准的时机把握和操作。",
    rating: 4.5,
    popularity: '中',
    strengths: ['爆发伤害极高', '机动性强', '切后排能力强'],
    weaknesses: ['操作难度高', '容错率低', '怕控制'],
    tips: '等待敌方关键技能释放后再切入。利用刀锋华尔兹的无敌时间躲避伤害。',
  },
  {
    id: "poke_master",
    name: "Poke大师",
    description: "超远距离消耗，让敌人无法靠近",
    category: '输出',
    augments: ["bread_and_cheese", "apex_inventor", "hextech_soul"],
    suitableFor: ["吉格斯", "泽拉斯", "韦鲁斯", "杰斯"],
    playstyle: "利用远程技能持续消耗敌人，装备急速确保技能循环。在团战前就将敌人血量压低。",
    rating: 4.7,
    popularity: '高',
    strengths: ['消耗能力强', '安全距离远', '团战前优势大'],
    weaknesses: ['怕突进', '需要技能命中', '蓝耗高'],
    tips: '保持安全距离，利用地形优势进行Poke。在敌人血量压低后配合队友开团。',
  },
  {
    id: "snowball_engage",
    name: "雪球开团流",
    description: "强化雪球技能，成为开团利器",
    category: '混合',
    augments: ["biggest_snowball_ever", "bounce_of_poro_king", "cloud_soul"],
    suitableFor: ["艾希", "阿木木", "蕾欧娜", "布隆"],
    playstyle: "利用强化雪球和波罗王之跃实现远距离开团，配合云端魂提高机动性。适合主动开团的英雄。",
    rating: 4.4,
    popularity: '中',
    strengths: ['开团能力强', '机动性高', '控制能力强'],
    weaknesses: ['需要命中雪球', '容错率低', '依赖队友跟进'],
    tips: '利用雪球的穿透特性开团，波罗王之跃提供额外坦度。确保队友准备好跟进。',
  },
  {
    id: "no_ult_power",
    name: "无大招强化",
    description: "牺牲大招换取全面强化，适合大招不重要的英雄",
    category: '输出',
    augments: ["back_to_basics", "bread_and_cheese", "big_brain"],
    suitableFor: ["卡萨丁", "瑞兹", "卡西奥佩娅"],
    playstyle: "通过返璞归真获得35%技能伤害提升和70技能急速，配合其他增益实现超高频率输出。仅适合大招依赖度低的英雄。",
    rating: 4.3,
    popularity: '低',
    strengths: ['技能伤害极高', '技能冷却极短', '持续输出强'],
    weaknesses: ['缺少大招', '仅适合特定英雄', '灵活性差'],
    tips: '仅在玩卡萨丁、瑞兹等大招不重要的英雄时选择。利用超高技能急速实现持续输出。',
  },
];
