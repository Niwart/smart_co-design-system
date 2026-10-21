import React from 'react';
export function Overline({ children, onInverse = false, style }) {
  return <div style={{ font:'var(--type-overline)', letterSpacing:'var(--ls-overline)', textTransform:'uppercase', color: onInverse ? 'var(--white)' : 'var(--text-highlight)', ...style }}>{children}</div>;
}