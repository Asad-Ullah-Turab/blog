import { useEffect, useState } from "react";
import "./App.css";
import { login, logout } from "./features/authSlice";
import authService from "./services/authService";
import { useDispatch } from "react-redux";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, [dispatch]);

  return !loading ? (
    <div>Hello {user ? user.name : "Stranger"}</div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
