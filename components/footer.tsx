"use client"

import { Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Image src="/emery-logo.svg" alt="Emery Logo" width={32} height={32} className="h-8 w-auto" />
          </div>

          <div className="text-sm text-gray-500">
            Copyright 2025 Emery English -{" "}
            <Link href="/privacy" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/emeryenglish.world/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="w-5 h-5 text-gray-700" />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/@emeryenglish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to our YouTube channel"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Youtube className="w-5 h-5 text-gray-700" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
