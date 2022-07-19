import { GetState, SetState } from 'zustand'
import { State } from '../types/tableCoreType'

export interface IColumnResizeModule {
  sizes: Record<string, number>;
  setSize: (column: string, size: number) => void;
}

export const columnsResizeModule = <T extends State>(
  set: SetState<T>,
  get: GetState<T>
): IColumnResizeModule => {
  return {
    sizes: {},
    setSize: (column, size) => {
      set(state => ({ ...state, [column]: size }))
    }
  }
}
