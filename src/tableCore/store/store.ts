import createContext from 'zustand/context'
import create, { StoreApi } from 'zustand'
import { State } from '../types/tableCoreType'
import { columnsResizeModule } from './columnResize'
import { columnsOrderModule } from './columnOrder'
import { columnsVisibleModule } from './columnVisible'
import { filteringModule } from './filtering'

const { Provider, useStore } = createContext<StoreApi<State>>()

export { Provider, useStore }

export const createStore = () => {
  return create<State>((set, get) => ({
    columns: [],
    data: [],

    setColumns (columns) {
      set({ columns })
    },

    setData (data) {
      set({ data })
    },

    filtering: filteringModule(set, get),
    columnVisible: columnsVisibleModule(set, get),
    columnOrder: columnsOrderModule(set, get),
    columnResize: columnsResizeModule(set, get)
  }))
}
