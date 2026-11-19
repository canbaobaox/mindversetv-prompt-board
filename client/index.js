// 提示词连线板 —— 由“AI 提示词连线面板·离线版”（单文件 HTML）移植而来。
// 词库、模板与生成文案与原版一字不差；界面用 host.React 画，保存用 host.storage。
// 纯函数（buildImagePrompt / buildVideoPrompt 等）不依赖 host，可单独测试。

export const IMG = {
keys: ["role", "comp", "focal", "aperture", "angle", "shot", "light", "color", "style"],
names: { role: "角色", comp: "构图", focal: "焦距", aperture: "光圈", angle: "视角", shot: "景别", light: "光影", color: "色调", style: "质感"},
presets: [
{ n: "电商服装大片", role: 0, content: "25岁亚洲女性，穿着白色连衣裙，身材高挑，九头身比例", sel: { comp: 0, focal: 2, aperture: 0, angle: 1, shot: 1, light: 0, color: 4, style: 0}},
{ n: "氛围人像", role: 2, content: "年轻女性侧脸望向窗外，发丝被风吹起", sel: { comp: 3, focal: 3, aperture: 0, angle: 3, shot: 3, light: 2, color: 0, style: 1}},
{ n: "产品静物", role: 3, content: "透明香水瓶置于黑色大理石台面，液体通透", sel: { comp: 0, focal: 2, aperture: 0, angle: 4, shot: 4, light: 3, color: 4, style: 0}},
{ n: "室内空间", role: 6, content: "现代别墅大厅，极简风，白色大理石地面，落地窗", sel: { comp: 1, focal: 1, aperture: 2, angle: 1, shot: 0, light: 0, color: 4, style: 2}},
],
data: {
role: [
{ t: "时尚摄影师", s: "服装·人像·电商", o: "你是一位世界顶级的时尚摄影师，擅长拍摄高级感、超写实的时尚大片。"},
{ t: "人像修图专家", s: "磨皮·肤质优化", o: "你是一位资深AI人像修图专家，擅长把普通照片修成超写实明星级质感，保留真实皮肤纹理，拒绝过度磨皮。"},
{ t: "电影级摄影师", s: "氛围·光影", o: "你是一位好莱坞电影级摄影师，擅长用光影、构图、运镜营造电影感画面。"},
{ t: "商业产品摄影师", s: "产品·静物", o: "你是一位顶级商业产品摄影师，擅长用极简构图、专业布光突出产品质感。"},
{ t: "街拍摄影师", s: "城市·街头", o: "你是一位资深街拍摄影师，擅长捕捉自然真实的街头瞬间，光影自然。"},
{ t: "服装设计师", s: "服装设计·作品集", o: "你是一位世界顶级的服装设计师，擅长设计高级感、艺术感的服装系列。"},
{ t: "室内设计师", s: "场景·室内·展厅", o: "你是一位全球知名的室内设计师，擅长设计高级感、极简风、艺术感的室内空间。"},
{ t: "视觉艺术家", s: "概念图·艺术创作", o: "你是一位顶级视觉艺术家，擅长用色彩、光影、构图营造极具艺术感的视觉作品。"},
],
comp: [
{ t: "居中对称", s: "稳定·产品人像", p: "居中对称构图，画面稳定平衡"},
{ t: "三分法", s: "黄金分割", p: "三分法构图，主体位于黄金分割点"},
{ t: "引导线", s: "纵深延伸", p: "引导线构图，利用道路/栏杆延伸视线"},
{ t: "留白", s: "呼吸感极简", p: "大量留白，画面极简，突出主体"},
{ t: "框架构图", s: "门窗框景", p: "框架构图，利用门窗框住主体，增加层次"},
{ t: "前景遮挡", s: "层次电影感", p: "前景虚化遮挡构图，增加空间层次"},
],
focal: [
{ t: "14mm 超广角", s: "冲击力强", p: "14mm超广角镜头，画面视野极宽，有强烈的视觉冲击力"},
{ t: "35mm 人文", s: "环境人像", p: "35mm镜头，自然视角，畸变小，适合环境人像"},
{ t: "50mm 标准", s: "无畸变", p: "50mm标准镜头，最接近人眼视角，画面真实自然"},
{ t: "85mm 长焦", s: "背景虚化", p: "85mm长焦镜头，压缩空间，背景虚化，突出人物主体"},
{ t: "200mm 超长焦", s: "极致特写", p: "200mm超长焦镜头，极致压缩，背景完全虚化，突出细节"},
],
aperture: [
{ t: "f/1.8 大光圈", s: "背景极虚", p: "f/1.8大光圈，浅景深，背景柔和虚化，突出主体"},
{ t: "f/5.6 中光圈", s: "轻微虚化", p: "f/5.6光圈，中等景深，主体清晰，背景轻微虚化"},
{ t: "f/11 小光圈", s: "全部清晰", p: "f/11小光圈，深景深，从前景到背景全部清晰锐利"},
],
angle: [
{ t: "超低角度仰拍", s: "高大震撼", p: "超低角度仰拍，主体高大，画面有强烈的视觉冲击力"},
{ t: "正常平视", s: "自然真实", p: "正常平视角度，画面自然真实"},
{ t: "高角度俯拍", s: "上帝视角", p: "高角度俯拍，上帝视角，全局视野清晰"},
{ t: "侧角度拍摄", s: "轮廓立体", p: "侧角度拍摄，突出主体轮廓和立体感"},
{ t: "过肩镜头", s: "对话代入", p: "过肩镜头拍摄，前景肩部虚化，突出对话代入感"},
],
shot: [
{ t: "大全景", s: "环境全貌", p: "大全景"},
{ t: "全身", s: "完整人物", p: "全身"},
{ t: "半身", s: "膝部以上", p: "半身"},
{ t: "近景", s: "胸部以上", p: "近景"},
{ t: "面部特写", s: "微表情", p: "面部特写"},
{ t: "局部特写", s: "手眼细节", p: "局部特写"},
],
light: [
{ t: "窗边自然光", s: "柔和真实", p: "窗边自然光，光线柔和，画面自然真实"},
{ t: "伦勃朗侧光", s: "立体高级", p: "侧光，伦勃朗光影，突出人物立体感，画面高级"},
{ t: "逆光轮廓光", s: "通透仙气", p: "逆光，轮廓光，人物边缘有金色光边，氛围感强"},
{ t: "硬光闪光灯", s: "硬朗商业", p: "硬光，闪光灯直打，画面硬朗，商业感强"},
{ t: "柔光漫反射", s: "细腻美妆", p: "柔光，漫反射光，光线柔和细腻，画面高级"},
{ t: "黄金时刻逆光", s: "夕阳暖调", p: "黄金时刻低角度阳光，暖色调，画面通透有氛围"},
],
color: [
{ t: "青橙电影调", s: "对比强烈", p: "青橙色调，电影级调色，画面对比强烈"},
{ t: "日系清新", s: "低饱和通透", p: "日系清新风格，低饱和色调，画面通透"},
{ t: "黑金高级", s: "低明度奢华", p: "黑金色调，低明度，高级奢华感"},
{ t: "冷调蓝灰", s: "孤独清冷", p: "冷色调蓝灰配色，情绪疏离"},
{ t: "白亮干净", s: "电商通透", p: "明亮干净的白调，通透无杂色，适合电商"},
{ t: "复古胶片", s: "颗粒怀旧", p: "复古胶片色调，色彩浓郁，带颗粒感"},
],
style: [
{ t: "超写实人像", s: "皮肤纹理哑光", p: "超写实风格，真实皮肤纹理，哑光肤质，拒绝塑料感，细节丰富"},
{ t: "电影胶片感", s: "色彩浓郁", p: "电影感，胶片质感，色彩浓郁，光影有层次，细节丰富"},
{ t: "高级极简", s: "干净格调", p: "高级感，极简质感，画面干净，色彩高级，细节丰富"},
{ t: "极致高清", s: "8K锐利", p: "8K分辨率，细节丰富，画面清晰锐利"},
{ t: "商业修图", s: "精修无瑕疵", p: "商业级精修，皮肤干净细腻但保留纹理，无瑕疵"},
],
},
};

export const RATIOS = ["16:9 横屏", "9:16 竖屏", "1:1 方形", "2.39:1 宽银幕"];
export const RATIO_P = ["16:9", "9:16", "1:1", "2.39:1"];

export const PLAT = ["Seedance 2.5", "可灵 2.5", "Wan 2.5"];
export const DUR = [
{ t: "5 秒", s: "一个动作"},
{ t: "15 秒", s: "2-3 拍剧情"},
{ t: "30 秒", s: "3-4 拍剧情"},
];
export const MAKEUP = [
{ t: "伪素颜淡妆", s: "奶油肌", p: "伪素颜淡妆，奶油肌质感"},
{ t: "清透裸妆", s: "自然微光泽", p: "清透裸妆，皮肤带自然微光泽"},
{ t: "雾面高级妆", s: "哑光干净", p: "雾面高级感妆容"},
{ t: "复古红唇妆", s: "眉眼淡雅", p: "复古红唇妆，眉眼淡雅"},
{ t: "蜜桃甜妹妆", s: "卧蚕明显", p: "蜜桃色甜妹妆，卧蚕明显"},
{ t: "冷感疏离妆", s: "眼线微挑", p: "冷感妆容，眼线微挑，疏离感"},
];
export const LENS = [
{ t: "红棕渐变美瞳", s: "眼神清亮", p: "通透红棕渐变美瞳，眼神清亮"},
{ t: "黑色自然瞳", s: "原生感", p: "原生黑色瞳孔，眼神自然"},
{ t: "浅棕琥珀瞳", s: "狗狗眼", p: "浅棕色琥珀瞳，狗狗眼，无辜感"},
{ t: "灰蓝混血瞳", s: "轻混血", p: "灰蓝色混血感美瞳"},
{ t: "深咖温柔瞳", s: "柔和", p: "深咖色美瞳，眼神温柔"},
];
export const HAIR = [
{ t: "银灰长波浪卷", s: "", p: "银灰色长波浪卷发"},
{ t: "黑长直", s: "柔顺", p: "黑色长直发，发质柔顺"},
{ t: "栗棕微卷发", s: "温柔", p: "栗棕色微卷长发"},
{ t: "奶茶色锁骨发", s: "韩系", p: "奶茶色锁骨发"},
{ t: "元气高马尾", s: "利落", p: "高马尾，发色自然黑"},
{ t: "慵懒低丸子头", s: "碎发自然", p: "低丸子头，碎发自然垂落"},
{ t: "空气刘海长发", s: "减龄", p: "空气刘海黑色长发"},
{ t: "公主切", s: "个性", p: "公主切发型，发色深棕"},
];
export const ACC = [
{ t: "珍珠花朵流苏发饰", s: "", p: "侧边珍珠花朵流苏发饰"},
{ t: "丝绒蝴蝶结", s: "甜美", p: "丝绒蝴蝶结发夹"},
{ t: "银色细链耳饰", s: "清冷", p: "银色细链耳饰"},
{ t: "宽发箍", s: "复古", p: "纯色宽发箍"},
{ t: "贝雷帽", s: "文艺", p: "深色贝雷帽"},
{ t: "无配饰", s: "极简", p: "无配饰，极简"},
];
export const NAIL = [
{ t: "浅粉色美甲", s: "", p: "浅粉色美甲"},
{ t: "裸色法式", s: "温柔", p: "裸色法式美甲"},
{ t: "奶白纯色", s: "干净", p: "奶白色纯色美甲"},
{ t: "银色细闪", s: "精致", p: "银色细闪美甲"},
{ t: "本甲无美甲", s: "原生", p: "原生本甲，无美甲"},
];
export const OUTFIT = [
{ t: "米白针织开衫+牛仔裤", s: "温柔日常", p: "米白色针织开衫搭配浅蓝牛仔裤"},
{ t: "碎花连衣裙", s: "清新", p: "浅色碎花连衣裙"},
{ t: "oversize白衬衫", s: "慵懒", p: "oversize白色衬衫，下衣失踪穿法"},
{ t: "黑色吊带裙", s: "小性感", p: "黑色细吊带裙"},
{ t: "学院风套装", s: "减龄", p: "学院风针织背心配百褶裙"},
{ t: "浅灰运动套装", s: "活力", p: "浅灰色运动套装"},
{ t: "小香风外套+短裙", s: "精致", p: "米白小香风外套配短裙"},
];
export const TIME = ["清晨七点", "上午十点", "下午三点", "黄昏五点半", "夜晚"];
export const WEATHER = [
{ t: "阴天漫射光", s: "柔和均匀", p: "阴天柔和漫射光"},
{ t: "晴天自然光", s: "通透", p: "晴天通透自然光"},
{ t: "雨后反光", s: "湿润氛围", p: "雨后湿润地面反光，光线柔和"},
{ t: "黄昏逆光", s: "金色暖调", p: "黄昏金色逆光"},
{ t: "夜晚暖黄路灯", s: "夜景", p: "夜晚暖黄路灯"},
];
export const PLACE = [
{ t: "街角咖啡店", s: "靠窗座位", p: "街角咖啡店靠窗座位"},
{ t: "公园草坪", s: "林荫道", p: "公园草坪与林荫道"},
{ t: "海边公路", s: "礁石", p: "海边公路与礁石"},
{ t: "商场街拍", s: "扶梯中庭", p: "商场中庭与扶梯"},
{ t: "居家客厅", s: "落地窗", p: "居家客厅与落地窗"},
{ t: "独立书店", s: "书架间", p: "独立书店书架间"},
{ t: "地铁车厢", s: "通勤感", p: "地铁车厢内"},
];
export const MOOD = ["慵懒松弛", "元气清爽", "清冷疏离", "甜酷少女感", "都市快节奏"];
export const TEXD = [
{ t: "手机DV实拍", s: "去AI感纪实", p: "原生手机DV实拍质感，轻微手持自然抖动、对焦呼吸感、轻微曝光波动、微弱原生数码噪点、真实动态运动模糊，无过度磨皮、无精修滤镜、无网红美颜，原生态真实记录质感。"},
{ t: "iPhone UGC", s: "更糙更真", p: "iPhone手持自拍视角，真实粗糙质感，轻微抖动，无滤镜，生活记录感。"},
{ t: "16mm 胶片", s: "颗粒文艺", p: "16mm胶片手持拍摄，可见胶片颗粒，柔和色彩，复古纪实质感。"},
{ t: "电影机纪实", s: "精致纪录片", p: "ARRI电影机手持纪实拍摄，电影级动态范围，浅景深，自然光真实还原。"},
];
export const SNDD = [
{ t: "纯环境原声", s: "无BGM无字幕", p: "无BGM、无配乐、无旁白、无字幕、无特效音。"},
{ t: "环境音+台词", s: "台词双引号", p: "轻柔环境音，角色台词用双引号标注，无BGM、无字幕。"},
{ t: "环境音+动作音", s: "突出动作声", p: "保留环境音与动作音效，无BGM、无字幕。"},
];
export const VPRESETS = [
{ n: "咖啡店日常", plat: 0, dur: 1, tex: 0, snd: 0, sel: { makeup: 0, lens: 0, hair: 0, acc: 0, nail: 0, outfit: 0, time: 2, weather: 0, place: 0, mood: 0},
beats: [["0-4秒", "端起咖啡杯轻吹热气，抬眼看向镜头微笑"], ["4-10秒", "放下杯子翻开手边的书，指尖划过书页"], ["10-15秒", "侧头望向窗外行人，发丝被风吹起，回头对镜头眨眼轻笑"]],
sndin: "咖啡店环境音，杯碟轻碰声，翻书声"},
{ n: "公园晨跑", plat: 0, dur: 1, tex: 1, snd: 0, sel: { makeup: 0, lens: 1, hair: 4, acc: 5, nail: 4, outfit: 5, time: 0, weather: 1, place: 1, mood: 1},
beats: [["0-4秒", "系紧鞋带起身，迎着镜头方向起跑"], ["4-10秒", "匀速奔跑，手臂自然摆动，呼吸起伏真实"], ["10-15秒", "放慢脚步回头，对镜头比出加油手势，咧嘴一笑"]],
sndin: "鸟鸣，脚步落地声，轻微呼吸声"},
{ n: "居家早晨", plat: 0, dur: 1, tex: 0, snd: 0, sel: { makeup: 0, lens: 1, hair: 5, acc: 5, nail: 4, outfit: 2, time: 0, weather: 0, place: 4, mood: 0},
beats: [["0-4秒", "揉着眼睛从床上坐起，被子滑落"], ["4-10秒", "赤脚下床走到厨房，从冰箱拿出牛奶倒入玻璃杯"], ["10-15秒", "捧着杯子靠窗喝一口，满足地眯起眼睛"]],
sndin: "鸟鸣，冰箱运转声，牛奶倒入玻璃杯声"},
];

export const DEFAULT_VIDEO_LOCK = "严格锁定参考人物原生五官脸型、骨相轮廓、面部比例，全程样貌底子100%不变，无换脸、无五官漂移、无畸形崩坏。原生真实肤质、清晰自然毛孔、真实皮肤纹理、原生自然唇纹；真人面部肌肉动态，做表情自带自然表情纹，无AI僵硬感；手部修长纤细，真人原生手部比例。";
export const DEFAULT_BEATS = [["0-3秒", ""], ["3-8秒", ""], ["8-15秒", ""]];
export const VIDEO_BAN = "【禁令】严禁CG质感、3D渲染、数字人、动漫卡通、假白瓷肤、过度美颜、五官扭曲、手指畸形、人物样貌突变、光影虚假、塑料质感。";

// 图片模式状态：sel 与原版 IS 对应（未点过的键不存在；点选后再点取消会记成 -1，
// 待连线只统计记成 -1 的键——与原版 `IS[k] < 0` 的判定完全一致）。
export function defaultImageState() {
return { sel: {}, content: "", ratio: 0};
}
export function defaultVideoState() {
return {
plat: 0, dur: -1, lock: DEFAULT_VIDEO_LOCK,
makeup: -1, lens: -1, hair: -1, acc: -1, nail: -1, outfit: -1,
time: -1, weather: -1, place: -1, mood: -1, tex: -1, snd: -1,
sndIn: "", beats: DEFAULT_BEATS.map((beat) => [beat[0], beat[1]]),
};
}
export function applyImagePreset(preset) {
const sel = { role: preset.role};
for (const key of IMG.keys.slice(1)) sel[key] = preset.sel[key];
return { sel, content: preset.content, ratio: 0};
}
export function applyVideoPreset(preset) {
const next = defaultVideoState();
next.plat = preset.plat;
next.dur = preset.dur;
next.tex = preset.tex;
next.snd = preset.snd;
for (const key of Object.keys(preset.sel)) next[key] = preset.sel[key];
next.beats = preset.beats.map((beat) => [beat[0], beat[1]]);
next.sndIn = preset.sndin;
return next;
}

// ---- 提示词生成（纯函数，与原版 imgRender / vidRender 的拼接逻辑逐字一致） ----

export function imageFilled(img) {
const sel = img.sel || {};
return [sel.role >= 0, (img.content || "").trim().length > 0]
.concat(IMG.keys.slice(1).map((key) => sel[key] >= 0));
}

export function imageHasSelection(img) {
const sel = img.sel || {};
return (img.content || "").trim().length > 0 || IMG.keys.some((key) => sel[key] >= 0);
}

export function buildImagePrompt(img) {
const sel = img.sel || {};
const content = (img.content || "").trim();
const parts = [];
const pick = (key) => (sel[key] >= 0? IMG.data[key][sel[key]]: null);
const role = pick("role");
if (role) parts.push(role.o);
if (content) parts.push("拍摄内容：" + content + "。");
const comp = pick("comp");
if (comp) parts.push("构图：" + comp.p + "。");
const lens = ["focal", "aperture", "angle", "shot"].map(pick).filter(Boolean).map((entry) => entry.p);
if (lens.length) parts.push("镜头参数：" + lens.join("，") + "。");
const light = pick("light");
const color = pick("color");
if (light || color) parts.push("光影与色调：" + [light && light.p, color && color.p].filter(Boolean).join("，") + "。");
const style = pick("style");
if (style) parts.push("风格要求：" + style.p + "。");
parts.push("输出参数：画面比例" + RATIO_P[img.ratio || 0] + "，4K分辨率。");
const missing = IMG.keys.filter((key) => sel[key] < 0).map((key) => IMG.names[key]);
let text;
if (parts.length <= 1) {
text = "← 从第①步开始点选，或点上方\"模板速选\"…";
} else {
text = parts.join("\n");
if (missing.length) text += "\n\n（待连线：" + missing.join("、") + "）";
}
return { text, missing};
}

function videoBeats(vid) {
const out = [];
for (const beat of vid.beats || []) {
const ts = (beat[0] || "").trim();
const act = (beat[1] || "").trim();
if (act) out.push([ts, act]);
}
return out;
}

export function videoFilled(vid) {
const styled = ["makeup", "lens", "hair", "acc", "nail", "outfit"].some((key) => vid[key] >= 0);
const scenic = ["time", "weather", "place", "mood"].some((key) => vid[key] >= 0);
return [
vid.dur >= 0,
(vid.lock || "").length > 0,
styled,
scenic,
videoBeats(vid).length > 0,
vid.tex >= 0,
vid.snd >= 0 && (vid.sndIn || "").trim().length > 0,
];
}

export function videoHasSelection(vid) {
return vid.dur >= 0
|| ["makeup", "lens", "hair", "acc", "nail", "outfit", "time", "weather", "place", "mood"].some((key) => vid[key] >= 0)
|| videoBeats(vid).length > 0
|| vid.tex >= 0
|| vid.snd >= 0;
}

export function buildVideoPrompt(vid) {
const parts = [];
const beats = videoBeats(vid);
if (vid.dur >= 0) {
parts.push("请用" + PLAT[vid.plat] + "生成一段" + DUR[vid.dur].t.replace(" ", "") + "，超写实原生手机实拍质感、生活化纪实短视频。");
}
const lock = (vid.lock || "").trim();
if (lock) parts.push("【人物基准】" + lock);
const styled = [];
const stylePart = (key, arr, label) => { if (vid[key] >= 0) styled.push(label + "：" + arr[vid[key]].p);};
stylePart("makeup", MAKEUP, "妆容");
stylePart("lens", LENS, "美瞳/眼神");
stylePart("hair", HAIR, "发型/发色");
stylePart("acc", ACC, "发饰/配饰");
stylePart("nail", NAIL, "美甲");
stylePart("outfit", OUTFIT, "穿搭服装");
if (styled.length) parts.push("【本次造型】" + styled.join("；") + "。");
const scenic = [];
if (vid.time >= 0) scenic.push("拍摄时间：" + TIME[vid.time]);
if (vid.weather >= 0) scenic.push("天气光线：" + WEATHER[vid.weather].p);
if (vid.place >= 0) scenic.push("拍摄场景：" + PLACE[vid.place].p);
if (vid.mood >= 0) scenic.push("整体氛围：" + MOOD[vid.mood]);
if (scenic.length) parts.push("【场景环境】" + scenic.join("，") + "，全程原生真实自然光，环境细节写实生活化。");
if (beats.length) {
parts.push("【剧情】\n" + beats.map((beat) => (beat[0] || "") + (beat[0]? "：": "") + beat[1]).join("\n") + "\n全程动作丝滑连贯，神态自然松弛，真人动态质感，无机械AI动作、无卡顿断层。");
}
if (vid.tex >= 0) parts.push("【质感】" + TEXD[vid.tex].p);
if (vid.snd >= 0 && (vid.sndIn || "").trim()) parts.push("【声音】环境原声：" + (vid.sndIn || "").trim() + "，" + SNDD[vid.snd].p);
parts.push(VIDEO_BAN);
const missing = [];
if (vid.dur < 0) missing.push("时长");
if (!lock) missing.push("人物");
if (!styled.length) missing.push("造型");
if (!scenic.length) missing.push("场景");
if (!beats.length) missing.push("剧情");
if (vid.tex < 0) missing.push("质感");
if (vid.snd < 0 ||!(vid.sndIn || "").trim()) missing.push("声音");
let text;
if (missing.length === 7) {
text = "← 点上方\"模板速选\"一键连线，或从第①步开始手选…";
} else {
text = parts.join("\n\n");
if (missing.length) text += "\n\n（待连线：" + missing.join("、") + "）";
}
return { text, missing};
}

// ---- 样式：原版 Kimi 风格 CSS，全部收进 .mv-prompt-board 作用域，不污染全局 ----
const CSS_TEXT = `
.mv-prompt-board{--kimi-font-sans:-apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;--kimi-color-text-primary:#1a1a1a;--kimi-color-text-secondary:#555555;--kimi-color-text-tertiary:#999999;--kimi-color-border:#e2e2e2;--kimi-color-surface:#ffffff;--t-fast:120ms;--t-normal:200ms;--ease-out:cubic-bezier(.2,.7,.3,1);max-width:760px;margin:0 auto;padding:20px 16px 60px;font-family:var(--kimi-font-sans);font-size:16px;line-height:24px;color:var(--kimi-color-text-primary);background:var(--kimi-color-surface)}
@media (prefers-color-scheme:dark){
.mv-prompt-board{--kimi-color-text-primary:#ececec;--kimi-color-text-secondary:#b5b5b5;--kimi-color-text-tertiary:#7d7d7d;--kimi-color-border:#3a3a3a;--kimi-color-surface:#161616}
}
.mv-prompt-board button,.mv-prompt-board input,.mv-prompt-board textarea{font:inherit}
.mv-prompt-board .tabwrap{display:flex;gap:8px;margin-bottom:12px}
.mv-prompt-board .tab{border:1px solid var(--kimi-color-border);border-radius:8px;padding:6px 16px;font-size:14px;background:transparent;color:var(--kimi-color-text-secondary);cursor:pointer}
.mv-prompt-board .tab.on{background:var(--kimi-color-text-primary);color:var(--kimi-color-surface);border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .pline{display:flex;align-items:center;margin:4px 0 14px}
.mv-prompt-board .pnode{width:22px;height:22px;border-radius:999px;border:1px solid var(--kimi-color-border);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--kimi-color-text-tertiary);flex:none;transition:all var(--t-fast) var(--ease-out);background:transparent}
.mv-prompt-board .pnode.on{background:var(--kimi-color-text-primary);color:var(--kimi-color-surface);border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .pseg{flex:1;height:1px;background:var(--kimi-color-border);margin:0 2px;transition:all var(--t-normal) var(--ease-out)}
.mv-prompt-board .pseg.on{background:var(--kimi-color-text-primary)}
.mv-prompt-board .presetrow{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.mv-prompt-board .pre{border:1px dashed var(--kimi-color-border);border-radius:6px;padding:5px 12px;font-size:13px;background:transparent;color:var(--kimi-color-text-tertiary);cursor:pointer}
.mv-prompt-board .pre:hover{color:var(--kimi-color-text-primary);border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .step{margin-bottom:14px}
.mv-prompt-board .slabel{font-size:14px;font-weight:500;margin-bottom:8px}
.mv-prompt-board .snum{font-size:12px;font-weight:400;color:var(--kimi-color-text-tertiary);border:1px solid var(--kimi-color-border);border-radius:999px;padding:0 8px;line-height:20px;margin-right:8px}
.mv-prompt-board .chips{display:flex;flex-wrap:wrap;gap:8px}
.mv-prompt-board .chip{border:1px solid var(--kimi-color-border);border-radius:6px;padding:6px 12px;font-size:14px;background:transparent;color:var(--kimi-color-text-secondary);cursor:pointer;transition:all var(--t-fast) var(--ease-out)}
.mv-prompt-board .chip small{display:block;font-size:12px;color:var(--kimi-color-text-tertiary);line-height:16px}
.mv-prompt-board .chip:hover{border-color:var(--kimi-color-text-primary);color:var(--kimi-color-text-primary)}
.mv-prompt-board .chip.sel{background:var(--kimi-color-text-primary);color:var(--kimi-color-surface);border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .chip.sel small{color:color-mix(in srgb,var(--kimi-color-surface) 70%,transparent)}
.mv-prompt-board .tin,.mv-prompt-board .tarea{width:100%;box-sizing:border-box;border:1px solid var(--kimi-color-border);border-radius:10px;padding:8px 12px;font-size:14px;background:transparent;color:var(--kimi-color-text-primary);outline:none;margin-bottom:8px}
.mv-prompt-board .tin:focus,.mv-prompt-board .tarea:focus{border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .tarea{resize:vertical;line-height:20px}
.mv-prompt-board .fld{font-size:12px;color:var(--kimi-color-text-tertiary);margin-bottom:4px}
.mv-prompt-board .out{border:1px solid var(--kimi-color-border);border-radius:12px;padding:16px;font-size:14px;line-height:22px;white-space:pre-wrap;color:var(--kimi-color-text-primary);margin-top:8px;word-break:break-word}
.mv-prompt-board .obtn{border:1px solid var(--kimi-color-text-primary);border-radius:8px;padding:8px 16px;font-size:14px;background:var(--kimi-color-text-primary);color:var(--kimi-color-surface);cursor:pointer}
.mv-prompt-board .gbtn{border:1px solid var(--kimi-color-border);border-radius:8px;padding:8px 16px;font-size:14px;background:transparent;color:var(--kimi-color-text-secondary);cursor:pointer}
.mv-prompt-board .gbtn:hover{color:var(--kimi-color-text-primary);border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .obtn:disabled,.mv-prompt-board .gbtn:disabled{opacity:.5;cursor:default}
.mv-prompt-board .muted{font-size:12px;color:var(--kimi-color-text-tertiary);font-weight:400}
.mv-prompt-board .brow{display:flex;gap:8px;margin-bottom:8px}
.mv-prompt-board .bts{width:96px;flex:none;text-align:center;margin-bottom:0}
.mv-prompt-board .btnrow{display:flex;gap:8px;margin:16px 0 8px;flex-wrap:wrap}
.mv-prompt-board .sendpicker{border:1px dashed var(--kimi-color-border);border-radius:12px;padding:12px 14px;margin-top:12px}
.mv-prompt-board .sendpicker .slabel{margin-bottom:10px}
.mv-prompt-board .sendpick{display:block;width:100%;text-align:left;border:1px solid var(--kimi-color-border);border-radius:8px;padding:8px 12px;font-size:14px;background:transparent;color:var(--kimi-color-text-primary);cursor:pointer;margin-bottom:8px}
.mv-prompt-board .sendpick:hover{border-color:var(--kimi-color-text-primary)}
.mv-prompt-board .sendpick small{display:block;font-size:12px;color:var(--kimi-color-text-tertiary)}
`;

// ---- 发送到画布的辅助函数（纯逻辑，不依赖 React） ----

function errorText(err) {
  if (err && typeof err.message === "string" && err.message) return err.message;
  if (typeof err === "string" && err) return err;
  return "未知错误";
}

function isRevisionConflict(err) {
  return /revision|版本|已变化|冲突|conflict/i.test(errorText(err));
}

// ---- 插件入口 ----

export function activate(host) {
  const React = host.React;
  const { useState, useEffect, useMemo, useRef } = React;
  const h = (tag, props, ...children) => React.createElement(tag, props, ...children);
  const STORAGE_KEY = "state";
  const PLUGIN_ID = "beeftv-plugin-prompt-board";

  function chipGroup(items, selected, onPick, style) {
    return h("div", { className: "chips", style: style || undefined },
      items.map((item, index) =>
        h("button", {
          key: index,
          type: "button",
          className: "chip" + (selected === index ? " sel" : ""),
          onClick: () => onPick(index),
        }, item.t, item.s ? h("small", null, item.s) : null)));
  }

  function step(label, hint, children, key) {
    return h("div", { key: key || undefined, className: "step" },
      h("div", { className: "slabel" },
        h("span", { className: "snum" }, label),
        hint ? h("span", { className: "muted" }, hint) : null),
      children);
  }

  const IMG_STEPS = [
    { key: "comp", label: "③ 构图" },
    { key: "focal", label: "④ 焦距" },
    { key: "aperture", label: "⑤ 光圈" },
    { key: "angle", label: "⑥ 视角" },
    { key: "shot", label: "⑦ 景别" },
    { key: "light", label: "⑧ 光影" },
    { key: "color", label: "⑨ 色调" },
    { key: "style", label: "⑩ 质感" },
  ];
  const VID_STYLE_GROUPS = [
    { key: "makeup", label: "妆容", items: MAKEUP },
    { key: "lens", label: "美瞳 / 眼神", items: LENS },
    { key: "hair", label: "发型 / 发色", items: HAIR },
    { key: "acc", label: "发饰 / 配饰", items: ACC },
    { key: "nail", label: "美甲", items: NAIL },
    { key: "outfit", label: "穿搭服装", items: OUTFIT },
  ];
  const VID_SCENE_GROUPS = [
    { key: "time", label: "拍摄时间", items: TIME.map((text) => ({ t: text, s: "" })) },
    { key: "weather", label: "天气光线", items: WEATHER },
    { key: "place", label: "拍摄场景", items: PLACE },
    { key: "mood", label: "整体氛围", items: MOOD.map((text) => ({ t: text, s: "" })) },
  ];

  function PromptBoardPage() {
    const [mode, setMode] = useState("img");
    const [img, setImg] = useState(defaultImageState);
    const [vid, setVid] = useState(defaultVideoState);
    const [loaded, setLoaded] = useState(false);
    const [copied, setCopied] = useState(false);
    const [sendBusy, setSendBusy] = useState(false);
    const [picker, setPicker] = useState(null);
    const copyTimer = useRef(null);

    useEffect(() => {
      const style = document.createElement("style");
      style.setAttribute("data-plugin", PLUGIN_ID);
      style.textContent = CSS_TEXT;
      document.head.appendChild(style);
      return () => { style.remove(); };
    }, []);

    useEffect(() => {
      let alive = true;
      (async () => {
        try {
          const saved = await host.storage.get(STORAGE_KEY);
          if (alive && saved && typeof saved === "object") {
            if (saved.mode === "img" || saved.mode === "vid") setMode(saved.mode);
            if (saved.img && typeof saved.img === "object") {
              setImg({
                sel: saved.img.sel && typeof saved.img.sel === "object" ? saved.img.sel : {},
                content: typeof saved.img.content === "string" ? saved.img.content : "",
                ratio: typeof saved.img.ratio === "number" ? saved.img.ratio : 0,
              });
            }
            if (saved.vid && typeof saved.vid === "object") {
              const next = defaultVideoState();
              for (const key of Object.keys(next)) {
                if (key === "beats") continue;
                if (saved.vid[key] !== undefined) next[key] = saved.vid[key];
              }
              if (Array.isArray(saved.vid.beats) && saved.vid.beats.length) {
                next.beats = saved.vid.beats.map((beat) => [String((beat && beat[0]) || ""), String((beat && beat[1]) || "")]);
              }
              setVid(next);
            }
          }
        } catch (err) { /* 保存损坏时用默认值，不报错 */ }
        if (alive) setLoaded(true);
      })();
      return () => { alive = false; };
    }, []);

    useEffect(() => {
      if (!loaded) return;
      host.storage.set(STORAGE_KEY, { mode, img, vid }).catch(() => {});
    }, [loaded, mode, img, vid]);

    useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

    const built = useMemo(() => (mode === "img" ? buildImagePrompt(img) : buildVideoPrompt(vid)), [mode, img, vid]);
    const filled = mode === "img" ? imageFilled(img) : videoFilled(vid);

    const toggleImg = (key, index) => {
      setImg((prev) => {
        const sel = { ...(prev.sel || {}) };
        sel[key] = sel[key] === index ? -1 : index;
        return { ...prev, sel };
      });
    };
    const toggleVid = (key, index) => {
      setVid((prev) => ({ ...prev, [key]: prev[key] === index ? -1 : index }));
    };
    const setVidField = (key, value) => {
      setVid((prev) => ({ ...prev, [key]: value }));
    };
    const setBeat = (index, field, value) => {
      setVid((prev) => {
        const beats = prev.beats.map((beat) => [beat[0], beat[1]]);
        beats[index][field] = value;
        return { ...prev, beats };
      });
    };
    const addBeat = () => {
      setVid((prev) => (prev.beats.length >= 6 ? prev : { ...prev, beats: [...prev.beats, ["", ""]] }));
    };
    const delBeat = () => {
      setVid((prev) => (prev.beats.length <= 1 ? prev : { ...prev, beats: prev.beats.slice(0, -1) }));
    };
    const clearAll = () => {
      if (mode === "img") setImg(defaultImageState());
      else setVid(defaultVideoState());
      setPicker(null);
    };

    const copyPrompt = async () => {
      const text = built.text;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          throw new Error("no clipboard");
        }
      } catch (err) {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        } catch (ignored) { /* 原版复制失败也照常显示已复制 */ }
      }
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1500);
    };

    const configureCanvasNode = async (canvasId, revision, node, kind, prompt) => {
      try {
        await host.ops.call("canvas.node.configure", {
          canvasId, nodeId: node.id, kind, expectedRevision: revision, patch: { prompt },
        });
        host.ui.notify("已写入「" + (node.title || "未命名节点") + "」的提示词草稿", "success");
      } catch (err) {
        if (isRevisionConflict(err)) host.ui.notify("画布刚有变化，请再点一次发送", "warning");
        else host.ui.notify("发送失败：" + errorText(err), "error");
      }
      setPicker(null);
    };

    const createCanvasNode = async (canvasId, revision, kind, prompt) => {
      const title = kind === "image" ? "图片提示词" : "视频提示词";
      try {
        const res = await host.ops.call("canvas.nodes.create", {
          canvasId, expectedRevision: revision, nodes: [{ title, type: kind, prompt }],
        });
        const created = res && Array.isArray(res.created) ? res.created[0] : null;
        host.ui.notify("已在画布新建「" + (created && created.title ? created.title : title) + "」并写入提示词草稿", "success");
      } catch (err) {
        if (isRevisionConflict(err)) host.ui.notify("画布刚有变化，请再点一次发送", "warning");
        else host.ui.notify("发送失败：" + errorText(err), "error");
      }
    };

    const sendToCanvas = async () => {
      const hasSelection = mode === "img" ? imageHasSelection(img) : videoHasSelection(vid);
      if (!hasSelection) {
        host.ui.notify("先在板子上连几个选项，再发送到画布", "warning");
        return;
      }
      const canvasId = host.context.getCanvasId();
      if (!canvasId) {
        host.ui.notify("请先打开一个画布，再发送提示词", "warning");
        return;
      }
      const kind = mode === "img" ? "image" : "video";
      const prompt = built.text;
      setSendBusy(true);
      try {
        const res = await host.ops.call("canvas.get", { canvasId });
        const doc = (res && res.canvas) || {};
        const revision = typeof doc.revision === "number" ? doc.revision : 0;
        if (!revision || revision < 1) {
          host.ui.notify("读取画布版本失败，请重试", "error");
          return;
        }
        const nodes = Array.isArray(doc.nodes) ? doc.nodes : [];
        const candidates = nodes.filter((node) => node && node.type === kind);
        if (candidates.length === 0) {
          await createCanvasNode(canvasId, revision, kind, prompt);
        } else if (candidates.length === 1) {
          await configureCanvasNode(canvasId, revision, candidates[0], kind, prompt);
        } else {
          setPicker({ canvasId, revision, kind, prompt, nodes: candidates });
        }
      } catch (err) {
        host.ui.notify("发送失败：" + errorText(err), "error");
      } finally {
        setSendBusy(false);
      }
    };

    const pline = h("div", { className: "pline" },
      filled.flatMap((done, index) => {
        const parts = [h("div", { key: "n" + index, className: "pnode" + (done ? " on" : "") }, String(index + 1))];
        if (index < filled.length - 1) {
          parts.push(h("div", { key: "s" + index, className: "pseg" + (done && filled[index + 1] ? " on" : "") }));
        }
        return parts;
      }));

    const presets = mode === "img" ? IMG.presets : VPRESETS;
    const presetRow = h("div", { className: "presetrow" },
      h("span", { className: "muted", style: { alignSelf: "center" } }, "模板速选："),
      presets.map((preset) => h("button", {
        key: preset.n,
        type: "button",
        className: "pre",
        onClick: () => {
          if (mode === "img") setImg(applyImagePreset(preset));
          else setVid(applyVideoPreset(preset));
        },
      }, preset.n)));

    const imageBox = h("div", { style: { display: mode === "img" ? "" : "none" } },
      step("① 角色身份", null,
        chipGroup(IMG.data.role.map((item) => ({ t: item.t, s: item.s })), img.sel.role, (index) => toggleImg("role", index))),
      step("② 拍摄内容", "自由填写",
        h("input", {
          className: "tin",
          value: img.content,
          placeholder: "如：25岁亚洲女性，白色连衣裙，身材高挑",
          onChange: (event) => {
            const value = event.target.value;
            setImg((prev) => ({ ...prev, content: value }));
          },
        })),
      IMG_STEPS.map((item) => step(item.label, null,
        chipGroup(IMG.data[item.key].map((entry) => ({ t: entry.t, s: entry.s })), img.sel[item.key], (index) => toggleImg(item.key, index)), item.key)),
      step("输出", "画幅比例",
        chipGroup(RATIOS.map((text) => ({ t: text, s: "" })), img.ratio, (index) => setImg((prev) => ({ ...prev, ratio: index })))));

    const videoBox = h("div", { style: { display: mode === "vid" ? "" : "none" } },
      step("① 平台与时长", null,
        h("div", null,
          chipGroup(PLAT.map((text) => ({ t: text, s: "" })), vid.plat, (index) => setVidField("plat", index), { marginBottom: 8 }),
          chipGroup(DUR, vid.dur, (index) => toggleVid("dur", index)))),
      step("② 人物基准", "永久锁定段，可编辑",
        h("textarea", {
          className: "tarea",
          rows: 4,
          value: vid.lock,
          onChange: (event) => setVidField("lock", event.target.value),
        })),
      step("③ 本次造型", "每栏单选，组合出本次形象",
        h("div", null, VID_STYLE_GROUPS.map((group, groupIndex) =>
          h("div", { key: group.key },
            h("div", { className: "fld", style: groupIndex > 0 ? { marginTop: 10 } : undefined }, group.label),
            chipGroup(group.items, vid[group.key], (index) => toggleVid(group.key, index)))))),
      step("④ 场景四要素", null,
        h("div", null, VID_SCENE_GROUPS.map((group, groupIndex) =>
          h("div", { key: group.key },
            h("div", { className: "fld", style: groupIndex > 0 ? { marginTop: 10 } : undefined }, group.label),
            chipGroup(group.items, vid[group.key], (index) => toggleVid(group.key, index)))))),
      step("⑤ 时间轴剧情", "秒数可改，动作自己填，一行为一拍",
        h("div", null,
          h("div", null, vid.beats.map((beat, index) =>
            h("div", { key: index, className: "brow" },
              h("input", {
                type: "text",
                className: "tin bts",
                value: beat[0],
                onChange: (event) => setBeat(index, 0, event.target.value),
              }),
              h("input", {
                type: "text",
                className: "tin",
                value: beat[1],
                placeholder: "这一拍做什么",
                onChange: (event) => setBeat(index, 1, event.target.value),
              })))),
          h("div", { style: { display: "flex", gap: 8, marginTop: 4 } },
            h("button", { type: "button", className: "gbtn", onClick: addBeat }, "加一拍"),
            h("button", { type: "button", className: "gbtn", onClick: delBeat }, "减一拍")))),
      step("⑥ 拍摄质感", null,
        chipGroup(TEXD, vid.tex, (index) => toggleVid("tex", index))),
      step("⑦ 声音", null,
        h("div", null,
          h("input", {
            className: "tin",
            value: vid.sndIn,
            placeholder: "环境音描述，如：咖啡店环境音，杯碟轻碰声",
            onChange: (event) => setVidField("sndIn", event.target.value),
          }),
          chipGroup(SNDD, vid.snd, (index) => toggleVid("snd", index), { marginTop: 4 }))));

    const pickerPanel = picker ? h("div", { className: "sendpicker" },
      h("div", { className: "slabel" },
        h("span", { className: "snum" }, "发送到画布"),
        h("span", { className: "muted" }, "选一个节点写入提示词草稿")),
      picker.nodes.map((node) => h("button", {
        key: node.id,
        type: "button",
        className: "sendpick",
        disabled: sendBusy,
        onClick: () => {
          setSendBusy(true);
          configureCanvasNode(picker.canvasId, picker.revision, node, picker.kind, picker.prompt)
            .finally(() => setSendBusy(false));
        },
      }, node.title || "未命名节点",
        h("small", null, picker.kind === "image" ? "图片节点" : "视频节点"))),
      h("button", {
        type: "button",
        className: "sendpick",
        disabled: sendBusy,
        onClick: () => {
          setSendBusy(true);
          createCanvasNode(picker.canvasId, picker.revision, picker.kind, picker.prompt)
            .finally(() => { setSendBusy(false); setPicker(null); });
        },
      }, "新建" + (picker.kind === "image" ? "图片" : "视频") + "节点",
        h("small", null, "没有合适的节点时选这个")),
      h("button", { type: "button", className: "gbtn", onClick: () => setPicker(null) }, "取消")) : null;

    return h("div", { className: "mv-prompt-board" },
      h("div", { style: { fontSize: 17, fontWeight: 500, marginBottom: 4 } }, "AI 提示词连线面板"),
      h("div", { className: "muted", style: { marginBottom: 12 } }, "图片 10 步全参数连线 ｜ 人设视频全词库连线 + 时间轴剧情自填 ｜ 选择自动保存"),
      h("div", { className: "tabwrap" },
        h("button", { type: "button", className: "tab" + (mode === "img" ? " on" : ""), onClick: () => setMode("img") }, "图片模式"),
        h("button", { type: "button", className: "tab" + (mode === "vid" ? " on" : ""), onClick: () => setMode("vid") }, "人设视频模式")),
      pline,
      presetRow,
      imageBox,
      videoBox,
      h("div", { className: "btnrow" },
        h("button", { type: "button", className: "obtn", onClick: () => { void copyPrompt(); } }, copied ? "已复制" : "复制提示词"),
        h("button", { type: "button", className: "gbtn", disabled: sendBusy, onClick: () => { void sendToCanvas(); } }, sendBusy ? "发送中…" : "发送到画布"),
        h("button", { type: "button", className: "gbtn", onClick: clearAll }, "清空重连")),
      pickerPanel,
      h("div", { className: "out" }, built.text));
  }

  host.contribute("app.page", {
    path: "",
    title: "提示词连线板",
    component: PromptBoardPage,
  });
  host.contribute("app.sidebar", {
    id: PLUGIN_ID,
    label: "提示词连线板",
    path: "/p/" + PLUGIN_ID,
    order: 50,
  });
  host.contribute("app.command", {
    id: "open-prompt-board",
    title: "打开提示词连线板",
    keywords: ["提示词", "连线", "prompt", "模板"],
    handler: () => host.ui.navigate("/p/" + PLUGIN_ID),
  });
}
