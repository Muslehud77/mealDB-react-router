
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation,useLocation } from "react-router-dom";

const Home = () => {
    const navigation = useNavigation();
    return (
      <div>
        <Navbar></Navbar>
        {navigation.state === "loading" ? (
          <div className="flex justify-center my-52 items-center">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
      </div>
    );
};

export default Home;