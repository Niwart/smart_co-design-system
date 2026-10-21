/** Body, body-strong or caption text. Always left-aligned. */
export interface TextProps {
  variant?: 'body' | 'body-strong' | 'caption';
  /** Element to render. Default 'p'. */
  as?: 'p' | 'span' | 'div' | 'li';
  children: React.ReactNode;
  /** White text on primary. */
  onInverse?: boolean;
  style?: React.CSSProperties;
}
export declare function Text(props: TextProps): JSX.Element;