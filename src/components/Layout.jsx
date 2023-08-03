import React, { Children } from "react";
import NavBar from "../components/NavBar";

const Layout = ({active, children}) => {

      return (

        <div className="flex">
            <div className="flex-shrink-0">
                <NavBar active={active}/>
            </div>

            <div className="mt-20 ml-5 lg:mt-0 lg:ml-[320px]">
            {children}
            </div>
        </div>
      );
    }

export default Layout;