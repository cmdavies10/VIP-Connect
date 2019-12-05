import React from 'react'
import './NavBar.css'


class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'NAVBAR will b here',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <div className='responsive-navbar-nav'>{message}</div>
                
            </div>
        )
    }
}

export default NavBar

// //////////////////////////////////////////////////////










// import React from "react";

// function NavBar(props) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => props.handlePageChange("Home")}
//           className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => props.handlePageChange("About")}
//           className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#blog"
//           onClick={() => props.handlePageChange("Blog")}
//           className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
//         >
//           Blog
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => props.handlePageChange("Contact")}
//           className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;
