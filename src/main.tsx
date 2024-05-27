import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Books from './pages/Books.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import EditBook from './pages/EditBook.tsx'
import AddBook from './pages/AddBook.tsx'
import Profile from './pages/Profile.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="edit-book" element={<EditBook />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
    
  </BrowserRouter>,
)
