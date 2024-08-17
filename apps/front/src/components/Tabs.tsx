import { Tabs as UITabs } from "#/components/ui/tabs"
import React from "react"
import { TabsVariantProps } from "styled-system/recipes"

export type Tab = {
  id: string,
  label: string,
  content: React.ReactNode
}

type Props = {
  tabs: Tab[]
  defaultTabId?: string,
  variant?: TabsVariantProps['variant']
  size?: TabsVariantProps['size']
}

export const Tabs:React.FC<Props> = ({ tabs, defaultTabId, ...props }) => {
  return (
    <UITabs.Root defaultValue={defaultTabId} {...props}>
      <UITabs.List>
        {tabs.map((tab) => 
          <UITabs.Trigger key={tab.id} value={tab.id}>
            {tab.label}
          </UITabs.Trigger>
        )}
        <UITabs.Indicator />
      </UITabs.List>
      {tabs.map((tab) => <UITabs.Content key={tab.id} value={tab.id}>{tab.content}</UITabs.Content>)}
    </UITabs.Root>
  )
}