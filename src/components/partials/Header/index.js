import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import { isLogged, doLogout } from '../../../helpers/AuthHandler';


const Header = () => {
  let logged = isLogged();

  const handleLogout = () =>{
    doLogout();
    window.location.href = '/';
  }
  return(
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">R</span>
            <span className="logo-2">P</span>
            <span className="logo-3">M</span>
          </Link>
        </div>

        <nav>
          <ul>
            {logged &&
            <>
              <li><Link to="/my-account">My account</Link></li>
              <li>
                <button onClick={handleLogout}>Logout</button>
                </li>
              <li><Link className="button" to="/post-an-ad">Poste uma foto</Link></li>
            </>
            }
            {!logged &&
            <>
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link className="button" to="/signup">Poste uma foto</Link></li>
            </>
            }
          </ul>
        </nav>

      </div>
    </HeaderArea>
  );
}

export default Header;