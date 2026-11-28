// 提示词连线板数据（视频模式：FACE / MAKEUP / VPRESETS 等）——
// 由 /tmp/extract-pro-data.mjs 直接从原版脚本运行时提取并序列化，禁止手改。
// 本文件由 client/index.js 拆出（2026-11-28，结构预算要求单文件 <1000 行），数据内容与拆分前逐字一致。

export const FACE = [
 {
  "t": "窄长鹅蛋小脸",
  "s": "精致上镜",
  "p": "窄长鹅蛋小脸",
  "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"10\" ry=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 10 L20 30\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/><path d=\"M14 20 L26 20\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
 },
 {
  "t": "标准鹅蛋脸型",
  "s": "柔和自然",
  "p": "标准鹅蛋脸型",
  "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 9 L20 31\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/><path d=\"M12 20 L28 20\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
 },
 {
  "t": "瓜子小脸",
  "s": "古典秀气",
  "p": "瓜子小脸",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C28 8 30 16 26 24 C23 30 20 34 20 34 C20 34 17 30 14 24 C10 16 12 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
 },
 {
  "t": "方圆脸型",
  "s": "大气耐看",
  "p": "方圆脸型",
  "svg": "<svg viewBox=\"0 0 40 40\"><rect x=\"10\" y=\"10\" width=\"20\" height=\"22\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 10 L20 32\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
 },
 {
  "t": "心形小脸",
  "s": "甜美减龄",
  "p": "心形小脸",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 36 L14 28 C8 20 10 10 20 10 C30 10 32 20 26 28Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
 }
];

export const EYE2 = [
 {
  "t": "细长上挑眼",
  "s": "清冷妩媚",
  "p": "细长上挑眼型，眼尾微扬",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 22 Q20 16 32 20 Q20 24 8 22Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"21\" r=\"3\" fill=\"currentColor\"/></svg>"
 },
 {
  "t": "杏眼圆润",
  "s": "甜美无辜",
  "p": "杏眼圆润饱满",
  "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"21\" rx=\"10\" ry=\"7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"21\" r=\"4\" fill=\"currentColor\"/></svg>"
 },
 {
  "t": "桃花眼",
  "s": "含情脉脉",
  "p": "桃花眼，眼尾微弯",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 21 Q14 16 20 18 Q26 16 32 21 Q26 26 20 24 Q14 26 8 21Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"21\" r=\"3.5\" fill=\"currentColor\"/></svg>"
 },
 {
  "t": "狗狗眼",
  "s": "无辜下垂",
  "p": "圆眼微下垂，无辜感",
  "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"9\" ry=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"20\" r=\"4\" fill=\"currentColor\"/><path d=\"M12 26 Q20 30 28 26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.5\"/></svg>"
 }
];

export const VIBE2 = [
 {
  "t": "清冷妩媚",
  "s": "御姐感",
  "p": "清冷妩媚的御姐神态",
  "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M14 24 Q20 22 26 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M10 14 Q20 10 30 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.4\"/></svg>"
 },
 {
  "t": "甜美灵动",
  "s": "少女感",
  "p": "甜美灵动的少女神态",
  "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M12 25 Q20 30 28 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
 },
 {
  "t": "高冷疏离",
  "s": "生人勿近",
  "p": "高冷疏离的气质",
  "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M14 26 L26 26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
 },
 {
  "t": "纯欲松弛",
  "s": "慵懒氛围",
  "p": "纯欲松弛的神态",
  "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"18\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"18\" r=\"3\" fill=\"currentColor\"/><path d=\"M13 25 Q20 27 27 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
 },
 {
  "t": "元气活力",
  "s": "阳光感",
  "p": "元气满满的活力神态",
  "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"16\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"16\" r=\"3\" fill=\"currentColor\"/><path d=\"M10 24 Q20 32 30 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
 },
 {
  "t": "慵懒随性",
  "s": "松弛感",
  "p": "慵懒随性的松弛感",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M12 17 Q14 15 16 17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M24 17 Q26 15 28 17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M14 25 Q20 27 26 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
 }
];

export const BODY2 = [
 {
  "t": "九头身完美比例",
  "s": "超模感",
  "p": "九头身完美比例，身材高挑纤细",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 6 L20 34\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><path d=\"M20 8 C16 8 15 12 16 16 C15 20 14 24 15 28 C14 32 16 34 20 34 C24 34 26 32 25 28 C26 24 25 20 24 16 C25 12 24 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 16 L12 20 M24 16 L28 20 M16 24 L12 28 M24 24 L28 28\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
 },
 {
  "t": "高挑纤细",
  "s": "衣架身材",
  "p": "高挑纤细的超模身材",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C17 8 16 12 17 16 C16 20 15 24 16 28 C15 32 17 34 20 34 C23 34 25 32 24 28 C25 24 24 20 23 16 C24 12 23 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 16 L13 20 M23 16 L27 20 M17 24 L13 28 M23 24 L27 28\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
 },
 {
  "t": "沙漏型曲线",
  "s": "腰臀比",
  "p": "沙漏型身材，曲线明显",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C16 8 15 12 17 16 C14 20 14 24 17 28 C15 32 16 34 20 34 C24 34 25 32 23 28 C26 24 26 20 23 16 C25 12 24 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 16 L12 20 M23 16 L28 20 M17 24 L12 28 M23 24 L28 28\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
 },
 {
  "t": "标准匀称",
  "s": "自然真实",
  "p": "标准匀称的身材比例",
  "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C17 8 16 11 17 15 C16 19 16 23 17 27 C16 31 17 34 20 34 C23 34 24 31 23 27 C24 23 24 19 23 15 C24 11 23 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 15 L13 19 M23 15 L27 19 M17 23 L13 27 M23 23 L27 27\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
 }
];

export const MAKEUP = [
 {
  "t": "伪素颜淡妆",
  "s": "奶油肌",
  "p": "伪素颜淡妆，奶油肌质感",
  "c": "#f5e6d3"
 },
 {
  "t": "清透裸妆",
  "s": "微光泽",
  "p": "清透裸妆，皮肤带自然微光泽",
  "c": "#f0dcd0"
 },
 {
  "t": "雾面高级妆",
  "s": "哑光",
  "p": "雾面高级感妆容",
  "c": "#e8ddd5"
 },
 {
  "t": "截断式烟熏",
  "s": "深邃",
  "p": "截断式烟熏妆，深邃立体",
  "c": "#8b7d7b"
 },
 {
  "t": "复古红唇妆",
  "s": "明艳",
  "p": "复古红唇妆，眉眼淡雅",
  "c": "#a03030"
 },
 {
  "t": "蜜桃甜妹妆",
  "s": "卧蚕",
  "p": "蜜桃色甜妹妆，卧蚕明显",
  "c": "#f4a460"
 },
 {
  "t": "清冷疏离妆",
  "s": "冷感",
  "p": "冷感妆容，眼线微挑，疏离感",
  "c": "#c0d6e4"
 },
 {
  "t": "韩系水光妆",
  "s": "透亮",
  "p": "韩系水光肌，透亮光泽",
  "c": "#ffe4e1"
 },
 {
  "t": "雀斑晒伤妆",
  "s": "暖橘",
  "p": "雀斑晒伤妆，暖橘色调",
  "c": "#d2a679"
 }
];

export const LENS = [
 {
  "t": "红棕渐变美瞳",
  "s": "眼神清亮",
  "p": "通透红棕渐变美瞳，眼神清亮"
 },
 {
  "t": "黑色自然瞳",
  "s": "原生感",
  "p": "原生黑色瞳孔，眼神自然"
 },
 {
  "t": "浅棕琥珀瞳",
  "s": "狗狗眼",
  "p": "浅棕色琥珀瞳，狗狗眼，无辜感"
 },
 {
  "t": "灰蓝混血瞳",
  "s": "轻混血",
  "p": "灰蓝色混血感美瞳"
 },
 {
  "t": "深咖温柔瞳",
  "s": "柔和",
  "p": "深咖色美瞳，眼神温柔"
 }
];

export const HAIR = [
 {
  "t": "银灰长波浪卷",
  "s": "",
  "p": "银灰色长波浪卷发"
 },
 {
  "t": "黑长直",
  "s": "柔顺",
  "p": "黑色长直发，发质柔顺"
 },
 {
  "t": "栗棕微卷发",
  "s": "温柔",
  "p": "栗棕色微卷长发"
 },
 {
  "t": "奶茶色锁骨发",
  "s": "韩系",
  "p": "奶茶色锁骨发"
 },
 {
  "t": "元气高马尾",
  "s": "利落",
  "p": "高马尾，发色自然黑"
 },
 {
  "t": "慵懒低丸子头",
  "s": "碎发自然",
  "p": "低丸子头，碎发自然垂落"
 },
 {
  "t": "空气刘海长发",
  "s": "减龄",
  "p": "空气刘海黑色长发"
 },
 {
  "t": "公主切",
  "s": "个性",
  "p": "公主切发型，发色深棕"
 },
 {
  "t": "粉色挑染",
  "s": "甜酷",
  "p": "粉色挑染长发"
 },
 {
  "t": "白金短发",
  "s": "个性",
  "p": "白金短发"
 }
];

export const ACC = [
 {
  "t": "珍珠花朵流苏发饰",
  "s": "",
  "p": "侧边珍珠花朵流苏发饰"
 },
 {
  "t": "丝绒蝴蝶结",
  "s": "甜美",
  "p": "丝绒蝴蝶结发夹"
 },
 {
  "t": "银色细链耳饰",
  "s": "清冷",
  "p": "银色细链耳饰"
 },
 {
  "t": "宽发箍",
  "s": "复古",
  "p": "纯色宽发箍"
 },
 {
  "t": "贝雷帽",
  "s": "文艺",
  "p": "深色贝雷帽"
 },
 {
  "t": "无配饰",
  "s": "极简",
  "p": "无配饰，极简"
 }
];

export const NAIL = [
 {
  "t": "浅粉色美甲",
  "s": "",
  "p": "浅粉色美甲"
 },
 {
  "t": "裸色法式",
  "s": "温柔",
  "p": "裸色法式美甲"
 },
 {
  "t": "奶白纯色",
  "s": "干净",
  "p": "奶白色纯色美甲"
 },
 {
  "t": "银色细闪",
  "s": "精致",
  "p": "银色细闪美甲"
 },
 {
  "t": "本甲无美甲",
  "s": "原生",
  "p": "原生本甲，无美甲"
 }
];

export const OUTFIT = [
 {
  "t": "米白针织开衫+牛仔裤",
  "s": "温柔日常",
  "p": "米白色针织开衫搭配浅蓝牛仔裤"
 },
 {
  "t": "碎花连衣裙",
  "s": "清新",
  "p": "浅色碎花连衣裙"
 },
 {
  "t": "oversize白衬衫",
  "s": "慵懒",
  "p": "oversize白色衬衫，下衣失踪穿法"
 },
 {
  "t": "黑色吊带裙",
  "s": "小性感",
  "p": "黑色细吊带裙"
 },
 {
  "t": "学院风套装",
  "s": "减龄",
  "p": "学院风针织背心配百褶裙"
 },
 {
  "t": "浅灰运动套装",
  "s": "活力",
  "p": "浅灰色运动套装"
 },
 {
  "t": "小香风外套+短裙",
  "s": "精致",
  "p": "米白小香风外套配短裙"
 }
];

export const TIME = [
 "清晨七点",
 "上午十点",
 "下午三点",
 "黄昏五点半",
 "夜晚"
];

export const WEATHER = [
 {
  "t": "阴天漫射光",
  "s": "柔和均匀",
  "p": "阴天柔和漫射光"
 },
 {
  "t": "晴天自然光",
  "s": "通透",
  "p": "晴天通透自然光"
 },
 {
  "t": "雨后反光",
  "s": "湿润氛围",
  "p": "雨后湿润地面反光，光线柔和"
 },
 {
  "t": "黄昏逆光",
  "s": "金色暖调",
  "p": "黄昏金色逆光"
 },
 {
  "t": "夜晚暖黄路灯",
  "s": "夜景",
  "p": "夜晚暖黄路灯"
 }
];

export const PLACE = [
 {
  "t": "街角咖啡店",
  "s": "靠窗座位",
  "p": "街角咖啡店靠窗座位"
 },
 {
  "t": "公园草坪",
  "s": "林荫道",
  "p": "公园草坪与林荫道"
 },
 {
  "t": "海边公路",
  "s": "礁石",
  "p": "海边公路与礁石"
 },
 {
  "t": "商场街拍",
  "s": "扶梯中庭",
  "p": "商场中庭与扶梯"
 },
 {
  "t": "居家客厅",
  "s": "落地窗",
  "p": "居家客厅与落地窗"
 },
 {
  "t": "独立书店",
  "s": "书架间",
  "p": "独立书店书架间"
 },
 {
  "t": "地铁车厢",
  "s": "通勤感",
  "p": "地铁车厢内"
 }
];

export const MOOD = [
 "慵懒松弛",
 "元气清爽",
 "清冷疏离",
 "甜酷少女感",
 "都市快节奏"
];

export const TEXD = [
 {
  "t": "手机DV实拍",
  "s": "去AI感纪实",
  "p": "原生手机DV实拍质感，轻微手持自然抖动、对焦呼吸感、轻微曝光波动、微弱原生数码噪点、真实动态运动模糊，无过度磨皮、无精修滤镜、无网红美颜，原生态真实记录质感。"
 },
 {
  "t": "iPhone UGC",
  "s": "更糙更真",
  "p": "iPhone手持自拍视角，真实粗糙质感，轻微抖动，无滤镜，生活记录感。"
 },
 {
  "t": "16mm 胶片",
  "s": "颗粒文艺",
  "p": "16mm胶片手持拍摄，可见胶片颗粒，柔和色彩，复古纪实质感。"
 },
 {
  "t": "电影机纪实",
  "s": "精致纪录片",
  "p": "ARRI电影机手持纪实拍摄，电影级动态范围，浅景深，自然光真实还原。"
 }
];

export const SNDD = [
 {
  "t": "纯环境原声",
  "s": "无BGM无字幕",
  "p": "无BGM、无配乐、无旁白、无字幕、无特效音。"
 },
 {
  "t": "环境音+台词",
  "s": "台词双引号",
  "p": "轻柔环境音，角色台词用双引号标注，无BGM、无字幕。"
 },
 {
  "t": "环境音+动作音",
  "s": "突出动作声",
  "p": "保留环境音与动作音效，无BGM、无字幕。"
 }
];

export const VPRESETS = [
 {
  "n": "咖啡店日常",
  "plat": 0,
  "dur": 1,
  "tex": 0,
  "snd": 0,
  "face": 0,
  "eye": 0,
  "vibe": 0,
  "body": 0,
  "sel": {
   "makeup": 0,
   "lens": 0,
   "hair": 0,
   "acc": 0,
   "nail": 0,
   "outfit": 0,
   "time": 2,
   "weather": 0,
   "place": 0,
   "mood": 0
  },
  "beats": [
   [
    "0-4秒",
    "端起咖啡杯轻吹热气，抬眼看向镜头微笑"
   ],
   [
    "4-10秒",
    "放下杯子翻开手边的书，指尖划过书页"
   ],
   [
    "10-15秒",
    "侧头望向窗外行人，发丝被风吹起，回头对镜头眨眼轻笑"
   ]
  ],
  "sndin": "咖啡店环境音，杯碟轻碰声，翻书声"
 },
 {
  "n": "公园晨跑",
  "plat": 0,
  "dur": 1,
  "tex": 1,
  "snd": 0,
  "face": 1,
  "eye": 1,
  "vibe": 4,
  "body": 1,
  "sel": {
   "makeup": 0,
   "lens": 1,
   "hair": 4,
   "acc": 5,
   "nail": 4,
   "outfit": 5,
   "time": 0,
   "weather": 1,
   "place": 1,
   "mood": 1
  },
  "beats": [
   [
    "0-4秒",
    "系紧鞋带起身，迎着镜头方向起跑"
   ],
   [
    "4-10秒",
    "匀速奔跑，手臂自然摆动，呼吸起伏真实"
   ],
   [
    "10-15秒",
    "放慢脚步回头，对镜头比出加油手势，咧嘴一笑"
   ]
  ],
  "sndin": "鸟鸣，脚步落地声，轻微呼吸声"
 },
 {
  "n": "居家早晨",
  "plat": 0,
  "dur": 1,
  "tex": 0,
  "snd": 0,
  "face": 2,
  "eye": 1,
  "vibe": 3,
  "body": 2,
  "sel": {
   "makeup": 0,
   "lens": 1,
   "hair": 5,
   "acc": 5,
   "nail": 4,
   "outfit": 2,
   "time": 0,
   "weather": 0,
   "place": 4,
   "mood": 0
  },
  "beats": [
   [
    "0-4秒",
    "揉着眼睛从床上坐起，被子滑落"
   ],
   [
    "4-10秒",
    "赤脚下床走到厨房，从冰箱拿出牛奶倒入玻璃杯"
   ],
   [
    "10-15秒",
    "捧着杯子靠窗喝一口，满足地眯起眼睛"
   ]
  ],
  "sndin": "鸟鸣，冰箱运转声，牛奶倒入玻璃杯声"
 }
];

export const DEFAULT_VIDEO_LOCK = "严格锁定参考人物原生五官脸型、骨相轮廓、面部比例，全程样貌底子100%不变，无换脸、无五官漂移、无畸形崩坏。原生真实肤质、清晰自然毛孔、真实皮肤纹理、原生自然唇纹；真人面部肌肉动态，做表情自带自然表情纹，无AI僵硬感；手部修长纤细，真人原生手部比例。";
export const DEFAULT_BEATS = [["0-3秒", ""], ["3-8秒", ""], ["8-15秒", ""]];
export const VIDEO_BAN = "【禁令】严禁CG质感、3D渲染、数字人、动漫卡通、假白瓷肤、过度美颜、五官扭曲、手指畸形、人物样貌突变、光影虚假、塑料质感。";
