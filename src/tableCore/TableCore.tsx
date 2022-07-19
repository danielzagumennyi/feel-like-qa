
import { AgGridReact } from 'ag-grid-react'
import { useEffect } from 'react'
import { TableCoreRoot } from './components/TableCoreRoot'
import { Provider, createStore, useStore } from './store/store'
import { ColumnDef, RowData } from './types/tableCoreType'

export const TableCore = <ROW extends RowData>(props: { columns: ColumnDef[], data: ROW[] }) => {
  return (
    <Provider createStore={createStore}>
      <UpdateData {...props} />
    </Provider>
  )
}

const UpdateData = <ROW extends RowData>({ columns, data }: { columns: ColumnDef[], data: ROW[] }) => {
  const { setColumns, setData } = useStore()

  useEffect(() => {
    setColumns(columns)
  }, [columns])

  useEffect(() => {
    setData(data)
  }, [data])

  return <div>
    <TableCoreRoot />
    <AgGridReact />
  </div>
}
