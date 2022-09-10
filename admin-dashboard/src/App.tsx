import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Layout } from 'components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="orders" replace />} />
        <Route path="orders" element={<h1>orders</h1>} />
      </Route>
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
}

export default App;
