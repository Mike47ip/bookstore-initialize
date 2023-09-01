import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 'item1',
      title: 'Matrix',
      author: 'Wiil Smith',
      category: 'Fiction',
      progress: '84',
    },
    {
      itemId: 'item2',
      title: 'The Avatar',
      author: 'Kwaku Johnson',
      category: 'Fiction',
      progress: '28',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Kwame Atta',
      category: 'Romance',
      progress: '5',
    },
    {
      itemId: 'item4',
      title: 'God of War',
      author: 'Mike Dawkins',
      category: 'Action',
      progress: '73',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.itemId !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
