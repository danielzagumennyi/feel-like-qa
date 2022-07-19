import { memo, useCallback } from 'react'
import styled from 'styled-components'
import { useSyncExternalStore } from 'use-sync-external-store'
import { mockData } from './mocaData'

function shuffle<T> (array: T[]): T[] {
  let currentIndex = array.length; let randomIndex

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return [...array]
};

const store: {
  data: Array<any>,
  updateData: (data: Array<any>) => void;
  updateItemByField: (rowId: string | number, field: string, newValue: string | number) => void;
  removeItem: (rowId: string | number) => void;
  shuffleItems: () => void;
} = {
  data: [],
  updateData (newData) {
    this.data = [this.data, ...newData]

    listeners.forEach((listener) => {
      listener()
    })
  },

  updateItemByField (rowId, field, newValue) {
    this.data = this.data.map(item => item.id === rowId ? { ...item, [field]: newValue } : item)

    listeners.forEach((listener) => {
      listener()
    })
  },

  removeItem (rowId) {
    this.data = this.data.filter(item => item.id !== rowId)

    listeners.forEach((listener) => {
      listener()
    })
  },

  shuffleItems () {
    this.data = shuffle(this.data)

    listeners.forEach((listener) => {
      listener()
    })
  }
}

export type State = object

export type StateListener<T> = (state: T, previousState: T) => void

export interface Subscribe<T extends State> {
  (listener: StateListener<T>): () => void
}

const listeners: Set<StateListener<State>> = new Set()

const subscribe: Subscribe<State> = (listener: StateListener<State>) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const loadData = () => {
  setTimeout(() => {
    store.updateData(mockData.data)
  }, 500)
}

const columns = [
  {
    field: 'id'
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
]

export const Table = () => {
  const data = useSyncExternalStore(
    subscribe, () => store.data
  )

  return <>

    <button onClick={loadData}>
      load data
    </button>

    <button onClick={() => store.removeItem(5296964)}>
      remove item 5296964
    </button>

    <button onClick={() => store.shuffleItems()}>
      shuffle items
    </button>

    <button>

    </button>

    <div>
      <StyledTable>
        <tbody>
          {data.map((row) => <tr key={row.id}>
            {
              columns.map(col => <Cell key={col.field} field={col.field} rowId={row.id} />)
            }
          </tr>)}
        </tbody>
      </StyledTable>
    </div>
  </>
}

export const Cell = memo(function Cell ({ rowId, field }: { rowId: string | number, field: string }) {
  const data = useSyncExternalStore(
    subscribe, () => store.data.find(item => item.id === rowId)?.[field] || ''
  )

  const handleChange = useCallback((e) => {
    store.updateItemByField(rowId, field, e.currentTarget.value)
  }, [])

  return (<td><div>{data}</div><div>

      <input value={data} onChange={handleChange} />

    </div></td>)
})

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td {
    border: 1px solid black;
    padding: 6px 8px;
  }
`
