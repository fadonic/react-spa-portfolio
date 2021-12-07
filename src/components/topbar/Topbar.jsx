import { Email, Person } from '@material-ui/icons';
import './topbar.scss';

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
     <div className="wrapper">
       <div className="left">
         <a  href="#contact" className="logo">Monica</a>
         <div className="itemContainer">
           <Person />
           <span>+234 903 788 22</span>
         </div>
         <div className="itemContainer">
           <Email />
           <span>mail@monica.com</span>
         </div>
       </div>
       <div className="right">
         <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Topbar;