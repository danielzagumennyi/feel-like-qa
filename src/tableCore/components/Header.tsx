import { memo } from 'react'
import styled from 'styled-components'
import { useStore } from '../store/store'

export const Header = memo(function Header ({ field }: {field: string }) {
  const data = useStore(
    (state) => state.columns.find(item => item.field === field)
  )

  return <Wrapper>
        <div>
          {data?.field}
        </div>
    </Wrapper>
})

const Wrapper = styled.div`
  background-color: white;
  padding: 4px 8px;
`
