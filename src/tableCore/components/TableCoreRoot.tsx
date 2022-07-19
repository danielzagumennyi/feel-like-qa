import { useMemo } from 'react'
import styled from 'styled-components'
import { useStore } from '../store/store'
import { Header } from './Header'
import { HeaderRow } from './HeaderRow'
import { Row } from './Row'

export const TableCoreRoot = () => {
  const { columns, data } = useStore()

  const columnsTemplate = useMemo(() => {
    return columns.map(() => 'minmax(min-content, 1fr)').join(' ')
  }, [columns])

  return <Grid $columnsTemplate={columnsTemplate}>
    <HeaderRow>
      {columns.map(col => <Header key={col.field} field={col.field} />)}
    </HeaderRow>
    {data.map(row => <Row key={row.id} rowId={row.id} />)}
  </Grid>
}

const Grid = styled.div<{ $columnsTemplate: string }>`
  display: grid;
  grid-template-columns: ${p => p.$columnsTemplate};
  grid-gap: 1px;
  background-color: grey;
`
