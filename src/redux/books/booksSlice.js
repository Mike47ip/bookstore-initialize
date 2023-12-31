import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// MbLdQuSA291U7W3VkOff

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MbLdQuSA291U7W3VkOff/books';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const res = await axios(baseUrl);
    return res.data;
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (book, { dispatch }) => {
    try {
      await axios.post(baseUrl, book);
      const res = await axios(baseUrl); // Fetch books after posting
      dispatch(getBooks()); // Dispatch the getBooks action directly
      return res.data;
    } catch (error) {
      return error?.data?.message || 'Sorry, an error occurred!';
    }
  },
);

export const deleteBookFromApi = createAsyncThunk(
  'books/deleteBookFromApi',
  async (id, { dispatch }) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      const res = await axios(baseUrl); // Fetch books after deletion
      dispatch(getBooks()); // Dispatch the getBooks action directly
      return res.data;
    } catch (error) {
      return error?.data?.message || 'Something went wrong!';
    }
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        Object.assign(state.books, action.payload);
      })
      .addCase(deleteBookFromApi.fulfilled, (state, action) => {
        delete state.books[action.payload];
      });
  },
});

export default bookSlice.reducer;
