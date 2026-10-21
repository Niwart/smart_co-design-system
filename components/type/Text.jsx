import React from 'react';
const F = { body:'var(--type-body)', 'body-strong':'var(--type-body-strong)', caption:'var(--type-caption)' };
export function Text({ variant = 'body', as = 'p', children, onInverse = false, style }) {
  const Tag = as;
  const color = onInverse ? 'var(--text-on-inverse)' : variant === 'body-strong' ? 'var(--text-heading)' : 'var(--text-body)';
  return <Tag style={{ font: F[variant] || F.body, letterSpacing: variant === 'caption' ? 'var(--ls-caption)' : 0, color, margin:0, textAlign:'left', textWrap:'pretty', ...style }}>{children}</Tag>;
}