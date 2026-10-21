import React from 'react';
const T = { neutral:['transparent','var(--text-body)','var(--border-default)'], primary:['var(--primary)','var(--white)','var(--primary)'], support:['var(--secondary)','var(--neutral-900)','var(--secondary)'], outline:['transparent','var(--primary)','var(--primary)'] };
export function Tag({ children, tone = 'neutral', style }) {
  const [bg, fg, bd] = T[tone] || T.neutral;
  return <span style={{ display:'inline-flex', alignItems:'center', padding:'2px 8px', font:'var(--weight-regular) 12px/1.4 var(--font-body)', letterSpacing:'var(--ls-caption)', background:bg, color:fg, border:`1px solid ${bd}`, borderRadius:'var(--radius-default)', whiteSpace:'nowrap', ...style }}>{children}</span>;
}