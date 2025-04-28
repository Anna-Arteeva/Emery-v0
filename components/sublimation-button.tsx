"use client"

import type { ReactNode } from "react"

interface SublimationButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function SublimationButton({ children, onClick, className = "" }: SublimationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sublimation-button relative px-8 py-4 text-base font-medium text-white ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
