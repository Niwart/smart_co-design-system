/* @ds-bundle: {"format":4,"namespace":"SmartCoDesignSystem_c8ba95","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Eyebrow","sourcePath":"components/type/Eyebrow.jsx"},{"name":"Heading","sourcePath":"components/type/Heading.jsx"},{"name":"KeyNumber","sourcePath":"components/type/KeyNumber.jsx"},{"name":"Overline","sourcePath":"components/type/Overline.jsx"},{"name":"Text","sourcePath":"components/type/Text.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"24978456f27c","components/brand/Logo.jsx":"7ea38d06610d","components/content/Card.jsx":"deb7e1fa845d","components/content/DataTable.jsx":"040ee7537ecd","components/content/Tag.jsx":"8eb737ae9243","components/type/Eyebrow.jsx":"feffbd7234f0","components/type/Heading.jsx":"3e1dcf59e119","components/type/KeyNumber.jsx":"15d6ced624c7","components/type/Overline.jsx":"ac7821a1ebb0","components/type/Text.jsx":"55ab01640382"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SmartCoDesignSystem_c8ba95 = window.SmartCoDesignSystem_c8ba95 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const SZ = {
  sm: {
    p: '6px 12px',
    f: 14
  },
  md: {
    p: '10px 18px',
    f: 16
  },
  lg: {
    p: '14px 24px',
    f: 18
  }
};
const V = {
  primary: {
    bg: 'var(--primary)',
    fg: 'var(--white)',
    bd: 'var(--primary)',
    hbg: 'var(--white)',
    hfg: 'var(--primary)',
    hbd: 'var(--primary)'
  },
  secondary: {
    bg: 'var(--white)',
    fg: 'var(--primary)',
    bd: 'var(--primary)',
    hbg: 'var(--primary)',
    hfg: 'var(--white)',
    hbd: 'var(--primary)'
  },
  accent: {
    bg: 'var(--accent-1)',
    fg: 'var(--neutral-900)',
    bd: 'var(--accent-1)',
    hbg: 'var(--accent-1)',
    hfg: 'var(--neutral-900)',
    hbd: 'var(--neutral-900)'
  },
  'accent-2': {
    bg: 'var(--accent-2)',
    fg: 'var(--neutral-900)',
    bd: 'var(--accent-2)',
    hbg: 'var(--accent-2)',
    hfg: 'var(--neutral-900)',
    hbd: 'var(--neutral-900)'
  },
  inverse: {
    bg: 'var(--white)',
    fg: 'var(--primary)',
    bd: 'var(--white)',
    hbg: 'var(--primary)',
    hfg: 'var(--white)',
    hbd: 'var(--white)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--primary)',
    bd: 'transparent',
    hbg: 'transparent',
    hfg: 'var(--neutral-900)',
    hbd: 'transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconRight,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  const v = V[variant] || V.primary,
    s = SZ[size] || SZ.md;
  const on = h && !disabled;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: s.p,
      font: `var(--weight-semibold) ${s.f}px/1.2 var(--font-body)`,
      borderRadius: 'var(--radius-default)',
      border: `var(--border-width-strong) solid ${disabled ? 'var(--neutral-200)' : on ? v.hbd : v.bd}`,
      background: disabled ? 'var(--neutral-200)' : on ? v.hbg : v.bg,
      color: disabled ? 'var(--neutral-700)' : on ? v.hfg : v.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: variant === 'ghost' && on ? 'underline' : 'none',
      textUnderlineOffset: 3,
      transform: a && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = 'color',
  height = 40,
  basePath = '',
  src,
  alt = 'SmartCo',
  style
}) {
  const h = Math.max(height, 30); // 4:1 artwork → 30px tall = 120px min width
  const url = src || `${basePath}assets/logo-${variant === 'white' ? 'white' : 'color'}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: h,
      lineHeight: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt,
    style: {
      height: h,
      width: 'auto',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
const T = {
  default: ['var(--surface-page)', 'var(--border-default)', false],
  inverse: ['var(--surface-inverse)', 'var(--surface-inverse)', true],
  support: ['var(--surface-support)', 'var(--surface-support)', false]
};
function Card({
  eyebrow,
  title,
  children,
  footer,
  tone = 'default',
  padding = 'var(--space-5)',
  style
}) {
  const [bg, bd, inv] = T[tone] || T.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: 'var(--radius-default)',
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      color: inv ? 'var(--white)' : 'var(--text-body)',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      color: inv ? 'var(--white)' : 'var(--text-body)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h2)',
      color: inv ? 'var(--white)' : 'var(--text-heading)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-3)',
      borderTop: `1px solid ${inv ? 'var(--white)' : 'var(--border-default)'}`
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
function DataTable({
  columns,
  rows,
  caption,
  style
}) {
  const cell = (c, head) => ({
    padding: '10px 12px',
    textAlign: c.align || (c.numeric ? 'right' : 'left'),
    borderBottom: `1px solid var(--border-table)`,
    font: head ? 'var(--type-body-strong)' : 'var(--type-body)',
    color: head ? 'var(--text-heading)' : 'var(--text-body)',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: c.numeric ? 'nowrap' : 'normal'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      borderTop: 'var(--border-width-strong) solid var(--neutral-900)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: cell(c, true)
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: cell(c, false)
  }, r[c.key])))))), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--ls-caption)',
      color: 'var(--text-caption)',
      marginTop: 'var(--space-2)'
    }
  }, caption));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
const T = {
  neutral: ['transparent', 'var(--text-body)', 'var(--border-default)'],
  primary: ['var(--primary)', 'var(--white)', 'var(--primary)'],
  support: ['var(--secondary)', 'var(--neutral-900)', 'var(--secondary)'],
  outline: ['transparent', 'var(--primary)', 'var(--primary)']
};
function Tag({
  children,
  tone = 'neutral',
  style
}) {
  const [bg, fg, bd] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      font: 'var(--weight-regular) 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--ls-caption)',
      background: bg,
      color: fg,
      border: `1px solid ${bd}`,
      borderRadius: 'var(--radius-default)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/type/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  boxed = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      textTransform: 'uppercase',
      color: boxed ? 'var(--eyebrow-box-fg)' : 'var(--text-body)',
      background: boxed ? 'var(--eyebrow-box-bg)' : 'transparent',
      padding: boxed ? '2px 8px' : 0,
      alignSelf: 'flex-start',
      display: 'inline-block',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/type/Heading.jsx
try { (() => {
const MAP = {
  display: ['h1', 'var(--type-display)'],
  h1: ['h1', 'var(--type-h1)'],
  h2: ['h2', 'var(--type-h2)']
};
function Heading({
  level = 'h1',
  children,
  highlight,
  onInverse = false,
  style
}) {
  const [Tag, font] = MAP[level] || MAP.h1;
  let content = children;
  if (highlight && typeof children === 'string' && !onInverse) {
    const i = children.indexOf(highlight);
    if (i >= 0) content = /*#__PURE__*/React.createElement(React.Fragment, null, children.slice(0, i), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-highlight)'
      }
    }, highlight), children.slice(i + highlight.length));
  }
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      font,
      color: onInverse ? 'var(--text-on-inverse)' : 'var(--text-heading)',
      margin: 0,
      textWrap: 'balance',
      ...style
    }
  }, content);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Heading.jsx", error: String((e && e.message) || e) }); }

// components/type/KeyNumber.jsx
try { (() => {
const MIN = {
  'accent-1': 24,
  'accent-2': 48
};
function KeyNumber({
  value,
  label,
  tone = 'neutral',
  size = 50,
  onInverse = false,
  style
}) {
  let t = onInverse ? 'inverse' : tone;
  let s = size;
  if (MIN[t] && s < MIN[t]) s = MIN[t];
  const color = t === 'inverse' ? 'var(--white)' : t === 'accent-1' ? 'var(--text-number-accent-1)' : t === 'accent-2' ? 'var(--text-number-accent-2)' : t === 'primary' ? 'var(--primary)' : 'var(--text-heading)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--weight-bold) ${s}px/var(--lh-number) var(--font-heading)`,
      letterSpacing: 'var(--ls-number)',
      color,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--ls-caption)',
      color: onInverse ? 'var(--white)' : 'var(--text-caption)'
    }
  }, label));
}
Object.assign(__ds_scope, { KeyNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/KeyNumber.jsx", error: String((e && e.message) || e) }); }

// components/type/Overline.jsx
try { (() => {
function Overline({
  children,
  onInverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: onInverse ? 'var(--white)' : 'var(--text-highlight)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Overline.jsx", error: String((e && e.message) || e) }); }

// components/type/Text.jsx
try { (() => {
const F = {
  body: 'var(--type-body)',
  'body-strong': 'var(--type-body-strong)',
  caption: 'var(--type-caption)'
};
function Text({
  variant = 'body',
  as = 'p',
  children,
  onInverse = false,
  style
}) {
  const Tag = as;
  const color = onInverse ? 'var(--text-on-inverse)' : variant === 'body-strong' ? 'var(--text-heading)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: F[variant] || F.body,
      letterSpacing: variant === 'caption' ? 'var(--ls-caption)' : 0,
      color,
      margin: 0,
      textAlign: 'left',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Text.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.KeyNumber = __ds_scope.KeyNumber;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.Text = __ds_scope.Text;

})();
