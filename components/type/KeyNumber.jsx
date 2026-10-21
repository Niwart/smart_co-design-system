import React from 'react';
const MIN = { 'accent-1':24, 'accent-2':48 };
export function KeyNumber({ value, label, tone = 'neutral', size = 50, onInverse = false, style }) {
  let t = onInverse ? 'inverse' : tone;
  let s = size;
  if (MIN[t] && s < MIN[t]) s = MIN[t];
  const color = t === 'inverse' ? 'var(--white)' : t === 'accent-1' ? 'var(--text-number-accent-1)' : t === 'accent-2' ? 'var(--text-number-accent-2)' : t === 'primary' ? 'var(--primary)' : 'var(--text-heading)';
  return <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-2)', ...style }}>
    <div style={{ font:`var(--weight-bold) ${s}px/var(--lh-number) var(--font-heading)`, letterSpacing:'var(--ls-number)', color, fontVariantNumeric:'tabular-nums' }}>{value}</div>
    {label && <div style={{ font:'var(--type-caption)', letterSpacing:'var(--ls-caption)', color: onInverse ? 'var(--white)' : 'var(--text-caption)' }}>{label}</div>}
  </div>;
}