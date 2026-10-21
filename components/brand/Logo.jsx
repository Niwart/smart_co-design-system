import React from 'react';
export function Logo({ variant = 'color', height = 40, basePath = '', src, alt = 'SmartCo', style }) {
  const h = Math.max(height, 30); // 4:1 artwork → 30px tall = 120px min width
  const url = src || `${basePath}assets/logo-${variant === 'white' ? 'white' : 'color'}.svg`;
  return <span style={{ display:'inline-block', padding: h, lineHeight:0, ...style }}>
    <img src={url} alt={alt} style={{ height: h, width:'auto', display:'block' }} />
  </span>;
}