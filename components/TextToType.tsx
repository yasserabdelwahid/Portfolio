"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface TextToTypeProps {
  text: string
  typingSpeed?: number
  className?: string
}

export const TextToType: React.FC<TextToTypeProps> = ({ text, typingSpeed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, typingSpeed])

  return <span className={className}>{displayedText}</span>
}
