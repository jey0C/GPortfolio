import React from 'react';

interface GioLogoProps {
  className?: string;
}

const GioLogo: React.FC<GioLogoProps> = ({ className = "h-8" }) => {
  // Design Constants matching IntroAnimation
  const strokeWidth = 38; 
  const radius = 32;      
  const centerY = 75;     
  const xHeightTop = centerY - radius; 
  const baseline = centerY + radius;   
  
  // Positions
  const g_center_x = 95;
  const i_x = 160;
  const o_center_x = 225;

  // Colors
  const colors = {
    g: '#3b82f6', // blue-500
    i: '#ec4899', // pink-500
    o: '#10b981', // emerald-500
  };

  // Helper to generate circle path data (starts top, goes clockwise)
  const getCirclePath = (cx: number, cy: number, r: number) => {
    return `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`;
  };

  // Path Definitions
  const gCirclePath = getCirclePath(g_center_x, centerY, radius);
  const gTailPath = `M ${g_center_x + radius} ${xHeightTop} L ${g_center_x + radius} ${baseline + 10} A ${radius} ${radius} 0 0 1 ${g_center_x} ${baseline + radius + 10}`;
  const iStemPath = `M ${i_x} ${xHeightTop} L ${i_x} ${baseline}`;
  const oCirclePath = getCirclePath(o_center_x, centerY, radius);

  return (
    <svg viewBox="0 -20 320 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Gio Logo">
      <g>
        <path d={gCirclePath} stroke={colors.g} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d={gTailPath} stroke={colors.g} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      <g>
        <path d={iStemPath} stroke={colors.i} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx={i_x} cy={xHeightTop - radius} r={strokeWidth / 2} fill={colors.i} />
      </g>

      <g>
        <path d={oCirclePath} stroke={colors.o} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
};

export default GioLogo;