import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _axios from "@/api";
import { ProductType } from "@/types";
// import { ProductType } from "@/types";

type StateType = {
  products: ProductType | any;
  status?: string;
};

const initialState: StateType = {
  products: {},
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await _axios.get(
      "https://api-test.innoloft.com/product/6781/"
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
