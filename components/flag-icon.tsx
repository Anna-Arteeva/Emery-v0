import Image from "next/image"

interface FlagIconProps {
  country: string
  className?: string
}

const countryFlags: Record<string, string> = {
  British: "/flags/gb.png",
  Irish: "/flags/ie.png",
  American: "/flags/us.png",
  "New Zealand": "/flags/nz.png",
  French: "/flags/fr.png",
  Spanish: "/flags/es.png",
  German: "/flags/de.png",
  Russian: "/flags/ru.png",
}

export function FlagIcon({ country, className = "" }: FlagIconProps) {
  const flagSrc = countryFlags[country] || "/flags/globe.png"

  return (
    <div className={`w-5 h-5 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 ${className}`}>
      <Image
        src={flagSrc || "/placeholder.svg"}
        alt={`${country} flag`}
        width={20}
        height={20}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
