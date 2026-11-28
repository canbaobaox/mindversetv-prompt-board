// 提示词连线板数据（图片模式：IMG / RATIOS / RATIO_P / PLAT / DUR）——
// 由 /tmp/extract-pro-data.mjs 直接从原版脚本运行时提取并序列化，禁止手改。
// 本文件由 client/index.js 拆出（2026-11-28，结构预算要求单文件 <1000 行），数据内容与拆分前逐字一致。

export const IMG = {
 "keys": [
  "role",
  "face",
  "brow",
  "eye",
  "iris",
  "nose",
  "lip",
  "skin",
  "vibe",
  "body",
  "comp",
  "focal",
  "aperture",
  "angle",
  "shot",
  "light",
  "color",
  "style"
 ],
 "names": {
  "role": "角色",
  "face": "脸型",
  "brow": "眉形",
  "eye": "眼型",
  "iris": "虹膜",
  "nose": "鼻型",
  "lip": "唇形",
  "skin": "面部",
  "vibe": "气质",
  "body": "身材",
  "comp": "构图",
  "focal": "焦距",
  "aperture": "光圈",
  "angle": "视角",
  "shot": "景别",
  "light": "光影",
  "color": "色调",
  "style": "质感"
 },
 "labels": [
  "角色",
  "内容",
  "脸型",
  "眉形",
  "眼型",
  "虹膜",
  "鼻型",
  "唇形",
  "面部",
  "气质",
  "身材",
  "构图",
  "焦距",
  "光圈",
  "视角",
  "景别",
  "光影",
  "色调",
  "质感"
 ],
 "presets": [
  {
   "n": "电商服装大片",
   "role": 0,
   "content": "25岁亚洲女性，穿着白色连衣裙，身材高挑，九头身比例",
   "sel": {
    "face": 0,
    "brow": 0,
    "eye": 0,
    "iris": 0,
    "nose": 0,
    "lip": 0,
    "skin": 0,
    "vibe": 0,
    "body": 0,
    "comp": 0,
    "focal": 2,
    "aperture": 0,
    "angle": 1,
    "shot": 1,
    "light": 0,
    "color": 4,
    "style": 0
   }
  },
  {
   "n": "韩系清冷人像",
   "role": 2,
   "content": "年轻女性侧脸望向窗外，发丝被风吹起",
   "sel": {
    "face": 0,
    "brow": 0,
    "eye": 0,
    "iris": 0,
    "nose": 0,
    "lip": 0,
    "skin": 0,
    "vibe": 0,
    "body": 0,
    "comp": 3,
    "focal": 3,
    "aperture": 0,
    "angle": 3,
    "shot": 3,
    "light": 2,
    "color": 0,
    "style": 1
   }
  },
  {
   "n": "产品静物",
   "role": 3,
   "content": "透明香水瓶置于黑色大理石台面，液体通透",
   "sel": {
    "comp": 0,
    "focal": 2,
    "aperture": 0,
    "angle": 4,
    "shot": 4,
    "light": 3,
    "color": 4,
    "style": 0
   }
  },
  {
   "n": "室内空间",
   "role": 6,
   "content": "现代别墅大厅，极简风，白色大理石地面，落地窗",
   "sel": {
    "comp": 1,
    "focal": 1,
    "aperture": 2,
    "angle": 1,
    "shot": 0,
    "light": 0,
    "color": 4,
    "style": 2
   }
  }
 ],
 "data": {
  "role": [
   {
    "t": "时尚摄影师",
    "s": "服装·人像·电商",
    "o": "你是一位世界顶级的时尚摄影师，擅长拍摄高级感、超写实的时尚大片。"
   },
   {
    "t": "人像修图专家",
    "s": "磨皮·肤质优化",
    "o": "你是一位资深AI人像修图专家，擅长把普通照片修成超写实明星级质感，保留真实皮肤纹理，拒绝过度磨皮。"
   },
   {
    "t": "电影级摄影师",
    "s": "氛围·光影",
    "o": "你是一位好莱坞电影级摄影师，擅长用光影、构图、运镜营造电影感画面。"
   },
   {
    "t": "商业产品摄影师",
    "s": "产品·静物",
    "o": "你是一位顶级商业产品摄影师，擅长用极简构图、专业布光突出产品质感。"
   },
   {
    "t": "街拍摄影师",
    "s": "城市·街头",
    "o": "你是一位资深街拍摄影师，擅长捕捉自然真实的街头瞬间，光影自然。"
   },
   {
    "t": "服装设计师",
    "s": "服装设计·作品集",
    "o": "你是一位世界顶级的服装设计师，擅长设计高级感、艺术感的服装系列。"
   },
   {
    "t": "室内设计师",
    "s": "场景·室内·展厅",
    "o": "你是一位全球知名的室内设计师，擅长设计高级感、极简风、艺术感的室内空间。"
   },
   {
    "t": "视觉艺术家",
    "s": "概念图·艺术创作",
    "o": "你是一位顶级视觉艺术家，擅长用色彩、光影、构图营造极具艺术感的视觉作品。"
   }
  ],
  "face": [
   {
    "t": "窄长鹅蛋小脸",
    "s": "精致上镜",
    "p": "窄长鹅蛋小脸，面部轮廓精致上镜",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"10\" ry=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 10 L20 30\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/><path d=\"M14 20 L26 20\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
   },
   {
    "t": "标准鹅蛋脸型",
    "s": "柔和自然",
    "p": "标准鹅蛋脸型，面部线条柔和自然",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 9 L20 31\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/><path d=\"M12 20 L28 20\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
   },
   {
    "t": "瓜子小脸",
    "s": "古典秀气",
    "p": "瓜子小脸，下巴精致微尖",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C28 8 30 16 26 24 C23 30 20 34 20 34 C20 34 17 30 14 24 C10 16 12 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
   },
   {
    "t": "方圆脸型",
    "s": "大气耐看",
    "p": "方圆脸型，下颌线条柔和有骨骼感",
    "svg": "<svg viewBox=\"0 0 40 40\"><rect x=\"10\" y=\"10\" width=\"20\" height=\"22\" rx=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 10 L20 32\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
   },
   {
    "t": "心形小脸",
    "s": "甜美减龄",
    "p": "心形小脸，额头饱满，下巴精致",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 36 L14 28 C8 20 10 10 20 10 C30 10 32 20 26 28Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
   }
  ],
  "brow": [
   {
    "t": "立体眉骨",
    "s": "高级骨相",
    "p": "立体眉骨，眉弓深邃，高级骨相",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 22 Q20 12 32 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><path d=\"M8 22 Q20 12 32 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.3\"/></svg>"
   },
   {
    "t": "野生浓眉",
    "s": "自然毛流感",
    "p": "野生浓眉，眉毛根根分明，自然毛流感",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M7 20 L13 18 L17 21 L23 17 L27 20 L33 19\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"
   },
   {
    "t": "平眉",
    "s": "韩系温柔",
    "p": "平直柔和的平眉，韩系温柔感",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 20 L32 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>"
   },
   {
    "t": "挑眉",
    "s": "妩媚英气",
    "p": "自然上挑的眉形，妩媚中带英气",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 24 Q18 14 32 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>"
   },
   {
    "t": "剑眉",
    "s": "英气飒爽",
    "p": "剑眉，眉尾上扬，英气飒爽",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 22 L20 16 L32 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"
   },
   {
    "t": "柳叶眉",
    "s": "古典婉约",
    "p": "柳叶眉，眉形细长弯曲，古典婉约",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 20 Q14 16 20 18 Q26 16 32 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg>"
   }
  ],
  "eye": [
   {
    "t": "细长上挑",
    "s": "清冷妩媚",
    "p": "眼型细长上挑，眼尾微扬，清冷妩媚",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 22 Q20 16 32 20 Q20 24 8 22Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"21\" r=\"3\" fill=\"currentColor\"/></svg>"
   },
   {
    "t": "杏眼圆润",
    "s": "甜美无辜",
    "p": "杏眼圆润，眼型饱满，甜美无辜感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"21\" rx=\"10\" ry=\"7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"21\" r=\"4\" fill=\"currentColor\"/></svg>"
   },
   {
    "t": "桃花眼",
    "s": "含情脉脉",
    "p": "桃花眼，眼尾微弯，眼神含情",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M8 21 Q14 16 20 18 Q26 16 32 21 Q26 26 20 24 Q14 26 8 21Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"21\" r=\"3.5\" fill=\"currentColor\"/></svg>"
   },
   {
    "t": "丹凤眼",
    "s": "古典韵味",
    "p": "丹凤眼，内眼角朝下，外眼角上扬，古典韵味",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M10 22 Q18 18 28 20 Q22 22 18 22 Q14 22 10 22Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"22\" cy=\"21\" r=\"2.5\" fill=\"currentColor\"/></svg>"
   },
   {
    "t": "狗狗眼",
    "s": "无辜下垂",
    "p": "圆眼微下垂，狗狗眼，无辜感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"9\" ry=\"8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"20\" r=\"4\" fill=\"currentColor\"/><path d=\"M12 26 Q20 30 28 26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.5\"/></svg>"
   },
   {
    "t": "深邃眼窝",
    "s": "混血立体",
    "p": "眼窝深邃，眉眼间距立体，混血感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"21\" rx=\"10\" ry=\"7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"20\" cy=\"21\" rx=\"7\" ry=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.5\"/><circle cx=\"20\" cy=\"21\" r=\"3\" fill=\"currentColor\"/></svg>"
   }
  ],
  "iris": [
   {
    "t": "浅灰蓝通透虹膜",
    "s": "混血感",
    "p": "浅灰蓝色通透虹膜，眼神清亮有混血感",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"12\" fill=\"#8fa8b8\"/><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"#1a1a1a\"/><circle cx=\"17\" cy=\"17\" r=\"3\" fill=\"white\" opacity=\"0.6\"/></svg>"
   },
   {
    "t": "深棕自然瞳",
    "s": "原生真实",
    "p": "深棕色自然瞳孔，眼神真实原生",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"12\" fill=\"#6b4423\"/><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"#1a1a1a\"/><circle cx=\"17\" cy=\"17\" r=\"3\" fill=\"white\" opacity=\"0.5\"/></svg>"
   },
   {
    "t": "琥珀浅瞳",
    "s": "温暖通透",
    "p": "琥珀色浅瞳，温暖通透",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"12\" fill=\"#c4956a\"/><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"#1a1a1a\"/><circle cx=\"17\" cy=\"17\" r=\"3\" fill=\"white\" opacity=\"0.5\"/></svg>"
   },
   {
    "t": "漆黑明眸",
    "s": "东方古典",
    "p": "漆黑明亮的瞳孔，东方古典美",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"12\" fill=\"#0d0d0d\"/><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"#000\"/><circle cx=\"17\" cy=\"17\" r=\"3\" fill=\"white\" opacity=\"0.7\"/></svg>"
   },
   {
    "t": "红棕渐变美瞳",
    "s": "时尚亮眼",
    "p": "通透红棕渐变美瞳，时尚亮眼",
    "svg": "<svg viewBox=\"0 0 40 40\"><defs><radialGradient id=\"rb\" cx=\"50%\" cy=\"50%\"><stop offset=\"0%\" stop-color=\"#8b3a3a\"/><stop offset=\"70%\" stop-color=\"#c45c3e\"/><stop offset=\"100%\" stop-color=\"#d4a76a\"/></radialGradient></defs><circle cx=\"20\" cy=\"20\" r=\"12\" fill=\"url(#rb)\"/><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"#1a1a1a\"/><circle cx=\"17\" cy=\"17\" r=\"3\" fill=\"white\" opacity=\"0.6\"/></svg>"
   }
  ],
  "nose": [
   {
    "t": "高挺纤细直鼻",
    "s": "精致立体",
    "p": "高挺纤细的直鼻，鼻梁笔直，鼻头精致微翘",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M18 12 L18 24\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M18 24 L16 28\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M18 24 L20 28\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg>"
   },
   {
    "t": "小翘鼻",
    "s": "娇俏可爱",
    "p": "小翘鼻，鼻尖微微上翘，娇俏可爱",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M18 12 L18 22 Q18 26 20 24\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg>"
   },
   {
    "t": "水滴鼻",
    "s": "圆润柔和",
    "p": "水滴鼻，鼻头圆润如一颗水滴",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M18 12 L18 22 Q18 28 20 26\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg>"
   },
   {
    "t": "微驼峰鼻",
    "s": "高级英气",
    "p": "鼻梁中部微驼峰，高级英气感",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M18 12 L18 18 L20 20 L18 22 L18 28\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg>"
   },
   {
    "t": "精致直鼻",
    "s": "清冷",
    "p": "鼻梁挺直，鼻头精致，清冷感",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M19 12 L19 26\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M19 26 L17 28\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M19 26 L21 28\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/></svg>"
   }
  ],
  "lip": [
   {
    "t": "饱满M唇",
    "s": "精致立体",
    "p": "饱满的M形嘴唇，唇峰明显，唇形立体精致",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M10 22 Q15 18 20 20 Q25 18 30 22 Q25 24 20 23 Q15 24 10 22Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M10 22 Q15 26 20 25 Q25 26 30 22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
   },
   {
    "t": "微笑唇",
    "s": "亲和甜美",
    "p": "微笑唇，嘴角自然上扬，亲和甜美",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M10 21 Q20 18 30 21 Q25 24 20 23 Q15 24 10 21Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M10 21 Q15 25 20 24 Q25 25 30 21\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
   },
   {
    "t": "嘟嘟唇",
    "s": "幼态纯欲",
    "p": "嘟嘟唇，唇珠饱满，幼态纯欲感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"21\" rx=\"10\" ry=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><ellipse cx=\"20\" cy=\"21\" rx=\"10\" ry=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   },
   {
    "t": "薄唇清冷",
    "s": "疏离高级",
    "p": "薄唇，唇线清晰，清冷疏离高级感",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M12 21 L28 21\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M14 23 L26 23\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   },
   {
    "t": "暗红哑光唇",
    "s": "复古高级",
    "p": "暗红色哑光唇色，复古高级感",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M10 22 Q15 19 20 21 Q25 19 30 22 Q25 25 20 24 Q15 25 10 22Z\" fill=\"#8b3a3a\" stroke=\"currentColor\" stroke-width=\"0.5\"/><path d=\"M10 22 Q15 26 20 25 Q25 26 30 22\" fill=\"#8b3a3a\" stroke=\"currentColor\" stroke-width=\"0.5\"/></svg>"
   }
  ],
  "skin": [
   {
    "t": "眼下细小泪痣",
    "s": "辨识度",
    "p": "眼下有一颗细小的泪痣，增加辨识度",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.3\"/><circle cx=\"16\" cy=\"24\" r=\"1.5\" fill=\"currentColor\"/></svg>"
   },
   {
    "t": "自然淡浅雀斑",
    "s": "真实感",
    "p": "面部有自然淡浅的雀斑，真实原生感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.3\"/><circle cx=\"14\" cy=\"18\" r=\"1\" fill=\"currentColor\" opacity=\"0.6\"/><circle cx=\"18\" cy=\"16\" r=\"1\" fill=\"currentColor\" opacity=\"0.6\"/><circle cx=\"22\" cy=\"19\" r=\"1\" fill=\"currentColor\" opacity=\"0.6\"/><circle cx=\"16\" cy=\"22\" r=\"1\" fill=\"currentColor\" opacity=\"0.6\"/><circle cx=\"24\" cy=\"23\" r=\"1\" fill=\"currentColor\" opacity=\"0.6\"/></svg>"
   },
   {
    "t": "面部细小绒毛",
    "s": "超写实",
    "p": "面部可见细小绒毛，超写实质感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.3\"/><path d=\"M14 16 L14 14 M16 18 L16 15 M18 17 L18 14 M22 16 L22 13 M24 18 L24 15\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\"/></svg>"
   },
   {
    "t": "清晰自然毛孔",
    "s": "拒绝磨皮",
    "p": "皮肤纹理清晰，可见自然毛孔，拒绝过度磨皮",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.3\"/><circle cx=\"15\" cy=\"18\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"19\" cy=\"17\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"23\" cy=\"18\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"17\" cy=\"21\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"21\" cy=\"21\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.4\"/><circle cx=\"19\" cy=\"24\" r=\"0.8\" fill=\"currentColor\" opacity=\"0.4\"/></svg>"
   },
   {
    "t": "面颊微红",
    "s": "血色感",
    "p": "面颊带有自然的血色微红，健康感",
    "svg": "<svg viewBox=\"0 0 40 40\"><ellipse cx=\"20\" cy=\"20\" rx=\"12\" ry=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.3\"/><ellipse cx=\"14\" cy=\"22\" rx=\"4\" ry=\"3\" fill=\"#e8a0a0\" opacity=\"0.5\"/><ellipse cx=\"26\" cy=\"22\" rx=\"4\" ry=\"3\" fill=\"#e8a0a0\" opacity=\"0.5\"/></svg>"
   }
  ],
  "vibe": [
   {
    "t": "清冷妩媚御姐",
    "s": "疏离感",
    "p": "清冷妩媚的御姐神态，眼神疏离又有吸引力",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M14 24 Q20 22 26 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M10 14 Q20 10 30 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.8\" opacity=\"0.4\"/></svg>"
   },
   {
    "t": "甜美灵动",
    "s": "元气少女感",
    "p": "甜美灵动的少女神态，眼神明亮有灵气",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M12 25 Q20 30 28 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
   },
   {
    "t": "高冷疏离",
    "s": "生人勿近",
    "p": "高冷疏离的气质，面无表情，生人勿近",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M14 26 L26 26\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
   },
   {
    "t": "纯欲松弛",
    "s": "慵懒氛围",
    "p": "纯欲松弛的神态，慵懒随性，氛围感拉满",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"18\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"18\" r=\"3\" fill=\"currentColor\"/><path d=\"M13 25 Q20 27 27 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
   },
   {
    "t": "元气活力",
    "s": "阳光感",
    "p": "元气满满的活力神态，笑容灿烂",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"16\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"16\" r=\"3\" fill=\"currentColor\"/><path d=\"M10 24 Q20 32 30 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>"
   },
   {
    "t": "慵懒随性",
    "s": "松弛感",
    "p": "慵懒随性的松弛感，不做作的自然状态",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M12 17 Q14 15 16 17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M24 17 Q26 15 28 17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M14 25 Q20 27 26 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
   },
   {
    "t": "英气飒爽",
    "s": "利落自信",
    "p": "英气飒爽，利落自信，气场全开",
    "svg": "<svg viewBox=\"0 0 40 40\"><circle cx=\"14\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><circle cx=\"26\" cy=\"17\" r=\"3\" fill=\"currentColor\"/><path d=\"M12 24 Q20 23 28 25\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>"
   }
  ],
  "body": [
   {
    "t": "九头身完美比例",
    "s": "超模感",
    "p": "九头身完美比例，身材高挑纤细，腿部修长",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 6 L20 34\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\"0.3\"/><path d=\"M20 8 C16 8 15 12 16 16 C15 20 14 24 15 28 C14 32 16 34 20 34 C24 34 26 32 25 28 C26 24 25 20 24 16 C25 12 24 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 16 L12 20 M24 16 L28 20 M16 24 L12 28 M24 24 L28 28\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   },
   {
    "t": "高挑纤细超模",
    "s": "衣架身材",
    "p": "高挑纤细的超模身材，肩颈线条优美",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C17 8 16 12 17 16 C16 20 15 24 16 28 C15 32 17 34 20 34 C23 34 25 32 24 28 C25 24 24 20 23 16 C24 12 23 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 16 L13 20 M23 16 L27 20 M17 24 L13 28 M23 24 L27 28\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   },
   {
    "t": "沙漏型曲线明显",
    "s": "腰臀比",
    "p": "沙漏型身材，腰细臀丰，曲线明显",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C16 8 15 12 17 16 C14 20 14 24 17 28 C15 32 16 34 20 34 C24 34 25 32 23 28 C26 24 26 20 23 16 C25 12 24 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 16 L12 20 M23 16 L28 20 M17 24 L12 28 M23 24 L28 28\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   },
   {
    "t": "标准匀称",
    "s": "自然真实",
    "p": "标准匀称的身材比例，自然真实",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 8 C17 8 16 11 17 15 C16 19 16 23 17 27 C16 31 17 34 20 34 C23 34 24 31 23 27 C24 23 24 19 23 15 C24 11 23 8 20 8Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 15 L13 19 M23 15 L27 19 M17 23 L13 27 M23 23 L27 27\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   },
   {
    "t": "娇小玲珑",
    "s": " petite",
    "p": "娇小玲珑的身材，精致可爱",
    "svg": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 12 C18 12 17 15 18 18 C17 21 17 24 18 27 C17 30 18 32 20 32 C22 32 23 30 22 27 C23 24 23 21 22 18 C23 15 22 12 20 12Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M18 18 L15 21 M22 18 L25 21 M18 24 L15 27 M22 24 L25 27\" stroke=\"currentColor\" stroke-width=\"1\"/></svg>"
   }
  ],
  "comp": [
   {
    "t": "居中对称",
    "s": "稳定·产品人像",
    "p": "居中对称构图，画面稳定平衡"
   },
   {
    "t": "三分法",
    "s": "黄金分割",
    "p": "三分法构图，主体位于黄金分割点"
   },
   {
    "t": "引导线",
    "s": "纵深延伸",
    "p": "引导线构图，利用道路/栏杆延伸视线"
   },
   {
    "t": "留白",
    "s": "呼吸感极简",
    "p": "大量留白，画面极简，突出主体"
   },
   {
    "t": "框架构图",
    "s": "门窗框景",
    "p": "框架构图，利用门窗框住主体，增加层次"
   },
   {
    "t": "前景遮挡",
    "s": "层次电影感",
    "p": "前景虚化遮挡构图，增加空间层次"
   }
  ],
  "focal": [
   {
    "t": "14mm 超广角",
    "s": "冲击力强",
    "p": "14mm超广角镜头，画面视野极宽，有强烈的视觉冲击力"
   },
   {
    "t": "35mm 人文",
    "s": "环境人像",
    "p": "35mm镜头，自然视角，畸变小，适合环境人像"
   },
   {
    "t": "50mm 标准",
    "s": "无畸变",
    "p": "50mm标准镜头，最接近人眼视角，画面真实自然"
   },
   {
    "t": "85mm 长焦",
    "s": "背景虚化",
    "p": "85mm长焦镜头，压缩空间，背景虚化，突出人物主体"
   },
   {
    "t": "200mm 超长焦",
    "s": "极致特写",
    "p": "200mm超长焦镜头，极致压缩，背景完全虚化，突出细节"
   }
  ],
  "aperture": [
   {
    "t": "f/1.8 大光圈",
    "s": "背景极虚",
    "p": "f/1.8大光圈，浅景深，背景柔和虚化，突出主体"
   },
   {
    "t": "f/5.6 中光圈",
    "s": "轻微虚化",
    "p": "f/5.6光圈，中等景深，主体清晰，背景轻微虚化"
   },
   {
    "t": "f/11 小光圈",
    "s": "全部清晰",
    "p": "f/11小光圈，深景深，从前景到背景全部清晰锐利"
   }
  ],
  "angle": [
   {
    "t": "超低角度仰拍",
    "s": "高大震撼",
    "p": "超低角度仰拍，主体高大，画面有强烈的视觉冲击力"
   },
   {
    "t": "正常平视",
    "s": "自然真实",
    "p": "正常平视角度，画面自然真实"
   },
   {
    "t": "高角度俯拍",
    "s": "上帝视角",
    "p": "高角度俯拍，上帝视角，全局视野清晰"
   },
   {
    "t": "侧角度拍摄",
    "s": "轮廓立体",
    "p": "侧角度拍摄，突出主体轮廓和立体感"
   },
   {
    "t": "过肩镜头",
    "s": "对话代入",
    "p": "过肩镜头拍摄，前景肩部虚化，突出对话代入感"
   }
  ],
  "shot": [
   {
    "t": "大全景",
    "s": "环境全貌",
    "p": "大全景"
   },
   {
    "t": "全身",
    "s": "完整人物",
    "p": "全身"
   },
   {
    "t": "半身",
    "s": "膝部以上",
    "p": "半身"
   },
   {
    "t": "近景",
    "s": "胸部以上",
    "p": "近景"
   },
   {
    "t": "面部特写",
    "s": "微表情",
    "p": "面部特写"
   },
   {
    "t": "局部特写",
    "s": "手眼细节",
    "p": "局部特写"
   }
  ],
  "light": [
   {
    "t": "窗边自然光",
    "s": "柔和真实",
    "p": "窗边自然光，光线柔和，画面自然真实"
   },
   {
    "t": "伦勃朗侧光",
    "s": "立体高级",
    "p": "侧光，伦勃朗光影，突出人物立体感，画面高级"
   },
   {
    "t": "逆光轮廓光",
    "s": "通透仙气",
    "p": "逆光，轮廓光，人物边缘有金色光边，氛围感强"
   },
   {
    "t": "硬光闪光灯",
    "s": "硬朗商业",
    "p": "硬光，闪光灯直打，画面硬朗，商业感强"
   },
   {
    "t": "柔光漫反射",
    "s": "细腻美妆",
    "p": "柔光，漫反射光，光线柔和细腻，画面高级"
   },
   {
    "t": "黄金时刻逆光",
    "s": "夕阳暖调",
    "p": "黄金时刻低角度阳光，暖色调，画面通透有氛围"
   },
   {
    "t": "侧逆光+发丝光",
    "s": "氛围感",
    "p": "侧逆光照射，发丝边缘出现金色轮廓光，氛围感极强"
   }
  ],
  "color": [
   {
    "t": "青橙电影调",
    "s": "对比强烈",
    "p": "青橙色调，电影级调色，画面对比强烈"
   },
   {
    "t": "日系清新",
    "s": "低饱和通透",
    "p": "日系清新风格，低饱和色调，画面通透"
   },
   {
    "t": "黑金高级",
    "s": "低明度奢华",
    "p": "黑金色调，低明度，高级奢华感"
   },
   {
    "t": "冷调蓝灰",
    "s": "孤独清冷",
    "p": "冷色调蓝灰配色，情绪疏离"
   },
   {
    "t": "白亮干净",
    "s": "电商通透",
    "p": "明亮干净的白调，通透无杂色，适合电商"
   },
   {
    "t": "复古胶片",
    "s": "颗粒怀旧",
    "p": "复古胶片色调，色彩浓郁，带颗粒感"
   }
  ],
  "style": [
   {
    "t": "超写实人像",
    "s": "皮肤纹理哑光",
    "p": "超写实风格，真实皮肤纹理，哑光肤质，拒绝塑料感，细节丰富"
   },
   {
    "t": "电影胶片感",
    "s": "色彩浓郁",
    "p": "电影感，胶片质感，色彩浓郁，光影有层次，细节丰富"
   },
   {
    "t": "高级极简",
    "s": "干净格调",
    "p": "高级感，极简质感，画面干净，色彩高级，细节丰富"
   },
   {
    "t": "极致高清",
    "s": "8K锐利",
    "p": "8K分辨率，细节丰富，画面清晰锐利"
   },
   {
    "t": "商业修图",
    "s": "精修无瑕疵",
    "p": "商业级精修，皮肤干净细腻但保留纹理，无瑕疵"
   }
  ]
 }
};

export const RATIOS = [
 "16:9 横屏",
 "9:16 竖屏",
 "1:1 方形",
 "2.39:1 宽银幕",
 "3:4 人像",
 "4:5 朋友圈"
];

export const RATIO_P = [
 "16:9",
 "9:16",
 "1:1",
 "2.39:1",
 "3:4",
 "4:5"
];

export const PLAT = [
 "Seedance 2.5",
 "可灵 2.5",
 "Wan 2.5"
];

export const DUR = [
 {
  "t": "5 秒",
  "s": "一个动作"
 },
 {
  "t": "15 秒",
  "s": "2-3 拍剧情"
 },
 {
  "t": "30 秒",
  "s": "3-4 拍剧情"
 }
];

