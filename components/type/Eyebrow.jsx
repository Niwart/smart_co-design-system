import React from 'react';
export function Eyebrow({ children, boxed = false, style }) {
  return <div style={{ font:'var(--type-eyebrow)', textTransform:'uppercase', color: boxed ? 'var(--eyebrow-box-fg)' : 'var(--text-body)', background: boxed ? 'var(--eyebrow-box-bg)' : 'transparent', padding: boxed ? '2px 8px' : 0, alignSelf:'flex-start', display:'inline-block', ...style }}>{children}</div>;
}