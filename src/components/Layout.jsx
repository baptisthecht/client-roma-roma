import React, { Children } from "react";
import NavBar from "../components/NavBar";

const Layout = ({active, children}) => {

      return (

        <div className="flex">
            <div className="flex-shrink-0">
                <NavBar active={active}/>
            </div>

            <div className="flex-grow ml-[320px]">
            {children}
            </div>
        </div>
      );
    }

export default Layout;