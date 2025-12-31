"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type FaqItem = {
  question: string
  answer: React.ReactNode
}

type FaqProps = {
  items: FaqItem[]
  className?: string
  itemClassName?: string
  allowMultiple?: boolean
}

export function Faq({
  items,
  className,
  itemClassName,
  allowMultiple = false,
}: FaqProps) {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      const isOpen = next.has(index)

      if (!allowMultiple) {
        next.clear()
      }

      if (!isOpen) {
        next.add(index)
      }

      return next
    })
  }

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <div
            key={`${index}-${item.question}`}
            className={cn(
              "rounded-2xl border border-border/70 bg-white/80 p-4 shadow-sm",
              itemClassName
            )}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold"
            >
              <span>{item.question}</span>
              <span className="text-xl leading-none text-muted-foreground">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200",
                isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden text-sm text-muted-foreground">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
