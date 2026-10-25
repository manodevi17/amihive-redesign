import React from 'react'

interface AmiHiveLogoProps {
  className?: string
  variant?: 'light' | 'dark' | 'auto'
  size?: 'sm' | 'md' | 'lg'
}

export const AmiHiveLogo: React.FC<AmiHiveLogoProps> = ({
  className = '',
  variant = 'auto',
  size = 'md',
}) => {
  const isDarkBg = variant === 'light' // means logo is displayed on dark background

  const sizeClasses = {
    sm: { height: 'h-8', iconSize: 'w-8 h-8', fontSize: 'text-base', subSize: 'text-[7px]' },
    md: { height: 'h-10', iconSize: 'w-10 h-10', fontSize: 'text-lg', subSize: 'text-[8.5px]' },
    lg: { height: 'h-12', iconSize: 'w-12 h-12', fontSize: 'text-xl', subSize: 'text-[9.5px]' },
  }[size]

  return (
    <div className={`inline-flex items-center gap-2 font-sans select-none ${className}`}>
      {/* Official Multi-Blade Swirl Emblem */}
      <div className={`relative shrink-0 ${sizeClasses.iconSize}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="swirlBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0056D2" />
              <stop offset="100%" stopColor="#002366" />
            </linearGradient>
            <linearGradient id="swirlCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A4EF" />
              <stop offset="100%" stopColor="#0066FF" />
            </linearGradient>
            <linearGradient id="swirlOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FF3B00" />
            </linearGradient>
            <linearGradient id="swirlRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E00" />
              <stop offset="100%" stopColor="#CC0000" />
            </linearGradient>
          </defs>

          {/* Outer circle track */}
          <circle cx="50" cy="50" r="46" stroke="#0056D2" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.3" />

          {/* Swirling Pinwheel Blades (Blue, Cyan, Orange, Red) */}
          {/* Blade 1: Deep Blue */}
          <path
            d="M50 14 C65 14 82 25 84 44 C81 44 72 38 64 34 C56 30 51 22 50 14 Z"
            fill="url(#swirlBlue1)"
          />
          {/* Blade 2: Cyan / Electric Blue */}
          <path
            d="M86 48 C86 65 75 82 56 86 C56 82 60 72 63 64 C66 56 76 50 86 48 Z"
            fill="url(#swirlCyan)"
          />
          {/* Blade 3: Vivid Orange */}
          <path
            d="M52 86 C35 86 18 75 14 56 C18 56 28 60 36 64 C44 68 49 76 52 86 Z"
            fill="url(#swirlOrange)"
          />
          {/* Blade 4: Fiery Red / Coral */}
          <path
            d="M14 52 C14 35 25 18 44 14 C44 18 40 28 37 36 C34 44 24 50 14 52 Z"
            fill="url(#swirlRed)"
          />

          {/* Core White Circular Hub */}
          <circle cx="50" cy="50" r="16" fill="#FFFFFF" stroke="#0056D2" strokeWidth="2.5" />
          {/* Inner Badge Text "AH" */}
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fill="#0056D2"
            fontSize="14"
            fontWeight="900"
            fontFamily="system-ui, sans-serif"
          >
            Ai
          </text>
        </svg>
      </div>

      {/* Official Rounded Pill Box Typography Container */}
      <div
        className={`flex flex-col justify-center px-3 py-1 rounded-lg border transition-all ${
          isDarkBg
            ? 'bg-slate-900/80 border-slate-700/80'
            : 'bg-[#F2F7FF] border-[#D0E2FF]'
        }`}
      >
        <div className="flex items-baseline leading-tight">
          <span
            className={`font-black tracking-tight ${sizeClasses.fontSize} ${
              isDarkBg ? 'text-white' : 'text-[#003B99]'
            }`}
          >
            Ami
          </span>
          <span className={`font-black tracking-tight ${sizeClasses.fontSize} text-[#FF5500]`}>
            Hive
          </span>
        </div>
        <span
          className={`font-bold tracking-[0.22em] uppercase leading-none mt-0.5 ${
            sizeClasses.subSize
          } ${isDarkBg ? 'text-blue-300' : 'text-[#003B99]'}`}
        >
          SOFTWARE SOLUTIONS
        </span>
      </div>
    </div>
  )
}
