import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Article from "./pages/article"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Users from "./pages/users"
import UserDetail from "./pages/UsersDetails"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
