import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";

function RouterWithLoader({ children }) {
    const location = useLocation();

    useEffect(() => {
        NProgress.configure({
            showSpinner: false,
            speed: 300,
            minimum: 0.1,
            easing: 'ease'
        });

        NProgress.start();

        setTimeout(() => {
            NProgress.done();
        }, 500);
    }, [location]);

    return (
        <>
            <style>
                {`
                    /* NProgress bar style */
                    #nprogress {
                        pointer-events: none;
                    }

                    #nprogress .bar {
                        background: #c40c0c;
                        height: 3px;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: 1031;
                    }

                    /* Remove spinner */
                    #nprogress .peg {
                        display: none;
                    }

                    #nprogress .spinner {
                        display: none !important;
                    }
                `}
            </style>
            {children}
        </>
    );
}

export default RouterWithLoader;
