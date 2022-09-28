import { devtools } from "zustand/middleware";
import create from "zustand";
export * from "./selectors";

export const useStore = create(
  devtools((set, _get) => ({
    pets: [],
    filters: {
      age: {
        "1-3": false,
        "4-5": false,
      },
      size: {
        small: false,
        medium: false,
      },
    },
    changeFilter: (filter, key) => {
      return set((state) => ({
        ...state,
        filters: {
          ...state.filters,
          [filter]: {
            ...state.filters[filter],
            [key]: !state.filters[filter][key],
          },
        },
      }));
    },
    setPets: (pets) => {
      return set((state) => ({
        ...state,
        pets,
      }));
    },
  }))
);
