// ARAM 海克斯符文资料快照。
// 主要参考：League of Legends Wiki；当前仅收录已人工整理的条目，不宣称为完整数据库。
// 效果与可用性可能随版本变动，请以游戏客户端和官方公告为准。

export interface Augment {
  id: string;
  name: string;
  nameEn: string;
  tier: '棱彩' | '金色' | '银色';
  effect: string;
  detailedEffect: string;
  category: string;
  synergy: string[];
}

export const allAugments: Augment[] = [
  // ========== 棱彩符文 (Prismatic) - 最强力的符文 ==========
  {
    id: 'back_to_basics',
    name: '返璞归真',
    nameEn: 'Back to Basics',
    tier: '棱彩',
    effect: '技能伤害+35%，获得70技能急速和35%治疗护盾效果，但大招永久封印',
    detailedEffect: '你的技能伤害提升35%，获得70技能急速和35%治疗护盾增强，但你的大招被永久封印无法使用。适合大招不重要的英雄如卡萨丁、瑞兹、卡西奥佩娅。',
    category: '伤害增幅',
    synergy: ['卡萨丁', '瑞兹', '卡西奥佩娅', '大招不重要的英雄']
  },
  {
    id: 'blade_waltz',
    name: '刀锋华尔兹',
    nameEn: 'Blade Waltz',
    tier: '棱彩',
    effect: '替换召唤师技能为刀锋华尔兹：闪烁到敌方英雄之间造成伤害',
    detailedEffect: '替换一个召唤师技能为刀锋华尔兹。激活后闪烁到目标敌方英雄，然后在1.75秒内最多闪烁7次，每次造成30-150(+10%额外AD)(+6%AP)物理伤害并触发50%攻击特效。期间无法被选中和行动。',
    category: '爆发输出',
    synergy: ['刺客', '战士', '高AD英雄', '劫', '卡特琳娜']
  },
  {
    id: 'biggest_snowball_ever',
    name: '史上最大雪球',
    nameEn: 'Biggest Snowball Ever',
    tier: '棱彩',
    effect: '雪球升级为巨型雪球，可穿透非英雄单位，爆炸造成AOE伤害和击飞',
    detailedEffect: '将你的雪球升级为巨型雪球，增大半径并可穿透非英雄单位。命中时爆炸造成200-350(+100%额外AD)(+60%AP)魔法伤害，击飞0.75秒并减速20%持续2秒。雪球CD等效于100技能急速。',
    category: '开团控制',
    synergy: ['开团英雄', '坦克', '控制型英雄', '艾希', '阿木木', '蕾欧娜']
  },
  {
    id: 'bounce_of_poro_king',
    name: '波罗王之跃',
    nameEn: 'Bounce of the Poro King',
    tier: '棱彩',
    effect: '变身波罗王3秒，获得85%减伤和控制免疫，跳跃造成伤害和击退',
    detailedEffect: '替换召唤师技能。激活后变身波罗王3秒，获得85%减伤、25%移速、控制免疫和穿单位，但无法攻击和施法。每秒跳跃一次，造成100-300(+100%额外AD)(+50%AP)(+5%额外生命)物理伤害并击退敌人。',
    category: '坦度增强',
    synergy: ['坦克', '开团英雄', '前排', '塞恩', '茂凯']
  },
  {
    id: 'cant_touch_this',
    name: '无法触碰',
    nameEn: "Can't Touch This",
    tier: '棱彩',
    effect: '释放大招时获得2秒无敌(8秒CD)',
    detailedEffect: '释放大招时获得2秒无敌效果，该效果有8秒冷却时间。可以让你在团战中更加安全地释放大招。',
    category: '生存能力',
    synergy: ['法师', '射手', '需要施法时间的英雄', '厄运小姐', '卡特琳娜']
  },
  {
    id: 'cerberus',
    name: '地狱三头犬',
    nameEn: 'Cerberus',
    tier: '棱彩',
    effect: '同时获得丛刃和强攻基石符文',
    detailedEffect: '同时获得丛刃(前3次攻击获得额外攻速)和强攻(连续攻击同一目标造成额外伤害)两个基石符文的效果。',
    category: '攻击增强',
    synergy: ['射手', '战士', '依赖普攻的英雄', '金克丝', '崔丝塔娜']
  },
  {
    id: 'circle_of_death',
    name: '死亡循环',
    nameEn: 'Circle of Death',
    tier: '棱彩',
    effect: '你的治疗和回血会对最近的敌方英雄造成70%的魔法伤害',
    detailedEffect: '你的治疗和生命回复效果会对1000单位内最近的敌方英雄造成等于治疗量70%的魔法伤害。',
    category: '伤害转换',
    synergy: ['回复型英雄', '吸血流', '治疗型英雄', '沃里克', '蒙多医生']
  },
  {
    id: 'clown_college',
    name: '小丑学院',
    nameEn: 'Clown College',
    tier: '棱彩',
    effect: '获得萨科的背刺、欺诈和幻象爆炸能力',
    detailedEffect: '获得萨科的被动背刺(从背后攻击造成额外伤害)、主动欺诈(隐身并闪现)和幻象死亡爆炸(死亡时爆炸造成25%最大生命真实伤害)。替换一个召唤师技能为欺诈。',
    category: '特殊机制',
    synergy: ['刺客', '战士', '需要接近敌人的英雄']
  },
  {
    id: 'courage_colossus',
    name: '巨像勇气',
    nameEn: 'Courage of the Colossus',
    tier: '棱彩',
    effect: '定身或禁锢敌人时获得护盾(5秒CD)',
    detailedEffect: '定身或禁锢敌方英雄时获得持续3秒的护盾，吸收100-300(+5%最大生命)伤害。每次施法有5秒冷却。护盾可叠加但不刷新持续时间。',
    category: '生存能力',
    synergy: ['控制型英雄', '坦克', '辅助', '蕾欧娜', '诺提勒斯']
  },
  {
    id: 'cruelty',
    name: '残暴',
    nameEn: 'Cruelty',
    tier: '棱彩',
    effect: '定身或禁锢敌人时召唤彗星造成伤害(6秒CD)',
    detailedEffect: '定身或禁锢敌方英雄时在其头顶召唤彗星，1秒后落下造成50-150(+40%AP)(+4%最大生命)魔法伤害。每个目标每次施法有6秒冷却。',
    category: '伤害增幅',
    synergy: ['控制型英雄', 'AP英雄', '法师', '莫甘娜', '婕拉']
  },
  {
    id: 'dashing',
    name: '冲刺',
    nameEn: 'Dashing',
    tier: '棱彩',
    effect: '位移和闪现技能获得175技能急速',
    detailedEffect: '带有位移或闪现的技能获得175技能急速。卡莉丝塔获得125%额外攻速代替。',
    category: '机动增强',
    synergy: ['刺客', '有位移的英雄', '卡莉丝塔', '劫', '阿狸']
  },
  {
    id: 'devil_shoulder',
    name: '恶魔低语',
    nameEn: 'Devil on Your Shoulder',
    tier: '棱彩',
    effect: '持续损失生命但造成额外真实伤害，击杀后效果翻倍',
    detailedEffect: '小恶魔提莫每秒吸取你0.5%当前生命(敌人在1000单位内时为5%)。作为回报，你造成15%额外真实伤害，攻击和技能生成生命残留可吸收回血50-150(+50%额外AD)(+25%AP)并获得15%移速。击杀后8秒内效果翻倍。',
    category: '伤害增幅',
    synergy: ['高伤害英雄', '刺客', '战士', '德莱文', '烬']
  },
  {
    id: 'draw_your_sword',
    name: '拔剑',
    nameEn: 'Draw Your Sword',
    tier: '棱彩',
    effect: '远程英雄变为近战，获得大量属性加成',
    detailedEffect: '变为近战英雄(攻击距离200)。获得30%额外AD、25%攻速、30%生命、25%移速和20%生命偷取。加成随原本攻击距离增加0%-30%。仅远程英雄可选。',
    category: '形态转换',
    synergy: ['远程英雄', '射手', '法师', '金克丝', '崔丝塔娜']
  },
  {
    id: 'dropkick',
    name: '飞踢',
    nameEn: 'Dropkick',
    tier: '棱彩',
    effect: '低血量敌人被斩杀并踢飞，爆炸造成AOE伤害',
    detailedEffect: '攻击和技能斩杀低于5%(+3%每100AD)(+0.2%每1000最大生命)最大生命的敌方英雄，尸体被踢飞。撞到敌人或地形时爆炸造成150-500(+100%护甲)(+100%魔抗)魔法伤害。成功斩杀回复100-300(+2.5%最大生命)。',
    category: '斩杀机制',
    synergy: ['坦克', '战士', '高护甲魔抗英雄', '塞恩', '奥恩']
  },
  {
    id: 'droppybara',
    name: '水豚天降',
    nameEn: 'Droppybara',
    tier: '棱彩',
    effect: '召唤巨型水豚落下造成真实伤害',
    detailedEffect: '替换召唤师技能。激活后2.5秒后召唤巨型水豚在目标位置落下，对550范围内敌人造成25%最大生命真实伤害(对小兵70%伤害)。',
    category: '爆发输出',
    synergy: ['所有英雄', '开团英雄', 'AOE输出英雄']
  },
  {
    id: 'dual_wield',
    name: '双持',
    nameEn: 'Dual Wield',
    tier: '棱彩',
    effect: '普攻发射额外箭矢造成40%伤害',
    detailedEffect: '普攻时发射额外箭矢，0.225秒后命中造成40%攻击伤害并触发40%效果的攻击特效。总攻速提升20%。',
    category: '攻击增强',
    synergy: ['射手', '依赖普攻的英雄', '攻击特效英雄', '艾希', '金克丝']
  },

  // ========== 金色符文 (Gold) - 强力符文 ==========
  {
    id: 'all_for_you',
    name: '全为了你',
    nameEn: 'All For You',
    tier: '金色',
    effect: '对友方英雄的治疗和护盾效果+30%',
    detailedEffect: '你对友方英雄施加的治疗和护盾效果提升30%。',
    category: '辅助增强',
    synergy: ['辅助', '治疗型英雄', '萨勒芬妮', '娑娜', '索拉卡', '娜美']
  },
  {
    id: 'apex_inventor',
    name: '顶尖发明家',
    nameEn: 'Apex Inventor',
    tier: '金色',
    effect: '获得100装备急速(相当于50%装备CD减少)',
    detailedEffect: '获得100装备急速，相当于装备主动技能冷却时间减少50%。',
    category: '装备增强',
    synergy: ['依赖装备主动的英雄', '黑默丁格', '吉格斯']
  },
  {
    id: 'big_brain',
    name: '大脑袋',
    nameEn: 'Big Brain',
    tier: '金色',
    effect: '获得等于300%AP的护盾，复活时刷新',
    detailedEffect: '获得吸收伤害等于300%法术强度的护盾，持续到被打破。复活时护盾刷新。',
    category: '生存能力',
    synergy: ['AP英雄', '法师', '拉克丝', '辛德拉', '维迦']
  },
  {
    id: 'bread_and_butter',
    name: '奶酪套餐',
    nameEn: 'Bread And Butter',
    tier: '金色',
    effect: 'Q技能获得100技能急速',
    detailedEffect: '你的第一个基础技能(Q)获得100技能急速。',
    category: '技能增强',
    synergy: ['Q技能强的英雄', '拉克丝', '泽拉斯', '吉格斯']
  },
  {
    id: 'bread_and_jam',
    name: '果酱套餐',
    nameEn: 'Bread And Jam',
    tier: '金色',
    effect: 'W技能获得100技能急速',
    detailedEffect: '你的第二个基础技能(W)获得100技能急速。',
    category: '技能增强',
    synergy: ['W技能强的英雄', '射手', '金克丝', '崔丝塔娜']
  },
  {
    id: 'bread_and_cheese',
    name: '基础套餐',
    nameEn: 'Bread And Cheese',
    tier: '金色',
    effect: 'E技能获得100技能急速',
    detailedEffect: '你的第三个基础技能(E)获得100技能急速。',
    category: '技能增强',
    synergy: ['E技能强的英雄', '战士', '刺客']
  },
  {
    id: 'celestial_body',
    name: '天体',
    nameEn: 'Celestial Body',
    tier: '金色',
    effect: '获得1250额外生命，但伤害降低10%',
    detailedEffect: '获得1250额外生命值，但你造成的伤害降低10%。',
    category: '坦度增强',
    synergy: ['坦克', '前排', '塞恩', '茂凯', '蒙多医生']
  },
  {
    id: 'cheating',
    name: '作弊',
    nameEn: 'Cheating',
    tier: '金色',
    effect: '回城可用并升级，离开泉水后仍可购买装备',
    detailedEffect: '你的回城现在可用并升级为强化回城。离开泉水后仍可购买装备，泉水会为你提供治疗和资源恢复。',
    category: '特殊机制',
    synergy: ['所有英雄', '需要频繁购买装备的英雄']
  },
  {
    id: 'critical_healing',
    name: '暴击治疗',
    nameEn: 'Critical Healing',
    tier: '金色',
    effect: '治疗和护盾有暴击几率提升40%效果，获得25%暴击',
    detailedEffect: '你的治疗和护盾有等于你暴击几率的概率提升40%效果。额外获得25%暴击几率。',
    category: '辅助增强',
    synergy: ['辅助', '治疗型英雄', '萨勒芬妮', '娑娜']
  },
  {
    id: 'critical_missile',
    name: '暴击导弹',
    nameEn: 'Critical Missile',
    tier: '金色',
    effect: '暴击发射鞭炮造成魔法伤害，获得25%暴击',
    detailedEffect: '暴击时向目标发射1个鞭炮(每33.33%暴击+1个)，每个造成11-40(+7%额外AD)(+10%AP)魔法伤害(4秒CD)。额外获得25%暴击几率。',
    category: '攻击增强',
    synergy: ['射手', '暴击流英雄', '金克丝', '崔丝塔娜']
  },
  {
    id: 'critical_rhythm',
    name: '暴击节奏',
    nameEn: 'Critical Rhythm',
    tier: '金色',
    effect: '暴击获得攻速加成，获得25%暴击',
    detailedEffect: '暴击时获得6%额外攻速持续6秒，最多叠加10层共60%。额外获得25%暴击几率。',
    category: '攻击增强',
    synergy: ['射手', '暴击流英雄', '亚索', '永恩']
  },
  {
    id: 'dawnbringer_resolve',
    name: '黎明使者决心',
    nameEn: "Dawnbringer's Resolve",
    tier: '金色',
    effect: '低于50%生命时回复30%最大生命(45秒CD)',
    detailedEffect: '生命值低于50%时，3秒内回复30%最大生命值(45秒冷却，死亡重置)。',
    category: '生存能力',
    synergy: ['坦克', '战士', '前排英雄']
  },
  {
    id: 'demon_dance',
    name: '恶魔之舞',
    nameEn: "Demon's Dance",
    tier: '金色',
    effect: '同时获得迅捷步法和不灭之握基石符文',
    detailedEffect: '同时获得迅捷步法(移动和攻击回血)和不灭之握(攻击造成额外伤害并永久增加生命)两个基石符文。',
    category: '混合增强',
    synergy: ['战士', '坦克', '混合型英雄']
  },
  {
    id: 'divine_intervention',
    name: '神圣干预',
    nameEn: 'Divine Intervention',
    tier: '金色',
    effect: '自动施放塔里克大招(35秒CD)',
    detailedEffect: '自动施放塔里克的宇宙光辉，2.5秒后你和400范围内友军获得2.5秒无敌(35秒冷却)。',
    category: '生存能力',
    synergy: ['辅助', '保护型英雄', '团队英雄']
  },
  {
    id: 'donation',
    name: '捐赠',
    nameEn: 'Donation',
    tier: '金色',
    effect: '获得1750金币',
    detailedEffect: '获取此符文时立即获得1750金币。',
    category: '经济增强',
    synergy: ['所有英雄', '需要快速成型的英雄']
  },
  {
    id: 'double_tap',
    name: '双重打击',
    nameEn: 'Double Tap',
    tier: '金色',
    effect: '暴击额外触发一次攻击特效，获得25%暴击',
    detailedEffect: '暴击时额外触发一次攻击特效。额外获得25%暴击几率。',
    category: '攻击增强',
    synergy: ['射手', '依赖攻击特效的英雄', '艾希', '韦鲁斯']
  },

  // ========== 银色符文 (Silver) - 基础符文 ==========
  {
    id: 'adapt',
    name: '适应',
    nameEn: 'ADAPt',
    tier: '银色',
    effect: '将所有额外AD转换为AP(1AP=0.6AD)，AP提升15%',
    detailedEffect: '将你所有的额外攻击力以0.6:1的比例转换为法术强度。额外提升15%法术强度。',
    category: '属性转换',
    synergy: ['混伤英雄', 'AP英雄', '凯尔', '阿卡丽']
  },
  {
    id: 'adamant',
    name: '坚定',
    nameEn: 'Adamant',
    tier: '银色',
    effect: '定身或禁锢敌人获得双抗，最多叠10层',
    detailedEffect: '定身或禁锢敌方英雄时获得2-10(基于等级)护甲和魔抗持续10秒，最多叠加10层共20-100双抗，触发时刷新持续时间。',
    category: '坦度增强',
    synergy: ['控制型英雄', '坦克', '蕾欧娜', '诺提勒斯']
  },
  {
    id: 'blunt_force',
    name: '钝器打击',
    nameEn: 'Blunt Force',
    tier: '银色',
    effect: '攻击力提升20%',
    detailedEffect: '攻击力提升20%。',
    category: '伤害增幅',
    synergy: ['AD英雄', '战士', '刺客', '射手']
  },
  {
    id: 'buff_buddies',
    name: '增益伙伴',
    nameEn: 'Buff Buddies',
    tier: '银色',
    effect: '永久获得灼烧印记和洞察印记',
    detailedEffect: '永久获得灼烧印记(攻击造成额外魔法伤害)和洞察印记(技能CD减少和法力回复)。',
    category: '混合增强',
    synergy: ['法师', 'AP英雄', '混合型英雄']
  },
  {
    id: 'crack_open_egg',
    name: '破蛋',
    nameEn: 'Crack Open That Egg',
    tier: '银色',
    effect: '护盾消失时爆炸造成等于护盾值的魔法伤害',
    detailedEffect: '你的护盾消失时爆炸，对附近敌人造成等于100%护盾值的魔法伤害。',
    category: '伤害转换',
    synergy: ['有护盾的英雄', '辅助', '璐璐', '迦娜']
  },
  {
    id: 'crit_cast',
    name: '暴击施法',
    nameEn: "Crit 'n Cast",
    tier: '银色',
    effect: '获得等于40%暴击几率的技能急速',
    detailedEffect: '获得等于你暴击几率40%的技能急速。',
    category: '混合增强',
    synergy: ['暴击流法师', '亚索', '永恩']
  },
  {
    id: 'deft',
    name: '敏捷',
    nameEn: 'Deft',
    tier: '银色',
    effect: '获得60%额外攻速',
    detailedEffect: '获得60%额外攻速。',
    category: '攻击增强',
    synergy: ['射手', '依赖攻速的英雄', '金克丝', '崔丝塔娜']
  },
  {
    id: 'dive_bomber',
    name: '俯冲轰炸',
    nameEn: 'Dive Bomber',
    tier: '银色',
    effect: '死亡时爆炸造成20%最大生命真实伤害',
    detailedEffect: '死亡时爆炸，对500范围内敌人造成20%最大生命真实伤害。',
    category: '死亡机制',
    synergy: ['坦克', '前排', '塞恩', '科加斯']
  },
  {
    id: 'dont_blink',
    name: '别眨眼',
    nameEn: "Don't Blink",
    tier: '银色',
    effect: '每比目标多10移速造成1%额外伤害',
    detailedEffect: '对移速比你慢的目标，每比你慢10移速造成1%额外伤害。',
    category: '伤害增幅',
    synergy: ['高移速英雄', '辛吉德', '拉莫斯']
  },
  {
    id: 'hextech_soul',
    name: '海克斯魂',
    nameEn: 'Hextech Soul',
    tier: '银色',
    effect: '获得25法术强度、10技能急速和150法力',
    detailedEffect: '获得25法术强度、10技能急速和150法力值。',
    category: '属性增强',
    synergy: ['法师', 'AP英雄', '所有法师']
  },
  {
    id: 'infernal_soul',
    name: '炼狱魂',
    nameEn: 'Infernal Soul',
    tier: '银色',
    effect: '获得15攻击力、10%攻速和7%生命偷取',
    detailedEffect: '获得15攻击力、10%攻速和7%生命偷取。',
    category: '属性增强',
    synergy: ['AD英雄', '战士', '射手', '所有AD英雄']
  },
  {
    id: 'mountain_soul',
    name: '山脉魂',
    nameEn: 'Mountain Soul',
    tier: '银色',
    effect: '获得200生命、15护甲和15魔抗',
    detailedEffect: '获得200生命值、15护甲和15魔抗。',
    category: '坦度增强',
    synergy: ['坦克', '前排', '所有坦克']
  },
  {
    id: 'cloud_soul',
    name: '云端魂',
    nameEn: 'Cloud Soul',
    tier: '银色',
    effect: '获得7%移速和10技能急速',
    detailedEffect: '获得7%移速和10技能急速。',
    category: '机动增强',
    synergy: ['需要机动性的英雄', '刺客', '战士']
  },
  {
    id: 'ocean_soul',
    name: '海洋魂',
    nameEn: 'Ocean Soul',
    tier: '银色',
    effect: '获得治疗和护盾效果提升',
    detailedEffect: '获得治疗和护盾效果提升。',
    category: '辅助增强',
    synergy: ['辅助', '治疗型英雄', '索拉卡', '娑娜']
  },
  {
    id: 'holy_fire',
    name: '圣火',
    nameEn: 'Holy Fire',
    tier: '银色',
    effect: '治疗和护盾会对附近敌人造成伤害',
    detailedEffect: '你对友军的治疗和护盾会对附近敌人造成魔法伤害。',
    category: '辅助增强',
    synergy: ['辅助', '治疗型英雄', '萨勒芬妮', '娑娜']
  }
];

// 导出函数
export function getAugmentsByTier(tier: '棱彩' | '金色' | '银色'): Augment[] {
  return allAugments.filter(aug => aug.tier === tier);
}

export function searchAugments(query: string): Augment[] {
  const lowerQuery = query.toLowerCase();
  return allAugments.filter(aug => 
    aug.name.toLowerCase().includes(lowerQuery) ||
    aug.nameEn.toLowerCase().includes(lowerQuery) ||
    aug.effect.toLowerCase().includes(lowerQuery)
  );
}

export function getAugmentsByCategory(category: string): Augment[] {
  return allAugments.filter(aug => aug.category === category);
}

// 符文分类
export const augmentCategories = [
  '伤害增幅',
  '爆发输出',
  '开团控制',
  '坦度增强',
  '生存能力',
  '攻击增强',
  '伤害转换',
  '特殊机制',
  '机动增强',
  '形态转换',
  '斩杀机制',
  '辅助增强',
  '装备增强',
  '技能增强',
  '经济增强',
  '属性转换',
  '属性增强',
  '混合增强',
  '死亡机制'
];
