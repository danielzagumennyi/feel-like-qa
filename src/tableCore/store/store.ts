import createContext from 'zustand/context'
import create, { StoreApi } from 'zustand'
import { State } from '../types/tableCoreType'

const { Provider, useStore } = createContext<StoreApi<State>>()

export { Provider, useStore }

export const createStore = () => {
  return create<State>((set) => ({
    columns: [],
    data: [],

    setColumns (columns) {
      set({ columns })
    },

    setData (data) {
      set({ data })
    },

    filtering: null,
    columnVisible: null,
    columnsOrder: null
  }))
}
