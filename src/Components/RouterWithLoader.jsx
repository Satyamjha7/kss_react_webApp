import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import KSSLoader from "./Loader";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function RouterWithLoader({ children }) {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();
        setTimeout(() => {
            NProgress.done();
        }, 500);
    }, [location]);

    return children;
}

export default RouterWithLoader;
