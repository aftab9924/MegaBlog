import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { logIn, logOut } from "./store/authSlice";
import {Footer, Header, Loading} from "./components/index"
import { Outlet } from "react-router-dom";

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
       if (userData) {
        dispatch(logIn({userData}))
       }
       else {
        dispatch(logOut())
       }
    })
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-800 text-white">
        <div className="w-full grid place-content-center mt-10">
           <Header />
             <main>
                <Outlet /> 
             </main>
           <Footer />
        </div>
    </div>
  ) : <Loading isLoading={isLoading} />

  
}

export default App
