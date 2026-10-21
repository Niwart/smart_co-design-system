/** SmartCo logo (4:1 artwork) with built-in clear space. Never stretch, recolor, rotate or add effects. */
export interface LogoProps {
  /** color on white; white on primary, secondary, or overlaid dark photos. Never on accent-1/accent-2. */
  variant?: 'color' | 'white';
  /** Artwork height in px; clamped to >=30 (120px min width). Default 40. */
  height?: number;
  /** Path prefix to the design-system root, e.g. "../../". Default "". */
  basePath?: string;
  /** Override the full image URL. */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;