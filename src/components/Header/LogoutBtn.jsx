import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice'

 function LogoutBtn() {

    const dispatch  = useDispatch();

    const handleLogout = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        })}

   return (
     <button
      onClick={handleLogout}
      className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
     >
        LogOut
     </button>
   )
 }
 
 export default LogoutBtn