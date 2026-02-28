import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  category: string;
  rating: string;
  sort: string;
}

const initialState: FiltersState = {
  search: "",
  category: "all",
  rating: "all",
  sort: "default",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    resetFilters: (state) => {
      state.search = "";
      state.category = "all";
      state.rating = "all";
      state.sort = "default";
    },
  },
});

export const { setSearch, setCategory, setRating, setSort, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
