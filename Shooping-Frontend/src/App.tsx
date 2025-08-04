import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Authpage from './components/pages/AuthPage'
import AddProductPage from './components/pages/AddProductPage'
import EditProductPage from './components/pages/EditProductPage'
import ListProduct from './components/pages/ListProduct'
import AddUserPage from './components/pages/AddUserPage'
import ListUsersPage from './components/pages/ListUsersPage'

/*
* react-router-dom
* axios
* sweetalert
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authpage />}/>
          <Route path='product/' element={<ListProduct />}/>
          <Route path='product/add' element={<AddProductPage />}/>
          <Route path='product/edit/{id}' element={<EditProductPage />}/>
          <Route path='user/add' element={<AddUserPage />} />
          <Route path='user/' element={<ListUsersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
