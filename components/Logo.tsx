'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const Logo = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className="mr-3">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="82"
        viewBox="0 0 80.000000 82.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,82.000000) scale(0.100000,-0.100000)"
          fill={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? '#FFFFFF' : '#000000'}
          stroke="none"
        >
          <path d="M495 718 c-3 -8 -4 -55 -3 -106 l3 -91 105 99 105 99 -65 1 c-36 0 -82 3 -102 6 -28 5 -39 3 -43 -8z" />
          <path d="M380 610 l-92 -100 96 0 96 0 0 100 c0 55 -2 100 -4 100 -2 0 -45 -45 -96 -100z" />
          <path d="M671 660 c-30 -26 -20 -25 21 0 18 11 26 20 18 20 -8 -1 -26 -10 -39 -20z" />
          <path d="M160 585 l0 -75 48 0 c37 0 53 5 69 23 l21 22 -48 53 c-29 30 -57 52 -69 52 -19 0 -21 -6 -21 -75z" />
          <path d="M115 630 c-18 -19 -17 -20 3 -20 15 0 22 6 22 20 0 11 -2 20 -3 20 -2 0 -12 -9 -22 -20z" />
          <path d="M180 483 c1 -5 47 -57 104 -117 l103 -108 38 103 c21 57 40 110 42 117 4 9 -28 12 -141 12 -80 0 -146 -3 -146 -7z" />
          <path d="M463 405 c-6 -16 -27 -74 -47 -127 l-35 -97 45 -26 c25 -15 48 -25 50 -22 3 2 3 71 2 153 -3 125 -5 144 -15 119z" />
        </g>
      </svg>
    </div>
  )
}
