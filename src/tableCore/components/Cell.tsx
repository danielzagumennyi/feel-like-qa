import { memo, ReactNode, useCallback } from 'react'
import styled from 'styled-components'
import { useStore } from '../store/store'

export const Cell = memo(function Cell ({ field, rowId }: { rowId: string | number, field: string }) {
  const updateItemByField = useStore(state => state.updateItemByField)

  const data = useStore(
    (state) => state.data.find(item => item.id === rowId)?.[field] || ''
  )

  // const handleChange = useCallback((e) => {
  //   updateItemByField(rowId, field, e.currentTarget.value)
  // }, [rowId, field, children])

  return <Wrapper>
    <div>
      {data}
    </div>
    {/* <div>
      <input value={children?.toString()} onChange={handleChange} />
    </div> */}
    </Wrapper>
})

const Wrapper = styled.div`
  background-color: white;
  padding: 4px 8px;
`
