import { memo } from 'react'
import styled from 'styled-components'
import { useStore } from '../store/store'
import { Cell } from './Cell'

export const Row = memo(function Row ({ rowId }: { rowId: string | number}) {
  const columns = useStore(state => state.columns)
  return <Wrapper>
    {columns.map(col => <Cell key={col.field} field={col.field} rowId={rowId} />)}
  </Wrapper>
})

const Wrapper = styled.div`
  display: contents;
`
