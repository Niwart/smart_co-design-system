/** Key metric in the number role, with optional caption label. */
export interface KeyNumberProps {
  /** e.g. "12.4M", "+38%". Units in caps (M, K, BN). */
  value: string;
  label?: string;
  /** accent-1 clamps to >=24px, accent-2 to >=48px. Use one accent per layout. */
  tone?: 'neutral' | 'primary' | 'accent-1' | 'accent-2';
  /** Font size px. Default 50. */
  size?: number;
  /** White on primary (accents forbidden there). */
  onInverse?: boolean;
  style?: React.CSSProperties;
}
export declare function KeyNumber(props: KeyNumberProps): JSX.Element;