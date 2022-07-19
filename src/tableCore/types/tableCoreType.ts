import { ReactNode } from 'react'
import { IColumnOrderModule } from '../store/columnOrder'
import { IColumnVisibleModule } from '../store/columnVisible'
import { IFilteringModule } from '../store/filtering'

export type RowData = {
  id: string | number;
}

export interface ColumnDef {
  id?: string;
  field: string;
  type?: string;
  hide?: boolean;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  flex?: number;
  resizable?: boolean;
  render?: () => ReactNode;
}

export type State<ROW extends RowData = RowData> = {
  data: ROW[];
  columns: ColumnDef[];

  setData: (data: ROW[]) => void;
  setColumns: (columns: ColumnDef[]) => void;

  filtering: IFilteringModule | null;
  columnVisible: IColumnVisibleModule | null;
  columnOrder: IColumnOrderModule | null;
}
