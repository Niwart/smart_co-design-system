import React from 'react';
const T = { default:['var(--surface-page)','var(--border-default)',false], inverse:['var(--surface-inverse)','var(--surface-inverse)',true], support:['var(--surface-support)','var(--surface-support)',false] };
export function Card({ eyebrow, title, children, footer, tone = 'default', padding = 'var(--space-5)', style }) {
  const [bg, bd, inv] = T[tone] || T.default;
  return <div style={{ background:bg, border:`1px solid ${bd}`, borderRadius:'var(--radius-default)', padding, display:'flex', flexDirection:'column', gap:'var(--space-3)', color: inv ? 'var(--white)' : 'var(--text-body)', ...style }}>
    {eyebrow && <div style={{ font:'var(--type-eyebrow)', textTransform:'uppercase', color: inv ? 'var(--white)' : 'var(--text-body)' }}>{eyebrow}</div>}
    {title && <div style={{ font:'var(--type-h2)', color: inv ? 'var(--white)' : 'var(--text-heading)' }}>{title}</div>}
    {children && <div style={{ font:'var(--type-body)' }}>{children}</div>}
    {footer && <div style={{ marginTop:'var(--space-2)', paddingTop:'var(--space-3)', borderTop:`1px solid ${inv ? 'var(--white)' : 'var(--border-default)'}` }}>{footer}</div>}
  </div>;
}