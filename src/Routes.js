import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Counter from './pages/Counter';
import { MyPage } from './pages/MyPage';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Searching from './pages/Search';
import Searching2 from './pages/Searching2';
import Searching3 from './pages/Searching3';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/search/pill" element={<Searching />} />
        <Route path="/search/symptom" element={<Searching2 />} />
        <Route path="/search/image" element={<Searching3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
