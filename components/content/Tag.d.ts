/** Small sentence-case label for categories, filters, statuses. */
export interface TagProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'primary' | 'support' | 'outline';
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;