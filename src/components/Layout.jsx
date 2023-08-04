import NavBar from "../components/NavBar";
import Page from "../components/Page"

const Layout = ({active, children}) => {

      return (

        <div className="flex">
            <div className="flex-shrink-0">
                <NavBar active={active}/>
            </div>

            <div id="page" className="mt-20 flex-1 ml-5 lg:mt-0 lg:ml-[320px]">
            <Page active={active}>
            {children}
            </Page>
            
            </div>
        </div>
      );
    }

export default Layout;