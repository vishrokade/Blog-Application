import {Link} from 'react-router-dom';
import "./topbar.css";

export default function TopBar(){
    const user = true;
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className ="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem"><Link className ="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className ="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className ="link" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
               
               { user ? (
                <img 
                    className="topImg"
                    src="/images/profile.png" 
                    alt="" 
                />
               ) : (
               
                <ul className="topList">
                <li className="topListItem">
                    <Link className ="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                    <Link className ="link" to="/register">REGISTER</Link>
                </li>
                </ul>
                )
               
                }
            <i className="topSearchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}