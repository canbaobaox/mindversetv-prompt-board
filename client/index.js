// 提示词连线板 —— 由“AI 提示词连线面板·专业版”（单文件 HTML）移植而来。
// 词库、模板与生成文案与原版一字不差；界面用 host.React 画，保存用 host.storage。
// 纯函数（buildImagePrompt / buildVideoPrompt 等）不依赖 host，可单独测试。
// 数据在 ./data-image.js 与 ./data-video.js（由 /tmp/extract-pro-data.mjs 从原版脚本
// 运行时提取并序列化，禁止手改）；本文件只留纯函数、样式与界面。

import { IMG, RATIOS, RATIO_P, PLAT, DUR } from "./data-image.js";
import { FACE, EYE2, VIBE2, BODY2, MAKEUP, LENS, HAIR, ACC, NAIL, OUTFIT, TIME, WEATHER, PLACE, MOOD, TEXD, SNDD, VPRESETS, DEFAULT_VIDEO_LOCK, DEFAULT_BEATS, VIDEO_BAN } from "./data-video.js";

export { IMG, RATIOS, RATIO_P, PLAT, DUR, FACE, EYE2, VIBE2, BODY2, MAKEUP, LENS, HAIR, ACC, NAIL, OUTFIT, TIME, WEATHER, PLACE, MOOD, TEXD, SNDD, VPRESETS, DEFAULT_VIDEO_LOCK, DEFAULT_BEATS, VIDEO_BAN };
// 图片模式状态：sel 与原版 IS 对应（未点过的键不存在；点选后再点取消会记成 -1，
// 待连线只统计记成 -1 的键——与原版 `IS[k] < 0` 的判定完全一致）。
export function defaultImageState() {
return { sel: {}, content: "", ratio: 0};
}
export function defaultVideoState() {
return {
plat: 0, dur: -1, face: -1, eye: -1, vibe: -1, body: -1,
makeup: -1, lens: -1, hair: -1, acc: -1, nail: -1, outfit: -1,
time: -1, weather: -1, place: -1, mood: -1, tex: -1, snd: -1,
lock: DEFAULT_VIDEO_LOCK,
sndIn: "", beats: DEFAULT_BEATS.map((beat) => [beat[0], beat[1]]),
};
}
export function applyImagePreset(preset) {
const sel = { role: preset.role};
for (const key of IMG.keys.slice(1)) sel[key] = preset.sel[key];
return { sel, content: preset.content, ratio: 0};
}
export function applyVideoPreset(preset) {
// 2026-11-20 修：原版这里写的是 `p.face||-1`，0 会被 || 吃掉变成 -1，
// “咖啡店日常”明明写了 face:0/eye:0/vibe:0/body:0，点模板却一个人物特征
// 都选不上。改成 ?? 后，0 保留、只有没写才记 -1，模板终于按写的来。
const next = defaultVideoState();
next.plat = preset.plat;
next.dur = preset.dur;
next.tex = preset.tex;
next.snd = preset.snd;
next.face = preset.face ?? -1;
next.eye = preset.eye ?? -1;
next.vibe = preset.vibe ?? -1;
next.body = preset.body ?? -1;
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
// 人物特征组合（专业版新增）
const featureParts = [];
const pushFeature = (key) => { if (sel[key] >= 0) featureParts.push(IMG.data[key][sel[key]].p);};
pushFeature("face");
pushFeature("brow");
pushFeature("eye");
pushFeature("iris");
pushFeature("nose");
pushFeature("lip");
pushFeature("skin");
pushFeature("vibe");
pushFeature("body");
if (featureParts.length) parts.push("人物特征：" + featureParts.join("，") + "。");
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
// 人物特征（face/eye/vibe/body）也算“已连选项”，与图片模式 IMG.keys 全量判定保持一致。
return vid.dur >= 0
|| ["face", "eye", "vibe", "body", "makeup", "lens", "hair", "acc", "nail", "outfit", "time", "weather", "place", "mood"].some((key) => vid[key] >= 0)
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
// 人物特征（专业版新增）
const featureParts = [];
if (vid.face >= 0) featureParts.push(FACE[vid.face].p);
if (vid.eye >= 0) featureParts.push(EYE2[vid.eye].p);
if (vid.vibe >= 0) featureParts.push(VIBE2[vid.vibe].p);
if (vid.body >= 0) featureParts.push(BODY2[vid.body].p);
if (featureParts.length) parts.push("【人物特征】" + featureParts.join("，") + "。");
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

// ---- 样式：原版专业版 Kimi 风格 CSS，全部收进 .mv-prompt-board 作用域，不污染全局 ----
const CSS_TEXT = `
.mv-prompt-board{--kimi-font-sans:-apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;--kimi-color-text-primary:#1a1a1a;--kimi-color-text-secondary:#555555;--kimi-color-text-tertiary:#999999;--kimi-color-border:#e2e2e2;--kimi-color-surface:#ffffff;--t-fast:120ms;--t-normal:200ms;--ease-out:cubic-bezier(.2,.7,.3,1);box-sizing:border-box;height:100%;overflow-y:auto;overscroll-behavior:contain;max-width:800px;margin:0 auto;padding:20px 16px 60px;font-family:var(--kimi-font-sans);font-size:16px;line-height:24px;color:var(--kimi-color-text-primary);background:var(--kimi-color-surface)}
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
.mv-prompt-board .chip{border:1px solid var(--kimi-color-border);border-radius:8px;padding:8px 12px;font-size:14px;background:transparent;color:var(--kimi-color-text-secondary);cursor:pointer;transition:all var(--t-fast) var(--ease-out);min-height:52px}
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
.mv-prompt-board .chip.has-icon{display:flex;align-items:center;gap:8px;padding:6px 10px}
.mv-prompt-board .chip-icon{width:36px;height:36px;flex:none;border-radius:6px;background:var(--kimi-color-surface);border:1px solid var(--kimi-color-border);display:flex;align-items:center;justify-content:center;overflow:hidden}
.mv-prompt-board .chip-icon svg{width:28px;height:28px;display:block}
.mv-prompt-board .chip.has-icon small{margin-left:0}
.mv-prompt-board .sw{display:inline-block;width:10px;height:10px;border-radius:999px;margin-right:6px;vertical-align:middle;border:1px solid rgba(0,0,0,.1)}
.mv-prompt-board .chip.sel .sw{border-color:rgba(255,255,255,.3)}
`;

// ---- 发送到画布的辅助函数（纯逻辑，不依赖 React） ----

// 选出发送目标：优先用画布上选中的同类节点；选中节点都不是同类时回落到全部同类节点并提示。
export function pickSendTargets(nodes, kind, selectedNodeIds) {
  const candidates = (Array.isArray(nodes) ? nodes : []).filter((node) => node && node.type === kind);
  const selected = (Array.isArray(selectedNodeIds) ? selectedNodeIds : []).filter((id) => typeof id === "string" && id);
  if (selected.length === 0) return { targets: candidates, usedSelection: false, selectionMismatch: false };
  const selectedTargets = candidates.filter((node) => selected.includes(node.id));
  if (selectedTargets.length > 0) return { targets: selectedTargets, usedSelection: true, selectionMismatch: false };
  return { targets: candidates, usedSelection: false, selectionMismatch: true };
}

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

  // chip 渲染与原版 mkChips 一致：带 svg 的加 has-icon 图标；妆容（isMakeup）前面加色块。
  // SVG 字符串来自原版词库自身（不是用户输入），用 dangerouslySetInnerHTML 注入。
  function chipGroup(items, selected, onPick, style, opts) {
    const isMakeup = Boolean(opts && opts.isMakeup);
    return h("div", { className: "chips", style: style || undefined },
      items.map((item, index) => {
        const hasIcon = Boolean(item.svg);
        const children = [];
        if (isMakeup && item.c) children.push(h("span", { key: "sw", className: "sw", style: { background: item.c } }));
        if (hasIcon) children.push(h("span", { key: "icon", className: "chip-icon", dangerouslySetInnerHTML: { __html: item.svg } }));
        children.push(h("span", { key: "t" }, item.t, item.s ? h("small", null, item.s) : null));
        return h("button", {
          key: index,
          type: "button",
          className: "chip" + (hasIcon ? " has-icon" : "") + (selected === index ? " sel" : ""),
          onClick: () => onPick(index),
        }, children);
      }));
  }

  function step(label, hint, children, key) {
    return h("div", { key: key || undefined, className: "step" },
      h("div", { className: "slabel" },
        h("span", { className: "snum" }, label),
        hint ? h("span", { className: "muted" }, hint) : null),
      children);
  }

  // 图片模式第③步：人物特征（专业版新增），9 组。
  const IMG_FEATURE_GROUPS = [
    { key: "face", label: "脸型轮廓", items: IMG.data.face },
    { key: "brow", label: "眉骨 / 眉形", items: IMG.data.brow },
    { key: "eye", label: "眼型", items: IMG.data.eye },
    { key: "iris", label: "虹膜 / 瞳孔", items: IMG.data.iris },
    { key: "nose", label: "鼻型", items: IMG.data.nose },
    { key: "lip", label: "唇形", items: IMG.data.lip },
    { key: "skin", label: "面部细节", items: IMG.data.skin },
    { key: "vibe", label: "气质神态", items: IMG.data.vibe },
    { key: "body", label: "身材比例", items: IMG.data.body },
  ];
  const IMG_STEPS = [
    { key: "comp", label: "④ 构图" },
    { key: "focal", label: "⑤ 焦距" },
    { key: "aperture", label: "⑥ 光圈" },
    { key: "angle", label: "⑦ 视角" },
    { key: "shot", label: "⑧ 景别" },
    { key: "light", label: "⑨ 光影" },
    { key: "color", label: "⑩ 色调" },
    { key: "style", label: "⑪ 质感" },
  ];
  // 人设视频模式第③步：人物特征（专业版新增），4 组。
  const VID_FEATURE_GROUPS = [
    { key: "face", label: "脸型轮廓", items: FACE },
    { key: "eye", label: "眼型 + 虹膜", items: EYE2 },
    { key: "vibe", label: "气质神态", items: VIBE2 },
    { key: "body", label: "身材比例", items: BODY2 },
  ];
  const VID_STYLE_GROUPS = [
    { key: "makeup", label: "妆容", items: MAKEUP, isMakeup: true },
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

  function PromptBoardPage(props) {
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
        // 全新画布的 revision 就是 0（canvas.create 建出时即为 0）：0 是合法的已读
        // 版本，首写带 expectedRevision 0 落盘后仓储会把它抬到 1；只有根本没读到
        // 版本号（缺字段/非数字/负数）才算读取失败。旧逻辑把 0 当失败，全新画布永远发不出去。
        if (typeof doc.revision !== "number" || doc.revision < 0) {
          host.ui.notify("读取画布版本失败，请重试", "error");
          return;
        }
        const revision = doc.revision;
        const nodes = Array.isArray(doc.nodes) ? doc.nodes : [];
        // 画布面板模式下宿主会传 selectedNodeIds；独立页面模式下没有，用全部同类节点。
        const selectedNodeIds = props && Array.isArray(props.selectedNodeIds) ? props.selectedNodeIds : [];
        const picked = pickSendTargets(nodes, kind, selectedNodeIds);
        if (picked.selectionMismatch) {
          host.ui.notify("选中的节点不是" + (kind === "image" ? "图片" : "视频") + "节点，按画布上的同类节点处理", "warning");
        }
        const candidates = picked.targets;
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
        chipGroup(IMG.data.role, img.sel.role, (index) => toggleImg("role", index))),
      step("② 拍摄内容", "主体与场景描述",
        h("input", {
          className: "tin",
          value: img.content,
          placeholder: "如：25岁亚洲女性，穿着白色连衣裙，站在梧桐树荫下的庭院",
          onChange: (event) => {
            const value = event.target.value;
            setImg((prev) => ({ ...prev, content: value }));
          },
        })),
      step("③ 人物特征", "多样化核心：脸型 + 五官 + 气质 + 身材（任选组合）",
        h("div", null, IMG_FEATURE_GROUPS.map((group, groupIndex) =>
          h("div", { key: group.key },
            h("div", { className: "fld", style: groupIndex > 0 ? { marginTop: 10 } : undefined }, group.label),
            chipGroup(group.items, img.sel[group.key], (index) => toggleImg(group.key, index)))))),
      IMG_STEPS.map((item) => step(item.label, null,
        chipGroup(IMG.data[item.key], img.sel[item.key], (index) => toggleImg(item.key, index)), item.key)),
      step("输出", "画幅比例",
        chipGroup(RATIOS.map((text) => ({ t: text, s: "" })), img.ratio, (index) => setImg((prev) => ({ ...prev, ratio: index })))));

    const videoBox = h("div", { style: { display: mode === "vid" ? "" : "none" } },
      step("① 平台与时长", null,
        h("div", null,
          chipGroup(PLAT.map((text) => ({ t: text, s: "" })), vid.plat, (index) => setVidField("plat", index), { marginBottom: 8 }),
          chipGroup(DUR, vid.dur, (index) => toggleVid("dur", index)))),
      step("② 人物基准", "永久锁定段，所有视频通用，可编辑",
        h("textarea", {
          className: "tarea",
          rows: 4,
          value: vid.lock,
          onChange: (event) => setVidField("lock", event.target.value),
        })),
      step("③ 人物特征", "多样化核心：每次换几个词，人物样貌就会不一样",
        h("div", null, VID_FEATURE_GROUPS.map((group, groupIndex) =>
          h("div", { key: group.key },
            h("div", { className: "fld", style: groupIndex > 0 ? { marginTop: 10 } : undefined }, group.label),
            chipGroup(group.items, vid[group.key], (index) => toggleVid(group.key, index)))))),
      step("④ 本次造型", "每栏单选，组合出本次形象（妆容带色块可视化）",
        h("div", null, VID_STYLE_GROUPS.map((group, groupIndex) =>
          h("div", { key: group.key },
            h("div", { className: "fld", style: groupIndex > 0 ? { marginTop: 10 } : undefined },
              group.key === "makeup"
                ? h("span", null, "妆容 ", h("span", { className: "muted" }, "—— 色块代表妆容主色调"))
                : group.label),
            chipGroup(group.items, vid[group.key], (index) => toggleVid(group.key, index), undefined, group.isMakeup ? { isMakeup: true } : undefined))))),
      step("⑤ 场景四要素", null,
        h("div", null, VID_SCENE_GROUPS.map((group, groupIndex) =>
          h("div", { key: group.key },
            h("div", { className: "fld", style: groupIndex > 0 ? { marginTop: 10 } : undefined }, group.label),
            chipGroup(group.items, vid[group.key], (index) => toggleVid(group.key, index)))))),
      step("⑥ 时间轴剧情", "秒数可改，动作自己填，一行为一拍",
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
      step("⑦ 拍摄质感", null,
        chipGroup(TEXD, vid.tex, (index) => toggleVid("tex", index))),
      step("⑧ 声音", null,
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
      h("div", { style: { fontSize: 17, fontWeight: 500, marginBottom: 4 } }, "AI 提示词连线面板 · 专业版"),
      h("div", { className: "muted", style: { marginBottom: 12 } }, "基于逐字稿方法论重构：人物特征多样化 + 妆容色块可视化 + 结构化提示词工程"),
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
  // 画布内嵌板：宿主把 dockButton 的侧栏渲染成画布底部 Dock 的开关按钮 + 浮动面板，
  // 不再放进创作助手侧栏，避免同一块板子在两个地方同时挂载、抢同一份保存。
  // topBarButton 再在画布顶部“工作流”旁边多放一个同名开关，点的还是同一块面板。
  const boardIcon = h("svg", { viewBox: "0 0 24 24", width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true },
    h("circle", { cx: 6, cy: 6, r: 2.2 }),
    h("circle", { cx: 18, cy: 6, r: 2.2 }),
    h("circle", { cx: 12, cy: 18, r: 2.2 }),
    h("path", { d: "M8 7.2 10.8 16M16 7.2 13.2 16M8.2 6h7.6" }));
  host.contribute("canvas.sidePanel", {
    id: "prompt-board",
    title: "提示词板",
    icon: boardIcon,
    dockButton: true,
    topBarButton: true,
    component: PromptBoardPage,
  });
}
