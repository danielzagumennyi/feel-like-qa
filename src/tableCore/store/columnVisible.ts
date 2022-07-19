import { GetState, SetState } from 'zustand'
import { State } from '../types/tableCoreType'

export interface IColumnVisibleModule {
  hidden: string[];
}

export const columnsVisibleModule = <T extends State>(
  set: SetState<T>,
  get: GetState<T>
): IColumnVisibleModule => {
  return {
    hidden: []
  }
}
