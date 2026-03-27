# NYU UI Registry — shadcn 自定义组件库规格文档

> 目标：构建一个基于 shadcn/ui 的 NYU 品牌组件注册表，其他项目通过 `shadcn add` 命令直接安装主题和组件。

---

## 一、项目结构

```
nyu-ui/
├── package.json
├── registry.ts              # registry 构建配置（定义所有条目）
├── registry/
│   └── index.json           # 构建产物：条目索引
├── public/r/                # 构建产物：每个条目的 JSON 文件（部署用）
│   ├── styles/
│   │   └── nyu-theme.json
│   ├── ui/
│   │   ├── nyu-button.json
│   │   ├── nyu-card.json
│   │   ├── nyu-badge.json
│   │   ├── nyu-navbar.json
│   │   ├── nyu-modal.json
│   │   ├── nyu-table.json
│   │   ├── nyu-input.json
│   │   └── nyu-status-badge.json
│   ├── hook/
│   │   └── use-esc-close.json
│   └── lib/
│       └── nyu-utils.json
├── src/
│   ├── components/          # 组件源码
│   │   ├── nyu-button.tsx
│   │   ├── nyu-card.tsx
│   │   ├── nyu-badge.tsx
│   │   ├── nyu-navbar.tsx
│   │   ├── nyu-modal.tsx
│   │   ├── nyu-table.tsx
│   │   ├── nyu-input.tsx
│   │   └── nyu-status-badge.tsx
│   ├── hooks/
│   │   └── use-esc-close.ts
│   └── lib/
│       └── utils.ts         # cn() 等工具函数
├── styles/
│   └── nyu-theme.css        # 主题 CSS Variables
├── tailwind.preset.ts       # Tailwind preset（品牌色、字体等）
└── scripts/
    └── build-registry.ts    # 构建脚本：源码 → JSON registry
```

---

## 二、Registry JSON 格式

### 2.1 条目索引 (`public/r/index.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "nyu-ui",
  "homepage": "https://github.com/your-org/nyu-ui",
  "items": [
    {
      "name": "nyu-theme",
      "type": "registry:style",
      "description": "NYU 品牌主题（色板、字体、CSS 变量）"
    },
    {
      "name": "nyu-button",
      "type": "registry:ui",
      "description": "NYU 品牌按钮（Primary/Secondary/Danger/Ghost 变体）"
    },
    {
      "name": "nyu-card",
      "type": "registry:ui",
      "description": "NYU 卡片组件（支持左侧彩色边框）"
    },
    {
      "name": "nyu-badge",
      "type": "registry:ui",
      "description": "NYU 徽章/标签组件"
    },
    {
      "name": "nyu-status-badge",
      "type": "registry:ui",
      "description": "NYU 状态徽章（未开始/进行中/已完成等语义色）"
    },
    {
      "name": "nyu-navbar",
      "type": "registry:ui",
      "description": "NYU 顶部导航栏（紫色品牌、毛玻璃、响应式汉堡菜单）"
    },
    {
      "name": "nyu-modal",
      "type": "registry:ui",
      "description": "NYU 模态对话框"
    },
    {
      "name": "nyu-table",
      "type": "registry:ui",
      "description": "NYU 数据表格"
    },
    {
      "name": "nyu-input",
      "type": "registry:ui",
      "description": "NYU 表单输入框"
    }
  ]
}
```

### 2.2 单个条目格式示例 (`public/r/ui/nyu-button.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "nyu-button",
  "type": "registry:ui",
  "title": "NYU Button",
  "description": "NYU 品牌按钮组件",
  "dependencies": ["class-variance-authority", "@radix-ui/react-slot"],
  "registryDependencies": ["nyu-theme"],
  "files": [
    {
      "path": "ui/nyu-button.tsx",
      "type": "registry:ui",
      "content": "... 组件源码（构建时注入）..."
    }
  ],
  "tailwind": {
    "config": {
      "theme": {
        "extend": {}
      }
    }
  },
  "cssVars": {}
}
```

### 2.3 主题条目格式 (`public/r/styles/nyu-theme.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "nyu-theme",
  "type": "registry:style",
  "title": "NYU Theme",
  "description": "NYU 品牌主题配置",
  "dependencies": [],
  "files": [
    {
      "path": "styles/nyu-theme.css",
      "type": "registry:style",
      "content": "... CSS 变量内容 ..."
    }
  ],
  "cssVars": {
    "light": {
      "primary": "270 90% 29%",
      "primary-foreground": "0 0% 100%",
      "secondary": "270 45% 52%",
      "secondary-foreground": "0 0% 100%",
      "accent": "280 30% 64%",
      "accent-foreground": "0 0% 100%",
      "background": "220 14% 96%",
      "foreground": "0 0% 20%",
      "card": "0 0% 100%",
      "card-foreground": "0 0% 20%",
      "border": "220 13% 91%",
      "muted": "220 14% 96%",
      "muted-foreground": "215 14% 46%",
      "destructive": "354 70% 54%",
      "destructive-foreground": "0 0% 100%",
      "success": "134 61% 41%",
      "success-foreground": "0 0% 100%",
      "warning": "45 100% 51%",
      "warning-foreground": "0 0% 20%",
      "info": "211 100% 50%",
      "info-foreground": "0 0% 100%",
      "ring": "270 90% 29%",
      "radius": "0.375rem"
    },
    "dark": {
      "primary": "275 60% 65%",
      "primary-foreground": "270 90% 10%",
      "secondary": "270 30% 40%",
      "secondary-foreground": "0 0% 100%",
      "accent": "280 25% 50%",
      "accent-foreground": "0 0% 100%",
      "background": "270 10% 8%",
      "foreground": "0 0% 95%",
      "card": "270 10% 12%",
      "card-foreground": "0 0% 95%",
      "border": "270 10% 20%",
      "muted": "270 10% 15%",
      "muted-foreground": "270 5% 60%",
      "destructive": "354 70% 54%",
      "destructive-foreground": "0 0% 100%",
      "success": "134 61% 41%",
      "success-foreground": "0 0% 100%",
      "warning": "45 100% 51%",
      "warning-foreground": "0 0% 20%",
      "info": "211 100% 60%",
      "info-foreground": "0 0% 100%",
      "ring": "275 60% 65%",
      "radius": "0.375rem"
    }
  },
  "tailwind": {
    "config": {
      "theme": {
        "extend": {
          "colors": {
            "nyu-purple": "#57068c",
            "nyu-purple-hover": "#702b9d",
            "nyu-purple-light": "#ab82c5",
            "nyu-purple-lighter": "#eee6f3",
            "nyu-purple-dark": "#2d0051"
          },
          "fontFamily": {
            "sans": ["Inter", "Helvetica", "Arial", "sans-serif"]
          }
        }
      }
    }
  }
}
```

> **注意**：shadcn 的 cssVars 使用 HSL 值（不含 `hsl()` 包裹），格式为 `"H S% L%"`。
> 原始 hex 到 HSL 的映射见下方第三节。

---

## 三、色值映射参考（Hex → HSL）

| 用途 | Hex | HSL (shadcn 格式) |
|------|-----|-------------------|
| primary (NYU Purple) | `#57068c` | `275 90% 29%` |
| primary-hover | `#702b9d` | `272 57% 39%` |
| accent (Light Purple) | `#ab82c5` | `275 33% 64%` |
| accent-lighter | `#eee6f3` | `277 33% 93%` |
| primary-dark | `#2d0051` | `274 100% 16%` |
| destructive | `#dc3545` | `354 70% 54%` |
| success | `#28a745` | `134 61% 41%` |
| warning | `#ffc107` | `45 100% 51%` |
| info | `#007bff` | `211 100% 50%` |
| text-primary | `#333333` | `0 0% 20%` |
| text-secondary | `#6c757d` | `210 7% 46%` |
| border | `#e5e7eb` | `220 13% 91%` |
| bg-page | `#f3f4f6` | `220 14% 96%` |

---

## 四、核心组件规格

### 4.1 NYU Button (`nyu-button.tsx`)

基于 shadcn Button 扩展，使用 `class-variance-authority`。

**变体 (variants)：**

| variant | 样式说明 |
|---------|---------|
| `default` | 紫色渐变背景 (`primary` → `primary-hover`)，白字 |
| `secondary` | 浅灰背景，深色文字 |
| `destructive` | 红色渐变背景，白字 |
| `ghost` | 透明背景，紫色文字，hover 显示浅紫底 |
| `outline` | 紫色边框，透明背景，紫色文字 |
| `link` | 无背景无边框，紫色文字+下划线 |

**尺寸 (sizes)：**

| size | padding | font-size | height |
|------|---------|-----------|--------|
| `sm` | `px-3 py-1.5` | `text-sm` | `h-8` |
| `default` | `px-4 py-2` | `text-sm` | `h-10` |
| `lg` | `px-6 py-3` | `text-base` | `h-12` |
| `icon` | `p-2` | — | `h-10 w-10` |
| `pill` | `px-4 py-1.5 rounded-full` | `text-sm` | auto |

**交互状态：**
- hover: `scale(1.02)` + 背景亮度变化
- active: `scale(0.98)`
- focus-visible: `ring-2 ring-ring ring-offset-2`
- disabled: `opacity-50 pointer-events-none`
- transition: `all 0.2s ease`

### 4.2 NYU Card (`nyu-card.tsx`)

基于 shadcn Card 扩展。

**变体：**

| variant | 样式 |
|---------|------|
| `default` | 白底 + 浅灰边框 + `shadow-sm` |
| `bordered` | 白底 + 左侧 4px 彩色边框（颜色通过 prop 传入） |
| `elevated` | 白底 + `shadow-md`，无边框 |
| `stat` | 紧凑布局，图标 + 数字 + 标签（仪表盘用） |

**子组件：**
- `CardHeader` — 可选浅灰渐变背景
- `CardTitle` — semibold，text-lg
- `CardDescription` — text-muted-foreground
- `CardContent` — 标准 padding
- `CardFooter` — 底部操作区

### 4.3 NYU Badge (`nyu-badge.tsx`)

**变体：**

| variant | 样式 |
|---------|------|
| `default` | 紫色背景白字 |
| `secondary` | 浅灰背景深色字 |
| `success` | 绿色背景白字 |
| `destructive` | 红色背景白字 |
| `warning` | 黄色背景深色字 |
| `info` | 蓝色背景白字 |
| `outline` | 透明背景 + 边框 |

**形状：** 默认 `rounded-full`（药丸形）

### 4.4 NYU Status Badge (`nyu-status-badge.tsx`)

专门用于任务/项目状态显示的语义化徽章，比通用 Badge 更具业务含义。

**预设状态：**

| status | 标签 | 前景色 | 背景色 |
|--------|------|--------|--------|
| `not-started` | 未开始 | `#6c757d` | `#e9ecef` |
| `in-progress` | 进行中 | `#007bff` | `#e3f2fd` |
| `due-soon` | 即将到期 | `#fd7e14` | `#fff3cd` |
| `overdue` | 已逾期 | `#dc3545` | `#f8d7da` |
| `completed` | 已完成 | `#28a745` | `#d4edda` |

**Props：**
```tsx
interface StatusBadgeProps {
  status: 'not-started' | 'in-progress' | 'due-soon' | 'overdue' | 'completed'
  label?: string  // 自定义标签文字，覆盖默认
  className?: string
}
```

### 4.5 NYU Navbar (`nyu-navbar.tsx`)

**结构：**
```
┌─────────────────────────────────────────────────┐
│ [Logo]  [外部链接...]     [导航链接...] [头像▼] │
└─────────────────────────────────────────────────┘
```

**样式特征：**
- 固定顶部，高度 `h-16` (64px)
- 背景：`bg-primary` + `backdrop-blur-md`（毛玻璃）
- 文字：白色，`uppercase`，`tracking-wide`，`text-xs`
- 移动端：汉堡菜单，全屏紫色渐变面板
- 头像：圆形，`bg-nyu-purple-light`，显示姓名首字母

**Props：**
```tsx
interface NavbarProps {
  logo?: React.ReactNode
  links: { label: string; href: string; external?: boolean }[]
  user?: { name: string; avatar?: string }
  onMenuClick?: () => void
}
```

### 4.6 NYU Modal (`nyu-modal.tsx`)

基于 shadcn Dialog 扩展。

**尺寸：**

| size | max-width |
|------|-----------|
| `sm` | `max-w-md` (28rem) |
| `default` | `max-w-lg` (32rem) |
| `lg` | `max-w-2xl` (42rem) |
| `xl` | `max-w-5xl` (64rem) |
| `full` | `max-w-[95vw] max-h-[90vh]` |

**子组件：** ModalHeader / ModalBody (可滚动) / ModalFooter

### 4.7 NYU Table (`nyu-table.tsx`)

基于 shadcn Table 扩展。

**特性：**
- 白色背景，浅灰表头
- 行 hover 高亮：`hover:bg-muted/50`
- 可选斑马纹：`striped` prop
- 排序图标支持
- 响应式：小屏横向滚动

### 4.8 NYU Input (`nyu-input.tsx`)

基于 shadcn Input 扩展。

**状态样式：**
- 默认：浅灰边框
- 聚焦：`ring-2 ring-primary`（紫色聚焦环）
- 错误：`border-destructive` + 红色错误文字
- 禁用：`opacity-50 bg-muted`

---

## 五、Tailwind Preset (`tailwind.preset.ts`)

随主题一同安装，项目在 `tailwind.config` 中引入即可获得品牌色和字体：

```ts
import type { Config } from 'tailwindcss'

const nyuPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        'nyu-purple': {
          DEFAULT: '#57068c',
          50: '#f6edf9',
          100: '#eee6f3',
          200: '#d4bfe3',
          300: '#ab82c5',
          400: '#7b5aa6',
          500: '#702b9d',
          600: '#57068c',
          700: '#4a0072',
          800: '#2d0051',
          900: '#1a0030',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',  // 6px
      },
      boxShadow: {
        'nyu-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'nyu-md': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'nyu-lg': '0 4px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
}

export default nyuPreset
```

---

## 六、使用方式（消费端）

### 安装主题

```bash
# 安装主题（CSS 变量 + Tailwind preset）
npx shadcn@latest add https://your-host.com/r/styles/nyu-theme.json
```

### 安装组件

```bash
# 单个安装
npx shadcn@latest add https://your-host.com/r/ui/nyu-button.json

# 批量安装
npx shadcn@latest add \
  https://your-host.com/r/ui/nyu-button.json \
  https://your-host.com/r/ui/nyu-card.json \
  https://your-host.com/r/ui/nyu-badge.json
```

### 在代码中使用

```tsx
import { NyuButton } from '@/components/ui/nyu-button'
import { NyuCard, CardHeader, CardTitle, CardContent } from '@/components/ui/nyu-card'
import { NyuStatusBadge } from '@/components/ui/nyu-status-badge'

export function Dashboard() {
  return (
    <NyuCard variant="bordered" borderColor="#28a745">
      <CardHeader>
        <CardTitle>实验室状态</CardTitle>
      </CardHeader>
      <CardContent>
        <NyuStatusBadge status="in-progress" />
        <NyuButton variant="default" size="sm">查看详情</NyuButton>
        <NyuButton variant="ghost" size="sm">取消</NyuButton>
      </CardContent>
    </NyuCard>
  )
}
```

---

## 七、部署 Registry

### 方案 A：GitHub Pages（推荐，免费）

```bash
# 构建 registry JSON
npm run build:registry

# 输出到 public/r/ 目录，推送后通过 GitHub Pages 提供静态访问
# URL: https://your-org.github.io/nyu-ui/r/ui/nyu-button.json
```

### 方案 B：Vercel

项目根目录部署到 Vercel，`public/r/` 自动作为静态文件提供。

### 方案 C：npm 包 + unpkg

发布为 npm 包后，通过 unpkg CDN 访问：
```
https://unpkg.com/@nyu/ui@latest/public/r/ui/nyu-button.json
```

---

## 八、构建脚本逻辑 (`scripts/build-registry.ts`)

核心逻辑：
1. 读取 `src/components/` 下的 `.tsx` 源码
2. 读取 `styles/nyu-theme.css` 主题文件
3. 将源码内容注入到 registry JSON 的 `files[].content` 字段
4. 解析每个组件的 `import` 语句，自动填充 `dependencies` 和 `registryDependencies`
5. 输出到 `public/r/` 目录

可以用 shadcn 官方的 `@shadcn/registry` 包辅助构建，也可以手写脚本。

---

## 九、开发检查清单

### Phase 1：基础设施
- [ ] 初始化项目 (`npm init`, `tsconfig.json`, `tailwind.config.ts`)
- [ ] 创建 Tailwind preset (`tailwind.preset.ts`)
- [ ] 编写主题 CSS Variables (`styles/nyu-theme.css`)
- [ ] 编写构建脚本 (`scripts/build-registry.ts`)
- [ ] 配置 GitHub Pages 或 Vercel 部署

### Phase 2：核心组件
- [ ] `nyu-button` — 6 个变体 + 5 个尺寸
- [ ] `nyu-card` — 4 个变体 + 子组件
- [ ] `nyu-badge` — 7 个变体
- [ ] `nyu-status-badge` — 5 个预设状态
- [ ] `nyu-input` — 基础输入 + 错误/聚焦状态
- [ ] `nyu-modal` — 5 个尺寸

### Phase 3：扩展组件
- [ ] `nyu-navbar` — 响应式导航栏
- [ ] `nyu-table` — 数据表格
- [ ] `nyu-select` — 下拉选择
- [ ] `nyu-accordion` — 手风琴

### Phase 4：文档与测试
- [ ] 每个组件的 Storybook / 演示页面
- [ ] 在新项目中实际测试 `shadcn add` 安装流程
- [ ] README 使用文档

---

## 十、来源参考

- 主题色板来源：`C:\Users\yihui\cowork\UI-Theme-Summary.md`
- vis-app 项目：`C:\Users\yihui\Documents\NYU\vis-app-main`（Next.js + Tailwind + NextUI）
- Main-web-app 项目：`C:\Users\yihui\Documents\GitHub\Main-web-app`（Flask + Bootstrap 5）
- shadcn registry 规范：https://ui.shadcn.com/docs/registry
