export interface DataTableColumn {
  key: string;
  label: string;
  /** Right-aligns and keeps tabular figures. */
  numeric?: boolean;
  align?: 'left' | 'right' | 'center';
}
/**
 * Data table: body-strong headers, neutral-200 row lines, tabular numbers.
 * @startingPoint section="Content" subtitle="Branded data table with source caption" viewport="700x300"
 */
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  /** Source / footnote in the caption role. */
  caption?: string;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;