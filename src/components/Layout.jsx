import NavBar from "../components/NavBar";
import Page from "../components/Page";

const Layout = ({ active, children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 2xl:w-1/5 min-w-[320px]">
        <NavBar active={active} />
      </div>
      <div id="page" className="lg:w-3/4 2xl:w-4/5 lg:flex-1 mt-20 lg:mt-3">
        <Page active={active}>{children}</Page>
      </div>
    </div>
  );
};

export default Layout;
