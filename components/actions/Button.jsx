import React from 'react';
const SZ = { sm:{p:'6px 12px',f:14}, md:{p:'10px 18px',f:16}, lg:{p:'14px 24px',f:18} };
const V = {
  primary:{ bg:'var(--primary)', fg:'var(--white)', bd:'var(--primary)', hbg:'var(--white)', hfg:'var(--primary)', hbd:'var(--primary)' },
  secondary:{ bg:'var(--white)', fg:'var(--primary)', bd:'var(--primary)', hbg:'var(--primary)', hfg:'var(--white)', hbd:'var(--primary)' },
  accent:{ bg:'var(--accent-1)', fg:'var(--neutral-900)', bd:'var(--accent-1)', hbg:'var(--accent-1)', hfg:'var(--neutral-900)', hbd:'var(--neutral-900)' },
  'accent-2':{ bg:'var(--accent-2)', fg:'var(--neutral-900)', bd:'var(--accent-2)', hbg:'var(--accent-2)', hfg:'var(--neutral-900)', hbd:'var(--neutral-900)' },
  inverse:{ bg:'var(--white)', fg:'var(--primary)', bd:'var(--white)', hbg:'var(--primary)', hfg:'var(--white)', hbd:'var(--white)' },
  ghost:{ bg:'transparent', fg:'var(--primary)', bd:'transparent', hbg:'transparent', hfg:'var(--neutral-900)', hbd:'transparent' },
};
export function Button({ children, variant = 'primary', size = 'md', disabled = false, icon, iconRight, onClick, type = 'button', style }) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  const v = V[variant] || V.primary, s = SZ[size] || SZ.md;
  const on = h && !disabled;
  return <button type={type} disabled={disabled} onClick={onClick}
    onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setA(false); }} onMouseDown={() => setA(true)} onMouseUp={() => setA(false)}
    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:s.p, font:`var(--weight-semibold) ${s.f}px/1.2 var(--font-body)`, borderRadius:'var(--radius-default)', border:`var(--border-width-strong) solid ${disabled ? 'var(--neutral-200)' : on ? v.hbd : v.bd}`, background: disabled ? 'var(--neutral-200)' : on ? v.hbg : v.bg, color: disabled ? 'var(--neutral-700)' : on ? v.hfg : v.fg, cursor: disabled ? 'not-allowed' : 'pointer', textDecoration: variant==='ghost' && on ? 'underline' : 'none', textUnderlineOffset:3, transform: a && !disabled ? 'translateY(1px)' : 'none', transition:'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)', ...style }}>
    {icon}{children}{iconRight}
  </button>;
}