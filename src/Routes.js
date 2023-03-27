import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Counter from './pages/Counter';
import { MyPage } from './pages/MyPage';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
