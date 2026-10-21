import React from 'react';
export function DataTable({ columns, rows, caption, style }) {
  const cell = (c, head) => ({ padding:'10px 12px', textAlign: c.align || (c.numeric ? 'right' : 'left'), borderBottom:`1px solid var(--border-table)`, font: head ? 'var(--type-body-strong)' : 'var(--type-body)', color: head ? 'var(--text-heading)' : 'var(--text-body)', fontVariantNumeric:'tabular-nums', whiteSpace: c.numeric ? 'nowrap' : 'normal' });
  return <div style={style}>
    <table style={{ width:'100%', borderCollapse:'collapse', borderTop:'var(--border-width-strong) solid var(--neutral-900)' }}>
      <thead><tr>{columns.map(c => <th key={c.key} style={cell(c, true)}>{c.label}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{columns.map(c => <td key={c.key} style={cell(c, false)}>{r[c.key]}</td>)}</tr>)}</tbody>
    </table>
    {caption && <div style={{ font:'var(--type-caption)', letterSpacing:'var(--ls-caption)', color:'var(--text-caption)', marginTop:'var(--space-2)' }}>{caption}</div>}
  </div>;
}