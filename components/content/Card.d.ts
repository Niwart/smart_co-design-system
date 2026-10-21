/**
 * Flat content block: hairline border on white, or solid primary / secondary fill. No shadow, square corners.
 */
export interface CardProps {
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** inverse = white text on primary; support = neutral-900 on secondary. */
  tone?: 'default' | 'inverse' | 'support';
  /** CSS padding. Default var(--space-5). */
  padding?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;