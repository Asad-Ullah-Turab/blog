import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./services/authService";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import profileService from "./services/profileService";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const userData = await authService.getCurrentUser();
      if (userData) {
        const profileDataArr = await profileService.getProfile(userData.$id);
        const profileData = profileDataArr.documents[0];
        dispatch(login({ userData, profileData }));
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
