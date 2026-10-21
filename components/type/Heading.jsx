import React from 'react';
const MAP = { display:['h1','var(--type-display)'], h1:['h1','var(--type-h1)'], h2:['h2','var(--type-h2)'] };
export function Heading({ level = 'h1', children, highlight, onInverse = false, style }) {
  const [Tag, font] = MAP[level] || MAP.h1;
  let content = children;
  if (highlight && typeof children === 'string' && !onInverse) {
    const i = children.indexOf(highlight);
    if (i >= 0) content = <>{children.slice(0,i)}<span style={{ color:'var(--text-highlight)' }}>{highlight}</span>{children.slice(i+highlight.length)}</>;
  }
  return <Tag style={{ font, color: onInverse ? 'var(--text-on-inverse)' : 'var(--text-heading)', margin:0, textWrap:'balance', ...style }}>{content}</Tag>;
}