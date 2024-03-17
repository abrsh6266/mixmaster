import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <h1>Navbar</h1>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
