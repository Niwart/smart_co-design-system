/** Headline in the display / h1 / h2 role, sentence case. */
export interface HeadingProps {
  /** display = hero/cover (max 1 per layout). Default h1. */
  level?: 'display' | 'h1' | 'h2';
  children: React.ReactNode;
  /** Substring of children to render in primary. Ignored on inverse. */
  highlight?: string;
  /** White text on primary background. */
  onInverse?: boolean;
  style?: React.CSSProperties;
}
export declare function Heading(props: HeadingProps): JSX.Element;