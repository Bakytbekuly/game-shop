import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { HomePage } from './pages/home-page/HomePage';
import { Header } from './components/header/Header';
import { GamePage } from './pages/game-page/GamePage';
import { OrderPage } from './pages/order-page/OrderPage';
import { NotFoundPage } from "./pages/not-found-page/NotFoundPage"
import { LoginPage } from "./pages/login-page/LoginPage"
import { RegisterPage } from "./pages/register-page/RegisterPage"
import { basketOff, logoOff } from "./store/slice/openClose"
import { setFilterDataDelete, setInputTextDelete } from "./store/slice/searchFilter"



// HOC

import { RequireAuth } from "./hoc/RequireAuth"


function App() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(basketOff())
    dispatch(logoOff())
    dispatch(setFilterDataDelete())
    dispatch(setInputTextDelete())
  }

  return (

    <BrowserRouter>
      <div onClick={handleClick}>
        <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/app/:title' element={<GamePage />} />
            <Route path='/order' element={
              <RequireAuth>
                <OrderPage />
              </RequireAuth>
            } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
