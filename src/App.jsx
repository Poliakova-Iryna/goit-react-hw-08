import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])

  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<HomePage />} />
        <Route path='contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
      </Route>
      <Route path='register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />} />
      <Route path='login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />      
    </Routes>
  )
}

export default App;