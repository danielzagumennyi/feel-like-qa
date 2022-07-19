import { GetState, SetState } from 'zustand'
import { State } from '../types/tableCoreType'

export interface IColumnOrderModule {
  order: string[];
}

export const columnsOrderModule = <T extends State>(
  set: SetState<T>,
  get: GetState<T>
): IColumnOrderModule => {
  return {
    order: []
  }
}
