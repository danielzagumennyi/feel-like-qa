import create, { GetState, SetState } from 'zustand'
import { State } from '../types/tableCoreType'

export const modules = ['filtering', 'columnVisible'] as const
export type ModuleName = typeof modules[number]

// export const moduleCreator = <T extends State, MODULE_NAME extends ModuleName, MODULE_STORE, >(
//   set: SetState<T>,
//   get: GetState<T>,
//   moduleName: MODULE_NAME,
//   moduleStore: MODULE_STORE
// ): { [key in MODULE_NAME]: MODULE_STORE } => ({
//     [moduleName]: moduleStore
//   })

export const createStore = () => {
  return create<State>((set) => ({
    columns: [],
    data: [],

    setColumns (columns) {
      set({ columns })
    },

    setData (data) {
      set({ data })
    }
  }))
}
