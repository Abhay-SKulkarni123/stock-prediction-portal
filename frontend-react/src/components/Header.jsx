import {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleLogout = () =>{
    localStorage.setItem('accessToken')
    localStorage.setItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged Out');
    navigate('/login')
  }
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction Portal
        </Link>

        <div>
          {isLoggedIn ? (
            <span className='text-light'><button className='btn btn-danger' onClick={handleLogout}>Logout</button></span>
            
          ) : (
            <>
              <Button text='Login' class="btn-outline-info" url="/login"/>
              &nbsp;
              <Button text='Register' class="btn-info" url="/register" />
            </>
          )}
          
        </div>
      </nav>
    </>
  );
}

export default Header