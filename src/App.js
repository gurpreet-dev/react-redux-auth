import { useEffect } from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authService } from "./services";
import { setCurrentUser } from "./store/slices/AuthSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((res) => {
      dispatch(setCurrentUser(res.data));
    }).catch((error) => {
      //
    })
  }, [])

  return (
    <>
    <Header/>
      <main className="py-5">
        <Outlet/>
      </main>
    <Footer/>
    </>
  );
}

export default App;
