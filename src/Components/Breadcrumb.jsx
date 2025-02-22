import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);

    return (
        <div className="breadcrumb-container">
            <nav className="breadcrumb">
                <Link to="/" className="breadcrumb-item">
                    <FaHome className="breadcrumb-icon" /> Home
                </Link>
                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathNames.length - 1;
                    return (
                        <span key={index} className="breadcrumb-segment">
                            <FaChevronRight className="breadcrumb-separator" />
                            {isLast ? (
                                <span className="breadcrumb-item active">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </span>
                            ) : (
                                <Link to={routeTo} className="breadcrumb-item">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </nav>
        </div>
    );
};

export default Breadcrumb;
