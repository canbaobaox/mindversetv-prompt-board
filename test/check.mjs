// 提示词连线板插件自检：node test/check.mjs（或 npm test）
// 覆盖：滚动 CSS、四个槽位贡献（含画布侧栏 dockButton）、板子渲染、发送目标选择。
// React 从 MindVerseTV 宿主仓库的 node_modules 取（插件仓库本身不装依赖）。
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(resolve("/home/hatch/workspace/mvtv/web/package.json"));
const React = require("react");
const { renderToString } = require("react-dom/server");

const source = readFileSync(resolve(here, "../client/index.js"), "utf8");
const plugin = await import("../client/index.js");

// 1. 滚动：板子自己就是滚动容器（宿主工作台整条链都是 overflow-hidden，板子不自带滚动就滑不动）。
const boardRule = source.match(/\.mv-prompt-board\{[^}]*\}/);
assert.ok(boardRule, "找不到 .mv-prompt-board 样式规则");
assert.ok(boardRule[0].includes("height:100%"), "板子缺少 height:100%");
assert.ok(boardRule[0].includes("overflow-y:auto"), "板子缺少 overflow-y:auto");
assert.ok(boardRule[0].includes("box-sizing:border-box"), "板子缺少 box-sizing:border-box");

// 2. 槽位贡献。
const contributed = [];
const notified = [];
const host = {
  React,
  contribute: (slot, payload) => { contributed.push({ slot, payload }); return () => {}; },
  events: { on: () => () => {}, emit: () => {} },
  storage: { get: async () => null, set: async () => {}, remove: async () => {} },
  config: { getAll: () => ({}), get: () => undefined, set: async () => {} },
  ui: { notify: (message) => { notified.push(message); }, navigate: () => {}, requestInstallPlugin: () => {} },
  ops: { call: async () => ({}) },
  context: { getCanvasId: () => "canvas-1" },
};
plugin.activate(host);
const bySlot = (slot) => contributed.filter((entry) => entry.slot === slot).map((entry) => entry.payload);
assert.equal(bySlot("app.page").length, 1, "应贡献 1 个 app.page");
assert.equal(bySlot("app.sidebar").length, 1, "应贡献 1 个 app.sidebar");
assert.equal(bySlot("app.command").length, 1, "应贡献 1 个 app.command");
assert.equal(bySlot("canvas.sidePanel").length, 1, "应贡献 1 个 canvas.sidePanel");
const sidePanel = bySlot("canvas.sidePanel")[0];
assert.equal(sidePanel.id, "prompt-board");
assert.equal(sidePanel.title, "提示词板");
assert.equal(sidePanel.dockButton, true, "侧栏应标记 dockButton，由宿主画布 Dock 开关");
assert.equal(sidePanel.topBarButton, true, "侧栏应标记 topBarButton，由宿主在画布顶栏“工作流”旁再放一个同名开关");
assert.equal(typeof sidePanel.component, "function", "侧栏 component 应为组件函数");
assert.ok(sidePanel.icon, "侧栏应带图标（画布 Dock 按钮用）");

// 3. 板子渲染：独立页面与画布侧栏共用同一组件。
const PageComp = bySlot("app.page")[0].component;
const pageHtml = renderToString(React.createElement(PageComp, { pluginId: "beeftv-plugin-prompt-board", subpath: "" }));
for (const marker of ["图片模式", "人设视频模式", "发送到画布", "复制提示词", "清空重连", "模板速选"]) {
  assert.ok(pageHtml.includes(marker), `独立页面缺少文案：${marker}`);
}
const panelHtml = renderToString(React.createElement(sidePanel.component, { projectId: "canvas-1", canvasId: "canvas-1", selectedNodeIds: [] }));
for (const marker of ["图片模式", "人设视频模式", "发送到画布"]) {
  assert.ok(panelHtml.includes(marker), `画布侧栏缺少文案：${marker}`);
}

// 4. 发送目标选择：优先选中节点，选中不匹配时回落并标记。
const nodes = [
  { id: "img-1", type: "image", title: "图片节点 1" },
  { id: "img-2", type: "image", title: "图片节点 2" },
  { id: "vid-1", type: "video", title: "视频节点 1" },
  { id: "txt-1", type: "text", title: "文本节点" },
];
let picked = plugin.pickSendTargets(nodes, "image", []);
assert.deepEqual(picked.targets.map((node) => node.id), ["img-1", "img-2"]);
assert.equal(picked.selectionMismatch, false);
picked = plugin.pickSendTargets(nodes, "image", ["img-2"]);
assert.deepEqual(picked.targets.map((node) => node.id), ["img-2"]);
assert.equal(picked.usedSelection, true);
picked = plugin.pickSendTargets(nodes, "image", ["img-1", "img-2"]);
assert.deepEqual(picked.targets.map((node) => node.id), ["img-1", "img-2"]);
picked = plugin.pickSendTargets(nodes, "image", ["txt-1"]);
assert.deepEqual(picked.targets.map((node) => node.id), ["img-1", "img-2"]);
assert.equal(picked.selectionMismatch, true);
picked = plugin.pickSendTargets(nodes, "video", ["vid-1", "img-1"]);
assert.deepEqual(picked.targets.map((node) => node.id), ["vid-1"]);
picked = plugin.pickSendTargets([], "image", ["img-1"]);
assert.deepEqual(picked.targets, []);

console.log("提示词连线板自检全部通过：滚动 CSS、4 个槽位贡献、板子渲染、发送目标选择共 6 组断言");
