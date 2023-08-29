import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";


export const Layout = () => (
    <div className="flex flex-col min-h-screen mx-4 md:mx-0">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
);
