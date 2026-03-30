import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  VioletSidebar,
  VioletSidebarSection,
  VioletSidebarItem,
} from "./violet-sidebar"

const meta: Meta<typeof VioletSidebar> = {
  title: "Components/VioletSidebar",
  component: VioletSidebar,
  decorators: [
    (Story) => (
      <div className="h-[500px] border border-border rounded-lg overflow-hidden flex">
        <Story />
        <div className="flex-1 p-5 bg-background text-muted-foreground text-sm">
          Main content area
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VioletSidebar>

const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
    <path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.322291 7.71076C0.0899101 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H5.50002C5.22388 7.99999 5.00002 8.22385 5.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM6.00002 12H9.00002V8.99999H6.00002V12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
)

const FileIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
    <path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
)

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
    <path d="M7.50009 0.877014C3.84241 0.877014 0.877136 3.84229 0.877136 7.49997C0.877136 11.1577 3.84241 14.1229 7.50009 14.1229C11.1578 14.1229 14.1231 11.1577 14.1231 7.49997C14.1231 3.84229 11.1578 0.877014 7.50009 0.877014ZM1.82714 7.49997C1.82714 4.36689 4.36701 1.82701 7.50009 1.82701C10.6332 1.82701 13.1731 4.36689 13.1731 7.49997C13.1731 10.6331 10.6332 13.1729 7.50009 13.1729C4.36701 13.1729 1.82714 10.6331 1.82714 7.49997ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85356L9.14645 9.85356C9.34171 10.0488 9.65829 10.0488 9.85355 9.85356C10.0488 9.6583 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
)

const GearIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-4 w-4">
    <path d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00478L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2356 10.9867C2.02388 11.3225 2.07287 11.7602 2.35362 12.0410L2.95972 12.647C3.24046 12.9278 3.67816 12.9768 4.01403 12.7651L4.92537 12.1906C5.26429 12.377 5.62577 12.5278 6.00466 12.638L6.24275 13.688C6.33053 14.0752 6.67468 14.3501 7.07171 14.3501H7.92885C8.32589 14.3501 8.67003 14.0752 8.75782 13.688L8.99591 12.6379C9.37482 12.5277 9.73627 12.3768 10.0752 12.1904L10.9864 12.7648C11.3223 12.9766 11.76 12.9276 12.0407 12.6468L12.6468 12.0407C12.9276 11.76 12.9766 11.3223 12.7648 10.9864L12.1904 10.0752C12.3768 9.73627 12.5276 9.37482 12.6378 8.99591L13.688 8.75782C14.0752 8.67003 14.35 8.32589 14.35 7.92885V7.07171C14.35 6.67468 14.0752 6.33053 13.688 6.24275L12.6379 6.00466C12.5277 5.62577 12.3769 5.26429 12.1906 4.92537L12.7649 4.01403C12.9767 3.67816 12.9277 3.24046 12.6469 2.95972L12.0408 2.35362C11.7601 2.07287 11.3224 2.02388 10.9865 2.2356L10.0755 2.80979C9.73652 2.62335 9.375 2.47246 8.99603 2.36228L8.75794 1.31209C8.67015 0.924883 8.32601 0.650024 7.92897 0.650024L7.07095 0.650238ZM4.92054 3.29056C5.46229 2.97981 6.07471 2.78122 6.72895 2.72458L7.50002 2.60002L8.27108 2.72458C8.92533 2.78122 9.53774 2.97981 10.0795 3.29056L7.50002 7.50002L4.92054 3.29056ZM7.50002 10.9C6.01667 10.9 4.80002 9.68335 4.80002 8.20001C4.80002 6.71666 6.01667 5.50001 7.50002 5.50001C8.98337 5.50001 10.2 6.71666 10.2 8.20001C10.2 9.68335 8.98337 10.9 7.50002 10.9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
)

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState("dashboard")
    return (
      <VioletSidebar>
        <VioletSidebarSection>
          <VioletSidebarItem
            active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </VioletSidebarItem>
          <VioletSidebarItem
            active={active === "requests"}
            onClick={() => setActive("requests")}
          >
            Requests
          </VioletSidebarItem>
          <VioletSidebarItem
            active={active === "audit"}
            onClick={() => setActive("audit")}
          >
            Audit Log
          </VioletSidebarItem>
          <VioletSidebarItem
            active={active === "settings"}
            onClick={() => setActive("settings")}
          >
            Settings
          </VioletSidebarItem>
        </VioletSidebarSection>
      </VioletSidebar>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [active, setActive] = useState("dashboard")
    return (
      <VioletSidebar>
        <VioletSidebarSection>
          <VioletSidebarItem
            icon={<HomeIcon />}
            active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </VioletSidebarItem>
          <VioletSidebarItem
            icon={<FileIcon />}
            active={active === "requests"}
            onClick={() => setActive("requests")}
          >
            Requests
          </VioletSidebarItem>
          <VioletSidebarItem
            icon={<ClockIcon />}
            active={active === "audit"}
            onClick={() => setActive("audit")}
          >
            Audit Log
          </VioletSidebarItem>
          <VioletSidebarItem
            icon={<GearIcon />}
            active={active === "settings"}
            onClick={() => setActive("settings")}
          >
            Settings
          </VioletSidebarItem>
        </VioletSidebarSection>
      </VioletSidebar>
    )
  },
}

export const MultipleSections: Story = {
  render: () => {
    const [active, setActive] = useState("dashboard")
    return (
      <VioletSidebar>
        <VioletSidebarSection title="Main">
          <VioletSidebarItem
            icon={<HomeIcon />}
            active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </VioletSidebarItem>
          <VioletSidebarItem
            icon={<FileIcon />}
            active={active === "requests"}
            onClick={() => setActive("requests")}
          >
            Requests
          </VioletSidebarItem>
        </VioletSidebarSection>
        <VioletSidebarSection title="Admin">
          <VioletSidebarItem
            icon={<ClockIcon />}
            active={active === "audit"}
            onClick={() => setActive("audit")}
          >
            Audit Log
          </VioletSidebarItem>
          <VioletSidebarItem
            icon={<GearIcon />}
            active={active === "settings"}
            onClick={() => setActive("settings")}
          >
            Settings
          </VioletSidebarItem>
        </VioletSidebarSection>
      </VioletSidebar>
    )
  },
}

export const Collapsed: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
      <VioletSidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
        <VioletSidebarSection>
          <VioletSidebarItem icon={<HomeIcon />}>Dashboard</VioletSidebarItem>
          <VioletSidebarItem icon={<FileIcon />} active>
            Requests
          </VioletSidebarItem>
          <VioletSidebarItem icon={<ClockIcon />}>Audit Log</VioletSidebarItem>
        </VioletSidebarSection>
      </VioletSidebar>
    )
  },
}

export const ActiveItem: Story = {
  render: () => (
    <VioletSidebar>
      <VioletSidebarSection>
        <VioletSidebarItem icon={<HomeIcon />}>Dashboard</VioletSidebarItem>
        <VioletSidebarItem icon={<FileIcon />} active>
          Requests
        </VioletSidebarItem>
        <VioletSidebarItem icon={<ClockIcon />}>Audit Log</VioletSidebarItem>
        <VioletSidebarItem icon={<GearIcon />}>Settings</VioletSidebarItem>
      </VioletSidebarSection>
    </VioletSidebar>
  ),
}
