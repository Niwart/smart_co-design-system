/**
 * Flat, square-cornered button. Hover inverts fill (no shadows, no opacity).
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** accent / accent-2 = the layout's single CTA highlight. inverse = on primary backgrounds. */
  variant?: 'primary' | 'secondary' | 'accent' | 'accent-2' | 'inverse' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;