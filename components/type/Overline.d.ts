/** Section marker (number or name) at top of a page/slide; also job roles. */
export interface OverlineProps {
  children: React.ReactNode;
  /** White on primary backgrounds. */
  onInverse?: boolean;
  style?: React.CSSProperties;
}
export declare function Overline(props: OverlineProps): JSX.Element;