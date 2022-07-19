import { GetState, SetState } from 'zustand'
import { State } from '../types/tableCoreType'

export type SortDirectionType = 'ASC' | 'DESC'

export interface IFilter {
  sortField: string,
  sortDirection: SortDirectionType,
  page: number,
  pageCount: number;
}

export interface IFilteringModule {
  globalFilter: IFilter;
}

export const defaultFilter: IFilter = {
  page: 1,
  pageCount: 1,
  sortDirection: 'ASC',
  sortField: 'id'
}

export const filteringModule = <T extends State>(
  set: SetState<T>,
  get: GetState<T>
): IFilteringModule => {
  return {
    globalFilter: defaultFilter
  }
}
