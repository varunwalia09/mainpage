import { Link } from "react-router-dom";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// <KeyboardArrowDownIcon />
import BorderColorIcon from '@mui/icons-material/BorderColor';
function NavBar() {
  return (
    
   <nav className="top">
    <a href="/" className="logo"><BorderColorIcon/><span>Varun Walia</span> </a>
    
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    </nav>
  );
}
export default NavBar;

