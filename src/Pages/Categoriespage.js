import React from 'react';
import { useSelector } from 'react-redux';

function CategoriesPage() {
  const categoriesStatus = useSelector((state) => state.category.status);
  return <h1 style={{ textAlign: 'center' }}>{categoriesStatus}</h1>;
}

export default CategoriesPage;
