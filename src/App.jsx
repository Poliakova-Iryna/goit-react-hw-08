import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />      
    </Routes>
  )
}

export default App;