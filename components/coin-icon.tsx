import { Coins } from "lucide-react"

interface CoinIconProps {
  count: number
  className?: string
}

export function CoinIcon({ count, className = "" }: CoinIconProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
          <Coins className="w-4 h-4 text-yellow-600" />
        </div>
      ))}
    </div>
  )
}
