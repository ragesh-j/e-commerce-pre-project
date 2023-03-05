import Cart from './components/Cart';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
