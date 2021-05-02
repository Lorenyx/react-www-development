import * as React from "react";
import { Link } from "react-router-dom";


const Copyright = () => {
  return (
    <footer>
    {/* Start Copyright */}
      <div id="copyright">
        <ul>
          <li>© {new Date().getFullYear()} USEFUL COIN LLC. ALL RIGHTS RESERVED.</li>
          <li><Link to="/Disclaimer">Disclaimer</Link></li>
          <li><Link to="/Privacy">Privacy Policy</Link></li>
          <li><Link to="/Terms">Terms & Conditions</Link></li>
        </ul>
      </div>
    {/* End Copyright */}
    </footer>
  );
}

export default Copyright;
