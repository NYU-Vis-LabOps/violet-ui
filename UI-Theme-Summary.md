# NYU 项目 UI 主题风格归纳

> 基于 `vis-app-main`（可视化应用）和 `Main-web-app`（研究运营管理平台）两个项目的分析整理

---

## 一、技术栈对比

| 维度 | vis-app (前端) | Main-web-app (全栈) |
|------|---------------|---------------------|
| 框架 | Next.js 14 + React | Flask + Jinja2 模板 |
| CSS 方案 | Tailwind CSS 3.4 + CSS-in-JS (Emotion) | Bootstrap 5.3 + 自定义 CSS |
| 组件库 | NextUI v2 + MUI v5 | 原生 Bootstrap 组件 |
| 图标库 | React Icons | Bootstrap Icons |
| 动画 | Framer Motion | CSS Transitions |
| 暗色模式 | 支持 (class-based) | 不支持（仅亮色） |

---

## 二、共同品牌色系 — NYU Purple

两个项目都以 **NYU 紫色** 为核心品牌色，以下是合并后的统一色板：

### 主色 (Purple 系列)

| 色名 | vis-app | Main-web-app | 建议统一值 | 用途 |
|------|---------|-------------|-----------|------|
| **深紫/主品牌色** | `#57068c` | `#4a0072` | `#57068c` | 导航栏、主标题、品牌标识 |
| **中紫/强调色** | `#702b9d` | `#6a1b99` | `#702b9d` | 按钮、渐变端点、交互高亮 |
| **中紫2** | `#7b5aa6` | `#9f69bc` | `#7b5aa6` | 手风琴、次要强调 |
| **浅紫/柔和** | `#ab82c5` | `#e295e7` | `#ab82c5` | 数据标签、头像背景、导航选中态 |
| **极浅紫/背景** | `#eee6f3` | `#f6e3f5` | `#eee6f3` | hover 背景、卡片淡色底 |
| **暗紫/文字** | — | `#2d0051` | `#2d0051` | 深色文字 |

### 中性色

| 色名 | 建议值 | 用途 |
|------|--------|------|
| 背景主色 | `#f3f4f6` / `#f8f9fa` | 页面大背景 |
| 卡片背景 | `#ffffff` | 卡片、模态框 |
| 边框色 | `#e5e7eb` / `#e9ecef` | 分隔线、卡片边框 |
| 主文字色 | `#333333` / `#343a40` | 正文内容 |
| 次文字色 | `#6c757d` | 辅助说明文字 |

### 语义色

| 语义 | 建议值 | 用途 |
|------|--------|------|
| 成功/完成 | `#28a745` | 完成状态、成功提示 |
| 危险/错误 | `#dc3545` | 删除、错误、紧急操作 |
| 警告/即将到期 | `#ffc107` | 警告提示、截止提醒 |
| 信息/进行中 | `#007bff` / `#17a2b8` | 信息提示、进行中状态 |

### 状态色映射

| 状态 | 颜色 | 背景色 |
|------|------|--------|
| 未开始 | `#6c757d` (灰) | `#e9ecef` |
| 进行中 | `#007bff` (蓝) | `#e3f2fd` |
| 即将到期 | `#fd7e14` (橙) | `#fff3cd` |
| 已逾期 | `#dc3545` (红) | `#f8d7da` |
| 已完成 | `#28a745` (绿) | `#d4edda` |

---

## 三、字体排版

### 字体家族

| 项目 | 主字体 | 备选 |
|------|--------|------|
| vis-app | Inter (Google Fonts) | Helvetica, Arial, sans-serif |
| Main-web-app | Gotham | sans-serif |

**建议统一**：`Inter` 作为主字体（免费、可变字重、适合界面），Gotham 作为品牌文档字体。

### 字号层级

| 层级 | vis-app (Tailwind) | Main-web-app | 建议统一 (rem) |
|------|-------------------|-------------|---------------|
| 页面标题 | text-2xl ~ text-3xl | 36px (H1) | 2rem ~ 2.25rem |
| 区块标题 | text-xl | 28px (H2) | 1.5rem ~ 1.75rem |
| 小标题 | text-lg | 24px (H3) | 1.25rem |
| 正文 | text-base (16px) | 18px | 1rem (16px) |
| 小号文字 | text-sm / text-xs | 0.7rem ~ 0.85rem | 0.875rem / 0.75rem |

### 字重

| 用途 | 字重 |
|------|------|
| 页面标题 | bold (700) |
| 区块标题 | semibold (600) |
| 正文 | regular (400) |
| 导航/标签 | medium (500) |

### 文字变换

- 导航链接：**大写** (`text-transform: uppercase`)，letter-spacing: 0.3~0.5px

---

## 四、布局系统

### 容器与间距

| 属性 | vis-app | Main-web-app | 建议统一 |
|------|---------|-------------|---------|
| 最大宽度 | Tailwind container | 1800px | 1400px ~ 1800px |
| 页面内边距 | px-4 (1rem) | 30px | 1.5rem ~ 2rem |
| 卡片内边距 | p-4 (1rem) | 15~20px | 1rem ~ 1.25rem |
| 组件间距 | gap-2 ~ gap-3 | 12~20px | 0.75rem ~ 1.25rem |
| 区块间距 | mb-4 (1rem) | 15~20px | 1rem ~ 1.5rem |

### 圆角

| 场景 | vis-app | Main-web-app | 建议统一 |
|------|---------|-------------|---------|
| 标准圆角 | rounded (4px) | 6~8px | 6px / 0.375rem |
| 大圆角 | rounded-lg (8px) | 8px | 8px / 0.5rem |
| 药丸形 | rounded-full | — | 9999px |

### 阴影

| 层级 | 建议值 |
|------|--------|
| 轻微 (卡片) | `0 1px 3px rgba(0,0,0,0.1)` |
| 中等 (浮层) | `0 2px 10px rgba(0,0,0,0.1)` |
| 强烈 (模态框) | `0 4px 15px rgba(0,0,0,0.15)` |

### 响应式断点

| 名称 | vis-app | Main-web-app | 建议统一 |
|------|---------|-------------|---------|
| 手机 | sm: 640px | 768px | 640px |
| 平板 | md: 768px | 1100px | 768px |
| 桌面 | lg: 1024px | 1200px | 1024px |
| 大屏 | card-lg: 1400px | 1400px | 1400px |

---

## 五、组件风格指南

### 导航栏

- 背景：NYU 主紫色，可加 `backdrop-filter: blur(10px)` 玻璃效果
- 文字：白色，大写，letter-spacing 适度
- 固定顶部，高度约 60~70px
- 移动端：汉堡菜单，渐变紫色全屏菜单

### 按钮

| 类型 | 样式 | 用途 |
|------|------|------|
| Primary | 紫色渐变 (`#4a0072` → `#6a1b99`)，白字 | 主要操作 |
| Secondary | 灰色/浅色背景 | 次要操作 |
| Danger | 红色渐变 (`#dc3545` → `#c82333`)，白字 | 删除/危险操作 |
| Ghost/Light | 透明背景，紫色边框/文字 | 辅助操作 |
| Pill | rounded-full | 标签筛选 |

- Hover：scale(1.05) + 背景色变亮
- Transition：`all 0.3s ease`

### 卡片

- 白色背景 + 浅灰边框 + 轻微阴影
- 可选：左侧彩色边框指示类别 (`border-left: 4px solid`)
- 标题区域可用浅灰渐变背景

### 模态框/对话框

- vis-app 使用 NextUI Modal，支持 full/5xl/xl 尺寸
- 内容可滚动 (`scrollBehavior: inside`)
- 标准三段结构：Header / Body / Footer

### 表格

- Main-web-app 使用 DataTables (排序/搜索/导出)
- vis-app 使用 NextUI Table 组件
- 共同点：白色背景、浅色表头、hover 行高亮

### 徽章/标签

- 圆角药丸形
- 颜色语义化（成功绿、危险红、信息蓝等）
- 用于状态、分类、计数

### 表单输入

- 统一圆角，聚焦时紫色边框
- 标签在上方，间距 0.5rem
- 错误状态：红色边框 + 错误文字

---

## 六、动效规范

| 属性 | 值 |
|------|-----|
| 默认过渡 | `transition: all 0.3s ease` |
| Hover 缩放 | `transform: scale(1.05)` |
| 链接 Hover | 上浮 `translateY(-1px)` + 颜色变化 |
| 渐变方向 | 135deg (对角线，现代感) |
| 毛玻璃效果 | `backdrop-filter: blur(10px)` |

---

## 七、可复用设计令牌 (CSS Variables)

```css
:root {
  /* 品牌色 */
  --color-primary: #57068c;
  --color-primary-hover: #702b9d;
  --color-primary-light: #ab82c5;
  --color-primary-lighter: #eee6f3;
  --color-primary-dark: #2d0051;

  /* 语义色 */
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-warning: #ffc107;
  --color-info: #007bff;

  /* 中性色 */
  --color-bg-page: #f3f4f6;
  --color-bg-card: #ffffff;
  --color-border: #e5e7eb;
  --color-text-primary: #333333;
  --color-text-secondary: #6c757d;

  /* 字体 */
  --font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;

  /* 间距 */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 9999px;

  /* 阴影 */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 15px rgba(0, 0, 0, 0.15);

  /* 过渡 */
  --transition-default: all 0.3s ease;
}
```

---

## 八、总结：统一设计原则

1. **紫色品牌为核心** — 所有 NYU 项目使用紫色系作为主视觉
2. **白底灰框** — 内容区域白色背景 + 浅灰边框/阴影，保持干净专业
3. **语义化颜色** — 状态、操作严格遵循红绿蓝黄的语义约定
4. **适度圆角** — 6~8px 为主，避免过度圆润
5. **渐变点缀** — 按钮和导航使用紫色渐变增加层次感
6. **清晰的字号层级** — 标题/正文/辅助文字有明确的大小和粗细区分
7. **响应式优先** — 所有布局支持移动端到大屏的自适应
8. **过渡动画克制** — 0.3s ease 为主，不使用夸张动效
