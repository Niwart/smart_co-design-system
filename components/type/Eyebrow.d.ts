/** Short ALL CAPS label directly above a headline (max 3 words). */
export interface EyebrowProps {
  children: React.ReactNode;
  /** White text in a primary box — use above display headlines. */
  boxed?: boolean;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;