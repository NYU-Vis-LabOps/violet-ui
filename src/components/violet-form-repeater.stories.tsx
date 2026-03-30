import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VioletFormRepeater } from "./violet-form-repeater"
import { VioletInput } from "./violet-input"
import { VioletSelect, VioletSelectTrigger, VioletSelectValue, VioletSelectContent, VioletSelectItem } from "./violet-select"
import { VioletLabel } from "./violet-label"

const meta: Meta = {
  title: "Components/VioletFormRepeater",
}

export default meta
type Story = StoryObj

interface SimpleRow {
  name: string
}

export const SimpleInputs: Story = {
  render: () => {
    const [rows, setRows] = useState<SimpleRow[]>([{ name: "" }])
    return (
      <div className="w-96">
        <VioletLabel className="mb-2 block">Attendee names</VioletLabel>
        <VioletFormRepeater
          value={rows}
          onChange={setRows}
          defaultRow={{ name: "" }}
          addLabel="Add attendee"
        >
          {(row, index, actions) => (
            <VioletInput
              placeholder={`Attendee ${index + 1}`}
              value={row.name}
              onChange={(e) =>
                actions.updateRow(index, { ...row, name: e.target.value })
              }
            />
          )}
        </VioletFormRepeater>
      </div>
    )
  },
}

interface AccessRow {
  room: string
  role: string
}

export const WithInputAndSelect: Story = {
  render: () => {
    const [rows, setRows] = useState<AccessRow[]>([
      { room: "", role: "" },
    ])
    return (
      <div className="w-[520px]">
        <VioletLabel className="mb-2 block">Room access</VioletLabel>
        <VioletFormRepeater
          value={rows}
          onChange={setRows}
          defaultRow={{ room: "", role: "" }}
          addLabel="Add room"
        >
          {(row, index, actions) => (
            <div className="flex gap-2">
              <VioletInput
                placeholder="Room number"
                value={row.room}
                className="flex-1"
                onChange={(e) =>
                  actions.updateRow(index, { ...row, room: e.target.value })
                }
              />
              <VioletSelect
                value={row.role}
                onValueChange={(v) =>
                  actions.updateRow(index, { ...row, role: v })
                }
              >
                <VioletSelectTrigger className="w-40">
                  <VioletSelectValue placeholder="Access level" />
                </VioletSelectTrigger>
                <VioletSelectContent>
                  <VioletSelectItem value="read">Read</VioletSelectItem>
                  <VioletSelectItem value="write">Write</VioletSelectItem>
                  <VioletSelectItem value="admin">Admin</VioletSelectItem>
                </VioletSelectContent>
              </VioletSelect>
            </div>
          )}
        </VioletFormRepeater>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [rows, setRows] = useState([
      { email: "alice@nyu.edu" },
      { email: "bob@nyu.edu" },
    ])
    return (
      <div className="w-96">
        <div className="mb-2 flex items-center justify-between">
          <VioletLabel>Collaborators ({rows.length})</VioletLabel>
        </div>
        <VioletFormRepeater
          value={rows}
          onChange={setRows}
          defaultRow={{ email: "" }}
          addLabel="Add collaborator"
          maxRows={5}
        >
          {(row, index, actions) => (
            <VioletInput
              placeholder="Email address"
              type="email"
              value={row.email}
              onChange={(e) =>
                actions.updateRow(index, { email: e.target.value })
              }
            />
          )}
        </VioletFormRepeater>
        <p className="mt-2 text-xs text-muted-foreground">Max 5 collaborators</p>
      </div>
    )
  },
}

export const BulkSubmission: Story = {
  render: () => {
    const [rows, setRows] = useState([
      { building: "", room: "", justification: "" },
    ])
    return (
      <div className="w-full max-w-2xl">
        <VioletLabel className="mb-2 block">Bulk room access request</VioletLabel>
        <VioletFormRepeater
          value={rows}
          onChange={setRows}
          defaultRow={{ building: "", room: "", justification: "" }}
          addLabel="Add another room"
        >
          {(row, index, actions) => (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <VioletInput
                  placeholder="Building"
                  value={row.building}
                  className="flex-1"
                  onChange={(e) =>
                    actions.updateRow(index, {
                      ...row,
                      building: e.target.value,
                    })
                  }
                />
                <VioletInput
                  placeholder="Room"
                  value={row.room}
                  className="w-32"
                  onChange={(e) =>
                    actions.updateRow(index, { ...row, room: e.target.value })
                  }
                />
              </div>
              <VioletInput
                placeholder="Justification"
                value={row.justification}
                onChange={(e) =>
                  actions.updateRow(index, {
                    ...row,
                    justification: e.target.value,
                  })
                }
              />
            </div>
          )}
        </VioletFormRepeater>
      </div>
    )
  },
}
