import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./services/authService";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <div className="text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
