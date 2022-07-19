
import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { mockData } from './table/mocaData'
import { TableCore } from './tableCore/TableCore'
import { ColumnDef } from './tableCore/types/tableCoreType'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* * {
    cursor: none;
  } */

  :root {
    --index: calc(1vw + 1vh);
  }

  html, body {
    
    /* overflow: hidden; */
    height: 100%;
    position: relative;
    min-width: 320px;
    font-size: 1rem;
    font-family: Rubik;
    font-size: 16px;
    line-height: 1.5;
    color: #13191F;
  }

  #root {
    height: 100%;
  }
`

const App = () => {
  const [data, setData] = useState(mockData.data)

  const [columns] = useState<ColumnDef<typeof mockData.data[number]>[]>([
    {
      field: 'id',
      render: (data) => <div>{data.id}</div>
    },
    {
      field: 'brand'
    },
    {
      field: 'price'
    },
    {
      field: 'bsr'
    },
    {
      field: 'rating'
    },
    {
      field: 'reviews'
    },
    {
      field: 'numberOfImages'
    },
    {
      field: 'variationsCount'
    },
    {
      field: 'yearSales'
    }
  ])

  return (<>
    <GlobalStyles />
    <Root>
      {/* <Cursor /> */}

      <button onClick={() => {
        setData(data.map(item => ({ ...item })))
      }}>
        update data
      </button>

      <TableCore columns={columns} data={data} />
    </Root>
  </>
  )
}

const Root = styled.div`
  height: 100%;
`

export default App
