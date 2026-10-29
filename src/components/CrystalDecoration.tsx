import React from 'react';

export interface CrystalDecorationProps {
  variant?: 'flower' | 'cluster' | 'geode' | 'shard' | 'prism';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  glow?: boolean;
  animate?: boolean;
  opacity?: number;
}

export const CrystalDecoration: React.FC<CrystalDecorationProps> = ({
  variant = 'flower',
  size = 'md',
  className = '',
  glow = true,
  animate = true,
  opacity = 0.85
}) => {
  // Size classes
  const sizeMap = {
    sm: 'w-28 h-28 sm:w-36 sm:h-36',
    md: 'w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64',
    lg: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
    xl: 'w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px]'
  };

  const animationClass = animate ? 'animate-[pulse_8s_ease-in-out_infinite]' : '';

  return (
    <div
      className={`pointer-events-none select-none relative flex items-center justify-center ${sizeMap[size]} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Ambient Radial Glow Behind Crystal */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/25 via-sky-300/35 to-blue-500/20 blur-2xl transform scale-110 pointer-events-none" />
      )}

      {/* Variant: Flower (Layered circular translucent crystal petals) */}
      {variant === 'flower' && (
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-[0_10px_25px_rgba(37,99,235,0.22)] ${animationClass}`}
        >
          <defs>
            <linearGradient id="crystalPetal1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="crystalPetal2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="facetHighlight" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.5" />
            </linearGradient>
            <filter id="glassBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          {/* Outer Layer Petals */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <g key={`outer-${deg}`} transform={`rotate(${deg} 150 150)`}>
              <ellipse
                cx="150"
                cy="60"
                rx="28"
                ry="55"
                fill={i % 2 === 0 ? 'url(#crystalPetal1)' : 'url(#crystalPetal2)'}
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="1.2"
              />
              {/* Internal Refraction Ridge */}
              <path
                d="M150 10 Q142 60 150 115"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          ))}

          {/* Inner Layer Petals */}
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
            <g key={`inner-${deg}`} transform={`rotate(${deg} 150 150)`}>
              <ellipse
                cx="150"
                cy="85"
                rx="20"
                ry="40"
                fill="url(#facetHighlight)"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Central Crystal Core */}
          <circle cx="150" cy="150" r="32" fill="url(#crystalPetal2)" stroke="#ffffff" strokeWidth="2" />
          <circle cx="150" cy="150" r="16" fill="#ffffff" fillOpacity="0.75" />
          <polygon
            points="150,132 165,150 150,168 135,150"
            fill="#38bdf8"
            fillOpacity="0.8"
            stroke="#ffffff"
            strokeWidth="1"
          />
        </svg>
      )}

      {/* Variant: Cluster (3D faceted crystal prisms and shards) */}
      {variant === 'cluster' && (
        <svg
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-[0_8px_20px_rgba(37,99,235,0.2)] ${animationClass}`}
        >
          <defs>
            <linearGradient id="clusterGradA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="clusterGradB" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="facetShine" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Central Large Obelisk Crystal */}
          <polygon
            points="120,20 148,80 142,190 120,210 98,190 92,80"
            fill="url(#clusterGradA)"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.5"
          />
          {/* Main Facet Lines */}
          <polygon
            points="120,20 148,80 120,105 92,80"
            fill="url(#clusterGradB)"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.2"
          />
          <polygon
            points="120,105 148,80 142,190 120,210"
            fill="url(#facetShine)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
          />

          {/* Left Angled Crystal */}
          <polygon
            points="70,60 92,100 85,185 62,170 48,110"
            fill="url(#clusterGradB)"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
          />
          <polygon
            points="70,60 92,100 75,120 48,110"
            fill="url(#facetShine)"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1"
          />

          {/* Right Angled Crystal */}
          <polygon
            points="175,70 195,120 180,185 152,175 148,105"
            fill="url(#clusterGradA)"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
          />
          <polygon
            points="175,70 195,120 170,125 148,105"
            fill="url(#clusterGradB)"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1"
          />

          {/* Foreground Diamond Shard */}
          <polygon
            points="120,130 145,170 120,225 95,170"
            fill="url(#clusterGradA)"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {/* Variant: Geode / Half-Flower Crescent */}
      {variant === 'geode' && (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-[0_8px_20px_rgba(37,99,235,0.2)] ${animationClass}`}
        >
          <defs>
            <linearGradient id="geodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="geodeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {[0, 24, 48, 72, 96, 120, 144, 168, 192].map((deg) => (
            <g key={`geode-${deg}`} transform={`rotate(${deg} 100 100)`}>
              <path
                d="M100 25 C115 50 120 85 100 100 C80 85 85 50 100 25 Z"
                fill="url(#geodeGrad1)"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="1.2"
              />
              <path
                d="M100 25 L100 100"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1"
              />
            </g>
          ))}
          <circle cx="100" cy="100" r="18" fill="url(#geodeGrad2)" stroke="#ffffff" strokeWidth="2" />
        </svg>
      )}

      {/* Variant: Prism (Geometric single floating diamond shard with intense facets) */}
      {variant === 'prism' && (
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-[0_6px_16px_rgba(37,99,235,0.25)] ${animationClass}`}
        >
          <defs>
            <linearGradient id="prismA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="prismB" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          <polygon points="80,15 130,65 80,145 30,65" fill="url(#prismA)" stroke="#ffffff" strokeWidth="1.5" />
          <polygon points="80,15 130,65 80,85" fill="url(#prismB)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
          <polygon points="80,15 30,65 80,85" fill="#ffffff" fillOpacity="0.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
          <polygon points="80,85 130,65 80,145" fill="url(#prismA)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          <polygon points="80,85 30,65 80,145" fill="url(#prismB)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
        </svg>
      )}

      {/* Variant: Shard (Pair of floating crystal shards with light caustics) */}
      {variant === 'shard' && (
        <svg
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-[0_8px_18px_rgba(56,189,248,0.25)] ${animationClass}`}
        >
          <defs>
            <linearGradient id="shardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          <g transform="rotate(-15 70 70)">
            <polygon points="70,10 95,55 80,120 50,110 40,55" fill="url(#shardGrad)" stroke="#ffffff" strokeWidth="1.2" />
            <line x1="70" y1="10" x2="65" y2="115" stroke="#ffffff" strokeWidth="1.2" />
          </g>
          <g transform="rotate(25 125 110)">
            <polygon points="125,50 145,85 135,140 110,135 105,85" fill="url(#shardGrad)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
            <line x1="125" y1="50" x2="122" y2="138" stroke="#ffffff" strokeWidth="1" />
          </g>
        </svg>
      )}
    </div>
  );
};
